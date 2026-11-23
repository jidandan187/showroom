// Ganti nomor ini dengan nomor WhatsApp resmi Thomy Showroom.
// Format internasional tanpa tanda +, spasi, atau strip. Contoh: 6281234567890
const CONTACT_WA = "6287886555076";
const cars = [
  {id:1,brand:"Honda",name:"Brio Satya",year:2023,type:"bensin",category:"CITY CAR",engine:"1.2L i-VTEC",transmission:"Manual / CVT",seats:"5 penumpang",description:"Ringkas untuk mobilitas harian dan jalanan perkotaan.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80"},
  {id:2,brand:"Toyota",name:"Agya",year:2023,type:"bensin",category:"CITY CAR",engine:"1.2L",transmission:"Manual / CVT",seats:"5 penumpang",description:"City car praktis untuk aktivitas sehari-hari.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80"},
  {id:3,brand:"Daihatsu",name:"Ayla",year:2023,type:"bensin",category:"CITY CAR",engine:"1.0L / 1.2L",transmission:"Manual / CVT",seats:"5 penumpang",description:"Pilihan kompak untuk penggunaan di dalam kota.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80"},
  {id:4,brand:"Toyota",name:"Avanza",year:2022,type:"bensin",category:"FAMILY CAR",engine:"1.3L / 1.5L",transmission:"Manual / CVT",seats:"7 penumpang",description:"Pilihan keluarga yang praktis untuk aktivitas sehari-hari.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"},
  {id:5,brand:"Mitsubishi",name:"Xpander",year:2022,type:"bensin",category:"FAMILY CAR",engine:"1.5L MIVEC",transmission:"Manual / AT",seats:"7 penumpang",description:"Kabin lega dengan karakter MPV yang nyaman untuk keluarga.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80"},
  {id:6,brand:"Suzuki",name:"Ertiga",year:2022,type:"bensin",category:"MPV",engine:"1.5L K15B",transmission:"Manual / AT",seats:"7 penumpang",description:"MPV keluarga yang efisien dan mudah digunakan.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80"},
  {id:7,brand:"Toyota",name:"Innova Zenix",year:2023,type:"hybrid",category:"MPV HYBRID",engine:"2.0L Hybrid",transmission:"CVT",seats:"7 penumpang",description:"MPV modern dengan pilihan teknologi hybrid.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"},
  {id:8,brand:"Toyota",name:"Rush",year:2022,type:"bensin",category:"SUV",engine:"1.5L Dual VVT-i",transmission:"Manual / AT",seats:"7 penumpang",description:"SUV kompak untuk kebutuhan keluarga dan perjalanan luar kota.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80"},
  {id:9,brand:"Honda",name:"HR-V",year:2023,type:"bensin",category:"COMPACT SUV",engine:"1.5L i-VTEC",transmission:"CVT",seats:"5 penumpang",description:"SUV kompak dengan desain modern dan penggunaan fleksibel.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1511391409280-3f7e9b7c4f3b?auto=format&fit=crop&w=1000&q=80"},
  {id:10,brand:"Toyota",name:"Fortuner",year:2021,type:"diesel",category:"SUV",engine:"2.4L / 2.8L Diesel",transmission:"AT",seats:"7 penumpang",description:"SUV ladder-frame untuk perjalanan jauh dan beragam kondisi jalan.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80"},
  {id:11,brand:"Mitsubishi",name:"Pajero Sport",year:2021,type:"diesel",category:"SUV",engine:"2.4L MIVEC Turbo Diesel",transmission:"AT",seats:"7 penumpang",description:"SUV diesel dengan karakter tangguh untuk perjalanan jauh.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80"},
  {id:12,brand:"Isuzu",name:"MU-X",year:2022,type:"diesel",category:"SUV",engine:"1.9L RZ4E Diesel",transmission:"AT",seats:"7 penumpang",description:"SUV diesel untuk kebutuhan keluarga dan perjalanan antarkota.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80"},
  {id:13,brand:"Honda",name:"Civic",year:2022,type:"bensin",category:"SEDAN",engine:"1.5L VTEC Turbo",transmission:"CVT",seats:"5 penumpang",description:"Sedan dengan tampilan sporty dan karakter berkendara responsif.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80"},
  {id:14,brand:"Wuling",name:"Air ev",year:2024,type:"listrik",category:"ELECTRIC CITY CAR",engine:"Motor listrik",transmission:"Single speed",seats:"4 penumpang",description:"Mobil listrik mungil untuk kebutuhan mobilitas dalam kota.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:15,brand:"Hyundai",name:"Ioniq 5",year:2023,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Kendaraan listrik dengan kabin lapang dan desain modern.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:16,brand:"Hyundai",name:"Kona Electric",year:2024,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik kompak untuk penggunaan harian dan perjalanan kota.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:17,brand:"BYD",name:"Atto 3",year:2024,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik dengan kabin modern dan ruang keluarga yang lega.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:18,brand:"BYD",name:"Dolphin",year:2024,type:"listrik",category:"ELECTRIC HATCHBACK",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Hatchback listrik untuk mobilitas urban.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:19,brand:"Hyundai",name:"IONIQ 6",year:2024,type:"listrik",category:"ELECTRIC SEDAN",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Sedan listrik bergaya aerodinamis dengan kabin modern.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:20,brand:"Hyundai",name:"IONIQ 5 N",year:2024,type:"listrik",category:"ELECTRIC PERFORMANCE",engine:"Dual motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Versi performa tinggi dari keluarga IONIQ 5.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:21,brand:"Hyundai",name:"IONIQ 9",year:2026,type:"listrik",category:"ELECTRIC SUV 3 ROW",engine:"Motor listrik",transmission:"Single speed",seats:"6–7 penumpang",description:"SUV listrik besar dengan konfigurasi kabin tiga baris.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:22,brand:"BYD",name:"Seal",year:2024,type:"listrik",category:"ELECTRIC SEDAN",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Sedan listrik dengan karakter sporty dan desain elegan.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:23,brand:"BYD",name:"Sealion 7",year:2025,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik bergaya coupe untuk kebutuhan keluarga modern.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:24,brand:"BYD",name:"M6",year:2024,type:"listrik",category:"ELECTRIC MPV",engine:"Motor listrik",transmission:"Single speed",seats:"6–7 penumpang",description:"MPV listrik dengan ruang kabin untuk keluarga.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:25,brand:"BYD",name:"Atto 1",year:2026,type:"listrik",category:"ELECTRIC CITY CAR",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Mobil listrik kompak untuk mobilitas harian di perkotaan.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:26,brand:"Wuling",name:"BinguoEV",year:2024,type:"listrik",category:"ELECTRIC HATCHBACK",engine:"Motor listrik",transmission:"Single speed",seats:"4 penumpang",description:"Hatchback listrik bergaya retro-modern untuk perkotaan.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:27,brand:"Wuling",name:"Cloud EV",year:2024,type:"listrik",category:"ELECTRIC HATCHBACK",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Hatchback listrik dengan kabin lega dan nyaman.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:28,brand:"Wuling",name:"Darion EV",year:2026,type:"listrik",category:"ELECTRIC MPV",engine:"Motor listrik",transmission:"Single speed",seats:"7 penumpang",description:"MPV listrik untuk kebutuhan keluarga dan perjalanan bersama.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:29,brand:"MG",name:"MG 4 EV",year:2024,type:"listrik",category:"ELECTRIC HATCHBACK",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Hatchback listrik dengan karakter berkendara sporty.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:30,brand:"MG",name:"S5 EV",year:2026,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik modern untuk aktivitas harian dan keluarga.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:31,brand:"Geely",name:"EX2",year:2026,type:"listrik",category:"ELECTRIC CITY CAR",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Mobil listrik kompak dengan desain urban.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:32,brand:"Geely",name:"EX5",year:2025,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik dengan ruang kabin praktis untuk keluarga.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:33,brand:"GAC AION",name:"AION V",year:2025,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik dengan desain futuristis dan kabin lapang.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:34,brand:"GAC AION",name:"AION Y Plus",year:2024,type:"listrik",category:"ELECTRIC MPV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Mobil listrik bergaya MPV dengan ruang kabin lega.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:35,brand:"VinFast",name:"VF 3",year:2025,type:"listrik",category:"ELECTRIC CITY CAR",engine:"Motor listrik",transmission:"Single speed",seats:"4 penumpang",description:"SUV mini listrik untuk mobilitas perkotaan.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:36,brand:"Jaecoo",name:"J5 EV",year:2026,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik bergaya tangguh untuk penggunaan harian.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:37,brand:"XPENG",name:"G6",year:2025,type:"listrik",category:"ELECTRIC SUV COUPE",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik bergaya coupe dengan teknologi kabin modern.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"},
  {id:38,brand:"Chery",name:"J6",year:2025,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik berdesain boxy dengan tampilan adventure.",price:"Tanya harga",image:"https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80"}
];

const grid = document.querySelector("#carGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const dialog = document.querySelector("#carDialog");
const dialogContent = document.querySelector("#dialogContent");
let activeFilter = "all";

function whatsappLink(car){
  const message = car
    ? `Halo Thomy Showroom, saya tertarik dengan ${car.brand} ${car.name} tahun ${car.year}. Boleh minta informasi harga dan ketersediaan unitnya?`
    : "Halo Thomy Showroom, saya ingin bertanya tentang pilihan mobil yang tersedia.";
  return `https://wa.me/${CONTACT_WA}?text=${encodeURIComponent(message)}`;
}
function renderCars(){
  const query = searchInput.value.trim().toLowerCase();
  const filtered = cars.filter(car => {
    const matchesType = activeFilter === "all" || car.type === activeFilter;
    const matchesQuery = `${car.brand} ${car.name} ${car.year} ${car.category}`.toLowerCase().includes(query);
    return matchesType && matchesQuery;
  });
  resultCount.textContent = `${String(filtered.length).padStart(2,"0")} MOBIL`;
  emptyState.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(car => `
    <article class="car-card">
      <div class="car-image">
        <img src="${car.image}" alt="${car.brand} ${car.name}" loading="lazy" onerror="this.style.display='none'">
        <span class="car-type">${car.type.toUpperCase()}</span><span class="car-number">TS—${String(car.id).padStart(3,"0")}</span>
      </div>
      <div class="car-info">
        <div class="car-meta"><span>${car.brand.toUpperCase()}</span><span>${car.year} / ${car.category}</span></div>
        <h3>${car.name}</h3><p class="car-desc">${car.description}</p>
        <div class="car-bottom"><span class="car-price">${car.price}</span><button class="detail-btn" data-detail="${car.id}">LIHAT DETAIL ↗</button></div>
      </div>
    </article>`).join("");
}
function openDetail(id){
  const car = cars.find(item => item.id === Number(id));
  if(!car) return;
  dialogContent.innerHTML = `
    <div class="dialog-layout">
      <img src="${car.image}" alt="${car.brand} ${car.name}">
      <div class="dialog-copy">
        <p class="eyebrow">${car.brand.toUpperCase()} / ${car.category}</p>
        <h3>${car.name}</h3><p>${car.description}</p>
        <ul class="spec-list">
          <li><span>Tahun contoh</span><b>${car.year}</b></li>
          <li><span>Mesin / Penggerak</span><b>${car.engine}</b></li>
          <li><span>Transmisi</span><b>${car.transmission}</b></li>
          <li><span>Kapasitas</span><b>${car.seats}</b></li>
          <li><span>Harga & stok</span><b>Konfirmasi showroom</b></li>
        </ul>
        <a class="button button-orange" href="${whatsappLink(car)}" target="_blank" rel="noopener">TANYA UNIT INI ↗</a>
      </div>
    </div>`;
  dialog.showModal();
}
document.querySelectorAll(".filter-btn").forEach(button => button.addEventListener("click", () => {
  document.querySelector(".filter-btn.active")?.classList.remove("active");
  button.classList.add("active");
  activeFilter = button.dataset.filter;
  renderCars();
}));
searchInput.addEventListener("input", renderCars);
grid.addEventListener("click", event => {
  const button = event.target.closest("[data-detail]");
  if(button) openDetail(button.dataset.detail);
});
document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if(event.target === dialog) dialog.close(); });
document.querySelector("#mainWhatsapp").href = whatsappLink();
document.querySelector("#mainWhatsapp").addEventListener("click", event => {
  if(CONTACT_WA === "6280000000"){
    event.preventDefault();
    alert("Nomor WhatsApp belum diatur. Ganti CONTACT_WA di bagian atas file script.js dengan nomor resmi Thomy Showroom.");
  }
});
document.querySelector("#contactLabel").textContent = CONTACT_WA === "6287886555076" ? "Nomor WhatsApp menunggu konfirmasi" : `+${CONTACT_WA}`;
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
renderCars();
