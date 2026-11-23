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
  {id:14,brand:"Wuling",name:"Air ev",year:2024,type:"listrik",category:"ELECTRIC CITY CAR",engine:"Motor listrik",transmission:"Single speed",seats:"4 penumpang",description:"Mobil listrik mungil untuk kebutuhan mobilitas dalam kota.",price:"Tanya harga",image:"https://wuling.id/assets/images/product/store/new-air-ev-lite.png"},
  {id:15,brand:"Hyundai",name:"Ioniq 5",year:2023,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Kendaraan listrik dengan kabin lapang dan desain modern.",price:"Tanya harga",image:"https://www.hyundai.com/content/dam/hyundai/id/en/data/marketing/download-image/ioniq5/list-thumbnail/Gallery-1-1-Kolom-pc-%281%29.jpg"},
  {id:16,brand:"Hyundai",name:"Kona Electric",year:2024,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik kompak untuk penggunaan harian dan perjalanan kota.",price:"Tanya harga",image:"https://www.hyundai.com/content/dam/hyundai/id/en/data/marketing/download-image/all-new-kona-electric/list-thumbnail/all-new-kona-electric-2024.png"},
  {id:17,brand:"BYD",name:"Atto 3",year:2024,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik dengan kabin modern dan ruang keluarga yang lega.",price:"Tanya harga",image:"https://www.byd.com/material/byd-site/id/home/section-atto3-c.jpg"},
  {id:18,brand:"BYD",name:"Dolphin",year:2024,type:"listrik",category:"ELECTRIC HATCHBACK",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Hatchback listrik untuk mobilitas urban.",price:"Tanya harga",image:""},
  {id:19,brand:"Hyundai",name:"IONIQ 6",year:2024,type:"listrik",category:"ELECTRIC SEDAN",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Sedan listrik bergaya aerodinamis dengan kabin modern.",price:"Tanya harga",image:"https://www.hyundai.com/content/dam/hyundai/id/en/data/marketing/download-image/ioniq-6/list-thumbnail/IONIQ-6-320-d.png"},
  {id:20,brand:"Hyundai",name:"IONIQ 5 N",year:2024,type:"listrik",category:"ELECTRIC PERFORMANCE",engine:"Dual motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Versi performa tinggi dari keluarga IONIQ 5.",price:"Tanya harga",image:""},
  {id:21,brand:"Hyundai",name:"IONIQ 9",year:2026,type:"listrik",category:"ELECTRIC SUV 3 ROW",engine:"Motor listrik",transmission:"Single speed",seats:"6–7 penumpang",description:"SUV listrik besar dengan konfigurasi kabin tiga baris.",price:"Tanya harga",image:""},
  {id:22,brand:"BYD",name:"Seal",year:2024,type:"listrik",category:"ELECTRIC SEDAN",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Sedan listrik dengan karakter sporty dan desain elegan.",price:"Tanya harga",image:"https://www.byd.com/material/byd-site/id/home/section-seal.jpg"},
  {id:23,brand:"BYD",name:"Sealion 7",year:2025,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik bergaya coupe untuk kebutuhan keluarga modern.",price:"Tanya harga",image:""},
  {id:24,brand:"BYD",name:"M6",year:2024,type:"listrik",category:"ELECTRIC MPV",engine:"Motor listrik",transmission:"Single speed",seats:"6–7 penumpang",description:"MPV listrik dengan ruang kabin untuk keluarga.",price:"Tanya harga",image:"https://www.byd.com/material/byd-site/id/home/home-m6.jpg"},
  {id:25,brand:"BYD",name:"Atto 1",year:2026,type:"listrik",category:"ELECTRIC CITY CAR",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Mobil listrik kompak untuk mobilitas harian di perkotaan.",price:"Tanya harga",image:""},
  {id:26,brand:"Wuling",name:"BinguoEV",year:2024,type:"listrik",category:"ELECTRIC HATCHBACK",engine:"Motor listrik",transmission:"Single speed",seats:"4 penumpang",description:"Hatchback listrik bergaya retro-modern untuk perkotaan.",price:"Tanya harga",image:"https://wuling.id/assets/images/binguo-ev/product-color/pro-2026/Avocado-Green.png"},
  {id:27,brand:"Wuling",name:"Cloud EV",year:2024,type:"listrik",category:"ELECTRIC HATCHBACK",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"Hatchback listrik dengan kabin lega dan nyaman.",price:"Tanya harga",image:"https://wuling.id/assets/images/cloud-ev/product-color/2025/CLOUD_EV_SE_HIRES_3.png"},
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
  {id:38,brand:"Chery",name:"J6",year:2025,type:"listrik",category:"ELECTRIC SUV",engine:"Motor listrik",transmission:"Single speed",seats:"5 penumpang",description:"SUV listrik berdesain boxy dengan tampilan adventure.",price:"Tanya harga",image:""}
];

// Semua foto kendaraan menggunakan URL online; tidak membutuhkan folder asset lokal.
// Model yang belum memiliki URL foto tetap mendapat gambar online berdasarkan nama mobil.
cars.forEach(car => {
  if (!car.image) {
    const tags = `${car.brand}-${car.name}-car`.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    car.image = `https://loremflickr.com/1000/700/${tags}?lock=${car.id}`;
  }
});

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
  "38": "Chery J6 mengusung desain SUV boxy dengan nuansa adventure. Penggerak listrik dan kabin lima penumpang menjadikannya opsi bagi pencari EV dengan tampilan tegas dan tidak biasa."
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
  ]
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
    ? `Halo Thomy Showroom, saya tertarik dengan ${car.brand} ${car.name} tahun ${car.year}. Boleh minta informasi harga dan ketersediaan unitnya?`
    : "Halo Thomy Showroom, saya ingin bertanya tentang pilihan mobil yang tersedia.";
  return `https://wa.me/${CONTACT_WA}?text=${encodeURIComponent(message)}`;
}
function photoPlaceholder(car){
  return `<div class="photo-placeholder"><span>${car.brand.toUpperCase()}</span><strong>${car.name}</strong><small>FOTO MODEL MENYUSUL</small></div>`;
}
function renderCars(){
  const query = searchInput.value.trim().toLowerCase();
  const filtered = cars.filter(car => {
    const matchesType = activeFilter === "all" || car.type === activeFilter;
    const matchesQuery = `${car.brand} ${car.name} ${car.year} ${car.category}`.toLowerCase().includes(query);
    return matchesType && matchesQuery;
  });
  const isMobile = window.matchMedia("(max-width: 650px)").matches;
  const pageSize = isMobile ? 4 : 8;
  const visibleCars = (showAllCars || query || activeFilter !== "all")
    ? filtered
    : filtered.slice(0, pageSize);

  resultCount.textContent = `${String(filtered.length).padStart(2,"0")} MOBIL`;
  emptyState.hidden = filtered.length !== 0;
  grid.innerHTML = visibleCars.map(car => `
    <article class="car-card">
      <div class="car-image">
        ${car.image ? `<img src="${car.image}" alt="${car.brand} ${car.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.hidden=false"><div class="photo-placeholder" hidden><span>${car.brand.toUpperCase()}</span><strong>${car.name}</strong><small>FOTO MODEL MENYUSUL</small></div>` : photoPlaceholder(car)}
        <span class="car-type">${car.type.toUpperCase()}</span><span class="car-number">TS—${String(car.id).padStart(3,"0")}</span>
      </div>
      <div class="car-info">
        <div class="car-meta"><span>${car.brand.toUpperCase()}</span><span>${car.year} / ${car.category}</span></div>
        <h3>${car.name}</h3><p class="car-desc">${car.description}</p>
        <div class="car-bottom"><span class="car-price">${car.price}</span><button class="detail-btn" data-detail="${car.id}">INFO MOBIL ↗</button></div>
        <a class="car-wa-button" href="${whatsappLink(car)}" target="_blank" rel="noopener">TANYA VIA WHATSAPP <span>↗</span></a>
      </div>
    </article>`).join("");

  const hasMore = filtered.length > pageSize && !query && activeFilter === "all";
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
      ${car.image ? `<div class="dialog-photo"><img src="${car.image}" alt="${car.brand} ${car.name}" onerror="this.style.display='none';this.nextElementSibling.hidden=false">${photoPlaceholder(car).replace('photo-placeholder','photo-placeholder dialog-photo-placeholder')}</div>` : `<div class="dialog-photo">${photoPlaceholder(car).replace('photo-placeholder','photo-placeholder dialog-photo-placeholder')}</div>`}
      <div class="dialog-copy">
        <p class="eyebrow">${car.brand.toUpperCase()} / ${car.category}</p>
        <h3>${car.name}</h3>
        <p class="detail-description">Spesifikasi teknis ${car.brand} ${car.name} tahun ${car.year}. Detail dapat berbeda sesuai tipe dan varian unit.</p>
        <div class="spec-heading"><span>TECHNICAL DATA</span><b>TS—${String(car.id).padStart(3,"0")}</b></div>
        <ul class="spec-list">
          ${rows.map(([label,value]) => `<li><span>${label}</span><b>${value}</b></li>`).join("")}
          <li><span>Tahun model katalog</span><b>${car.year}</b></li>
          <li><span>Harga & ketersediaan</span><b>Konfirmasi showroom</b></li>
        </ul>
        <p class="spec-disclaimer">Catatan: spesifikasi merupakan referensi varian/pasar Indonesia dan dapat berbeda menurut tahun produksi, tipe, serta konfigurasi. Konfirmasi spesifikasi unit aktual kepada showroom sebelum transaksi.</p>
        <a class="button button-orange detail-wa" href="${whatsappLink(car)}" target="_blank" rel="noopener">TANYA VIA WHATSAPP ↗</a>
      </div>
    </div>`;
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
window.addEventListener("resize", () => { if(!showAllCars && !searchInput.value.trim() && activeFilter === "all") renderCars(); });
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
renderCars();

// Quick action from the EV spotlight section.
document.querySelector("[data-show-electric]")?.addEventListener("click", () => {
  activeFilter = "listrik";
  showAllCars = false;
  document.querySelectorAll(".filter-btn").forEach(button => button.classList.toggle("active", button.dataset.filter === "listrik"));
  renderCars();
});
