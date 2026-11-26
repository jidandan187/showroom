// Ganti nomor ini dengan nomor WhatsApp resmi Thomy Showroom.
// Format internasional tanpa tanda +, spasi, atau strip. Contoh: 6281234567890
const CONTACT_WA = "6287886555076";
const cars = [
  {id:1,brand:"Honda",name:"Brio Satya",year:2023,type:"bensin",category:"CITY CAR",engine:"1.2L i-VTEC",transmission:"Manual / CVT",seats:"5 penumpang",description:"Ringkas untuk mobilitas harian dan jalanan perkotaan.",price:"Tanya harga",image:""},
  {id:2,brand:"Toyota",name:"Agya",year:2023,type:"bensin",category:"CITY CAR",engine:"1.2L",transmission:"Manual / CVT",seats:"5 penumpang",description:"City car praktis untuk aktivitas sehari-hari.",price:"Tanya harga",image:""},
  {id:3,brand:"Daihatsu",name:"Ayla",year:2023,type:"bensin",category:"CITY CAR",engine:"1.0L / 1.2L",transmission:"Manual / CVT",seats:"5 penumpang",description:"Pilihan kompak untuk penggunaan di dalam kota.",price:"Tanya harga",image:""},
  {id:4,brand:"Toyota",name:"Avanza",year:2022,type:"bensin",category:"FAMILY CAR",engine:"1.3L / 1.5L",transmission:"Manual / CVT",seats:"7 penumpang",description:"Pilihan keluarga yang praktis untuk aktivitas sehari-hari.",price:"Tanya harga",image:""},
  {id:5,brand:"Mitsubishi",name:"Xpander",year:2022,type:"bensin",category:"FAMILY CAR",engine:"1.5L MIVEC",transmission:"Manual / AT",seats:"7 penumpang",description:"Kabin lega dengan karakter MPV yang nyaman untuk keluarga.",price:"Tanya harga",image:""},
  {id:6,brand:"Suzuki",name:"Ertiga",year:2022,type:"bensin",category:"MPV",engine:"1.5L K15B",transmission:"Manual / AT",seats:"7 penumpang",description:"MPV keluarga yang efisien dan mudah digunakan.",price:"Tanya harga",image:""},
  {id:7,brand:"Toyota",name:"Innova Zenix",year:2023,type:"hybrid",category:"MPV HYBRID",engine:"2.0L Hybrid",transmission:"CVT",seats:"7 penumpang",description:"MPV modern dengan pilihan teknologi hybrid.",price:"Tanya harga",image:""},
  {id:8,brand:"Toyota",name:"Rush",year:2022,type:"bensin",category:"SUV",engine:"1.5L Dual VVT-i",transmission:"Manual / AT",seats:"7 penumpang",description:"SUV kompak untuk kebutuhan keluarga dan perjalanan luar kota.",price:"Tanya harga",image:""},
  {id:9,brand:"Honda",name:"HR-V",year:2023,type:"bensin",category:"COMPACT SUV",engine:"1.5L i-VTEC",transmission:"CVT",seats:"5 penumpang",description:"SUV kompak dengan desain modern dan penggunaan fleksibel.",price:"Tanya harga",image:""},
  {id:10,brand:"Toyota",name:"Fortuner",year:2021,type:"diesel",category:"SUV",engine:"2.4L / 2.8L Diesel",transmission:"AT",seats:"7 penumpang",description:"SUV ladder-frame untuk perjalanan jauh dan beragam kondisi jalan.",price:"Tanya harga",image:""},
  {id:11,brand:"Mitsubishi",name:"Pajero Sport",year:2021,type:"diesel",category:"SUV",engine:"2.4L MIVEC Turbo Diesel",transmission:"AT",seats:"7 penumpang",description:"SUV diesel dengan karakter tangguh untuk perjalanan jauh.",price:"Tanya harga",image:""},
  {id:12,brand:"Isuzu",name:"MU-X",year:2022,type:"diesel",category:"SUV",engine:"1.9L RZ4E Diesel",transmission:"AT",seats:"7 penumpang",description:"SUV diesel untuk kebutuhan keluarga dan perjalanan antarkota.",price:"Tanya harga",image:""},
  {id:13,brand:"Honda",name:"Civic",year:2022,type:"bensin",category:"SEDAN",engine:"1.5L VTEC Turbo",transmission:"CVT",seats:"5 penumpang",description:"Sedan dengan tampilan sporty dan karakter berkendara responsif.",price:"Tanya harga",image:""},
  {id:14,brand:"Wuling",name:"Air ev",year:2024,type:"listrik",category:"ELECTRIC CITY CAR",engine:"Motor listrik",transmission:"Single speed",seats:"4 penumpang",description:"Mobil listrik mungil untuk kebutuhan mobilitas dalam kota.",price:"Tanya harga",image:""},
  {id:15,brand:"Hyundai",name:"Ioniq 5",year:2023,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Kendaraan listrik dengan kabin lapang dan desain modern.",price:"Tanya harga",image:"https://www.hyundai.com/content/dam/hyundai/id/en/data/marketing/download-image/ioniq5/list-thumbnail/Gallery-1-1-Kolom-pc-%281%29.jpg"},
  {id:16,brand:"Hyundai",name:"Kona Electric",year:2024,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik kompak untuk penggunaan harian dan perjalanan kota.",price:"Tanya harga",image:"https://www.hyundai.com/content/dam/hyundai/id/en/data/marketing/download-image/all-new-kona-electric/list-thumbnail/all-new-kona-electric-2024.png"},
  {id:17,brand:"BYD",name:"Atto 3",year:2024,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik dengan kabin modern dan ruang keluarga yang lega.",price:"Tanya harga",image:""},
  {id:18,brand:"BYD",name:"Dolphin",year:2024,type:"listrik",category:"ELECTRIC HATCHBACK",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Hatchback listrik untuk mobilitas urban.",price:"Tanya harga",image:""},
  {id:19,brand:"Hyundai",name:"IONIQ 6",year:2024,type:"listrik",category:"ELECTRIC SEDAN",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Sedan listrik bergaya aerodinamis dengan kabin modern.",price:"Tanya harga",image:""},
  {id:20,brand:"Hyundai",name:"IONIQ 5 N",year:2024,type:"listrik",category:"ELECTRIC PERFORMANCE",engine:"Dual motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Versi performa tinggi dari keluarga IONIQ 5.",price:"Tanya harga",image:""},
  {id:21,brand:"Hyundai",name:"IONIQ 9",year:2026,type:"listrik",category:"ELECTRIC SUV 3 ROW",engine:"Motor listrik",transmission:"Single speed",seats:"6–7 penumpang",description:"SUV listrik besar dengan konfigurasi kabin tiga baris.",price:"Tanya harga",image:""},
  {id:22,brand:"BYD",name:"Seal",year:2024,type:"listrik",category:"ELECTRIC SEDAN",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Sedan listrik dengan karakter sporty dan desain elegan.",price:"Tanya harga",image:""},
  {id:23,brand:"BYD",name:"Sealion 7",year:2025,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik bergaya coupe untuk kebutuhan keluarga modern.",price:"Tanya harga",image:""},
  {id:24,brand:"BYD",name:"M6",year:2024,type:"listrik",category:"ELECTRIC MPV",engine:"Motor listrik",transmission:"Single speed",seats:"6–7 penumpang",description:"MPV listrik dengan ruang kabin untuk keluarga.",price:"Tanya harga",image:""},
  {id:25,brand:"BYD",name:"Atto 1",year:2026,type:"listrik",category:"ELECTRIC CITY CAR",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Mobil listrik kompak untuk mobilitas harian di perkotaan.",price:"Tanya harga",image:""},
  {id:26,brand:"Wuling",name:"BinguoEV",year:2024,type:"listrik",category:"ELECTRIC HATCHBACK",engine:"Motor listrik",transmission:"Single speed",seats:"4 penumpang",description:"Hatchback listrik bergaya retro-modern untuk perkotaan.",price:"Tanya harga",image:""},
  {id:27,brand:"Wuling",name:"Cloud EV",year:2024,type:"listrik",category:"ELECTRIC HATCHBACK",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Hatchback listrik dengan kabin lega dan nyaman.",price:"Tanya harga",image:""},
  {id:28,brand:"Wuling",name:"Darion EV",year:2026,type:"listrik",category:"ELECTRIC MPV",engine:"Motor listrik",transmission:"Single speed",seats:"7 penumpang",description:"MPV listrik untuk kebutuhan keluarga dan perjalanan bersama.",price:"Tanya harga",image:""},
  {id:29,brand:"MG",name:"MG 4 EV",year:2024,type:"listrik",category:"ELECTRIC HATCHBACK",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Hatchback listrik dengan karakter berkendara sporty.",price:"Tanya harga",image:""},
  {id:30,brand:"MG",name:"S5 EV",year:2026,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik modern untuk aktivitas harian dan keluarga.",price:"Tanya harga",image:""},
  {id:31,brand:"Geely",name:"EX2",year:2026,type:"listrik",category:"ELECTRIC CITY CAR",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Mobil listrik kompak dengan desain urban.",price:"Tanya harga",image:""},
  {id:32,brand:"Geely",name:"EX5",year:2025,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik dengan ruang kabin praktis untuk keluarga.",price:"Tanya harga",image:""},
  {id:33,brand:"GAC AION",name:"AION V",year:2025,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik dengan desain futuristis dan kabin lapang.",price:"Tanya harga",image:""},
  {id:34,brand:"GAC AION",name:"AION Y Plus",year:2024,type:"listrik",category:"ELECTRIC MPV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Mobil listrik bergaya MPV dengan ruang kabin lega.",price:"Tanya harga",image:""},
  {id:35,brand:"VinFast",name:"VF 3",year:2025,type:"listrik",category:"ELECTRIC CITY CAR",engine:"Motor listrik",transmission:"Single speed",seats:"4 penumpang",description:"SUV mini listrik untuk mobilitas perkotaan.",price:"Tanya harga",image:""},
  {id:36,brand:"Jaecoo",name:"J5 EV",year:2026,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik bergaya tangguh untuk penggunaan harian.",price:"Tanya harga",image:""},
  {id:37,brand:"XPENG",name:"G6",year:2025,type:"listrik",category:"ELECTRIC SUV COUPE",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik bergaya coupe dengan teknologi kabin modern.",price:"Tanya harga",image:""},
  {id:38,brand:"Chery",name:"J6",year:2025,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik berdesain boxy dengan tampilan adventure.",price:"Tanya harga",image:""},
  {id:39,brand:"Toyota",name:"Kijang Innova Reborn",year:2022,type:"diesel",category:"MPV DIESEL",engine:"2.4L Diesel",transmission:"Manual / AT",seats:"7 penumpang",description:"MPV diesel tangguh yang jadi andalan keluarga dan perjalanan jauh.",price:"Tanya harga",image:""},
  {id:40,brand:"Toyota",name:"Calya",year:2023,type:"bensin",category:"LCGC MPV",engine:"1.2L Dual VVT-i",transmission:"Manual / AT",seats:"7 penumpang",description:"MPV LCGC hemat untuk keluarga dengan budget terjangkau.",price:"Tanya harga",image:""},
  {id:41,brand:"Toyota",name:"Veloz Hybrid",year:2024,type:"hybrid",category:"MPV HYBRID",engine:"1.5L Hybrid",transmission:"CVT",seats:"7 penumpang",description:"MPV modern berteknologi hybrid yang irit untuk pemakaian harian.",price:"Tanya harga",image:""},
  {id:42,brand:"Toyota",name:"Hilux",year:2023,type:"diesel",category:"PICK UP",engine:"2.4L Turbo Diesel",transmission:"Manual / AT",seats:"2–5 penumpang",description:"Pick up diesel tangguh untuk usaha dan medan berat.",price:"Tanya harga",image:""},
  {id:43,brand:"Toyota",name:"Raize",year:2023,type:"bensin",category:"COMPACT SUV",engine:"1.2L / 1.0L Turbo",transmission:"CVT / D-CVT",seats:"5 penumpang",description:"SUV kompak lincah dengan tampilan sporty untuk kota.",price:"Tanya harga",image:""},
  {id:44,brand:"Daihatsu",name:"Gran Max",year:2023,type:"bensin",category:"NIAGA",engine:"1.5L",transmission:"Manual",seats:"2–7 penumpang",description:"Kendaraan niaga ringan serbaguna: pick up, blind van, dan minibus.",price:"Tanya harga",image:""},
  {id:45,brand:"Daihatsu",name:"Sigra",year:2023,type:"bensin",category:"LCGC MPV",engine:"1.0L / 1.2L",transmission:"Manual / AT",seats:"7 penumpang",description:"LCGC 7 penumpang yang praktis dan ekonomis.",price:"Tanya harga",image:""},
  {id:46,brand:"Daihatsu",name:"Terios",year:2023,type:"bensin",category:"SUV",engine:"1.5L",transmission:"Manual / AT",seats:"7 penumpang",description:"SUV 7 penumpang dengan ground clearance tinggi.",price:"Tanya harga",image:""},
  {id:47,brand:"Suzuki",name:"Carry Pick Up",year:2023,type:"bensin",category:"PICK UP",engine:"1.5L",transmission:"Manual",seats:"2 penumpang",description:"Pick up ringan andalan UMKM dengan bak lega.",price:"Tanya harga",image:""},
  {id:48,brand:"Suzuki",name:"Fronx",year:2024,type:"bensin",category:"CROSSOVER",engine:"1.5L",transmission:"Manual / AT",seats:"5 penumpang",description:"Crossover gaya coupe dengan fitur modern.",price:"Tanya harga",image:""},
  {id:49,brand:"Mitsubishi",name:"Destinator",year:2025,type:"bensin",category:"SUV 3 ROW",engine:"1.5L Turbo",transmission:"CVT",seats:"7 penumpang",description:"SUV 7 penumpang terbaru dengan mesin turbo.",price:"Tanya harga",image:""},
  {id:50,brand:"Honda",name:"WR-V",year:2023,type:"bensin",category:"COMPACT SUV",engine:"1.5L i-VTEC",transmission:"CVT",seats:"5 penumpang",description:"SUV kompak Honda dengan kabin lega dan fitur lengkap.",price:"Tanya harga",image:""},
  {id:51,brand:"Hyundai",name:"Stargazer",year:2023,type:"bensin",category:"MPV",engine:"1.5L",transmission:"IVT",seats:"7 penumpang",description:"MPV keluarga bergaya modern dengan kabin lapang.",price:"Tanya harga",image:""}
];


// ===== Foto mobil online (tanpa folder assets) =====
// Foto dicari otomatis dari Wikimedia Commons berdasarkan nama mobil, lalu cadangan Wikipedia.
// Hasil disimpan di localStorage agar tidak mencari ulang. Jika tidak ketemu, tampil placeholder bernama.
// Format hint: [kata pencarian, [kata wajib di judul file], [kata terlarang], [kata prioritas]]
const imageHints = {
  1:[["Honda Brio Satya",["brio"]],["Honda Brio",["brio"]]],
  2:[["Toyota Agya",["agya"]],["Toyota Agya",["agya"]]],
  3:[["Daihatsu Ayla",["ayla"]]],
  4:[["Toyota Avanza 2022",["avanza"],["xenia"]],["Toyota Avanza",["avanza"],["xenia"]]],
  5:[["Mitsubishi Xpander",["xpander"]]],
  6:[["Suzuki Ertiga",["ertiga"]]],
  7:[["Toyota Kijang Innova Zenix",["zenix"]],["Toyota Innova HyCross",["hycross"]]],
  8:[["Toyota Rush",["rush"]]],
  9:[["Honda HR-V",["hrv"]]],
  10:[["Toyota Fortuner",["fortuner"]]],
  11:[["Mitsubishi Pajero Sport",["pajerosport"]]],
  12:[["Isuzu MU-X",["mux"]]],
  13:[["Honda Civic 2022",["civic"],["typer"]],["Honda Civic",["civic"],["typer"]]],
  14:[["Wuling Air ev",["airev"]],["Wuling Air EV",["wulingair"]]],
  17:[["BYD Atto 3",["atto3"]],["BYD Yuan Plus",["yuanplus"]]],
  18:[["BYD Dolphin",["dolphin"],["mini","surf"]]],
  19:[["Hyundai Ioniq 6",["ioniq6"]]],
  20:[["Hyundai Ioniq 5 N",["ioniq5n"]]],
  21:[["Hyundai Ioniq 9",["ioniq9"]]],
  22:[["BYD Seal",["seal"],["sealion","sealu","seal06","sealdm"]]],
  23:[["BYD Sealion 7",["sealion7"]],["BYD Sea Lion 07",["sealion07"]]],
  24:[["BYD M6",["bydm6"]],["BYD e6",["bydm6"]]],
  25:[["BYD Atto 1",["atto1"]],["BYD Seagull",["seagull"]]],
  26:[["Wuling Binguo EV",["binguo"]]],
  27:[["Wuling Cloud EV",["wulingcloud"]]],
  28:[["Wuling Darion EV",["darion"]]],
  29:[["MG4 EV",["mg4"]],["MG 4 Electric",["mg4"]]],
  30:[["MG S5 EV",["mgs5"]],["MG ES5",["mges5"]]],
  31:[["Geely EX2",["geelyex2"]],["Geely Xingyuan",["xingyuan"]]],
  32:[["Geely EX5",["geelyex5"]],["Geely Galaxy E5",["galaxye5"]]],
  33:[["GAC Aion V",["aionv"]]],
  34:[["GAC Aion Y Plus",["aiony"]]],
  35:[["VinFast VF 3",["vf3"]]],
  36:[["Jaecoo J5 EV",["jaecooj5"]],["Chery iCar 03",["icar03"]]],
  37:[["XPENG G6",["xpengg6"]]],
  38:[["Chery J6",["cheryj6"]],["Chery iCar V23",["icarv23"]]],
  39:[["Toyota Kijang Innova Reborn",["innova"],["zenix","hycross"],["reborn","2016","2017","2018","2019","2020"]]],
  40:[["Toyota Calya",["calya"]]],
  41:[["Toyota Veloz Hybrid",["veloz"],[],["hybrid","hev"]],["Toyota Veloz",["veloz"]]],
  42:[["Toyota Hilux 2022",["hilux"]],["Toyota Hilux",["hilux"]]],
  43:[["Toyota Raize",["raize"]]],
  44:[["Daihatsu Gran Max",["granmax"]]],
  45:[["Daihatsu Sigra",["sigra"]]],
  46:[["Daihatsu Terios",["terios"]]],
  47:[["Suzuki Carry pick up",["carry"]],["Suzuki Carry",["carry"]]],
  48:[["Suzuki Fronx",["fronx"]]],
  49:[["Mitsubishi Destinator",["destinator"]]],
  50:[["Honda WR-V",["wrv"]]],
  51:[["Hyundai Stargazer",["stargazer"]]]
};
const WIKI_WORDS_BLOCK = /\b(interior|engine|dashboard|steering|seats?|wheels?|logo|emblem|badge|headlights?|taillights?|tail light|cockpit|console|trunk|boot|display|brochure|poster|diagram|drawing|police|taxi|ambulance|crash|accident|wreck|cutaway|chassis|undercarriage|gearbox|key|model car|toy|lego)\b/i;
const fetchT = (url, ms = 6000) => { const c = new AbortController(); const t = setTimeout(() => c.abort(), ms); return fetch(url, {signal: c.signal}).finally(() => clearTimeout(t)); };
const compact = text => String(text).toLowerCase().replace(/[^a-z0-9]/g, "");
const IMG_CACHE = "thomy-img-v1:";
const imagePromises = {};

function readCache(id){
  try{
    const raw = localStorage.getItem(IMG_CACHE + id);
    if(!raw) return null;
    const item = JSON.parse(raw);
    if(item.url) return item;
    if(Date.now() - item.t < 6 * 3600 * 1000) return item; // gagal: coba lagi setelah 6 jam
  }catch(e){}
  return null;
}
function writeCache(id, url){
  try{ localStorage.setItem(IMG_CACHE + id, JSON.stringify({url: url || "", t: Date.now()})); }catch(e){}
}
async function searchCommons(query, must = [], not = [], prefer = []){
  const url = "https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=20"
    + "&gsrsearch=" + encodeURIComponent(query + " filetype:bitmap")
    + "&prop=imageinfo&iiprop=url|mime&iiurlwidth=900";
  const res = await fetchT(url);
  if(!res.ok) return "";
  const data = await res.json();
  const pages = Object.values((data.query && data.query.pages) || {});
  let best = null, bestScore = -1e9;
  pages.forEach(page => {
    const info = page.imageinfo && page.imageinfo[0];
    if(!info || !/^image\/(jpeg|png)$/.test(info.mime)) return;
    const title = page.title.replace(/^File:/i, "");
    const flat = compact(title);
    if(WIKI_WORDS_BLOCK.test(title)) return;
    if(!must.every(word => flat.includes(word))) return;
    if(not.some(word => flat.includes(word))) return;
    let score = -(page.index || 0);
    if(/202[1-6]/.test(title)) score += 4;
    prefer.forEach(word => { if(flat.includes(word)) score += 6; });
    if(/front|side|exterior|three|quarter/i.test(title)) score += 1;
    if(score > bestScore){ bestScore = score; best = info.thumburl || info.url; }
  });
  return best || "";
}
async function searchWikipedia(title){
  const res = await fetchT("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title.replace(/\s+/g, "_")) + "?redirect=true");
  if(!res.ok) return "";
  const data = await res.json();
  const src = (data.thumbnail && data.thumbnail.source) || (data.originalimage && data.originalimage.source) || "";
  return src ? src.replace(/\/\d+px-/, "/900px-") : "";
}
function resolveCarImage(car, skipDirect){
  const key = car.id + (skipDirect ? ":nd" : "");
  if(imagePromises[key]) return imagePromises[key];
  imagePromises[key] = (async () => {
    if(car.image && !skipDirect) return car.image;
    const cached = skipDirect ? null : readCache(car.id);
    if(cached) return cached.url;
    let found = "";
    for(const [query, must = [], not = [], prefer = []] of (imageHints[car.id] || [[`${car.brand} ${car.name}`, [compact(car.name)]]])){
      try{ found = await searchCommons(query, must, not, prefer); }catch(e){}
      if(found) break;
    }
    if(!found){
      try{ found = await searchWikipedia(`${car.brand} ${car.name}`); }catch(e){}
    }
    writeCache(car.id, found);
    return found;
  })();
  return imagePromises[key];
}
function hydratePhotos(root){
  root.querySelectorAll("img.car-photo").forEach(img => {
    const car = cars.find(item => item.id === Number(img.dataset.car));
    if(!car) return;
    const holder = img.parentElement;
    const placeholder = holder.querySelector(".photo-placeholder");
    const small = placeholder && placeholder.querySelector("small");
    const fail = () => { img.hidden = true; if(placeholder) placeholder.hidden = false; if(small) small.textContent = "FOTO MODEL MENYUSUL"; };
    const show = url => {
      if(!url){ fail(); return; }
      let done = false;
      const probe = new Image();
      const timer = setTimeout(() => { if(!done){ done = true; fail(); } }, 15000);
      probe.onload = () => {
        if(done) return; done = true; clearTimeout(timer);
        img.src = url; img.hidden = false; if(placeholder) placeholder.hidden = true;
      };
      probe.onerror = () => {
        if(done) return; done = true; clearTimeout(timer);
        if(img.dataset.retried) return fail();
        img.dataset.retried = "1";
        resolveCarImage(car, true).then(next => next && next !== url ? show(next) : fail());
      };
      probe.src = url;
    };
    if(small) small.textContent = "MEMUAT FOTO…";
    const watchdog = setTimeout(() => { if(img.hidden) fail(); }, 22000);
    resolveCarImage(car).then(url => { clearTimeout(watchdog); show(url); }).catch(fail);
  });
}

// Urutan tampil: model terlaris di Indonesia 2026 (data Gaikindo, wholesales) lebih dulu.
const HOT_IDS = [39,7,44,4,40,47,36,41,45,8,25,24,31,1,5,46,49,2,42,48];
cars.forEach(car => { const rank = HOT_IDS.indexOf(car.id); car.hot = rank >= 0; car.rank = rank >= 0 ? rank : 1000 + car.id; });
cars.sort((a, b) => a.rank - b.rank);

// Deskripsi detail unik untuk halaman informasi setiap model.
const detailDescriptions = {
  "1": "Honda Brio Satya merupakan city car kompak yang cocok untuk aktivitas perkotaan. Dimensinya praktis untuk bermanuver dan parkir, sementara kabin lima penumpang membuatnya pas sebagai kendaraan harian maupun mobil pertama.",
  "2": "Toyota Agya dirancang sebagai hatchback perkotaan yang praktis. Ukurannya ringkas untuk jalan padat, dengan pilihan transmisi manual atau CVT sesuai preferensi berkendara. Cocok untuk mobilitas harian dan kebutuhan keluarga kecil.",
  "3": "Daihatsu Ayla menawarkan format city car yang sederhana dan efisien untuk penggunaan sehari-hari. Pilihan kapasitas mesin 1.0L atau 1.2L memberi opsi sesuai kebutuhan, dengan kabin untuk lima penumpang.",
  "4": "Toyota Avanza dikenal sebagai MPV keluarga dengan konfigurasi tujuh penumpang. Ruang kabin dan fleksibilitasnya mendukung aktivitas harian, perjalanan bersama keluarga, maupun kebutuhan membawa barang.",
  "5": "Mitsubishi Xpander menggabungkan karakter MPV keluarga dengan tampilan yang tegas. Kabin tujuh penumpang dan mesin 1.5L membuatnya relevan untuk rutinitas keluarga serta perjalanan luar kota.",
  "6": "Suzuki Ertiga merupakan MPV tujuh penumpang yang mengutamakan kepraktisan keluarga. Tata ruang kabin mendukung perjalanan bersama, sementara pilihan transmisi manual atau otomatis memberi fleksibilitas penggunaan.",
  "7": "Toyota Innova Zenix Hybrid menggabungkan format MPV keluarga dengan sistem penggerak hybrid. Kabin tujuh penumpang dan transmisi CVT menjadikannya pilihan untuk yang mencari kendaraan keluarga dengan teknologi elektrifikasi.",
  "8": "Toyota Rush hadir sebagai SUV kompak dengan ground clearance dan karakter desain yang tangguh. Konfigurasi tujuh penumpang membuatnya bisa dipertimbangkan untuk aktivitas keluarga dan perjalanan antarkota.",
  "9": "Honda HR-V merupakan compact SUV dengan desain modern dan kabin lima penumpang. Dimensinya masih praktis untuk perkotaan, namun menawarkan posisi duduk khas SUV untuk penggunaan harian yang fleksibel.",
  "10": "Toyota Fortuner adalah SUV ladder-frame yang dikenal dengan postur besar dan karakter tangguh. Pilihan mesin diesel serta konfigurasi tujuh penumpang membuatnya relevan untuk perjalanan jauh dan kebutuhan keluarga.",
  "11": "Mitsubishi Pajero Sport menawarkan SUV diesel dengan kabin tujuh penumpang dan karakter berkendara untuk perjalanan jarak jauh. Desain eksteriornya tegas, dengan pilihan transmisi otomatis pada varian yang dicantumkan.",
  "12": "Isuzu MU-X merupakan SUV diesel tujuh penumpang yang berorientasi pada kenyamanan perjalanan dan daya jelajah. Mesin 1.9L diesel menjadi ciri utama model yang ditampilkan di katalog ini.",
  "13": "Honda Civic dikenal sebagai sedan dengan desain sporty dan mesin 1.5L VTEC Turbo pada varian yang dicantumkan. Kabin lima penumpang serta transmisi CVT menjadikannya opsi bagi pencari sedan dengan karakter dinamis.",
  "14": "Wuling Air ev adalah mobil listrik berukuran mungil yang dirancang untuk mobilitas perkotaan. Dimensi ringkas memudahkan penggunaan di area padat, sementara kabin empat penumpang cocok untuk perjalanan harian.",
  "15": "Hyundai IONIQ 5 merupakan crossover listrik dengan desain futuristis dan kabin lapang. Model ini menawarkan pengalaman berkendara elektrik tanpa perpindahan gigi konvensional, cocok untuk penggunaan kota maupun perjalanan antarkota.",
  "16": "Hyundai Kona Electric hadir sebagai SUV listrik kompak. Bentuknya praktis untuk penggunaan harian, dengan kabin lima penumpang dan karakter kendaraan listrik yang halus serta senyap.",
  "17": "BYD Atto 3 merupakan SUV listrik lima penumpang dengan desain eksterior modern dan kabin berorientasi teknologi. Bentuk SUV memberi posisi duduk tinggi dan ruang yang sesuai untuk kebutuhan harian maupun keluarga.",
  "18": "BYD Dolphin adalah hatchback listrik yang ditujukan untuk mobilitas urban. Format bodinya mudah digunakan di perkotaan, dengan kabin lima penumpang dan penggerak listrik satu tingkat.",
  "19": "Hyundai IONIQ 6 merupakan sedan listrik dengan siluet aerodinamis yang khas. Kabin lima penumpang dan karakter penggerak elektrik menjadikannya alternatif sedan modern bagi pengguna yang ingin beralih ke EV.",
  "20": "Hyundai IONIQ 5 N merupakan versi berorientasi performa dari keluarga IONIQ 5. Mengusung penggerak listrik dual motor, model ini ditujukan bagi penggemar kendaraan listrik yang menginginkan karakter lebih sporty.",
  "21": "Hyundai IONIQ 9 adalah SUV listrik berukuran besar dengan konfigurasi tiga baris. Ruang untuk enam hingga tujuh penumpang menjadikannya opsi bagi keluarga yang membutuhkan kendaraan listrik dengan kapasitas lebih luas.",
  "22": "BYD Seal merupakan sedan listrik dengan tampilan sporty dan proporsi elegan. Kabin lima penumpang serta penggerak listrik membuatnya menarik bagi pencari sedan modern dengan pengalaman berkendara elektrik.",
  "23": "BYD Sealion 7 mengusung format SUV listrik bergaya coupe. Desainnya memadukan tampilan dinamis dan fungsi kendaraan keluarga lima penumpang, cocok bagi yang menginginkan SUV EV dengan karakter berbeda.",
  "24": "BYD M6 merupakan MPV listrik yang menawarkan konfigurasi kabin untuk enam hingga tujuh penumpang. Format ini cocok dipertimbangkan keluarga yang membutuhkan ruang lebih banyak sekaligus ingin menggunakan kendaraan listrik.",
  "25": "BYD Atto 1 merupakan mobil listrik kompak untuk mobilitas sehari-hari. Ukurannya ditujukan agar praktis di lingkungan perkotaan, dengan kabin lima penumpang dan penggerak listrik.",
  "26": "Wuling BinguoEV memiliki desain hatchback retro-modern yang mudah dikenali. Mobil listrik empat penumpang ini cocok untuk perjalanan perkotaan dan pengguna yang menyukai gaya eksterior yang berbeda.",
  "27": "Wuling Cloud EV merupakan hatchback listrik dengan fokus pada kabin yang lega dan kenyamanan. Konfigurasi lima penumpang membuatnya bisa digunakan sebagai kendaraan harian maupun mobilitas keluarga kecil.",
  "28": "Wuling Darion EV hadir sebagai MPV listrik dengan kapasitas tujuh penumpang. Format bodinya ditujukan untuk kebutuhan keluarga yang membutuhkan ruang kabin lebih luas dalam kendaraan bertenaga listrik.",
  "29": "MG 4 EV adalah hatchback listrik dengan karakter desain sporty. Kabin lima penumpang dan penggerak listrik satu tingkat menjadikannya opsi bagi pengguna yang menginginkan EV dengan bentuk hatchback dinamis.",
  "30": "MG S5 EV merupakan SUV listrik lima penumpang dengan tampilan modern. Bentuk SUV menawarkan fleksibilitas untuk rutinitas sehari-hari dan kebutuhan keluarga, dengan pengalaman berkendara khas kendaraan listrik.",
  "31": "Geely EX2 merupakan mobil listrik kompak dengan pendekatan desain urban. Format lima penumpang dan ukuran yang praktis menjadikannya pilihan untuk aktivitas dalam kota.",
  "32": "Geely EX5 adalah SUV listrik dengan kabin lima penumpang. Bentuk SUV dan ruang kabin praktis membuatnya sesuai untuk pengguna yang mencari kendaraan listrik serbaguna untuk aktivitas harian dan keluarga.",
  "33": "GAC AION V merupakan SUV listrik dengan desain modern dan kabin lima penumpang. Model ini menawarkan format kendaraan keluarga dengan sistem penggerak elektrik.",
  "34": "GAC AION Y Plus menggabungkan penggerak listrik dengan bentuk kabin bergaya MPV. Ruang lima penumpang dan desain yang mengutamakan kelegaan membuatnya relevan untuk kebutuhan keluarga.",
  "35": "VinFast VF 3 merupakan kendaraan listrik mungil dengan desain kotak bergaya SUV mini. Kabin empat penumpang dan dimensi ringkas membuatnya cocok untuk mobilitas perkotaan.",
  "36": "Jaecoo J5 EV adalah SUV listrik dengan desain tegas dan nuansa adventure. Kabin lima penumpang menjadikannya alternatif bagi pengguna yang menyukai tampilan SUV namun ingin beralih ke tenaga listrik.",
  "37": "XPENG G6 merupakan SUV listrik bergaya coupe dengan desain modern. Kabin lima penumpang dan bentuk bodi aerodinamis memberi karakter berbeda di antara pilihan SUV listrik.",
  "38": "Chery J6 mengusung desain SUV boxy dengan nuansa adventure. Penggerak listrik dan kabin lima penumpang menjadikannya opsi bagi pencari EV dengan tampilan tegas dan tidak biasa.",
  "39": "Toyota Kijang Innova Reborn adalah MPV tujuh penumpang berpenggerak roda belakang dengan pilihan mesin diesel. Kenyamanan kabin dan ketangguhannya menjadikannya andalan keluarga serta kebutuhan perjalanan antarkota.",
  "40": "Toyota Calya merupakan MPV LCGC tujuh penumpang yang mengutamakan efisiensi dan harga terjangkau. Cocok untuk keluarga yang membutuhkan kabin luas untuk penggunaan harian.",
  "41": "Toyota Veloz Hybrid memadukan format MPV tujuh penumpang dengan sistem hybrid. Pilihan bagi keluarga yang ingin konsumsi bahan bakar lebih efisien tanpa meninggalkan kepraktisan MPV.",
  "42": "Toyota Hilux adalah pick up bertenaga diesel dengan karakter tangguh. Banyak dipakai untuk usaha, proyek, dan medan berat, tersedia dalam konfigurasi kabin tunggal maupun ganda.",
  "43": "Toyota Raize merupakan SUV kompak dengan dimensi ringkas dan tampilan sporty. Pilihan mesin 1.2L atau 1.0L turbo menjadikannya fleksibel untuk penggunaan kota.",
  "44": "Daihatsu Gran Max adalah kendaraan niaga ringan serbaguna yang tersedia sebagai pick up, blind van, dan minibus. Dikenal tangguh dan mudah dirawat untuk kebutuhan usaha.",
  "45": "Daihatsu Sigra adalah LCGC tujuh penumpang yang ekonomis. Ukurannya ringkas namun kabinnya cukup untuk keluarga, dengan pilihan mesin 1.0L atau 1.2L.",
  "46": "Daihatsu Terios menawarkan SUV tujuh penumpang dengan ground clearance tinggi dan penggerak roda belakang. Cocok untuk keluarga yang kerap melewati jalan kurang mulus.",
  "47": "Suzuki Carry Pick Up adalah pick up ringan yang populer untuk UMKM dan distribusi barang. Bak lega dan perawatan mudah membuatnya andalan untuk usaha.",
  "48": "Suzuki Fronx adalah crossover bergaya coupe dengan desain modern dan fitur kenyamanan lengkap. Cocok untuk pengguna yang mencari tampilan berbeda dari SUV kompak biasa.",
  "49": "Mitsubishi Destinator adalah SUV tujuh penumpang terbaru dengan mesin turbo. Ditujukan bagi keluarga yang butuh ruang tiga baris dengan tampilan SUV modern.",
  "50": "Honda WR-V merupakan SUV kompak dengan mesin 1.5L i-VTEC dan transmisi CVT. Kabinnya lega untuk kelasnya dan cocok untuk penggunaan harian.",
  "51": "Hyundai Stargazer adalah MPV tujuh penumpang dengan desain futuristis dan kabin lapang. Pilihan keluarga yang menginginkan tampilan modern."
};

// Spesifikasi teknis per model. Angka dapat berbeda menurut tahun, trim, dan varian.
const vehicleSpecs = {
  "1": [
    [
      "Mesin",
      "1.199 cc, 4-silinder i-VTEC"
    ],
    [
      "Tenaga maksimum",
      "90 PS @ 6.000 rpm"
    ],
    [
      "Torsi maksimum",
      "110 Nm @ 4.800 rpm"
    ],
    [
      "Transmisi",
      "5-percepatan manual / CVT"
    ],
    [
      "Bahan bakar",
      "Bensin"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "2": [
    [
      "Mesin",
      "1.198 cc, 3-silinder Dual VVT-i"
    ],
    [
      "Tenaga maksimum",
      "88 PS"
    ],
    [
      "Torsi maksimum",
      "113 Nm"
    ],
    [
      "Transmisi",
      "5-percepatan manual / CVT"
    ],
    [
      "Bahan bakar",
      "Bensin"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "3": [
    [
      "Mesin",
      "1.0L 3-silinder / 1.2L 3-silinder"
    ],
    [
      "Tenaga maksimum",
      "67 PS (1.0L) / 88 PS (1.2L)"
    ],
    [
      "Torsi maksimum",
      "89 Nm (1.0L) / 113 Nm (1.2L)"
    ],
    [
      "Transmisi",
      "5-percepatan manual / CVT"
    ],
    [
      "Bahan bakar",
      "Bensin"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "4": [
    [
      "Mesin",
      "1.329 cc 1.3L / 1.496 cc 1.5L Dual VVT-i"
    ],
    [
      "Tenaga maksimum",
      "98 PS (1.3L) / 106 PS (1.5L)"
    ],
    [
      "Torsi maksimum",
      "121 Nm (1.3L) / 137 Nm (1.5L)"
    ],
    [
      "Transmisi",
      "5-percepatan manual / CVT"
    ],
    [
      "Bahan bakar",
      "Bensin"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "7 penumpang"
    ]
  ],
  "5": [
    [
      "Mesin",
      "1.499 cc 1.5L MIVEC, 4-silinder"
    ],
    [
      "Tenaga maksimum",
      "105 PS @ 6.000 rpm"
    ],
    [
      "Torsi maksimum",
      "141 Nm @ 4.000 rpm"
    ],
    [
      "Transmisi",
      "5-percepatan manual / 4-percepatan otomatis"
    ],
    [
      "Bahan bakar",
      "Bensin"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "7 penumpang"
    ]
  ],
  "6": [
    [
      "Mesin",
      "1.462 cc 1.5L K15B, 4-silinder"
    ],
    [
      "Tenaga maksimum",
      "104,7 PS"
    ],
    [
      "Torsi maksimum",
      "138 Nm"
    ],
    [
      "Transmisi",
      "5-percepatan manual / 4-percepatan otomatis"
    ],
    [
      "Bahan bakar",
      "Bensin"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "7 penumpang"
    ]
  ],
  "7": [
    [
      "Mesin bensin",
      "2.0L M20A-FKS, 4-silinder"
    ],
    [
      "Motor listrik",
      "Motor hybrid 113 PS"
    ],
    [
      "Tenaga sistem",
      "Sekitar 186 PS (sistem hybrid)"
    ],
    [
      "Torsi",
      "Mesin 187 Nm; motor listrik 206 Nm"
    ],
    [
      "Transmisi",
      "e-CVT"
    ],
    [
      "Bahan bakar",
      "Bensin + sistem hybrid"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "7 penumpang"
    ]
  ],
  "8": [
    [
      "Mesin",
      "1.496 cc 1.5L 2NR-VE Dual VVT-i"
    ],
    [
      "Tenaga maksimum",
      "104 PS"
    ],
    [
      "Torsi maksimum",
      "136 Nm"
    ],
    [
      "Transmisi",
      "5-percepatan manual / 4-percepatan otomatis"
    ],
    [
      "Bahan bakar",
      "Bensin"
    ],
    [
      "Penggerak",
      "Roda belakang (RWD)"
    ],
    [
      "Kapasitas",
      "7 penumpang"
    ]
  ],
  "9": [
    [
      "Mesin",
      "1.5L DOHC i-VTEC (varian RS Turbo memakai 1.5L VTEC Turbo)"
    ],
    [
      "Tenaga maksimum",
      "121 PS (NA) / sekitar 177 PS (Turbo)"
    ],
    [
      "Torsi maksimum",
      "145 Nm (NA) / 240 Nm (Turbo)"
    ],
    [
      "Transmisi",
      "CVT"
    ],
    [
      "Bahan bakar",
      "Bensin"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "10": [
    [
      "Mesin",
      "2.4L 2GD-FTV / 2.8L 1GD-FTV turbo diesel"
    ],
    [
      "Tenaga maksimum",
      "149,6 PS (2.4L) / 203,9 PS (2.8L)"
    ],
    [
      "Torsi maksimum",
      "400 Nm (2.4L) / 500 Nm (2.8L)"
    ],
    [
      "Transmisi",
      "6-percepatan otomatis; tergantung varian"
    ],
    [
      "Bahan bakar",
      "Diesel"
    ],
    [
      "Penggerak",
      "4x2 atau 4x4, tergantung varian"
    ],
    [
      "Kapasitas",
      "7 penumpang"
    ]
  ],
  "11": [
    [
      "Mesin",
      "2.442 cc 2.4L 4N15 MIVEC Turbo Diesel"
    ],
    [
      "Tenaga maksimum",
      "181 PS"
    ],
    [
      "Torsi maksimum",
      "430 Nm"
    ],
    [
      "Transmisi",
      "8-percepatan otomatis / 6-percepatan manual pada varian tertentu"
    ],
    [
      "Bahan bakar",
      "Diesel"
    ],
    [
      "Penggerak",
      "4x2 atau 4x4, tergantung varian"
    ],
    [
      "Kapasitas",
      "7 penumpang"
    ]
  ],
  "12": [
    [
      "Mesin",
      "1.898 cc 1.9L RZ4E-TC Turbo Diesel"
    ],
    [
      "Tenaga maksimum",
      "150 PS"
    ],
    [
      "Torsi maksimum",
      "350 Nm"
    ],
    [
      "Transmisi",
      "6-percepatan otomatis"
    ],
    [
      "Bahan bakar",
      "Diesel"
    ],
    [
      "Penggerak",
      "4x2"
    ],
    [
      "Kapasitas",
      "7 penumpang"
    ]
  ],
  "13": [
    [
      "Mesin",
      "1.498 cc 1.5L VTEC Turbo, 4-silinder"
    ],
    [
      "Tenaga maksimum",
      "178 PS"
    ],
    [
      "Torsi maksimum",
      "240 Nm"
    ],
    [
      "Transmisi",
      "CVT"
    ],
    [
      "Bahan bakar",
      "Bensin"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "14": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "17,3 kWh (Standard Range) / 26,7 kWh (Long Range)"
    ],
    [
      "Tenaga maksimum",
      "30 kW (Standard) / 50 kW (Long Range)"
    ],
    [
      "Torsi maksimum",
      "110 Nm (Standard) / 150 Nm (Long Range)"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 200–300 km (CLTC, tergantung varian)"
    ],
    [
      "Pengisian",
      "AC Type 2; DC fast charging tersedia pada varian tertentu"
    ],
    [
      "Penggerak",
      "Roda belakang (RWD)"
    ],
    [
      "Kapasitas",
      "4 penumpang"
    ]
  ],
  "15": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "58 kWh atau 72,6 kWh, tergantung varian/tahun"
    ],
    [
      "Tenaga maksimum",
      "170 PS (Standard Range) / 217 PS (Long Range RWD)"
    ],
    [
      "Torsi maksimum",
      "350 Nm"
    ],
    [
      "Jarak tempuh",
      "Sekitar 384–451 km (WLTP, tergantung varian)"
    ],
    [
      "Pengisian",
      "DC ultra-fast charging 10–80% sekitar 18 menit pada kondisi ideal"
    ],
    [
      "Penggerak",
      "RWD atau AWD, tergantung varian"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "16": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "48,6 kWh atau 66 kWh, tergantung varian"
    ],
    [
      "Tenaga maksimum",
      "135 kW (Standard) / 160 kW (Long Range)"
    ],
    [
      "Torsi maksimum",
      "255 Nm"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 549 km (NEDC, varian Long Range)"
    ],
    [
      "Pengisian",
      "AC dan DC fast charging"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "17": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "49,9 kWh (Standard Range) / 60,48 kWh (Extended Range)"
    ],
    [
      "Tenaga maksimum",
      "150 kW / 204 PS"
    ],
    [
      "Torsi maksimum",
      "310 Nm"
    ],
    [
      "Jarak tempuh",
      "Sekitar 345 km WLTP (baterai 49,9 kWh); berbeda menurut varian"
    ],
    [
      "Pengisian",
      "DC fast charging CCS2"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "18": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "44,9 kWh (varian yang dipasarkan di Indonesia)"
    ],
    [
      "Tenaga maksimum",
      "70 kW / sekitar 95 PS"
    ],
    [
      "Torsi maksimum",
      "180 Nm"
    ],
    [
      "Jarak tempuh",
      "Sekitar 340 km (WLTP; angka dapat berbeda menurut standar uji)"
    ],
    [
      "Pengisian",
      "DC fast charging CCS2"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "19": [
    [
      "Motor listrik",
      "Single motor RWD / dual motor AWD, tergantung spesifikasi"
    ],
    [
      "Baterai",
      "77,4 kWh"
    ],
    [
      "Tenaga maksimum",
      "Sekitar 228 PS (RWD) hingga 325 PS (AWD)"
    ],
    [
      "Torsi maksimum",
      "350 Nm (RWD) / 605 Nm (AWD)"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 519 km (WLTP, tergantung varian)"
    ],
    [
      "Pengisian",
      "DC fast charging 10–80% sekitar 18 menit pada kondisi ideal"
    ],
    [
      "Penggerak",
      "RWD atau AWD"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "20": [
    [
      "Motor listrik",
      "Dual motor, all-wheel drive"
    ],
    [
      "Baterai",
      "84 kWh"
    ],
    [
      "Tenaga maksimum",
      "650 PS dengan N Grin Boost"
    ],
    [
      "Torsi maksimum",
      "770 Nm dengan N Grin Boost"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 448 km (WLTP)"
    ],
    [
      "Pengisian",
      "DC ultra-fast charging"
    ],
    [
      "Penggerak",
      "AWD"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "21": [
    [
      "Motor listrik",
      "Single motor RWD / dual motor AWD, tergantung konfigurasi"
    ],
    [
      "Baterai",
      "Sekitar 110,3 kWh"
    ],
    [
      "Tenaga maksimum",
      "Hingga sekitar 422 PS (AWD)"
    ],
    [
      "Torsi maksimum",
      "Hingga sekitar 700 Nm, tergantung varian"
    ],
    [
      "Jarak tempuh",
      "Klaim hingga sekitar 600–700 km; standar uji dan konfigurasi berbeda"
    ],
    [
      "Pengisian",
      "DC fast charging 10–80% sekitar 24 menit pada kondisi ideal"
    ],
    [
      "Penggerak",
      "RWD atau AWD"
    ],
    [
      "Kapasitas",
      "6–7 penumpang"
    ]
  ],
  "22": [
    [
      "Motor listrik",
      "Single motor RWD / dual motor AWD"
    ],
    [
      "Baterai",
      "82,56 kWh (varian Performance)"
    ],
    [
      "Tenaga maksimum",
      "313 PS (RWD) / 530 PS (AWD Performance)"
    ],
    [
      "Torsi maksimum",
      "360 Nm (RWD) / 670 Nm (AWD)"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 570 km (NEDC, tergantung varian)"
    ],
    [
      "Pengisian",
      "DC fast charging CCS2"
    ],
    [
      "Penggerak",
      "RWD atau AWD"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "23": [
    [
      "Motor listrik",
      "Single motor RWD / dual motor AWD"
    ],
    [
      "Baterai",
      "82,5 kWh"
    ],
    [
      "Tenaga maksimum",
      "308 PS (Premium) / sekitar 530 PS (Performance AWD)"
    ],
    [
      "Torsi maksimum",
      "380 Nm (RWD) / 690 Nm (AWD)"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 567 km (NEDC, tergantung varian)"
    ],
    [
      "Pengisian",
      "DC fast charging CCS2"
    ],
    [
      "Penggerak",
      "RWD atau AWD"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "24": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "55,4 kWh (Standard) / 71,8 kWh (Extended)"
    ],
    [
      "Tenaga maksimum",
      "120 kW (sekitar 163 PS)"
    ],
    [
      "Torsi maksimum",
      "310 Nm"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 530 km (NEDC, varian Extended Range)"
    ],
    [
      "Pengisian",
      "DC fast charging CCS2"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "6–7 penumpang"
    ]
  ],
  "25": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "30,1 kWh (Dynamic) / 38,8 kWh (Premium)"
    ],
    [
      "Tenaga maksimum",
      "55 kW / 74 PS"
    ],
    [
      "Torsi maksimum",
      "135 Nm"
    ],
    [
      "Jarak tempuh",
      "Sekitar 300–380 km, bergantung varian dan standar pengujian"
    ],
    [
      "Pengisian",
      "AC dan DC fast charging, bergantung varian"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "26": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "31,9 kWh (Lite/Pro)"
    ],
    [
      "Tenaga maksimum",
      "50 kW (sekitar 68 PS)"
    ],
    [
      "Torsi maksimum",
      "150 Nm"
    ],
    [
      "Jarak tempuh",
      "Hingga 333 km (CLTC)"
    ],
    [
      "Pengisian",
      "DC fast charging 30–80% sekitar 35 menit"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "4 penumpang"
    ]
  ],
  "27": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "38 kWh (Lite) / 50,6 kWh (Pro)"
    ],
    [
      "Tenaga maksimum",
      "100 kW / 134 hp"
    ],
    [
      "Torsi maksimum",
      "200 Nm"
    ],
    [
      "Jarak tempuh",
      "360 km (Lite) / 460 km (Pro), CLTC"
    ],
    [
      "Pengisian",
      "DC fast charging 30–80% sekitar 30 menit"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "28": [
    [
      "Motor listrik",
      "Motor listrik penggerak depan"
    ],
    [
      "Baterai",
      "69,2 kWh"
    ],
    [
      "Tenaga maksimum",
      "150 kW / sekitar 201 PS"
    ],
    [
      "Torsi maksimum",
      "310 Nm (data dapat berbeda menurut spesifikasi pasar)"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 480 km (CLTC)"
    ],
    [
      "Pengisian",
      "DC fast charging CCS2"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "7 penumpang"
    ]
  ],
  "29": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "64 kWh (Long Range)"
    ],
    [
      "Tenaga maksimum",
      "170 kW / sekitar 231 PS"
    ],
    [
      "Torsi maksimum",
      "250 Nm"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 435 km (NEDC; bergantung versi)"
    ],
    [
      "Pengisian",
      "DC fast charging CCS2"
    ],
    [
      "Penggerak",
      "Roda belakang (RWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "30": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "49 kWh / 64 kWh, tergantung varian"
    ],
    [
      "Tenaga maksimum",
      "125 kW (sekitar 170 PS) pada varian tertentu"
    ],
    [
      "Torsi maksimum",
      "250 Nm"
    ],
    [
      "Jarak tempuh",
      "Sekitar 415–515 km, tergantung varian dan standar uji"
    ],
    [
      "Pengisian",
      "AC dan DC fast charging"
    ],
    [
      "Penggerak",
      "Roda belakang (RWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "31": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "40,8 kWh"
    ],
    [
      "Tenaga maksimum",
      "85 kW (sekitar 116 PS)"
    ],
    [
      "Torsi maksimum",
      "150 Nm"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 395 km (NEDC)"
    ],
    [
      "Pengisian",
      "AC dan DC fast charging"
    ],
    [
      "Penggerak",
      "Roda belakang (RWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "32": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "60,2 kWh"
    ],
    [
      "Tenaga maksimum",
      "160 kW / sekitar 218 PS"
    ],
    [
      "Torsi maksimum",
      "320 Nm"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 495 km (NEDC)"
    ],
    [
      "Pengisian",
      "DC fast charging"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "33": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "75,3 kWh"
    ],
    [
      "Tenaga maksimum",
      "150 kW / sekitar 204 PS"
    ],
    [
      "Torsi maksimum",
      "240 Nm"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 505–602 km, bergantung standar/varian"
    ],
    [
      "Pengisian",
      "DC fast charging"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "34": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "63,2 kWh"
    ],
    [
      "Tenaga maksimum",
      "150 kW / sekitar 204 PS"
    ],
    [
      "Torsi maksimum",
      "225 Nm"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 490 km (NEDC)"
    ],
    [
      "Pengisian",
      "DC fast charging CCS2"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "35": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "18,6 kWh"
    ],
    [
      "Tenaga maksimum",
      "32 kW / sekitar 43 PS"
    ],
    [
      "Torsi maksimum",
      "110 Nm"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 210–215 km (NEDC)"
    ],
    [
      "Pengisian",
      "AC dan DC fast charging, bergantung spesifikasi"
    ],
    [
      "Penggerak",
      "Roda belakang (RWD)"
    ],
    [
      "Kapasitas",
      "4 penumpang"
    ]
  ],
  "36": [
    [
      "Motor listrik",
      "Permanent Magnet Synchronous Motor"
    ],
    [
      "Baterai",
      "60,9 kWh"
    ],
    [
      "Tenaga maksimum",
      "155 kW / sekitar 211 PS"
    ],
    [
      "Torsi maksimum",
      "288 Nm"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 402–450 km, tergantung standar uji"
    ],
    [
      "Pengisian",
      "DC fast charging CCS2"
    ],
    [
      "Penggerak",
      "Roda depan (FWD)"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "37": [
    [
      "Motor listrik",
      "Single motor RWD / dual motor AWD, tergantung varian"
    ],
    [
      "Baterai",
      "66 kWh atau 80,8 kWh, tergantung varian/pasar"
    ],
    [
      "Tenaga maksimum",
      "Sekitar 218–292 kW, tergantung varian"
    ],
    [
      "Torsi maksimum",
      "440–660 Nm, tergantung varian"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 525–550 km, tergantung standar dan varian"
    ],
    [
      "Pengisian",
      "DC fast charging; arsitektur tegangan tinggi"
    ],
    [
      "Penggerak",
      "RWD atau AWD"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "38": [
    [
      "Motor listrik",
      "Single motor RWD / dual motor AWD"
    ],
    [
      "Baterai",
      "65,7 kWh"
    ],
    [
      "Tenaga maksimum",
      "135 kW (RWD) / hingga 205 kW (AWD)"
    ],
    [
      "Torsi maksimum",
      "220 Nm (RWD) / hingga 385 Nm (AWD)"
    ],
    [
      "Jarak tempuh",
      "Hingga sekitar 426 km (NEDC, tergantung varian)"
    ],
    [
      "Pengisian",
      "DC fast charging CCS2"
    ],
    [
      "Penggerak",
      "RWD atau AWD"
    ],
    [
      "Kapasitas",
      "5 penumpang"
    ]
  ],
  "39": [["Mesin", "2.0L bensin / 2.4L diesel (2GD-FTV)"], ["Tenaga maksimum", "Sesuai varian (diesel ± 147 PS)"], ["Transmisi", "Manual / otomatis"], ["Penggerak", "Roda belakang (RWD)"], ["Kapasitas", "7 penumpang"]],
  "40": [["Mesin", "1.198 cc, 3-silinder Dual VVT-i"], ["Tenaga maksimum", "± 88 PS"], ["Transmisi", "Manual / otomatis"], ["Penggerak", "Roda belakang (RWD)"], ["Kapasitas", "7 penumpang"]],
  "41": [["Mesin", "1.5L bensin + motor listrik"], ["Sistem", "Hybrid"], ["Transmisi", "CVT"], ["Penggerak", "Roda depan (FWD)"], ["Kapasitas", "7 penumpang"]],
  "42": [["Mesin", "2.4L turbo diesel (2GD-FTV)"], ["Tenaga maksimum", "Sesuai varian"], ["Transmisi", "Manual / otomatis"], ["Penggerak", "RWD / 4x4 sesuai varian"], ["Kapasitas", "2–5 penumpang"]],
  "43": [["Mesin", "1.2L / 1.0L turbo"], ["Tenaga maksimum", "± 88 PS / ± 98 PS"], ["Transmisi", "CVT / D-CVT"], ["Penggerak", "Roda depan (FWD)"], ["Kapasitas", "5 penumpang"]],
  "44": [["Mesin", "1.5L, 4-silinder"], ["Tenaga maksimum", "± 97 PS"], ["Transmisi", "5-percepatan manual"], ["Penggerak", "Roda belakang (RWD)"], ["Kapasitas", "Pick up / van / minibus"]],
  "45": [["Mesin", "1.0L / 1.2L, 3-silinder"], ["Tenaga maksimum", "± 67 PS / ± 88 PS"], ["Transmisi", "Manual / otomatis"], ["Penggerak", "Roda depan (FWD)"], ["Kapasitas", "7 penumpang"]],
  "46": [["Mesin", "1.5L Dual VVT-i"], ["Tenaga maksimum", "± 104 PS"], ["Transmisi", "5-percepatan manual / 4-percepatan otomatis"], ["Penggerak", "Roda belakang (RWD)"], ["Kapasitas", "7 penumpang"]],
  "47": [["Mesin", "1.5L bensin"], ["Tenaga maksimum", "± 97 PS"], ["Transmisi", "5-percepatan manual"], ["Penggerak", "Roda belakang (RWD)"], ["Kapasitas", "2 penumpang + bak"]],
  "48": [["Mesin", "1.5L bensin"], ["Tenaga maksimum", "Sesuai varian"], ["Transmisi", "Manual / otomatis"], ["Penggerak", "Roda depan (FWD)"], ["Kapasitas", "5 penumpang"]],
  "49": [["Mesin", "1.5L turbo bensin"], ["Tenaga maksimum", "± 163 PS"], ["Transmisi", "CVT"], ["Penggerak", "Roda depan (FWD)"], ["Kapasitas", "7 penumpang"]],
  "50": [["Mesin", "1.5L i-VTEC"], ["Tenaga maksimum", "± 121 PS"], ["Transmisi", "CVT"], ["Penggerak", "Roda depan (FWD)"], ["Kapasitas", "5 penumpang"]],
  "51": [["Mesin", "1.5L bensin"], ["Tenaga maksimum", "± 115 PS"], ["Transmisi", "IVT"], ["Penggerak", "Roda depan (FWD)"], ["Kapasitas", "7 penumpang"]]
};

const grid = document.querySelector("#carGrid");
const catalogMoreBtn = document.querySelector("#catalogMoreBtn");
const catalogMoreNote = document.querySelector("#catalogMoreNote");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const dialog = document.querySelector("#carDialog");
const dialogContent = document.querySelector("#dialogContent");
let activeFilter = "all";
let showAllCars = false;

function whatsappLink(car){
  const message = car
    ? `Halo Thomy Showroom, saya tertarik dengan ${car.brand} ${car.name} tahun ${car.year}${car.kondisi ? ` (${car.kondisi})` : ""}${car.warna ? `, warna ${car.warna}` : ""}. Boleh minta informasi harga dan ketersediaan unitnya?`
    : "Halo Thomy Showroom, saya ingin bertanya tentang pilihan mobil yang tersedia.";
  return `https://wa.me/${CONTACT_WA}?text=${encodeURIComponent(message)}`;
}
function photoPlaceholder(car){
  return `<div class="photo-placeholder"><span>${car.brand.toUpperCase()}</span><strong>${car.name}</strong><small>FOTO MODEL MENYUSUL</small></div>`;
}
const filters = {brand:"all", body:"all", seats:"all", status:"all", cond:"all", sort:"rank"};
const brandSelect = document.querySelector("#brandSelect");
const bodySelect = document.querySelector("#bodySelect");
const seatSelect = document.querySelector("#seatSelect");
const sortSelect = document.querySelector("#sortSelect");
const loadList = key => { try{ return JSON.parse(localStorage.getItem(key)) || []; }catch(e){ return []; } };
const saveList = (key, list) => { try{ localStorage.setItem(key, JSON.stringify(list)); }catch(e){} };
let favorites = loadList("thomy-fav");
let compareList = [];

function bodyOf(car){
  const c = car.category.toUpperCase();
  if(/PICK UP|NIAGA/.test(c)) return "Pick Up & Niaga";
  if(/SEDAN/.test(c)) return "Sedan";
  if(/MPV/.test(c)) return "MPV";
  if(/SUV|CROSSOVER|PERFORMANCE/.test(c)) return "SUV";
  return "Hatchback & City Car";
}
function maxSeats(car){ const n = (car.seats.match(/\d+/g) || []).map(Number); return n.length ? Math.max(...n) : 0; }
function isFiltered(){
  return searchInput.value.trim() || activeFilter !== "all" || filters.brand !== "all" || filters.body !== "all" || filters.seats !== "all" || filters.status !== "all" || filters.cond !== "all";
}
function fillBrands(){
  setTimeout(renderBrandChips, 0);
  const counts = {};
  cars.forEach(car => counts[car.brand] = (counts[car.brand] || 0) + 1);
  brandSelect.innerHTML = '<option value="all">Semua merek</option>' + Object.keys(counts).sort().map(b => `<option value="${b}">${b} (${counts[b]})</option>`).join("");
}
function renderCars(){
  const query = searchInput.value.trim().toLowerCase();
  const filtered = cars.filter(car => {
    const matchesType = activeFilter === "all" || car.type === activeFilter;
    const matchesQuery = `${car.brand} ${car.name} ${car.year} ${car.category}`.toLowerCase().includes(query);
    const matchesBrand = filters.brand === "all" || car.brand === filters.brand;
    const matchesBody = filters.body === "all" || bodyOf(car) === filters.body;
    const seatMax = maxSeats(car);
    const matchesSeats = filters.seats === "all" || (filters.seats === "small" ? seatMax <= 5 : seatMax >= 6);
    const matchesStatus = filters.status === "all" || car.status === filters.status;
    const matchesCond = filters.cond === "all" || car.kondisi === filters.cond;
    return matchesType && matchesQuery && matchesBrand && matchesBody && matchesSeats && matchesStatus && matchesCond;
  });
  const sorters = {
    rank:(x,y) => x.rank - y.rank,
    new:(x,y) => y.year - x.year || x.rank - y.rank,
    name:(x,y) => x.name.localeCompare(y.name),
    brand:(x,y) => x.brand.localeCompare(y.brand) || x.name.localeCompare(y.name)
  };
  filtered.sort(sorters[filters.sort]);
  const isMobile = window.matchMedia("(max-width: 650px)").matches;
  const pageSize = isMobile ? 4 : 8;
  const visibleCars = (showAllCars || isFiltered()) ? filtered : filtered.slice(0, pageSize);

  resultCount.textContent = `${String(filtered.length).padStart(2,"0")} MOBIL`;
  emptyState.hidden = filtered.length !== 0;
  grid.innerHTML = visibleCars.map(car => `
    <article class="car-card">
      <div class="car-image">
        <div class="photo-placeholder"><span>${car.brand.toUpperCase()}</span><strong>${car.name}</strong><small>MEMUAT FOTO…</small></div>
        <img class="car-photo" data-car="${car.id}" alt="${car.brand} ${car.name}" hidden>
        <button class="fav-btn" data-fav="${car.id}" aria-label="Simpan ke favorit" aria-pressed="false">♡</button><button class="compare-btn" data-compare="${car.id}" aria-label="Bandingkan mobil" title="Bandingkan">⇄</button><span class="car-type">${car.type.toUpperCase()}</span>${car.hot ? '<span class="car-hot">TERLARIS 2026</span>' : ''}<span class="car-number">TS—${String(car.id).padStart(3,"0")}</span>
      </div>
      <div class="car-info">
        <div class="car-meta"><span>${car.brand.toUpperCase()}</span><span>${car.year} / ${car.category}</span></div>
        <h3>${car.name}</h3>${chipsHTML(car)}<p class="car-desc">${car.description}</p>
        <div class="car-bottom">${car.price !== "Tanya harga" ? `<span class="car-price">${car.price}</span>` : ""}<button class="detail-btn" data-detail="${car.id}">INFO MOBIL ↗</button></div>
        <a class="car-wa-button" href="${whatsappLink(car)}" target="_blank" rel="noopener">${car.status === "sold" ? "CARI UNIT SERUPA" : "TANYA VIA WHATSAPP"} <span>↗</span></a>
      </div>
    </article>`).join("");
  hydratePhotos(grid);
  syncStates();
  updateFilterUI();

  const hasMore = filtered.length > pageSize && !isFiltered();
  catalogMoreBtn.hidden = !hasMore && !showAllCars;
  catalogMoreBtn.innerHTML = showAllCars
    ? 'TAMPILKAN LEBIH SEDIKIT <span>↑</span>'
    : 'LIHAT SEMUA MOBIL <span>↗</span>';
  catalogMoreNote.textContent = showAllCars
    ? `MENAMPILKAN SEMUA ${filtered.length} MOBIL`
    : `MENAMPILKAN ${visibleCars.length} DARI ${filtered.length} MOBIL`;
  catalogMoreNote.hidden = filtered.length <= pageSize;
}
function openDetail(id){
  const car = cars.find(item => item.id === Number(id));
  if(!car) return;
  const rows = vehicleSpecs[car.id] || [];
  dialogContent.innerHTML = `
    <div class="dialog-layout">
      <div class="dialog-photo"><div class="photo-placeholder dialog-photo-placeholder"><span>${car.brand.toUpperCase()}</span><strong>${car.name}</strong><small>MEMUAT FOTO…</small></div><img class="car-photo" data-car="${car.id}" alt="${car.brand} ${car.name}" hidden></div>
      <div class="dialog-copy">
        <p class="eyebrow">${car.brand.toUpperCase()} / ${car.category}</p>
        <h3>${car.name}</h3>${chipsHTML(car)}${car.catatan ? `<p class="detail-description">${car.catatan}</p>` : ""}
        <p class="detail-description">Spesifikasi teknis ${car.brand} ${car.name} tahun ${car.year}. Detail dapat berbeda sesuai tipe dan varian unit.</p>
        <div class="spec-heading"><span>TECHNICAL DATA</span><b>TS—${String(car.id).padStart(3,"0")}</b></div>
        <ul class="spec-list">
          ${rows.map(([label,value]) => `<li><span>${label}</span><b>${value}</b></li>`).join("")}
          <li><span>Tahun model katalog</span><b>${car.year}</b></li>
          <li><span>Status</span><b>${STATUS_LABEL[car.status]}</b></li>
          ${car.kondisi ? `<li><span>Kondisi</span><b>${car.kondisi.toUpperCase()}</b></li>` : ""}${car.warna ? `<li><span>Warna</span><b>${car.warna}</b></li>` : ""}${car.km ? `<li><span>Kilometer</span><b>${car.km}</b></li>` : ""}
          <li><span>Harga</span><b>${car.price === "Tanya harga" ? "Via WhatsApp" : car.price}</b></li>
        </ul>
        <p class="spec-disclaimer">Catatan: spesifikasi merupakan referensi varian/pasar Indonesia dan dapat berbeda menurut tahun produksi, tipe, serta konfigurasi. Konfirmasi spesifikasi unit aktual kepada showroom sebelum transaksi.</p>
        <a class="button button-orange detail-wa" href="${whatsappLink(car)}" target="_blank" rel="noopener">TANYA VIA WHATSAPP ↗</a>
        <div class="detail-actions"><button class="mini-btn" type="button" data-book="${car.id}">BOOKING JADWAL</button><button class="mini-btn" type="button" data-share="${car.id}">BAGIKAN ↗</button></div>
      </div>
    </div>`;
  if(car.photos && car.photos.length > 1){
    dialogContent.querySelector(".dialog-photo").insertAdjacentHTML("beforeend", `<div class="gallery-thumbs">${car.photos.map(u => `<button type="button" data-photo="${u}"><img src="${u}" alt=""></button>`).join("")}</div>`);
  }
  hydratePhotos(dialogContent);
  history.replaceState(null, "", "#mobil-" + car.id);
  dialog.showModal();
}
document.querySelectorAll(".filter-btn").forEach(button => button.addEventListener("click", () => {
  document.querySelector(".filter-btn.active")?.classList.remove("active");
  button.classList.add("active");
  activeFilter = button.dataset.filter;
  showAllCars = false;
  renderCars();
}));
searchInput.addEventListener("input", () => { showAllCars = false; renderCars(); });
catalogMoreBtn.addEventListener("click", () => { showAllCars = !showAllCars; renderCars(); if(!showAllCars) document.querySelector("#katalog").scrollIntoView({behavior:"smooth",block:"start"}); });
window.addEventListener("resize", () => { if(!showAllCars && !isFiltered()) renderCars(); });
grid.addEventListener("click", event => {
  const button = event.target.closest("[data-detail]");
  if(button) openDetail(button.dataset.detail);
});
document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if(event.target === dialog) dialog.close(); });
document.querySelector("#mainWhatsapp").href = whatsappLink();
document.querySelector("#contactLabel").textContent = `+62 ${CONTACT_WA.slice(2,5)}-${CONTACT_WA.slice(5,9)}-${CONTACT_WA.slice(9)} ↗`;
document.querySelector("#contactLabel").href = whatsappLink();
document.querySelector("#floatingWhatsapp").href = whatsappLink();
const menuButton = document.querySelector(".menu-toggle");
menuButton.addEventListener("click", () => {
  const nav = document.querySelector(".desktop-nav");
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".desktop-nav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector(".desktop-nav").classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
}));

// Quick action from the EV spotlight section.
document.querySelector("[data-show-electric]")?.addEventListener("click", () => {
  activeFilter = "listrik";
  showAllCars = false;
  document.querySelector("#katalog").scrollIntoView({behavior:"smooth"});
  document.querySelectorAll(".filter-btn").forEach(button => button.classList.toggle("active", button.dataset.filter === "listrik"));
  renderCars();
});

// ===== Fitur showroom: filter merek/tipe/kapasitas, urutan, favorit, bandingkan =====
const favCount = document.querySelector("#favCount");
const compareBar = document.querySelector("#compareBar");
const byId = id => cars.find(car => car.id === Number(id));

function syncStates(){
  document.querySelectorAll("[data-fav]").forEach(btn => {
    const on = favorites.includes(Number(btn.dataset.fav));
    btn.textContent = on ? "♥" : "♡"; btn.classList.toggle("on", on); btn.setAttribute("aria-pressed", String(on));
  });
  document.querySelectorAll("[data-compare]").forEach(btn => {
    const on = compareList.includes(Number(btn.dataset.compare));
    btn.textContent = on ? "✓" : "⇄"; btn.classList.toggle("on", on);
  });
  favCount.textContent = favorites.length;
  compareBar.hidden = compareList.length === 0;
  document.querySelector("#compareText").textContent = `${compareList.length}/3 MOBIL`;
}
function toggleFav(id){
  id = Number(id);
  favorites = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites, id];
  saveList("thomy-fav", favorites); syncStates();
}
function toggleCompare(id){
  id = Number(id);
  if(compareList.includes(id)) compareList = compareList.filter(x => x !== id);
  else if(compareList.length >= 3){ alert("Maksimal 3 mobil untuk dibandingkan."); return; }
  else compareList = [...compareList, id];
  syncStates();
}
grid.addEventListener("click", event => {
  const fav = event.target.closest("[data-fav]"); if(fav) toggleFav(fav.dataset.fav);
  const cmp = event.target.closest("[data-compare]"); if(cmp) toggleCompare(cmp.dataset.compare);
});
[[brandSelect,"brand"],[bodySelect,"body"],[seatSelect,"seats"],[sortSelect,"sort"]].forEach(([el,key]) => el.addEventListener("change", () => { filters[key] = el.value; showAllCars = false; renderCars(); }));
document.querySelector("#resetFilters").addEventListener("click", () => {
  Object.assign(filters, {brand:"all", body:"all", seats:"all", sort:"rank"});
  brandSelect.value = bodySelect.value = seatSelect.value = "all"; sortSelect.value = "rank";
  searchInput.value = ""; activeFilter = "all"; showAllCars = false;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b.dataset.filter === "all"));
  renderCars();
});

function miniCard(car){
  return `<div class="fav-row"><img class="car-photo" data-car="${car.id}" alt="${car.brand} ${car.name}" hidden><div class="fav-ph"><div class="photo-placeholder"><span>${car.brand.toUpperCase()}</span></div></div><div><small>${car.brand.toUpperCase()} · ${car.year}</small><b>${car.name}</b></div><button class="mini-btn" data-unfav="${car.id}" aria-label="Hapus">✕</button></div>`;
}
function openFavorites(){
  const list = favorites.map(byId).filter(Boolean);
  const msg = "Halo Thomy Showroom, saya tertarik dengan mobil berikut:\n" + list.map((c,i) => `${i+1}. ${c.brand} ${c.name} (${c.year})`).join("\n") + "\nBoleh minta informasi harga dan ketersediaannya?";
  dialogContent.innerHTML = `<div class="panel-dialog"><p class="eyebrow">DAFTAR FAVORIT</p><h3>Mobil pilihanmu</h3>${
    list.length ? list.map(miniCard).join("") + `<a class="button button-orange detail-wa" href="https://wa.me/${CONTACT_WA}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">TANYA ${list.length} MOBIL VIA WHATSAPP ↗</a>`
    : '<p class="detail-description">Belum ada favorit. Tekan ikon ♡ pada kartu mobil untuk menyimpannya.</p>'}</div>`;
  hydratePhotos(dialogContent); dialog.showModal();
}
document.querySelector("#openFavorites").addEventListener("click", openFavorites);
dialogContent.addEventListener("click", event => {
  const un = event.target.closest("[data-unfav]");
  if(un){ toggleFav(un.dataset.unfav); openFavorites(); }
});

function openCompare(){
  const list = compareList.map(byId).filter(Boolean);
  if(list.length < 2){ alert("Pilih minimal 2 mobil untuk dibandingkan."); return; }
  const labels = [];
  list.forEach(car => (vehicleSpecs[car.id] || []).forEach(([l]) => { if(!labels.includes(l)) labels.push(l); }));
  const rowOf = (label, get) => `<tr><th>${label}</th>${list.map(c => `<td>${get(c)}</td>`).join("")}</tr>`;
  const msg = "Halo Thomy Showroom, saya sedang membandingkan " + list.map(c => `${c.brand} ${c.name}`).join(", ") + ". Boleh minta info harga dan ketersediaannya?";
  dialogContent.innerHTML = `<div class="panel-dialog"><p class="eyebrow">BANDINGKAN</p><h3>${list.map(c => c.name).join(" vs ")}</h3>
    <div class="compare-scroll"><table class="compare-table">
      <tr><th></th>${list.map(c => `<td class="cmp-photo"><img class="car-photo" data-car="${c.id}" alt="${c.brand} ${c.name}" hidden><div class="photo-placeholder"><span>${c.brand.toUpperCase()}</span><strong>${c.name}</strong></div></td>`).join("")}</tr>
      ${rowOf("Merek", c => c.brand)}${rowOf("Tahun", c => c.year)}${rowOf("Tipe bodi", bodyOf)}${rowOf("Bahan bakar", c => c.type.toUpperCase())}
      ${labels.map(l => rowOf(l, c => ((vehicleSpecs[c.id] || []).find(r => r[0] === l) || [,"—"])[1])).join("")}
      ${rowOf("Harga", () => "Tanya showroom")}
    </table></div>
    <a class="button button-orange detail-wa" href="https://wa.me/${CONTACT_WA}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">TANYA VIA WHATSAPP ↗</a></div>`;
  hydratePhotos(dialogContent); dialog.showModal();
}
document.querySelector("#compareOpen").addEventListener("click", openCompare);
document.querySelector("#compareClear").addEventListener("click", () => { compareList = []; syncStates(); });
fillBrands();

// ===== v14: status unit, booking, form layanan, data Google Sheet, link per mobil =====
// Isi dengan link CSV Google Sheet yang sudah "Publish to web" (lihat README / data-unit-template.csv).
// Kosongkan untuk memakai data bawaan.
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRRXRCQKA7RoKRrblcr2e63icY4jhDTTMiloyKUigXh-wUKguFSqcv7K4makTVScdNVxKg_mnphTSJN/pub?output=csv";
const STATUS_LABEL = {ready:"READY", indent:"INDENT", sold:"TERJUAL", cari:"BISA DICARIKAN"};
const STATUS_ALIAS = {tersedia:"ready", stok:"ready", stock:"ready", available:"ready", ada:"ready", siap:"ready", inden:"indent", preorder:"indent", po:"indent", terjual:"sold", habis:"sold", soldout:"sold", dicarikan:"cari", bisadicarikan:"cari"};
const normStatus = v => { v = String(v || "").toLowerCase().replace(/[^a-z]/g, ""); return STATUS_LABEL[v] ? v : (STATUS_ALIAS[v] || "cari"); };
const fmtPrice = v => /^\d/.test(v) ? "Rp " + v : v;                 // "250 juta" -> "Rp 250 juta"
const fmtKm = v => /^[\d.,\s]+$/.test(v) ? v.trim() + " km" : v;      // "90.000" -> "90.000 km"
cars.forEach(car => { car.status = normStatus(car.status); car.kondisi = car.kondisi || ""; car.photos = car.photos || []; });
function chipsHTML(car){
  return `<div class="car-chips"><span class="chip chip-${car.status}">${STATUS_LABEL[car.status]}</span>${car.kondisi ? `<span class="chip">${car.kondisi.toUpperCase()}</span>` : ""}${car.warna ? `<span class="chip">${car.warna.toUpperCase()}</span>` : ""}${car.km ? `<span class="chip">${car.km.toUpperCase()}</span>` : ""}</div>`;
}
function parseCSV(text){
  const rows = []; let row = [], cell = "", q = false;
  for(let i = 0; i < text.length; i++){
    const ch = text[i];
    if(q){ if(ch === '"'){ if(text[i+1] === '"'){ cell += '"'; i++; } else q = false; } else cell += ch; }
    else if(ch === '"') q = true;
    else if(ch === ","){ row.push(cell); cell = ""; }
    else if(ch === "\n" || ch === "\r"){ if(ch === "\r" && text[i+1] === "\n") i++; row.push(cell); rows.push(row); row = []; cell = ""; }
    else cell += ch;
  }
  if(cell || row.length){ row.push(cell); rows.push(row); }
  return rows.filter(r => r.some(c => c.trim()));
}
async function loadSheet(){
  if(!SHEET_CSV_URL) return;
  try{
    const res = await fetch(SHEET_CSV_URL, {cache:"no-store"});
    if(!res.ok) return;
    const rows = parseCSV(await res.text());
    const head = rows.shift().map(c => c.trim().toLowerCase());
    rows.forEach(r => {
      const rec = {}; head.forEach((k, i) => rec[k] = (r[i] || "").trim());
      let car = cars.find(c => c.id === Number(rec.id));
      if(!car){
        if(!rec.brand || !rec.name) return;
        car = {id: Number(rec.id) || Math.max(...cars.map(c => c.id)) + 1, brand: rec.brand, name: rec.name, year: Number(rec.tahun) || new Date().getFullYear(), type: (rec.bahan_bakar || "bensin").toLowerCase(), category: rec.kategori || "MOBIL", engine:"", transmission:"", seats: rec.kapasitas || "5 penumpang", description: rec.catatan || "Unit tersedia, tanyakan detailnya via WhatsApp.", price:"Tanya harga", image:"", photos:[], status:"cari", kondisi:"", hot:false, rank:900 + cars.length};
        cars.push(car);
      }
      if(rec.status) car.status = normStatus(rec.status);
      if(rec.kondisi) car.kondisi = rec.kondisi.toLowerCase() === "bekas" ? "bekas" : "baru";
      if(rec.warna) car.warna = rec.warna;
      if(rec.km) car.km = fmtKm(rec.km);
      if(rec.harga) car.price = fmtPrice(rec.harga);
      if(rec.catatan) car.catatan = rec.catatan;
      if(rec.tahun) car.year = Number(rec.tahun) || car.year;
      const photos = [rec.foto1, rec.foto2, rec.foto3].filter(Boolean);
      if(photos.length){ car.photos = photos; car.image = photos[0]; delete imagePromises[car.id]; delete imagePromises[car.id + ":nd"]; }
    });
    fillBrands(); fillBookCars(); renderCars();
  }catch(e){}
}

// --- filter tambahan
const statusSelect = document.querySelector("#statusSelect");
const condSelect = document.querySelector("#condSelect");
[[statusSelect,"status"],[condSelect,"cond"]].forEach(([el,key]) => el.addEventListener("change", () => { filters[key] = el.value; showAllCars = false; renderCars(); }));
document.querySelector("#resetFilters").addEventListener("click", () => {
  Object.assign(filters, {status:"all", cond:"all"}); statusSelect.value = condSelect.value = "all"; renderCars();
});

// --- tab layanan + form WhatsApp
const waUrl = text => `https://wa.me/${CONTACT_WA}?text=${encodeURIComponent(text)}`;
const sendWA = lines => window.open(waUrl(lines.filter(Boolean).join("\n")), "_blank", "noopener");
function showTab(name){
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === name));
  document.querySelectorAll(".svc-form").forEach(f => f.hidden = f.dataset.panel !== name);
}
document.querySelectorAll(".tab-btn").forEach(b => b.addEventListener("click", () => showTab(b.dataset.tab)));
function fillBookCars(){
  const sel = document.querySelector("#bookCar"); const keep = sel.value;
  sel.innerHTML = '<option value="">Belum menentukan / konsultasi</option>' + [...cars].sort((a,b) => (a.brand + a.name).localeCompare(b.brand + b.name)).map(c => `<option value="${c.id}">${c.brand} ${c.name}</option>`).join("");
  sel.value = keep;
}
const bookDate = document.querySelector("#bookDate");
const t0 = new Date(); bookDate.min = `${t0.getFullYear()}-${String(t0.getMonth()+1).padStart(2,"0")}-${String(t0.getDate()).padStart(2,"0")}`;
const fd = form => Object.fromEntries(new FormData(form).entries());
document.querySelector("#form-find").addEventListener("submit", e => {
  e.preventDefault(); const d = fd(e.target);
  sendWA(["Halo Thomy Showroom, saya ingin dicarikan mobil.", `Nama: ${d.nama}`, `Kebutuhan: ${d.kebutuhan}`, d.tipe && `Tipe: ${d.tipe}`, d.budget && `Budget: ${d.budget}`, d.incaran && `Incaran: ${d.incaran}`, `Kondisi: ${d.kondisi}`, `Pembayaran: ${d.bayar}`, d.catatan && `Catatan: ${d.catatan}`]);
});
document.querySelector("#form-book").addEventListener("submit", e => {
  e.preventDefault(); const d = fd(e.target); const car = byId(d.mobil);
  const tgl = new Date(d.tanggal + "T00:00:00").toLocaleDateString("id-ID", {weekday:"long", day:"numeric", month:"long", year:"numeric"});
  sendWA([`Halo Thomy Showroom, saya ingin booking jadwal ${d.jenis.toLowerCase()}.`, `Nama: ${d.nama}`, car ? `Mobil: ${car.brand} ${car.name} (${car.year})` : "Mobil: belum menentukan", `Jadwal: ${tgl}, pukul ${d.jam}`, d.catatan && `Catatan: ${d.catatan}`, "Mohon konfirmasi ketersediaan jadwal dan lokasinya."]);
});
document.querySelector("#form-trade").addEventListener("submit", e => {
  e.preventDefault(); const d = fd(e.target);
  sendWA([`Halo Thomy Showroom, saya ingin ${d.tujuan.toLowerCase()}.`, `Nama: ${d.nama}`, `Mobil saat ini: ${d.mobil}`, d.km && `Kilometer: ${d.km}`, `Kondisi: ${d.kondisi}`, d.incaran && `Mobil incaran: ${d.incaran}`, d.catatan && `Catatan: ${d.catatan}`]);
});

// --- aksi di dialog detail: booking, bagikan, galeri
async function shareCar(id){
  const car = byId(id); const url = location.href.split("#")[0] + "#mobil-" + car.id;
  try{
    if(navigator.share){ await navigator.share({title: `${car.brand} ${car.name} — Thomy Showroom`, text: `Lihat ${car.brand} ${car.name} di Thomy Showroom`, url}); return; }
    await navigator.clipboard.writeText(url); alert("Link mobil disalin.");
  }catch(e){}
}
dialogContent.addEventListener("click", event => {
  const share = event.target.closest("[data-share]"); if(share) shareCar(share.dataset.share);
  const book = event.target.closest("[data-book]");
  if(book){
    dialog.close(); showTab("book"); document.querySelector("#bookCar").value = book.dataset.book;
    document.querySelector("#layanan").scrollIntoView({behavior:"smooth"});
  }
  const ph = event.target.closest("[data-photo]");
  if(ph){ const img = dialogContent.querySelector(".dialog-photo > img.car-photo"); if(img){ img.src = ph.dataset.photo; img.hidden = false; } }
});
dialog.addEventListener("close", () => { if(location.hash.startsWith("#mobil-")) history.replaceState(null, "", location.pathname + location.search); });
function openFromHash(){
  const m = location.hash.match(/^#mobil-(\d+)$/);
  if(m && !dialog.open && byId(m[1])) openDetail(m[1]);
}
window.addEventListener("hashchange", openFromHash);
fillBookCars();
renderCars();
openFromHash();
loadSheet();

// ===== v15: pengaturan tambahan (isi seperlunya; kosong = tidak ditampilkan) =====
const SITE_CONFIG = {
  instagram: "",   // contoh: "https://instagram.com/namaakun"
  tiktok: "",      // contoh: "https://www.tiktok.com/@namaakun"
  jamBalas: ""     // contoh: "Balas setiap hari 08.00–20.00 WIB"
};
(function renderExtras(){
  const box = document.querySelector(".contact-wa-card");
  if(!box) return;
  const links = [["INSTAGRAM", SITE_CONFIG.instagram], ["TIKTOK", SITE_CONFIG.tiktok]].filter(([, u]) => u);
  if(SITE_CONFIG.jamBalas) box.insertAdjacentHTML("beforeend", `<span class="contact-card-hint contact-hours">${SITE_CONFIG.jamBalas}</span>`);
  if(links.length) box.insertAdjacentHTML("beforeend", `<span class="social-row">${links.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n} ↗</a>`).join("")}</span>`);
})();

// ===== v17: Berita Otomotif otomatis (dibaca dari articles.json yang diperbarui GitHub Actions) =====
const NEWS_SHOW = 6;
const NEWS_IMAGES = true;   // false = tampilkan tanpa gambar
(async function loadNews(){
  const sec = document.querySelector("#berita"), grid = document.querySelector("#newsGrid");
  if(!sec || !grid) return;
  try{
    const res = await fetchT("articles.json?t=" + Math.floor(Date.now() / 600000), 8000);
    if(!res.ok) return;
    const data = await res.json();
    const items = (data.items || []).filter(a => a && a.title && /^https?:\/\//i.test(a.link)).slice(0, NEWS_SHOW);
    if(!items.length) return;
    items.forEach(a => {
      const card = document.createElement("a");
      card.className = "news-card"; card.href = a.link; card.target = "_blank"; card.rel = "noopener noreferrer";
      if(NEWS_IMAGES && /^https:\/\//i.test(a.image || "")){
        const thumb = document.createElement("div"); thumb.className = "news-thumb";
        const img = document.createElement("img"); img.src = a.image; img.alt = ""; img.loading = "lazy"; img.referrerPolicy = "no-referrer";
        img.onerror = () => thumb.remove(); thumb.appendChild(img); card.appendChild(thumb);
      }
      const body = document.createElement("div"); body.className = "news-body";
      const meta = document.createElement("small");
      const d = a.date ? new Date(a.date) : null;
      meta.textContent = [String(a.source || "").toUpperCase(), d && !isNaN(d) ? d.toLocaleDateString("id-ID", {day:"numeric", month:"short", year:"numeric"}).toUpperCase() : ""].filter(Boolean).join(" · ");
      const title = document.createElement("h3"); title.textContent = a.title;
      body.append(meta, title);
      if(a.summary){ const p = document.createElement("p"); p.textContent = a.summary; body.appendChild(p); }
      const more = document.createElement("span"); more.className = "news-more"; more.textContent = "BACA DI SUMBER ↗"; body.appendChild(more);
      card.appendChild(body); grid.appendChild(card);
    });
    const upd = data.updated ? new Date(data.updated) : null;
    if(upd && !isNaN(upd) && !data.seed) document.querySelector("#newsMeta").textContent = "Diperbarui otomatis, terakhir " + upd.toLocaleString("id-ID", {day:"numeric", month:"short", hour:"2-digit", minute:"2-digit"}) + ". Klik untuk membaca selengkapnya di situs sumber.";
    sec.hidden = false;
  }catch(e){}
})();

// ===== v18: UI/UX — chip merek, tombol Filter yang bisa dibuka/tutup, CTA carikan mobil =====
function renderBrandChips(){
  const box = document.querySelector("#brandChips"); if(!box) return;
  const counts = {}; cars.forEach(c => counts[c.brand] = (counts[c.brand] || 0) + 1);
  const brands = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));
  box.innerHTML = `<button class="brand-chip" data-brand="all" type="button">SEMUA</button>` + brands.map(b => `<button class="brand-chip" data-brand="${b}" type="button">${b.toUpperCase()}<small>${counts[b]}</small></button>`).join("");
  updateFilterUI();
}
function updateFilterUI(){
  document.querySelectorAll(".brand-chip").forEach(ch => ch.classList.toggle("active", ch.dataset.brand === filters.brand));
  const n = ["body", "seats", "status", "cond"].filter(k => filters[k] !== "all").length + (filters.sort !== "rank" ? 1 : 0);
  const badge = document.querySelector("#filterBadge");
  if(badge){ badge.textContent = n; badge.hidden = n === 0; }
}
document.querySelector("#brandChips").addEventListener("click", event => {
  const ch = event.target.closest("[data-brand]"); if(!ch) return;
  filters.brand = ch.dataset.brand; brandSelect.value = filters.brand; showAllCars = false; renderCars();
});
document.querySelector("#filterToggle").addEventListener("click", event => {
  const panel = document.querySelector("#filterPanel"); panel.hidden = !panel.hidden;
  event.currentTarget.setAttribute("aria-expanded", String(!panel.hidden));
});
document.querySelectorAll("[data-find]").forEach(a => a.addEventListener("click", () => showTab("find")));
renderBrandChips();
