const IMGS = {
  "Vada Pav": "https://altomerge.com/wp-content/uploads/2024/06/Vada-Pav-4.jpg",
  "Chole Bhature": "https://c8.alamy.com/comp/E08HPH/chole-bhature-chickpea-curry-with-fried-breads-punjabi-breakfast-dish-E08HPH.jpg",
  "Kathi Roll": "http://crispyfoodidea.com/wp-content/uploads/2025/08/Kolkata-style-chicken-Kathi-roll-2-735x1103.webp",
  "Idli + Filter Kaapi": "https://img.freepik.com/premium-photo/south-indian-popular-breakfast-idli-sambar-coconut-chutney_55610-2918.jpg?w=2000",
  "Biryani": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
  "Amritsari Kulcha": "https://www.cookingcarnival.com/wp-content/uploads/2016/02/Amritsari-Kulcha.jpg",
  "Galouti Kebab": "https://cdn.tasteatlas.com/images/dishes/a4de34b5d7b546b68e439eb38533815a.jpg?m=facebook",
  "Dhokla": "https://www.cookwithmanali.com/wp-content/uploads/2023/02/Khaman-Dhokla.jpg",
  "Misal Pav": "https://www.ohmyveg.co.uk/wp-content/uploads/2023/12/Misal-Pav-2-3.jpg",
  "Dal Baati Churma": "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-dal-baati-churma.jpg",
  "Dahibara Aloo Dum": "https://www.clubmahindra.com/blog/images/dahibara-aloo-dum-odisha-resized.jpg",
  "Appam + Stew": "https://pbs.twimg.com/media/FHWhKFXVEAEL9JG.jpg:large",
};

const GALLERY_EXTRAS = {
  "Vada Pav": ["https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav.png", "https://assets.zeezest.com/blogs/PROD_Id-1180-vadapav-mumbai-streetfood-banner_1624467080043_thumb_1000.jpeg"],
  "Chole Bhature": ["https://travelinsighter.com/wp-content/uploads/2025/08/chole-bhature-803x1080.jpg", "https://i0.wp.com/blog.karlrock.com/wp-content/uploads/2017/05/Chole-Bhature.jpeg?fit=591%2C550&ssl=1"],
  "Biryani": ["https://images.unsplash.com/photo-1564671165093-20688ff1fffa?w=300&q=70", "https://foodeiz.com/wp-content/uploads/2025/08/Dum-Biryani-4.webp"],
};

const BADGE_CLR = { north: "#0D7A6E", south: "#2EAA6E", east: "#E8334A", west: "#FF6B2C" };
const BADGE_CSS = { north: "b-n", south: "b-s", east: "b-e", west: "b-w" };

