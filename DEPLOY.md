# Murmur — Kurulum Rehberi

Mimari: **GitHub Pages** (site) → **Cloudflare Worker** (API) → **Supabase** (hesap + veritabanı), **Anthropic** (model), **Stripe** (ödeme).
Hiçbir anahtarı dosyaya veya GitHub'a yazma. Gizli anahtarlar yalnızca `wrangler secret put` ile girilir.

> Not: Stripe'ın Türkiye'de doğrudan hesap açmaya izin verip vermediğini kendin doğrula (Stripe destek sayfası; Stripe Atlas ile ABD şirketi kurmak yaygın bir yoldur). Hesabın açılacağı ülke yasal metinlerdeki "işletmeci" bilgisini de belirler.

## 1. Supabase
1. supabase.com → yeni proje. **Settings → API**'den `Project URL`, `anon` anahtarı ve `service_role` anahtarını not al (service_role gizlidir).
2. **SQL Editor**'de `supabase/schema.sql` dosyasının tamamını çalıştır.
3. **Authentication → URL Configuration**: Site URL = siten (örn. `https://KULLANICI.github.io/REPO/`), Redirect URLs'e aynı adresi ekle.
4. **Authentication → Email Templates → Magic Link**: şablonda hem bağlantıyı hem `{{ .Token }}` kodunu göster (kod ile giriş bunu kullanır).
5. **Authentication → Rate Limits** ve **SMTP**: varsayılan e-posta saatte çok az mesaj gönderir; canlıya çıkmadan kendi SMTP'ni bağla (Resend, Postmark vb.).

## 2. Cloudflare Worker
```
cd backend
npm install
npx wrangler login
```
`wrangler.toml` içindeki `[vars]` alanını doldur: `SITE_URL`, `ALLOWED_ORIGIN` (siten, sonunda `/` olmadan; ör. `https://KULLANICI.github.io`), `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `STRIPE_PRICE_ID_PLUS`.
```
npx wrangler secret put SUPABASE_SERVICE_KEY
npx wrangler secret put ANTHROPIC_API_KEY
npx wrangler secret put STRIPE_SECRET_KEY
npx wrangler secret put STRIPE_WEBHOOK_SECRET
npx wrangler deploy
```
Deploy sonunda `https://murmur-api.HESAP.workers.dev` adresini alırsın. `/api/health` adresini tarayıcıda aç; `ok` görmelisin.

## 3. Stripe
1. Product Catalog → "Murmur Plus" ürünü, aylık tekrarlı fiyat. Fiyatın `price_...` kimliğini `STRIPE_PRICE_ID_PLUS`'a yaz.
2. Developers → Webhooks → endpoint: `https://murmur-api.HESAP.workers.dev/api/stripe-webhook`; olaylar: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`. Verilen `whsec_...` değerini `STRIPE_WEBHOOK_SECRET` olarak gir.
3. Settings → Billing → **Customer portal**'ı etkinleştir (abonelik yönetimi için).
4. Önce **test modunda** dene (test kartı `4242 4242 4242 4242`), sonra canlı anahtarlara geç.
5. Stripe, işletmeni onaylarken ürünü inceler: içerik 18+ ama müstehcen değil; bunu ürün açıklamasında açıkça yaz.

## 4. Siteyi bağla
1. `config.js`: `API` = Worker adresi, `SUPABASE_URL`, `SUPABASE_ANON_KEY` (yalnızca anon; service_role'ü asla yazma).
2. `index.html` içindeki CSP `connect-src`: `YOUR-WORKER.workers.dev` ve `YOUR-PROJECT.supabase.co` yerine gerçek alan adlarını yaz.
3. `example.com` geçen her yeri (index, privacy, terms, safety, 404, robots.txt, sitemap.xml) gerçek adresinle değiştir; `iletisim@example.com`'u gerçek e-postanla.
4. Yasal sayfalardaki `[köşeli parantezli]` alanları doldur (işletmeci adı/ülke, e-posta, log saklama süresi, iade politikası, uygulanacak hukuk, tarih), sayfalardaki sarı "şablon" uyarılarını kaldır ve **bir hukukçuya kontrol ettir**.
5. `404.html`: proje sitesi (`kullanici.github.io/REPO/`) kullanıyorsan `/style.css` ve `/favicon.svg` yollarını `/REPO/style.css` biçimine çevir.
6. Fontlar şu an Google Fonts'tan gelir. Kendi sunucundan vermek istersen woff2 dosyalarını ekleyip CSP'den fonts.googleapis/gstatic'i kaldır.

## 5. Yayın
Site dosyalarını (index.html, *.html, app.js, config.js, style.css, görseller, manifest, robots, sitemap) repo köküne yükle. Repo → Settings → Pages → Branch `main` / root. `backend/` ve `supabase/` klasörlerini herkese açık repoya koymak istemiyorsan ayrı özel repoda tut (içlerinde gizli anahtar yok, ama gerek de yok).
GitHub Pages kullanım şartlarını ve ticari kullanım kurallarını kontrol et; gelir getiren bir hizmette Cloudflare Pages gibi bir seçenek daha uygun olabilir.

## 6. Model karşılaştırması (önerilir)
```
cd backend
ANTHROPIC_API_KEY=... node eval/compare.mjs anthropic:claude-haiku-5-5
```
Başka modeller için OpenAI uyumlu uç: `OPENAI_API_KEY=... node eval/compare.mjs openai:MODEL@https://BASE_URL/v1`. Çıktıda yapay zekâ olduğunu söylüyor mu, flört sınırını koruyor mu, dil/isim hatırlıyor mu, maliyet ne kadar bak. Seçtiğin modeli `wrangler.toml` → `LLM_MODEL` (ve sağlayıcıyı `LLM_PROVIDER`) ile değiştir; gizlilik sayfasındaki sağlayıcı paragrafını da güncelle.

## 7. Yayın öncesi kontrol listesi
- [ ] `cd backend && npm test` (13 test geçmeli)
- [ ] E-posta ile giriş: bağlantıyla **ve** kodla
- [ ] Ücretsiz günlük limit (20) dolunca uyarı; yalnızca Hana ve Mara açık
- [ ] Stripe test ödemesi → plan Plus olur (webhook birkaç saniye gecikebilir)
- [ ] Aboneliği yönet (portal), iptal, veri indirme, hesap silme (Stripe aboneliği de iptal olmalı)
- [ ] "kendimi öldürmek istiyorum" yazınca kriz mesajı çıkar, mesaj hakkından düşmez
- [ ] Telefonda ve klavye ile gezinme, Lighthouse
- [ ] Yasal sayfalar dolu ve site gerçekte ne yapıyorsa onu anlatıyor
- [ ] Cloudflare'de kullanım/harcama uyarısı, Anthropic'te aylık harcama limiti

## Yapılmamış / test edilmemiş
Supabase giriş akışı, Stripe, Cloudflare ve canlı arayüz gerçek hesaplarla test edilmedi; yalnızca sahte (mock) servislerle 13 otomatik test yapıldı. İlk gerçek kurulumda küçük hatalar çıkabilir.
