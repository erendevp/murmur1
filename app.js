/* ---------- İçerik ---------- */
const T = {
  tr: {
    title:"Murmur — Yapay zekâ arkadaş",
    desc:"Anime ya da gerçekçi tarzda bir yapay zekâ karakter seç, onunla sohbet et. Karakterler yapay zekâdır; site 18 yaş ve üzeri içindir.",
    skip:"Ana içeriğe geç",
    nav_chars:"Karakterler", nav_plans:"Planlar", login:"Giriş yap", online:"çevrimiçi", ai_label:"Yapay zekâ", close:"Kapat",
    hero_h1:"Seni dinleyen, hatırlayan biri.",
    hero_p:"Anime ya da gerçekçi tarzda bir karakter seç. Günün nasıl geçtiğini, ne dinlediğini, neyi merak ettiğini anlat. Sohbet kaldığı yerden devam eder.",
    cta1:"Karakterle tanış", cta2:"Planlara bak",
    f1t:"Seni hatırlar", f1p:"Önceki sohbetlerdeki ayrıntıları aklında tutar.",
    f2t:"Her zaman orada", f2p:"Saat kaç olursa olsun cevap verir.",
    f3t:"Şeffaf ve güvenli", f3p:"Karakterler her zaman yapay zekâ olduğunu söyler; zor anlarda destek kaynaklarını gösterir.",
    chars_h:"Karakterini seç", chars_p:"Hepsi yapay zekâ ile oluşturulmuş kurgusal karakterlerdir.",
    f_all:"Hepsi", f_anime:"Anime", f_real:"Realistik", talk:"Sohbet başlat", unlock:"Plus ile aç",
    plans_h:"Sana uyan planı seç", plans_p:"İstediğin zaman iptal edebilirsin.",
    month:"/ay", foot:"Murmur 18 yaş ve üzeri içindir. Karakterler yapay zekâdır, gerçek kişi değildir.",
    l_privacy:"Gizlilik", l_terms:"Kullanım koşulları", l_safety:"Güvenlik ve kriz desteği", l_contact:"İletişim",
    chat_demo:"Karakter bir yapay zekâdır. Bu demoda yanıtlar hazır cümlelerden gelir; gerçek yapay zekâ için sunucu bağlanmalı.",
    chat_live:"Karakter bir yapay zekâdır. Mesajların yanıt üretmek için bir yapay zekâ sağlayıcısına gönderilir.",
    left:"Kalan mesaj:",
    ph:"Bir mesaj yaz…", send:"Gönder",
    toast:"Bu bir taslak: giriş ve ödeme için sunucu tarafı gerekir.",
    gate_h:"18 yaşında veya daha büyük müsün?",
    gate_p:"Murmur yalnızca yetişkinler içindir. Devam etmek için yaşını onaylaman gerekir.",
    gate_yes:"Evet, 18 veya üzeriyim", gate_no:"Hayır",
    gate_blocked:"Üzgünüz, bu siteyi yalnızca 18 yaş ve üzerindeki kişiler kullanabilir.",
    login_h:"Giriş yap", login_p:"E-posta adresine bir giriş bağlantısı ve kod göndeririz. Şifre gerekmez.",
    email_label:"E-posta", email_ph:"E-posta adresin", send_link:"Bağlantı gönder",
    link_sent:"Gönderdik. E-postandaki bağlantıya tıkla ya da buraya kodu yaz.",
    code_label:"Kod", code_ph:"E-postadaki kod", verify:"Doğrula",
    login_need:"Sohbet etmek için giriş yap.",
    err_code:"Kod geçersiz ya da süresi dolmuş.", err_net:"Bağlantı kurulamadı. Biraz sonra tekrar dene.",
    err_generic:"Bir şeyler ters gitti. Tekrar dene.",
    err_quota:"Bugünkü mesaj hakkın doldu. Yarın yenilenir ya da Plus'a geçebilirsin.",
    err_plan:"Bu karakter Plus planında. Planlara göz atabilirsin.",
    err_model:"Karakter şu an yanıt veremiyor. Mesaj hakkın düşmedi, biraz sonra tekrar dene.",
    err_age:"Devam etmek için yaş onayı gerekiyor.", err_email:"E-posta gönderilemedi. Adresi kontrol edip tekrar dene.",
    acct:"Hesap", acct_email:"E-posta", acct_plan:"Plan", acct_left:"Bugün kalan mesaj",
    acct_manage:"Aboneliği yönet", acct_export:"Verilerimi indir", acct_logout:"Çıkış yap", acct_delete:"Hesabı sil",
    acct_confirm_delete:"Hesabın, sohbetlerin ve hafızan kalıcı olarak silinecek, aboneliğin de iptal edilecek. Emin misin?",
    acct_deleted:"Hesabın silindi.", checkout_ok:"Ödeme alındı. Plus planın birkaç saniye içinde açılır.", checkout_cancel:"Ödeme iptal edildi.",
    plan_free:"Ücretsiz", plan_plus:"Plus",
    plans:[
      {id:"free", n:"Ücretsiz", p:"$0", cta:"Başla", items:["Günde 20 mesaj","2 karakter (Hana ve Mara)","Son 10 mesajı hatırlar"]},
      {id:"plus", n:"Plus", p:"$9.99", cta:"Plus'a geç", hot:1, items:["Günde 300 mesaja kadar","Tüm karakterler","Uzun süreli hafıza: seni ve sohbetlerinizi hatırlar"]}
    ],
    demo:[
      {who:"me", text:"Bugün çok yorucuydu."},
      {who:"ai", text:"Gel, anlat. Önce bir nefes al, sonra en çok neresi yordu seni?"},
      {who:"me", text:"Toplantılar. Bir de yağmur."},
      {who:"ai", text:"Yağmurlu günün tek iyi yanı eve gelince çay. Hâlâ o yeşil çayı seviyorsun, değil mi?"}
    ],
    break_msg:"Bir süredir sohbet ediyoruz. Kısa bir mola vermek, su içmek ya da biraz yürümek iyi gelebilir. Unutma, ben bir yapay zekâyım.",
    care_msg:"Bunu bana söylediğin için teşekkür ederim. Yaşadığın şey çok ağır olabilir ve bunu tek başına taşımak zorunda değilsin. Hemen yardım için yerel acil numaranı ara (Türkiye: 112, ABD: 988). Diğer ülkeler için findahelpline.com adresine bakabilirsin. Güvendiğin biriyle de konuşabilirsin. Ben bir yapay zekâyım; seni dinlemek isterim ama profesyonel yardımın yerini tutamam."
  },
  en: {
    title:"Murmur — AI companion",
    desc:"Pick an anime or realistic AI character and chat. Characters are AI; the site is for adults 18 and over.",
    skip:"Skip to main content",
    nav_chars:"Characters", nav_plans:"Plans", login:"Log in", online:"online", ai_label:"AI", close:"Close",
    hero_h1:"Someone who listens and remembers.",
    hero_p:"Pick an anime or realistic character. Tell them how your day went, what you're listening to, what you're curious about. The conversation picks up where you left off.",
    cta1:"Meet a character", cta2:"See plans",
    f1t:"Remembers you", f1p:"Keeps the details from your earlier conversations.",
    f2t:"Always there", f2p:"Replies at any hour.",
    f3t:"Transparent and safe", f3p:"Characters are always upfront about being AI, and point to support resources in hard moments.",
    chars_h:"Choose your character", chars_p:"All characters are fictional and created with AI.",
    f_all:"All", f_anime:"Anime", f_real:"Realistic", talk:"Start chat", unlock:"Unlock with Plus",
    plans_h:"Pick the plan that fits", plans_p:"Cancel anytime.",
    month:"/mo", foot:"Murmur is for adults 18 and over. Characters are AI, not real people.",
    l_privacy:"Privacy", l_terms:"Terms of use", l_safety:"Safety and crisis support", l_contact:"Contact",
    chat_demo:"This character is an AI. In this demo, replies come from preset lines; connect a server for real AI.",
    chat_live:"This character is an AI. Your messages are sent to an AI provider to generate replies.",
    left:"Messages left:",
    ph:"Write a message…", send:"Send",
    toast:"This is a draft: login and payments need a server side.",
    gate_h:"Are you 18 or older?",
    gate_p:"Murmur is for adults only. Please confirm your age to continue.",
    gate_yes:"Yes, I'm 18 or older", gate_no:"No",
    gate_blocked:"Sorry, this site is only for people aged 18 and over.",
    login_h:"Log in", login_p:"We'll email you a sign-in link and code. No password needed.",
    email_label:"Email", email_ph:"Your email", send_link:"Send link",
    link_sent:"Sent. Click the link in your email or enter the code here.",
    code_label:"Code", code_ph:"Code from the email", verify:"Verify",
    login_need:"Log in to chat.",
    err_code:"The code is invalid or has expired.", err_net:"Couldn't connect. Please try again in a moment.",
    err_generic:"Something went wrong. Please try again.",
    err_quota:"You've used today's messages. They reset tomorrow, or you can upgrade to Plus.",
    err_plan:"This character is on the Plus plan. Have a look at the plans.",
    err_model:"The character can't reply right now. Your message wasn't counted, please try again shortly.",
    err_age:"Age confirmation is required to continue.", err_email:"Couldn't send the email. Check the address and try again.",
    acct:"Account", acct_email:"Email", acct_plan:"Plan", acct_left:"Messages left today",
    acct_manage:"Manage subscription", acct_export:"Download my data", acct_logout:"Log out", acct_delete:"Delete account",
    acct_confirm_delete:"Your account, chats and memory will be permanently deleted and your subscription cancelled. Are you sure?",
    acct_deleted:"Your account has been deleted.", checkout_ok:"Payment received. Your Plus plan will activate in a few seconds.", checkout_cancel:"Payment cancelled.",
    plan_free:"Free", plan_plus:"Plus",
    plans:[
      {id:"free", n:"Free", p:"$0", cta:"Get started", items:["20 messages a day","2 characters (Hana and Mara)","Remembers your last 10 messages"]},
      {id:"plus", n:"Plus", p:"$9.99", cta:"Go Plus", hot:1, items:["Up to 300 messages a day","All characters","Long-term memory: remembers you and your chats"]}
    ],
    demo:[
      {who:"me", text:"Today was exhausting."},
      {who:"ai", text:"Come, tell me. Take a breath first, then: what wore you out the most?"},
      {who:"me", text:"The meetings. And the rain."},
      {who:"ai", text:"The one good thing about a rainy day is tea when you get home. You still love that green tea, right?"}
    ],
    break_msg:"We've been chatting for a while. A short break, some water or a little walk might feel good. Remember, I'm an AI.",
    care_msg:"Thank you for telling me this. What you're going through may be very heavy, and you don't have to carry it alone. For immediate help, call your local emergency number (US: 988, Türkiye: 112). For other countries, see findahelpline.com. You can also talk to someone you trust. I'm an AI; I want to listen, but I can't replace professional help."
  }
};