const D = [
  { city: "Mumbai", state: "Maharashtra", region: "west", veg: true, food: "Vada Pav", price: "₹20–40", price2: "Budget", rating: 4.9, rcount: "12.4k ratings", season: "🌤 Year-round · Best Oct–Feb", tags: ["Street food", "Maharashtrian", "₹20"], desc: "Mumbai's beloved street burger — a spiced potato fritter tucked into a soft pav bun with vibrant green and tamarind chutneys. Sold at every corner for under ₹20, this humble snack IS Mumbai's heartbeat. Politicians have debated it, films have immortalised it, and millions eat it daily.", spot: "Ashok Vada Pav, Dadar Station — running strong since the 1960s with queues that never stop.", yt: "https://www.youtube.com/results?search_query=vada+pav+mumbai+street+food", recipe: "Homemade Vada Pav", recdesc: "Master the spiced potato filling and garlic chutney that make this iconic snack." },
  { city: "Delhi", state: "Delhi NCR", region: "north", veg: true, food: "Chole Bhature", price: "₹80–160", price2: "Budget", rating: 4.8, rcount: "9.1k ratings", season: "🌤 Year-round · Best Oct–Mar", tags: ["North Indian", "Breakfast", "Hearty"], desc: "Billowing puffy bhature — deep-fried leavened bread — paired with a fiery, slow-cooked chickpea curry. Delhi's ultimate Sunday morning indulgence. The bhature puffs up like a golden balloon the moment it hits the oil. One plate and you're full for the day.", spot: "Sita Ram Diwan Chand, Paharganj — legendary since 1947, still Delhi's finest.", yt: "https://www.youtube.com/results?search_query=chole+bhature+delhi", recipe: "Classic Chole Bhature", recdesc: "The 24-hour soaked chickpea curry and the art of making perfectly puffy bhature at home." },
  { city: "Kolkata", state: "West Bengal", region: "east", veg: false, food: "Kathi Roll", price: "₹60–150", price2: "Budget", rating: 4.7, rcount: "8.3k ratings", season: "🌧 Avoid Jun–Aug monsoon · Best Nov–Feb", tags: ["Street food", "Bengali", "On-the-go"], desc: "A flaky, crispy paratha cooked with egg, stuffed with spiced mutton or paneer, slathered in green chutney, scattered with raw onion and a squeeze of lime. Invented in 1932 at Nizam's so busy office-goers could eat while walking — Kolkata's greatest gift to street food.", spot: "Nizam's Restaurant, Esplanade — the birthplace of the Kathi Roll, still unbeatable.", yt: "https://www.youtube.com/results?search_query=kathi+roll+kolkata", recipe: "Egg Kathi Roll", recdesc: "The layered paratha technique and the egg coating that gives it that signature crunch." },
  { city: "Chennai", state: "Tamil Nadu", region: "south", veg: true, food: "Idli + Filter Kaapi", price: "₹40–100", price2: "Budget", rating: 4.9, rcount: "15.2k ratings", season: "🌤 Year-round · Best Nov–Feb", tags: ["South Indian", "Breakfast", "Vegetarian"], desc: "Cloud-soft, pillowy steamed cakes of fermented rice and lentil batter, served with sambar and two kinds of coconut chutney. Followed by filter kaapi — rich, frothy coffee poured between tumblers in a dramatic cascade. Chennai's morning is incomplete without this pair.", spot: "Saravana Bhavan, T. Nagar — the gold standard for South Indian breakfast since 1981.", yt: "https://www.youtube.com/results?search_query=idli+filter+coffee+chennai", recipe: "Perfect Idli Batter", recdesc: "The fermentation ratios and grinding technique that produce cloud-like idlis every time." },
  { city: "Hyderabad", state: "Telangana", region: "south", veg: false, food: "Biryani", price: "₹180–400", price2: "Mid-range", rating: 4.9, rcount: "22.7k ratings", season: "🌤 Year-round · Best Oct–Feb", tags: ["Mughlai", "Must-try", "GI Tagged"], desc: "Slow-cooked dum biryani — layers of fragrant basmati rice, tender mutton, saffron, caramelised onions, and whole spices sealed in a pot. The steam does all the magic. So revered it earned a Geographical Indication tag. Hyderabad practically breathes biryani.", spot: "Paradise Restaurant, Secunderabad — serving Hyderabadi biryani since 1953, the undisputed icon.", yt: "https://www.youtube.com/results?search_query=hyderabad+biryani", recipe: "Hyderabadi Dum Biryani", recdesc: "The dum cooking method, saffron soaking, and the spice blend behind the GI-tagged original." },
  { city: "Amritsar", state: "Punjab", region: "north", veg: true, food: "Amritsari Kulcha", price: "₹80–160", price2: "Budget", rating: 4.8, rcount: "7.6k ratings", season: "🌸 Best Mar–Apr, Oct–Nov · Avoid May–Jun heat", tags: ["Punjabi", "Tandoor", "Breakfast"], desc: "Crispy, layered flatbread stuffed with spiced mashed potato and onion, baked in a blazing tandoor and slathered with white butter. Served with chole and achaar. Best eaten sitting on a plastic stool in the golden morning light of Amritsar's old lanes.", spot: "Kulcha Land by Kulcha Singh, Amritsar — modern setting, legendary taste.", yt: "https://www.youtube.com/results?search_query=amritsari+kulcha", recipe: "Amritsari Stuffed Kulcha", recdesc: "The aloo-onion stuffing spices and the technique for getting that tandoor-blistered crust at home." },
  { city: "Lucknow", state: "Uttar Pradesh", region: "north", veg: false, food: "Galouti Kebab", price: "₹200–500", price2: "Mid-range", rating: 4.9, rcount: "11.3k ratings", season: "🌸 Best Oct–Mar · Avoid summer", tags: ["Awadhi", "Gourmet", "Melt-in-mouth"], desc: "Impossibly silky minced lamb kebabs made with 160+ spices, pan-fried on a griddle until golden. So tender they melt before you even bite. Invented for a toothless Nawab who refused to give up his love of meat. Lucknow's most regal street food.", spot: "Tunday Kababi, Aminabad — the original, unmatched Nawabi kebab house since 1905.", yt: "https://www.youtube.com/results?search_query=galouti+kebab+lucknow", recipe: "Galouti Kebab", recdesc: "The raw papaya tenderising technique and the essential spice masala for melt-in-mouth kebabs." },
  { city: "Ahmedabad", state: "Gujarat", region: "west", veg: true, food: "Dhokla", price: "₹30–70", price2: "Budget", rating: 4.7, rcount: "6.9k ratings", season: "🌤 Year-round · Best Oct–Feb", tags: ["Gujarati", "Snack", "Tangy"], desc: "Spongy, golden squares of fermented rice and chickpea flour, steamed to perfection, then tempered with a sizzle of mustard seeds, curry leaves, green chillies and a drizzle of lemon. Light, tangy, and completely addictive at any hour.", spot: "Any stall at Law Garden Night Market, Ahmedabad — best enjoyed at dusk.", yt: "https://www.youtube.com/results?search_query=dhokla+ahmedabad", recipe: "Instant Khaman Dhokla", recdesc: "The perfect batter consistency and the tadka timing that makes dhokla light and tangy." },
  { city: "Pune", state: "Maharashtra", region: "west", veg: true, food: "Misal Pav", price: "₹60–120", price2: "Budget", rating: 4.8, rcount: "8.8k ratings", season: "🌧 Great in monsoon · Best Jun–Sep", tags: ["Maharashtrian", "Spicy", "Breakfast"], desc: "A fiery bowl of sprouted moth beans curry, crowned with layers of crispy farsan, diced onion, chopped tomato and a squeeze of lime — served with buttered pav. Every Puneri has a fierce loyalty to their favourite misal stall. The spice level is not for the faint-hearted.", spot: "Bedekar Misal, Narayan Peth — the Pune original since 1949. Queue up early.", yt: "https://www.youtube.com/results?search_query=misal+pav+pune", recipe: "Spicy Pune Misal", recdesc: "The coconut-onion masala base and the sprouting technique for the perfect moth beans." },
  { city: "Jaipur", state: "Rajasthan", region: "north", veg: true, food: "Dal Baati Churma", price: "₹150–350", price2: "Mid-range", rating: 4.8, rcount: "9.4k ratings", season: "🌸 Best Oct–Mar · Avoid summer", tags: ["Rajasthani", "Traditional", "Royal"], desc: "Sun-baked wheat balls dunked in ghee, served alongside five-lentil dal and crumbled sweet churma. A centuries-old desert meal — conceived for warriors who needed food that could cook in the sun. Today it's Rajasthan's most iconic thali dish.", spot: "Chokhi Dhani, Tonk Road — a full folk village experience with authentic dal baati.", yt: "https://www.youtube.com/results?search_query=dal+baati+churma+jaipur", recipe: "Dal Baati Churma", recdesc: "The five-lentil dal blend, the ghee-soaking technique, and the sweet churma crumble." },
  { city: "Bhubaneswar", state: "Odisha", region: "east", veg: true, food: "Dahibara Aloo Dum", price: "₹30–60", price2: "Budget", rating: 4.6, rcount: "4.2k ratings", season: "🌸 Best Oct–Feb · Avoid Apr–Jun heat", tags: ["Odishan", "Breakfast", "Cooling"], desc: "Soft, pillowy lentil dumplings soaked in spiced yogurt, topped with a rich potato curry and two types of chutney. Odisha's answer to chaat culture — cooling, tangy, and deeply satisfying. A morning ritual for thousands in Bhubaneswar.", spot: "Master Canteen Square stalls, Bhubaneswar — arrive by 8am for the best.", yt: "https://www.youtube.com/results?search_query=dahibara+aloo+dum+odisha", recipe: "Dahibara Aloo Dum", recdesc: "The urad dal dumplings and the yogurt spicing that makes this Odishan classic refreshing." },
  { city: "Kochi", state: "Kerala", region: "south", veg: true, food: "Appam + Stew", price: "₹80–180", price2: "Budget", rating: 4.8, rcount: "7.1k ratings", season: "🌸 Best Nov–Mar · Avoid heavy monsoon Jun–Aug", tags: ["Kerala", "Breakfast", "Coconut"], desc: "Lacy, fermented rice pancakes with crispy edges and a soft, cloud-like centre — dipped into a mild, aromatic coconut milk stew with vegetables. Breakfast in Kerala is a meditation. The appam's gentle sourness against the stew's sweetness is pure harmony.", spot: "Hotel Saas, Fort Kochi — old-school Kerala charm with the best appam in the city.", yt: "https://www.youtube.com/results?search_query=appam+stew+kerala", recipe: "Kerala Appam & Vegetable Stew", recdesc: "The appam batter fermentation and the coconut milk stew spicing for a light Kerala breakfast." }
];

const TRAVEL_DESTINATIONS = [
  { name: "Mumbai", state: "Maharashtra", season: "Oct–Feb", days: "3–5 days", meals: "10+", img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=700&q=80", desc: "India's street food capital. Vada pav at dawn, pav bhaji at midnight, and everything in between — Mumbai never stops eating." },
  { name: "Hyderabad", state: "Telangana", season: "Oct–Feb", days: "2–4 days", meals: "8+", img: "https://images.unsplash.com/photo-1696941515998-d83f24967aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHlkZXJhYmFkfGVufDB8fDB8fHww", desc: "The city of biryani, haleem, and Irani chai. Every meal here feels like a feast fit for a Nizam." },
  { name: "Jaipur", state: "Rajasthan", season: "Oct–Mar", days: "2–3 days", meals: "7+", img: "data:image/jpeg;base64,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", desc: "Pink City, royal flavours. Dal baati churma, laal maas, and ghevar — Rajasthani food is as bold as its architecture." },
  { name: "Kolkata", state: "West Bengal", season: "Nov–Feb", days: "3–4 days", meals: "9+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnnSQoeMklEVjSSH191c0-b0DXS0WlYVIzxA&s", desc: "The city that takes its food the most seriously. Kathi rolls, mishti doi, and the world's best fish curry await." },
  { name: "Amritsar", state: "Punjab", season: "Oct–Apr", days: "1–2 days", meals: "6+", img: "data:image/jpeg;base64,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", desc: "A small city with an outsized food legacy. Kulcha, langar, and lassi — this is Punjab's soul on a plate." },
  { name: "Kochi", state: "Kerala", season: "Nov–Mar", days: "2–3 days", meals: "8+", img: "data:image/jpeg;base64,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", desc: "Coconut, spice, and backwaters. Kerala's cuisine is as layered as its history — appam, fish molee, and the legendary Kerala sadya." },
];

let activeFilter = "all";

function injectFooters() {
  const tpl = document.getElementById('footer-tpl');
  ['home', 'travel', 'about', 'contact', 'terms', 'privacy'].forEach(id => {
    const slot = document.getElementById(id + '-footer');
    if (slot) slot.appendChild(tpl.content.cloneNode(true));
  });
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  window.scrollTo(0, 0);
  document.querySelectorAll('.nav-center a').forEach(a => {
    a.classList.toggle('nav-active', a.dataset.page === id);
  });
  closeMobileMenu();
}

function goTravel() {
  showPage('travel');
  renderTravel();
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

function openSearch() {
  document.getElementById('search-overlay').classList.add('open');
  setTimeout(() => document.getElementById('search-input').focus(), 100);
}

function closeSearch() {
  document.getElementById('search-overlay').classList.remove('open');
  document.getElementById('search-input').value = '';
  document.getElementById('search-results').innerHTML = '<div class="sr-empty">Start typing to search 260+ dishes and destinations…</div>';
}

function doSearch(q) {
  const res = document.getElementById('search-results');
  if (!q.trim()) { res.innerHTML = '<div class="sr-empty">Start typing to search…</div>'; return; }
  const ql = q.toLowerCase();
  const hits = D.filter(d =>
    d.food.toLowerCase().includes(ql) ||
    d.city.toLowerCase().includes(ql) ||
    d.state.toLowerCase().includes(ql) ||
    d.region.toLowerCase().includes(ql) ||
    d.desc.toLowerCase().includes(ql)
  );
  if (!hits.length) { res.innerHTML = '<div class="sr-empty">No results for "' + q + '" — try a dish or city name.</div>'; return; }
  res.innerHTML = hits.map(d => `
    <div class="sr-item" onclick="closeSearch();openModal(${D.indexOf(d)})">
      <img class="sr-thumb" src="${IMGS[d.food]}" alt="${d.food}">
      <div class="sr-info">
        <div class="sr-name">${d.food}</div>
        <div class="sr-meta">${d.city}, ${d.state} · ${d.veg ? '🟢 Veg' : '🔴 Non-veg'} · ${d.price}</div>
      </div>
    </div>
  `).join('');
}

document.getElementById('search-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('search-overlay')) closeSearch();
});

function filterRegion(r) {
  showPage('home');
  activeFilter = r;
  document.querySelectorAll('.ftab').forEach(t => t.classList.toggle('on', t.dataset.f === r));
  renderDishes();
  setTimeout(() => document.getElementById('dishes-sec').scrollIntoView({ behavior: 'smooth' }), 100);
}

function renderDishes() {
  const grid = document.getElementById('dishes-grid');
  let list = D;
  if (activeFilter === 'veg') list = D.filter(d => d.veg);
  else if (activeFilter !== 'all') list = D.filter(d => d.region === activeFilter);
  grid.innerHTML = list.map(d => `
    <div class="dcard" onclick="openModal(${D.indexOf(d)})">
      <div class="dcard-img-wrap">
        <img class="dcard-img" src="${IMGS[d.food]}" alt="${d.food}" loading="lazy">
        <span class="dcard-badge ${BADGE_CSS[d.region]}">${d.region}</span>
        <span class="dcard-veg ${d.veg ? 'veg' : 'nonveg'}">${d.veg ? 'V' : 'N'}</span>
        <span class="dcard-price">${d.price}</span>
      </div>
      <div class="dcard-body">
        <div class="dcard-city">${d.city} · ${d.state}</div>
        <div class="dcard-name">${d.food}</div>
        <div class="dcard-desc">${d.desc.substring(0, 95)}…</div>
        <div class="dcard-foot">
          <div class="dcard-chips">${d.tags.slice(0, 2).map(t => `<span class="dchip">${t}</span>`).join('')}</div>
          <button class="dcard-arrow"><svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#5C4033" stroke-width="1.8"><path d="M3 3h10v10M3 13L13 3"/></svg></button>
        </div>
      </div>
    </div>
  `).join('');
}

document.querySelectorAll('.ftab').forEach(b => b.addEventListener('click', function () {
  document.querySelectorAll('.ftab').forEach(x => x.classList.remove('on'));
  this.classList.add('on');
  activeFilter = this.dataset.f;
  renderDishes();
}));

function starsHTML(r) {
  const full = Math.floor(r), half = r % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  return s;
}

function openModal(i) {
  const d = D[i];
  document.getElementById('m-img').src = IMGS[d.food] || IMGS['Kathi Roll'];
  const extras = GALLERY_EXTRAS[d.food] || [];
  document.getElementById('gallery-thumbs').innerHTML = extras.map((url, ti) => `
    <div class="gallery-thumb ${ti === 0 ? 'active-thumb' : ''}" onclick="switchGalleryImg(this,'${url}')">
      <img src="${url}" alt="">
    </div>
  `).join('');
  const badge = document.getElementById('m-badge');
  badge.textContent = d.region.charAt(0).toUpperCase() + d.region.slice(1) + ' India';
  badge.style.background = BADGE_CLR[d.region];
  document.getElementById('m-title').textContent = d.food;
  document.getElementById('m-sub').textContent = d.city + ', ' + d.state + (d.veg ? ' · 🟢 Vegetarian' : ' · 🔴 Non-veg');
  document.getElementById('m-stars').textContent = starsHTML(d.rating) + ' ' + d.rating;
  document.getElementById('m-rating-count').textContent = '(' + d.rcount + ')';
  document.getElementById('m-price-row').innerHTML = `
    <div class="mprice-box"><div class="mprice-label">Price Range</div><div class="mprice-val">${d.price}</div></div>
    <div class="mprice-box"><div class="mprice-label">Category</div><div class="mprice-val">${d.price2}</div></div>
  `;
  document.getElementById('m-desc').textContent = d.desc;
  document.getElementById('m-season').textContent = d.season;
  document.getElementById('m-spot').textContent = d.spot;
  document.getElementById('m-tags').innerHTML = d.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('m-recipe-title').textContent = d.recipe;
  document.getElementById('m-recipe-desc').textContent = d.recdesc;
  document.getElementById('m-yt').href = d.yt;
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function switchGalleryImg(el, url) {
  document.getElementById('m-img').src = url;
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active-thumb'));
  el.classList.add('active-thumb');
}

function closeModal() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('overlay')) closeModal();
});