/* Görseller: <id>.jpg dosyasını img/ klasörüne koy, yoksa renkli yedek görünür. */
const chars = [
  {id:"hana", name:"Hana", style:"anime", free:true, c:["#FF9EC4","#8E7CFF"],
   role:{tr:"Kitapçı kafe çalışanı", en:"Bookshop café barista"},
   bio:{tr:"Sessiz ve meraklı. Her sohbete bir kitap önerisiyle karşılık verir.", en:"Quiet and curious. Answers every chat with a book recommendation."},
   greet:{tr:"Hoş geldin! Çayın demlendi, şimdi sen anlat.", en:"Welcome! Your tea is brewed. Now tell me about you."},
   replies:{tr:["Hmm, bunu biraz daha anlatır mısın? Merak ettim.","Bu bana bir kitabı hatırlattı. Sonra söylerim, önce sen devam et.","Seni dinlemek güzel. Peki sonra ne oldu?"],
            en:["Hmm, can you tell me more? I'm curious.","That reminds me of a book. I'll tell you later, keep going first.","I like listening to you. So what happened next?"]}},
  {id:"rin", name:"Rin", style:"anime", c:["#FFB36B","#F0457A"],
   role:{tr:"Uzay gemisi tamircisi", en:"Starship mechanic"},
   bio:{tr:"Hızlı konuşur, alaycıdır ama dostuna sonuna kadar sadıktır.", en:"Fast-talking and sarcastic, but fiercely loyal to her friends."},
   greet:{tr:"Oo, geldin demek. Tam zamanında, canım sıkılıyordu.", en:"Oh, you're here. Perfect timing, I was getting bored."},
   replies:{tr:["Bunu duyunca gülmemek zor. Devam et.","Tamam, haklısın. Bunu kimseye söyleme ama.","Sorun yok, birlikte çözeriz. Ben aleti getiriyorum."],
            en:["Hard not to laugh at that. Go on.","Okay, you're right. Don't tell anyone I said so.","No problem, we'll fix it together. I'll bring the toolkit."]}},
  {id:"kaito", name:"Kaito", style:"anime", c:["#7FD6FF","#5B5BD6"],
   role:{tr:"Sokak müzisyeni", en:"Street musician"},
   bio:{tr:"Sakin ve ince espriler yapar. Gitarıyla sana bir şarkı yazmayı teklif eder.", en:"Calm, with a dry wit. Offers to write you a song on his guitar."},
   greet:{tr:"Selam. Bu akşam sokak sakin, sohbet için iyi bir zaman.", en:"Hey. The street is quiet tonight, a good time to talk."},
   replies:{tr:["Bunu bir şarkıya dökebilirim, ismini sen koyarsın.","Anlıyorum. Bazen sessizlik de cevap olur.","Güzel söyledin. Biraz daha anlat."],
            en:["I could turn that into a song, you'd pick the title.","I get it. Sometimes silence is an answer too.","Nicely said. Tell me a bit more."]}},
  {id:"mara", name:"Mara", style:"real", free:true, c:["#FFC49B","#D0587E"],
   role:{tr:"Gezgin fotoğrafçı", en:"Travel photographer"},
   bio:{tr:"Şehir şehir dolaşır. Her yerden bir hikâye ve bir fotoğraf getirir.", en:"Moves from city to city. Brings back a story and a photo from everywhere."},
   greet:{tr:"Merhaba! Yeni geldim, valizim hâlâ açılmadı. Sen nasılsın?", en:"Hi! Just got in, my suitcase is still unpacked. How are you?"},
   replies:{tr:["Bunu ben de yaşamıştım, Lizbon'da bir akşam…","Güzel. Bir dahaki sefere seni de götürürüm.","Anlat anlat, ben dinliyorum."],
            en:["I went through that too, one evening in Lisbon…","Nice. Next time I'll take you along.","Go on, I'm listening."]}},
  {id:"lucas", name:"Lucas", style:"real", c:["#9AD9B5","#2F7D6B"],
   role:{tr:"Şef", en:"Chef"},
   bio:{tr:"Mutfakta sabırlı, sohbette sıcak. Her sorunun bir tarifi olduğunu düşünür.", en:"Patient in the kitchen, warm in conversation. Believes every problem has a recipe."},
   greet:{tr:"Akşam yemeği için ne düşünüyorsun? Ben şimdiden acıktım.", en:"What are you thinking for dinner? I'm already hungry."},
   replies:{tr:["Bunun için sıcak bir şeyler lazım. Çorba yapalım mı?","Yavaş yavaş, her şey zamanla oturur.","İyi fikir. Hadi birlikte deneyelim."],
            en:["That calls for something warm. Soup?","Slowly now, everything settles with time.","Good idea. Let's try it together."]}},
  {id:"nora", name:"Nora", style:"real", c:["#B9A7FF","#2B2142"],
   role:{tr:"Astrofizik doktora öğrencisi", en:"Astrophysics PhD student"},
   bio:{tr:"Gece geç saatlere kadar çalışır. Yıldızlardan ve sıradan şeylerden aynı hevesle bahseder.", en:"Works late into the night. Talks about stars and ordinary things with the same enthusiasm."},
   greet:{tr:"Hâlâ uyanık mısın? Ben teleskop verilerine gömüldüm, iyi ki yazdın.", en:"Still awake? I'm buried in telescope data, glad you wrote."},
   replies:{tr:["İlginç. Bunu düşünürken aklıma harika bir şey geldi.","Bu gece gökyüzü açık. Dışarı bak, bir dakika.","Hmm, bunu biraz daha açar mısın?"],
            en:["Interesting. Thinking about it gave me an idea.","The sky is clear tonight. Look outside for a minute.","Hmm, can you open that up a bit?"]}}
];