function renderTravel() {
  const grid = document.getElementById('travel-cards-grid');
  if (grid.dataset.rendered) return;
  grid.dataset.rendered = '1';
  grid.innerHTML = TRAVEL_DESTINATIONS.map(t => `
    <div class="tcard">
      <div class="tcard-img-wrap">
        <img class="tcard-img" src="${t.img}" alt="${t.name}" loading="lazy">
        <span class="tcard-season-pill">🌤 Best: ${t.season}</span>
      </div>
      <div class="tcard-body">
        <div class="tcard-state">${t.state}</div>
        <div class="tcard-name">${t.name}</div>
        <div class="tcard-desc">${t.desc}</div>
        <div class="tcard-meta">
          <span class="tcard-meta-item">⏱ ${t.days}</span>
          <span class="tcard-meta-item">🍽 ${t.meals} must-eats</span>
        </div>
        <span class="tcard-link">View city guide →</span>
      </div>
    </div>
  `).join('');
}

function toggleTag(el) { el.classList.toggle('picked'); }

function doSignup() {
  const fn = document.getElementById('sp-fn').value.trim();
  const ln = document.getElementById('sp-ln').value.trim();
  const em = document.getElementById('sp-em').value.trim();
  const pw = document.getElementById('sp-pw').value;
  const ci = document.getElementById('sp-city').value;
  const tc = document.getElementById('sp-tc').checked;
  const err = document.getElementById('sp-err');
  err.style.display = 'none';
  if (!fn || !ln) { err.textContent = '⚠ Please enter your full name.'; err.style.display = 'block'; return; }
  if (!em || !em.includes('@')) { err.textContent = '⚠ Please enter a valid email address.'; err.style.display = 'block'; return; }
  if (pw.length < 8) { err.textContent = '⚠ Password must be at least 8 characters.'; err.style.display = 'block'; return; }
  if (!ci) { err.textContent = '⚠ Please select your city.'; err.style.display = 'block'; return; }
  if (!tc) { err.textContent = '⚠ Please accept the Terms to continue.'; err.style.display = 'block'; return; }
  document.getElementById('sp-form-wrap').style.display = 'none';
  document.getElementById('sp-success').classList.add('show');
}