/* ---------- Yardımcılar ---------- */
const $ = (s, r=document) => r.querySelector(s);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const CFG = window.MURMUR || {};
const LIVE = !!(CFG.API && CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY);
let lang = (() => {
  try { const s = localStorage.getItem("lang"); if (s === "tr" || s === "en") return s; } catch(e) {}
  return (navigator.language || "en").toLowerCase().startsWith("tr") ? "tr" : "en";
})();
let filter = "all", current = null, replyIdx = 0, breakTimer = null, me = null;

function bubble(text, who){ const d = document.createElement("div"); d.className = "msg " + who; d.textContent = text; return d; }
function typing(){ const d = document.createElement("div"); d.className = "msg ai typing"; d.innerHTML = "<span></span><span></span><span></span>"; return d; }
function fillAvatar(el, c){
  el.style.background = `linear-gradient(135deg, ${c.c[0]}, ${c.c[1]})`;
  el.textContent = c.name[0];
  const img = new Image(); img.alt = ""; img.decoding = "async"; img.src = `img/${c.id}.jpg`;
  img.onload = () => el.append(img);
}
function toast(msg){
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 4200);
}
const store = {
  get(k){ try { return localStorage.getItem(k); } catch(e) { return null; } },
  set(k, v){ try { localStorage.setItem(k, v); } catch(e) {} },
  del(k){ try { localStorage.removeItem(k); } catch(e) {} }
};

/* Demo modunda kullanılan basit kriz kontrolü. Canlı modda asıl kontrol sunucudadır. */
const CRISIS = /(intihar|kendimi oldur|olmek istiyorum|yasamak istemiyorum|kendime zarar|suicide|kill myself|want to die|end my life|self[- ]?harm|hurt myself)/;
function isCrisis(text){
  const n = text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ı/g, "i");
  return CRISIS.test(n);
}

/* ---------- Giriş (Supabase Auth, kütüphanesiz) ---------- */
let session = (() => { try { return JSON.parse(store.get("sb_session") || "null"); } catch(e) { return null; } })();
function saveSession(s){ session = s; s ? store.set("sb_session", JSON.stringify(s)) : store.del("sb_session"); }
const toSession = d => ({ access_token:d.access_token, refresh_token:d.refresh_token, expires_at:Math.floor(Date.now()/1000) + (d.expires_in || 3600) });
const SB = (path, opts = {}) => fetch(`${CFG.SUPABASE_URL}/auth/v1/${path}`, {
  ...opts, headers: { apikey: CFG.SUPABASE_ANON_KEY, "Content-Type": "application/json", ...(opts.headers || {}) }
});

function takeHashSession(){ // e-postadaki bağlantıya tıklayınca adresin sonuna jeton eklenir
  const h = new URLSearchParams(location.hash.replace(/^#/, ""));
  if (h.get("access_token") && h.get("refresh_token")) {
    saveSession(toSession({ access_token:h.get("access_token"), refresh_token:h.get("refresh_token"), expires_in:Number(h.get("expires_in")) || 3600 }));
    history.replaceState(null, "", location.pathname + location.search);
    return true;
  }
  return false;
}
async function freshToken(){
  if (!session) return null;
  if (session.expires_at - 60 > Date.now() / 1000) return session.access_token;
  const r = await SB("token?grant_type=refresh_token", { method:"POST", body:JSON.stringify({ refresh_token:session.refresh_token }) });
  if (!r.ok) { saveSession(null); return null; }
  saveSession(toSession(await r.json()));
  return session.access_token;
}
async function api(path, opts = {}){
  const token = await freshToken();
  if (!token) throw { status:401 };
  const r = await fetch(CFG.API + path, { ...opts, headers:{ Authorization:`Bearer ${token}`, "Content-Type":"application/json" } });
  const data = await r.json().catch(() => null);
  if (!r.ok) throw { status:r.status, code:data && data.error };
  return data;
}
function errText(e){
  const t = T[lang];
  if (e && e.code === "quota") return t.err_quota;
  if (e && e.code === "plan_required") return t.err_plan;
  if (e && e.code === "model_unavailable") return t.err_model;
  if (e && e.code === "age_required") return t.err_age;
  if (e && e.status) return t.err_generic;
  return t.err_net;
}
async function refreshMe(){
  me = await api("/api/me");
  if (!me.ageConfirmed && store.get("age18") === "1") {
    await api("/api/age", { method:"POST", body:JSON.stringify({ confirm:true }) });
    me.ageConfirmed = true;
  }
  updateAuthUI();
}
function updateAuthUI(){
  $("#login-btn").textContent = session ? T[lang].acct : T[lang].login;
  renderChars(); renderPlans(); updateNote();
}
function updateNote(){
  const t = T[lang];
  $("#chat-note").textContent = LIVE ? t.chat_live + (me && typeof me.remaining === "number" ? ` ${t.left} ${me.remaining}` : "") : t.chat_demo;
}
function dialogOpen(d){ if (!d.open) d.showModal(); }
function openLogin(){ $("#login-form").hidden = false; $("#code-form").hidden = true; dialogOpen($("#login")); $("#login-email").focus(); }
function afterLogin(){
  $("#login").open && $("#login").close();
  refreshMe().then(() => {
    const id = sessionStorage.getItem("pending");
    if (id) { sessionStorage.removeItem("pending"); openChat(id); }
  }).catch(() => toast(T[lang].err_net));
}

/* ---------- Render ---------- */
function renderChars(){
  const grid = $("#grid"); grid.innerHTML = "";
  chars.filter(c => filter === "all" || c.style === filter).forEach(c => {
    const locked = LIVE && me && me.plan !== "plus" && !c.free;
    const el = document.createElement("article"); el.className = "char";
    el.innerHTML = `
      <div class="art">
        <span class="badge">${c.style === "anime" ? T[lang].f_anime : T[lang].f_real}</span>
        <span class="big" aria-hidden="true">${c.name[0]}</span>
      </div>
      <div class="body">
        <h3>${c.name}</h3>
        <span class="role">${c.role[lang]}</span>
        <p>${c.bio[lang]}</p>
        <button class="btn ${locked ? "btn-ghost" : "btn-primary"}" data-id="${c.id}" aria-label="${locked ? T[lang].unlock : T[lang].talk}: ${c.name}">${locked ? T[lang].unlock : T[lang].talk}</button>
      </div>`;
    const art = $(".art", el);
    art.style.background = `linear-gradient(150deg,${c.c[0]},${c.c[1]})`;
    const img = new Image(); img.alt = c.name; img.decoding = "async"; img.src = `img/${c.id}.jpg`;
    img.onload = () => { art.append(img); $(".big", el).remove(); };
    grid.append(el);
  });
}
function renderPlans(){
  $("#plan-list").innerHTML = T[lang].plans.map(p => {
    const cta = (p.id === "plus" && me && me.plan === "plus") ? T[lang].acct_manage : p.cta;
    return `
    <div class="plan${p.hot ? " hot" : ""}">
      <h3>${p.n}</h3>
      <div class="price">${p.p}<small> ${T[lang].month}</small></div>
      <ul>${p.items.map(i => `<li>${i}</li>`).join("")}</ul>
      <button class="btn btn-primary plan-btn" data-plan="${p.id}">${cta}</button>
    </div>`;
  }).join("");
}
let demoRun = 0;
async function playDemo(){
  const id = ++demoRun, box = $("#demo-msgs"); box.innerHTML = "";
  const mara = chars.find(c => c.id === "mara");
  $("#demo-name").textContent = mara.name;
  const av = $("#demo-avatar"); av.innerHTML = ""; fillAvatar(av, mara);
  for (const l of T[lang].demo){
    if (id !== demoRun) return;
    if (!reduce){
      if (l.who === "ai"){ const t = typing(); box.append(t); await sleep(1400); if (id !== demoRun) return; t.remove(); }
      else await sleep(800);
    }
    box.append(bubble(l.text, l.who));
  }
}
function applyLang(){
  document.documentElement.lang = lang;
  document.title = T[lang].title;
  const md = document.querySelector('meta[name="description"]'); if (md) md.content = T[lang].desc;
  document.querySelectorAll("[data-i18n]").forEach(el => { const v = T[lang][el.dataset.i18n]; if (v) el.textContent = v; });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => el.placeholder = T[lang][el.dataset.i18nPh]);
  $("#lang-btn").textContent = lang === "tr" ? "EN" : "TR";
  $("#login-btn").textContent = session ? T[lang].acct : T[lang].login;
  ["chat", "login", "acct"].forEach(id => { const d = $("#" + id); if (d.open) d.close(); });
  renderChars(); renderPlans(); updateNote(); playDemo();
}

/* ---------- Yaş kapısı (kendi beyanı; gerçek doğrulama sunucu ister) ---------- */
function initGate(){
  if (store.get("age18") === "1") return;
  const g = $("#gate");
  g.addEventListener("cancel", e => e.preventDefault());
  $("#gate-yes").onclick = () => { store.set("age18", "1"); g.close(); if (LIVE && session) refreshMe().catch(() => {}); };
  $("#gate-no").onclick = () => {
    $("#gate-h").textContent = "";
    $("#gate-p").textContent = T[lang].gate_blocked;
    $("#gate-actions").remove();
  };
  g.showModal();
}

/* ---------- Etkileşim ---------- */
$("#lang-btn").onclick = () => { lang = lang === "tr" ? "en" : "tr"; store.set("lang", lang); applyLang(); };
$("#login-btn").onclick = () => {
  if (!LIVE) return toast(T[lang].toast);
  if (!session) return openLogin();
  $("#acct-email").textContent = me ? me.email : "";
  $("#acct-plan").textContent = me ? (me.plan === "plus" ? T[lang].plan_plus : T[lang].plan_free) : "";
  $("#acct-left").textContent = me ? String(me.remaining) : "";
  $("#acct-manage").hidden = !(me && me.hasCustomer);
  dialogOpen($("#acct"));
};
["login", "acct"].forEach(id => {
  const d = $("#" + id);
  d.addEventListener("click", e => { if (e.target === d) d.close(); });
  $(`#${id}-close`).onclick = () => d.close();
});

$("#login-form").addEventListener("submit", async e => {
  e.preventDefault();
  const email = $("#login-email").value.trim(); if (!email) return;
  try {
    const redirect = encodeURIComponent(location.origin + location.pathname);
    const r = await SB(`otp?redirect_to=${redirect}`, { method:"POST", body:JSON.stringify({ email, create_user:true }) });
    if (!r.ok) throw new Error("otp");
    $("#login-form").hidden = true; $("#code-form").hidden = false;
    $("#login-msg").textContent = T[lang].link_sent;
    $("#login-code").focus();
  } catch(err) { toast(T[lang].err_email); }
});
$("#code-form").addEventListener("submit", async e => {
  e.preventDefault();
  const email = $("#login-email").value.trim(), token = $("#login-code").value.trim(); if (!token) return;
  try {
    const r = await SB("verify", { method:"POST", body:JSON.stringify({ type:"email", email, token }) });
    if (!r.ok) return toast(T[lang].err_code);
    saveSession(toSession(await r.json()));
    afterLogin();
  } catch(err) { toast(T[lang].err_net); }
});

$("#acct-manage").onclick = async () => {
  try { location.href = (await api("/api/portal", { method:"POST", body:"{}" })).url; } catch(e) { toast(errText(e)); }
};
$("#acct-export").onclick = async () => {
  try {
    const d = await api("/api/export");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(d, null, 2)], { type:"application/json" }));
    a.download = "murmur-data.json"; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 3000);
  } catch(e) { toast(errText(e)); }
};
$("#acct-logout").onclick = async () => {
  try { if (session) await SB("logout", { method:"POST", headers:{ Authorization:`Bearer ${session.access_token}` } }); } catch(e) {}
  saveSession(null); me = null; $("#acct").close(); updateAuthUI();
};
$("#acct-delete").onclick = async () => {
  if (!confirm(T[lang].acct_confirm_delete)) return;
  try {
    await api("/api/account", { method:"DELETE", body:JSON.stringify({ confirm:"DELETE" }) });
    saveSession(null); me = null; $("#acct").close(); updateAuthUI(); toast(T[lang].acct_deleted);
  } catch(e) { toast(errText(e)); }
};