function doLogin() {
  const em = document.getElementById('li-em').value.trim();
  const pw = document.getElementById('li-pw').value;
  const err = document.getElementById('li-err');
  err.style.display = 'none';
  if (!em || !em.includes('@')) { err.textContent = '⚠ Please enter a valid email.'; err.style.display = 'block'; return; }
  if (pw.length < 6) { err.textContent = '⚠ Please enter your password.'; err.style.display = 'block'; return; }
  showPage('home');
}

function doForgot() {
  const em = document.getElementById('fp-em').value.trim();
  const err = document.getElementById('fp-err');
  err.style.display = 'none';
  if (!em || !em.includes('@')) { err.textContent = '⚠ Please enter a valid email.'; err.style.display = 'block'; return; }
  document.getElementById('fp-form').style.display = 'none';
  document.getElementById('fp-sent').classList.add('show');
}

function doContact() {
  const name = document.getElementById('ct-name').value.trim();
  const email = document.getElementById('ct-email').value.trim();
  const sub = document.getElementById('ct-sub').value;
  const msg = document.getElementById('ct-msg').value.trim();
  const err = document.getElementById('ct-err');
  err.style.display = 'none';
  if (!name) { err.textContent = '⚠ Please enter your name.'; err.style.display = 'block'; return; }
  if (!email || !email.includes('@')) { err.textContent = '⚠ Please enter a valid email.'; err.style.display = 'block'; return; }
  if (!sub) { err.textContent = '⚠ Please select a subject.'; err.style.display = 'block'; return; }
  if (msg.length < 10) { err.textContent = '⚠ Please write a message (at least 10 characters).'; err.style.display = 'block'; return; }
  document.querySelectorAll('#page-contact .contact-r .sp-grp, #page-contact .contact-r .sp-submit, #page-contact .contact-r .sp-err').forEach(el => el.style.display = 'none');
  document.getElementById('ct-success').classList.add('show');
}

injectFooters();
renderDishes();