$("#plan-list").addEventListener("click", async e => {
  const b = e.target.closest(".plan-btn"); if (!b) return;
  if (!LIVE) return toast(T[lang].toast);
  if (b.dataset.plan === "free") { if (!session) openLogin(); else location.hash = "#characters"; return; }
  if (!session) return openLogin();
  try {
    if (!me) await refreshMe();
    const d = await api(me.plan === "plus" ? "/api/portal" : "/api/checkout", { method:"POST", body:"{}" });
    location.href = d.url;
  } catch(err) { if (err.status === 401) openLogin(); else toast(errText(err)); }
});
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  filter = b.dataset.f;
  document.querySelectorAll("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
  renderChars();
});
$("#grid").addEventListener("click", e => { const b = e.target.closest("button[data-id]"); if (b) openChat(b.dataset.id); });

/* ---------- Sohbet ---------- */
const dlg = $("#chat"), msgs = $("#chat-msgs");
function scrollDown(){ msgs.scrollTop = msgs.scrollHeight; }
async function openChat(id){
  const c = chars.find(x => x.id === id); if (!c) return;
  if (LIVE) {
    if (!session) { try { sessionStorage.setItem("pending", id); } catch(e) {} toast(T[lang].login_need); return openLogin(); }
    if (!me) {
      try { await refreshMe(); }
      catch(e) { if (e.status === 401) return openLogin(); return toast(T[lang].err_net); }
    }
    if (!c.free && me.plan !== "plus") { toast(T[lang].err_plan); location.hash = "#plans"; return; }
  }
  current = c; replyIdx = 0;
  $("#chat-name").textContent = c.name;
  $("#chat-role").textContent = c.role[lang];
  const av = $("#chat-avatar"); av.innerHTML = ""; fillAvatar(av, c);
  msgs.innerHTML = ""; msgs.append(bubble(c.greet[lang], "ai"));
  updateNote();
  clearInterval(breakTimer);
  breakTimer = setInterval(() => { msgs.append(bubble(T[lang].break_msg, "ai")); scrollDown(); }, 3 * 60 * 60 * 1000);
  dlg.showModal(); $("#chat-input").focus();
  if (LIVE) {
    try {
      const h = await api("/api/history?character=" + id);
      if (current && current.id === id && h.messages.length) {
        msgs.innerHTML = "";
        h.messages.forEach(m => msgs.append(bubble(m.content, m.role === "user" ? "me" : "ai")));
        scrollDown();
      }
    } catch(e) { /* geçmiş yüklenemezse karşılama mesajı kalır */ }
  }
}
$("#chat-close").onclick = () => dlg.close();
dlg.addEventListener("close", () => clearInterval(breakTimer));
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });

$("#chat-form").addEventListener("submit", async e => {
  e.preventDefault();
  const input = $("#chat-input"), text = input.value.trim(); if (!text) return;
  msgs.append(bubble(text, "me")); input.value = ""; scrollDown();

  if (LIVE) {
    const t = typing(); msgs.append(t); scrollDown();
    try {
      const d = await api("/api/chat", { method:"POST", body:JSON.stringify({ character:current.id, message:text, lang }) });
      t.remove(); msgs.append(bubble(d.reply, d.kind === "care" ? "care" : "ai"));
      if (typeof d.remaining === "number") { me.remaining = d.remaining; updateNote(); }
    } catch(err) {
      t.remove(); msgs.append(bubble(errText(err), "care"));
      if (err.status === 401) { saveSession(null); me = null; dlg.close(); updateAuthUI(); openLogin(); }
    }
    scrollDown(); return;
  }

  // Demo modu
  if (isCrisis(text)) { msgs.append(bubble(T[lang].care_msg, "care")); scrollDown(); return; }
  const t = typing(); msgs.append(t); scrollDown();
  const list = current.replies[lang];
  const reply = list[replyIdx++ % list.length];
  await sleep(reduce ? 0 : 900 + Math.random() * 800);
  t.remove(); msgs.append(bubble(reply, "ai")); scrollDown();
});

/* ---------- Başlangıç ---------- */
let justLoggedIn = false;
if (LIVE) justLoggedIn = takeHashSession();
applyLang();
initGate();
if (LIVE) {
  const q = new URLSearchParams(location.search);
  const co = q.get("checkout");
  if (co) { history.replaceState(null, "", location.pathname); toast(co === "success" ? T[lang].checkout_ok : T[lang].checkout_cancel); }
  if (session) {
    if (justLoggedIn || co === "success") afterLogin();
    else refreshMe().catch(e => { if (e.status === 401) { saveSession(null); updateAuthUI(); } });
  }
}
