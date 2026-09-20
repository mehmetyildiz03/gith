const APP_META = {
  "schemaVersion": 2,
  "contentVersion": "2026.09.20-v0.5",
  "productVersion": "0.7",
  "populations": [
    {
      "id": "adult",
      "label": "Yetişkin",
      "algorithmRange": "SB-ASH-Y-01…41",
      "status": "active"
    },
    {
      "id": "child",
      "label": "Çocuk",
      "algorithmRange": "SB-ASH-Ç-01…30",
      "status": "qa-pending"
    },
    {
      "id": "birth-newborn",
      "label": "Doğum & Yenidoğan",
      "algorithmRange": "SB-ASH-DY-01…07",
      "status": "qa-pending"
    }
  ],
  "authority": {
    "DIRECT": {
      "label": "Doğrudan",
      "description": "Akış şemasında SKKM/ÇM onayı gerektirmeyen basamak olarak doğrulanmış."
    },
    "SKKM": {
      "label": "SKKM/ÇM",
      "description": "Uygulama/ileri basamak için SKKM/ÇM kararı veya onayı gerekir."
    },
    "ALGORITHM": {
      "label": "Akış şeması",
      "description": "İlaç/doz şemada yer alır; yetki ayrımı bu sürümde ayrıca doğrulanmadığından resmî şema ve kurum talimatı kontrol edilmelidir."
    }
  },
  "routes": [
    "IV",
    "IM",
    "IO",
    "SL",
    "PO",
    "NEB",
    "IN",
    "BUCCAL",
    "RECTAL",
    "TOPICAL",
    "OTHER"
  ],
  "source": {
    "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
    "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
    "effectiveDate": "2026-08-25",
    "officialPageDate": "2026-09-11"
  }
};

const CASES = [
  {
    "id": "bee",
    "title": "Arı Sokması",
    "subtitle": "Isırma ve sokmalar • lokalden anafilaksiye",
    "category": "Alerji",
    "icon": "🐝",
    "accent": "#b77708",
    "soft": "#fff3d4",
    "code": "SB-ASH-Y-26 + Y-22",
    "page": "44–45 / 37",
    "featured": true,
    "summary": "İğneyi, lokal bakımı ve sistemik reaksiyona geçişi tek ekranda ayır. Üç şiddet düzeyi hızlı eğitim görünümü olarak sunulur; ağır tabloda 2026 anafilaksi algoritmasına geçilir.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula</strong>; etkeni belirle, ısırılan/sokulan yeri ve yarayı değerlendir.",
      "<strong>Arı iğnesi görünüyorsa çıkar.</strong> Kara canlısı sokmalarında lokal soğuk uygula; bölgeyi yıka ve sabitle.",
      "<strong>Ödem sınırını yaklaşık 5 dakikada bir izle.</strong> Vital bulgular, zehirlenme, alerjik reaksiyon ve anafilaksi bulgularını takip et.",
      "<strong>Alerjik reaksiyon / anafilaksi varsa ilgili algoritmaya geç.</strong> Her aşamada hastaneye nakil esastır."
    ],
    "redFlags": [
      "Ağız-dil-boğaz/anjiyoödem, stridor veya belirgin hırıltı",
      "Takipne, siyanoz, SpO₂ < %90 veya konfüzyon",
      "Soluk cilt, hipotansiyon, bilinç kaybı/koma",
      "Hızlı ilerleyen sistemik reaksiyon veya bronkospazm"
    ],
    "severity": {
      "mild": {
        "label": "Hafif / lokal",
        "bullets": [
          "Reaksiyon sokma bölgesiyle sınırlı",
          "Yaşamı tehdit eden hava yolu, solunum veya dolaşım bulgusu yok"
        ],
        "action": "İğne görünüyorsa çıkar. Lokal soğuk uygula, yıka/sabitle, ödem sınırını takip et ve vital bulguları izle. Sistemik bulgu gelişirse düzeyi yükselt."
      },
      "moderate": {
        "label": "Orta / sistemik",
        "bullets": [
          "Lokal alanın dışına taşan alerjik/sistemik bulgu var",
          "Henüz yaşamı tehdit eden hava yolu, solunum veya dolaşım bulgusu yok"
        ],
        "action": "Bu “orta” sekme eğitimsel bir ara görünümüdür. 2026 resmî şema arı sokması için ayrı bir üçlü tedavi sınıflaması tanımlamaz; alerjik reaksiyon/anafilaksi açısından değerlendirip Anafilaksi algoritmasına geçiş yap."
      },
      "severe": {
        "label": "Ağır / anafilaksi",
        "bullets": [
          "Hava yolu: anjiyoödem, stridor, hırıltılı solunum",
          "Solunum: takipne, wheezing, siyanoz, SpO₂ < %90, konfüzyon",
          "Dolaşım: solukluk, hipotansiyon, koma"
        ],
        "action": "Anafilaksi algoritması: Adrenalin 0,3–0,5 mg IM. Hava yolunu güvenceye al, SpO₂ %94–98 hedefli O₂, damar yolu ve monitörizasyon; hipoperfüzyon sürerse 5 dk içinde IM adrenalin tekrarı + %0,9 NaCl bolus."
      }
    },
    "meds": [
      {
        "name": "Adrenalin",
        "dose": "0,3–0,5 mg IM",
        "routes": [
          "IM"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Akut başlangıç + yaşamı tehdit eden bulguda. Hipoperfüzyon sürerse 5 dk içinde tekrar."
      },
      {
        "name": "%0,9 NaCl",
        "dose": "500 ml bolus",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Anafilakside dolaşım desteği; şemadaki sıraya göre."
      },
      {
        "name": "Adrenalin infüzyon",
        "dose": "1 mcg/dk IV",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Düzelme olmazsa resmî şemada SKKM/ÇM simgesiyle gösterilmiş."
      },
      {
        "name": "Difenhidramin / Feniramin",
        "dose": "25–50 mg / 45,5 mg IV yavaş",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Bronkospazm varsa salbutamol 2,5–5 mg; resmî şemadaki ileri basamak."
      },
      {
        "name": "Metilprednizolon",
        "dose": "1–2 mg/kg IV (maks 125 mg)",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Resmî şemada profilaktik basamak olarak gösterilmiş."
      }
    ],
    "decision": {
      "q": "Sokma sonrası sistemik alerjik bulgu var mı?",
      "yes": "Anafilaksi bulgularını kontrol et → gerekiyorsa Y-22 algoritmasına geç.",
      "no": "Lokal bakım + seri yeniden değerlendirme + nakil."
    },
    "population": "adult",
    "priority": "high",
    "clinicalStatus": "reviewed",
    "first30": [
      "Etkeni ve sokma yerini değerlendir; görünür arı iğnesi varsa çıkar.",
      "Hava yolu-solunum-dolaşım tehdidi ve sistemik alerji/anafilaksi bulgularını aynı anda ara.",
      "Yaşamı tehdit eden anafilaksi bulgusu varsa gecikmeden anafilaksi algoritmasına geç ve IM adrenalini önceliklendir."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-26",
        "Y-22"
      ],
      "page": "44–45 / 37",
      "codeStatus": "verified"
    }
  },
  {
    "id": "anaphylaxis",
    "title": "Anafilaksi",
    "subtitle": "Hava yolu • solunum • dolaşım tehdidi",
    "category": "Alerji",
    "icon": "⚠️",
    "accent": "#d33b42",
    "soft": "#fee8ea",
    "code": "SB-ASH-Y-22",
    "page": "37",
    "featured": true,
    "summary": "Akut başlangıçlı, yaşamı tehdit eden hava yolu/solunum/dolaşım bulgularında gecikmeden IM adrenalin ve X-ABCDE odaklı destek.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula.</strong> Akut başlangıç + yaşamı tehdit eden bulguları ara.",
      "<strong>Adrenalin 0,3–0,5 mg IM.</strong>",
      "<strong>Hava yolu açıklığını sağla; SpO₂ %94–98 hedefli O₂.</strong> Damar yolu aç, anjiyoödemde erken ileri hava yolu hazırlığı yap; SpO₂, EKG ve KB izle.",
      "<strong>Hipoperfüzyon sürüyorsa</strong> IM adrenalin 5 dk içinde tekrarla ve %0,9 NaCl 500 ml bolus uygula."
    ],
    "redFlags": [
      "Anjiyoödem, stridor, hırıltılı solunum",
      "Takipne, wheezing, siyanoz, SpO₂ < %90, konfüzyon",
      "Soluk cilt, hipotansiyon, koma"
    ],
    "meds": [
      {
        "name": "Adrenalin",
        "dose": "0,3–0,5 mg IM",
        "routes": [
          "IM"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "İlk kritik ilaç."
      },
      {
        "name": "Adrenalin infüzyon",
        "dose": "1 mcg/dk IV",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Düzelme olmazsa."
      },
      {
        "name": "%0,9 NaCl",
        "dose": "500 ml bolus",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Dolaşım desteği."
      },
      {
        "name": "Difenhidramin / Feniramin",
        "dose": "25–50 mg / 45,5 mg IV yavaş",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Resmî şemadaki ileri basamak."
      },
      {
        "name": "Salbutamol",
        "dose": "2,5–5 mg",
        "routes": [
          "NEB"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Bronkospazm için."
      },
      {
        "name": "Metilprednizolon",
        "dose": "1–2 mg/kg IV (maks 125 mg)",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Profilaktik basamak."
      }
    ],
    "decision": {
      "q": "Yaşamı tehdit eden ABC bulgusu var mı?",
      "yes": "IM adrenalin + hava yolu/oksijen + damar yolu + monitörizasyon.",
      "no": "Yakın takip, yeniden değerlendirme; klinik kötüleşmede algoritmayı tetikle."
    },
    "population": "adult",
    "priority": "high",
    "clinicalStatus": "reviewed",
    "first30": [
      "Akut başlangıç + hava yolu, solunum veya dolaşım tehdidini tanı.",
      "Adrenalin 0,3–0,5 mg IM uygula.",
      "Hava yolunu hazırla; SpO₂ %94–98 hedefli O₂, damar yolu ve monitörizasyonu başlat."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-22"
      ],
      "page": "37",
      "codeStatus": "verified"
    }
  },
  {
    "id": "asthma",
    "title": "Astım Atağı",
    "subtitle": "Hafif-orta ve ağır atak ayrımı",
    "category": "Solunum",
    "icon": "🫁",
    "accent": "#1189a3",
    "soft": "#e1f7fa",
    "code": "SB-ASH-Y-05",
    "page": "12",
    "featured": true,
    "summary": "Rahat pozisyon, SpO₂ hedefi, bronkodilatörler ve ağır/ölümcül atakta erken hava yolu hazırlığı.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula</strong>; hastayı rahat ettiği, tercihen oturur pozisyonda tut.",
      "<strong>SpO₂ > %93</strong> olacak şekilde titre ederek O₂ ver; gerekirse PBV ile destekle.",
      "<strong>Damar yolu aç ve %0,9 NaCl (DAKŞ).</strong> Atağın derecesini belirle.",
      "<strong>Hafif-orta:</strong> salbutamol 4–8 puf veya 2,5–5 mg nebül. <strong>Ağır:</strong> salbutamol 2,5–5 mg + ipratropium 500 mcg nebül."
    ],
    "redFlags": [
      "Cümle kuramama, ortopne",
      "Solunum sayısı >30/dk veya belirgin yardımcı kas kullanımı",
      "Bilinç bulanıklığı ve sessiz toraks (ölümcül atak)"
    ],
    "meds": [
      {
        "name": "Salbutamol",
        "dose": "4–8 puf veya 2,5–5 mg nebül",
        "routes": [
          "NEB"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Hafif-orta atak."
      },
      {
        "name": "İpratropium bromür",
        "dose": "500 mcg",
        "routes": [
          "OTHER"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Yanıt yoksa / ağır atakta kombinasyon."
      },
      {
        "name": "Metilprednizolon",
        "dose": "40 mg IV",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Resmî şemadaki 20 dk sonrası basamak."
      },
      {
        "name": "Magnezyum sülfat",
        "dose": "1–2 g IV",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Ölümcül atakta %0,9 NaCl içinde 20–30 dakikada."
      }
    ],
    "decision": {
      "q": "Atak ağır mı?",
      "yes": "Salbutamol + ipratropium; 20 dk değerlendirme; ağır/ölümcül tabloda ileri hava yolu hazırlığı.",
      "no": "Salbutamol; 20 dk sonra yanıt yoksa ikinci doz + ipratropium."
    },
    "population": "adult",
    "priority": "high",
    "clinicalStatus": "reviewed",
    "first30": [
      "Hastayı rahat, tercihen oturur pozisyona al ve atağın ağırlığını değerlendir.",
      "SpO₂ >%93 hedefli O₂ ver; gerekirse PBV ile destekle.",
      "Bronkodilatörü geciktirme; ağır/ölümcül atakta sessiz toraks ve bilinç değişikliğini kırmızı bayrak kabul et."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-05"
      ],
      "page": "12",
      "codeStatus": "verified"
    }
  },
  {
    "id": "acs",
    "title": "Akut Koroner Sendrom",
    "subtitle": "12 derivasyon • ASA • nitrat",
    "category": "Kardiyak",
    "icon": "❤️",
    "accent": "#d63d52",
    "soft": "#fde9ee",
    "code": "SB-ASH-Y-06",
    "page": "14",
    "featured": false,
    "summary": "Hastayı yürütmeden, erken 12 derivasyon EKG ve uygun ilaç basamaklarıyla yönet; STEMI’de SKKM/ÇM ile reperfüzyon planını hızlandır.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula, ağrı sorgula.</strong> Hastayı sakinleştir; gereksiz efordan kaçın ve kesinlikle yürütme.",
      "<strong>En kısa sürede vital bulgular + 12 derivasyonlu EKG.</strong>",
      "<strong>SpO₂ < %90 ise O₂ ver.</strong>",
      "<strong>Asetilsalisilik asit 160–325 mg çiğnet.</strong> Hipotansiyon/bradikardi yoksa SKKM/ÇM ile isosorbid dinitrat 5 mg SL; ağrı sürerse 3–5 dk arayla toplam 3 doza kadar."
    ],
    "redFlags": [
      "ST elevasyonlu MI bulguları",
      "Hipotansiyon veya bradikardi",
      "Devam eden şiddetli göğüs ağrısı",
      "Ritim bozukluğu / hemodinamik instabilite"
    ],
    "meds": [
      {
        "name": "ASA",
        "dose": "160–325 mg çiğnet",
        "routes": [
          "PO"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Alerji ve aktif kanama kontraendikasyonlarını kontrol et."
      },
      {
        "name": "İzosorbid dinitrat",
        "dose": "5 mg SL",
        "routes": [
          "SL"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Hipotansiyon ve bradikardi yoksa; 3–5 dk arayla toplam 3 doz."
      },
      {
        "name": "Fentanil",
        "dose": "1 mcg/kg IV",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Göğüs ağrısı devam ediyor ve hasta tarafından tolere edilemiyorsa."
      }
    ],
    "decision": {
      "q": "ST elevasyonlu MI var mı?",
      "yes": "Perkütan koroner girişim veya fibrinolitik tedavi için SKKM/ÇM ile iletişime geç.",
      "no": "AKS tedavisi + ritim/vital takip + uygun merkeze nakil."
    },
    "population": "adult",
    "priority": "standard",
    "clinicalStatus": "reviewed",
    "first30": [
      "Hastayı yürütme; eforu durdur ve ağrıyı değerlendir.",
      "Vital bulgularla birlikte mümkün olan en erken 12 derivasyon EKG'yi al.",
      "ASA uygunluğunu değerlendir; SpO₂ <%90 ise O₂ ver ve STEMI şüphesinde reperfüzyon planını erkenden başlat."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-06"
      ],
      "page": "14",
      "codeStatus": "verified"
    }
  },
  {
    "id": "airway",
    "title": "Hava Yolu Tıkanıklığı",
    "subtitle": "Kısmi vs tam tıkanma",
    "category": "Solunum",
    "icon": "🗣️",
    "accent": "#4976c5",
    "soft": "#e8f0ff",
    "code": "SB-ASH-Y-03",
    "page": "8",
    "featured": false,
    "summary": "Ses/öksürük varlığıyla kısmi ve tam tıkanmayı ayır; tam tıkanmada 5 sırt vuruşu + 5 karına bası döngüsü.",
    "quick": [
      "<strong>Bilinç açık mı?</strong> Bilinç kapalıysa arrest yönetimi algoritmasına geç.",
      "<strong>Ses çıkarıyor/öksürüyor mu?</strong> Evetse kısmi tıkanma: öksürmeyi teşvik et, takip et.",
      "<strong>Tam tıkanma:</strong> 5 kez sırta vur + 5 kez karına bası; cisim çıkana kadar devam et.",
      "<strong>Bilinç kaybı gelişirse arrest yönetimine geç.</strong> İleri hava yolu başarısızsa resmî şemada SKKM/ÇM ile iğne krikotirotomi basamağı bulunur."
    ],
    "redFlags": [
      "Ses çıkaramama / konuşamama",
      "Etkisiz veya sessiz öksürük",
      "Siyanoz",
      "Bilinç kaybı"
    ],
    "meds": [],
    "decision": {
      "q": "Hasta ses çıkarabiliyor veya etkili öksürebiliyor mu?",
      "yes": "Kısmi tıkanma → öksürmeyi teşvik et, yakın izle.",
      "no": "Tam tıkanma → 5 sırt vuruşu + 5 karına bası; bilinç kaybında arrest algoritması."
    },
    "population": "adult",
    "priority": "standard",
    "clinicalStatus": "reviewed",
    "first30": [
      "Etkili öksürük/ses var mı hızlıca ayır.",
      "Etkili öksürük varsa öksürmeyi teşvik et ve izle.",
      "Tam tıkanmada 5 sırt vuruşu + 5 karına bası; bilinç kaybında arrest yönetimine geç."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-03"
      ],
      "page": "8",
      "codeStatus": "verified"
    }
  },
  {
    "id": "hypothermia",
    "title": "Hipotermi",
    "subtitle": "Hafif • orta • ağır • arrest",
    "category": "Çevresel",
    "icon": "❄️",
    "accent": "#3279c8",
    "soft": "#e5f1ff",
    "code": "SB-ASH-Y-24",
    "page": "41",
    "featured": false,
    "summary": "Vücut ısısı ve bilinç durumuna göre pasif/aktif ısıtma, oksijen, monitörizasyon ve ağır tabloda hava yolu güvenliği.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula.</strong> Soğuk çevreden uzaklaştır; ıslak/soğuk kıyafetleri çıkar, ısı kaybını engelle.",
      "<strong>Hafif:</strong> bilinç açık, titreme, 32–35°C → sıcak ortam/kıyafet/battaniye, sıcak içecek ve minimal hareket.",
      "<strong>Orta:</strong> bilinç bozukluğu, 28–32°C → monitörize et, ılık O₂, ısı paketleri/termal battaniye, ılık %0,9 NaCl ve immobilizasyon.",
      "<strong>Ağır:</strong> bilinç kapalı, <28°C → orta hipotermi tedavisine ek hava yolu güvenliği."
    ],
    "redFlags": [
      "Vücut ısısı <28°C",
      "Bilinç kapalı",
      "Nabız alınamaması / hipotermik kardiyak arrest",
      "Aritmi riski — gereksiz hareketten kaçın"
    ],
    "meds": [
      {
        "name": "Ilık %0,9 NaCl",
        "dose": "İnfüzyon",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Orta hipotermi basamağında resmî şemada yer alır."
      }
    ],
    "decision": {
      "q": "Nabız var mı?",
      "yes": "Hipotermi algoritmasına göre ısıtma + seri değerlendirme.",
      "no": "Hipotermide arrest yönetimi algoritmasına geç; nabız değerlendirmesini en az 60 sn yap."
    },
    "population": "adult",
    "priority": "standard",
    "clinicalStatus": "reviewed",
    "first30": [
      "Soğuk maruziyeti durdur; ıslak-soğuk giysileri çıkar ve ısı kaybını azalt.",
      "Bilinç, solunum, nabız ve mümkünse çekirdek ısıyı değerlendir; hastayı gereksiz hareket ettirme.",
      "Ağır hipotermide nabız değerlendirmesini uzat; nabız yoksa hipotermik arrest algoritmasına geç."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-24"
      ],
      "page": "41",
      "codeStatus": "verified"
    }
  },
  {
    "id": "drowning",
    "title": "Suda Boğulma",
    "subtitle": "Solunum var/yok ayrımı",
    "category": "Çevresel",
    "icon": "🌊",
    "accent": "#177fc0",
    "soft": "#e5f4ff",
    "code": "SB-ASH-Y-27",
    "page": "47",
    "featured": false,
    "summary": "Öncelik hava yolu ve solunum: spontan solunum varsa O₂; yoksa BVM, geri dönmezse arrest yönetimi.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula.</strong> Hava yolu güvenliğini sağla ve solunumu kontrol et.",
      "<strong>Spontan solunum varsa</strong> maske ile O₂ ver.",
      "<strong>Spontan solunum yoksa</strong> BVM ile solunumu destekle.",
      "<strong>Solunum geri gelirse O₂;</strong> solunum yok/gasping ise arrest yönetimi algoritmasına geç."
    ],
    "redFlags": [
      "Apne / gasping",
      "Bilinç kaybı",
      "Travma şüphesi veya sığ suya dalma/atlama öyküsü",
      "Hipotermi"
    ],
    "meds": [],
    "decision": {
      "q": "Spontan solunum var mı?",
      "yes": "Maske ile O₂ + seri değerlendirme + nakil.",
      "no": "BVM ile destekle; geri dönmez/gasping ise arrest algoritması."
    },
    "population": "adult",
    "priority": "standard",
    "clinicalStatus": "reviewed",
    "first30": [
      "Kendi güvenliğini sağlayarak hastayı sudan çıkar; hava yolu ve solunumu hemen değerlendir.",
      "Spontan solunum varsa O₂; yoksa BVM ile ventilasyon desteği ver.",
      "Apne/gasping sürüyorsa arrest yönetimine geç; travma ve hipotermiyi eş zamanlı düşün."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-27"
      ],
      "page": "47",
      "codeStatus": "verified"
    }
  },
  {
    "id": "hyperthermia",
    "title": "Hipertermi",
    "subtitle": "Isı krampları • ısı stresi • ısı çarpması",
    "category": "Çevresel",
    "icon": "🌡️",
    "accent": "#e05b35",
    "soft": "#fff0e8",
    "code": "SB-ASH-Y-23",
    "page": "39",
    "featured": false,
    "summary": "Isı krampları, ısı stresi ve ısı çarpmasını klinik şiddete göre ayır; ısı çarpmasında hızlı soğutma ve sıvı desteği.",
    "quick": [
      "<strong>Isı krampları:</strong> dinlenme + oral sıvı replasmanı.",
      "<strong>Isı stresi:</strong> damar yolu, ortam ısısını düşür, %0,9 NaCl 1000–2000 ml bolus başla.",
      "<strong>Isı çarpması:</strong> >40°C vücut ısısı + bilinç bulanıklığı; vital/kan şekeri, damar yolu, monitörizasyon.",
      "<strong>%0,9 NaCl 1000 ml bolus</strong> ve vücut ısısını <39°C olacak şekilde pasif eksternal soğutma."
    ],
    "redFlags": [
      "Vücut ısısı >40°C",
      "Bilinç değişikliği",
      "Kollaps / şok",
      "Nefes darlığı"
    ],
    "meds": [
      {
        "name": "%0,9 NaCl",
        "dose": "1000 ml bolus",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Isı çarpması şemasında; ısı stresinde 1000–2000 ml bolus."
      }
    ],
    "decision": {
      "q": ">40°C vücut ısısı + bilinç bulanıklığı var mı?",
      "yes": "Isı çarpması → hızlı soğutma + damar yolu + sıvı + monitörizasyon.",
      "no": "Isı stresi/krampları bulgularına göre daha düşük yoğunluklu yaklaşım."
    },
    "population": "adult",
    "priority": "standard",
    "clinicalStatus": "reviewed",
    "first30": [
      "Hastayı sıcak ortamdan çıkar ve hızlı klinik değerlendirme yap.",
      "Vücut ısısı, bilinç, vital bulgular ve kan şekerini değerlendir.",
      "Isı çarpmasında soğutmayı ve IV sıvı desteğini geciktirme; hedef <39°C olacak şekilde seri yeniden değerlendir."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-23"
      ],
      "page": "39",
      "codeStatus": "verified"
    }
  },
  {
    "id": "bradycardia",
    "title": "Semptomatik Bradikardi",
    "subtitle": "İnstabilite • atropin • pacing",
    "category": "Kardiyak",
    "icon": "💓",
    "accent": "#7159c8",
    "soft": "#f0edff",
    "code": "SB-ASH-Y-07",
    "page": "16–17",
    "featured": false,
    "population": "adult",
    "priority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-07"
      ],
      "page": "16–17",
      "codeStatus": "verified"
    },
    "summary": "Semptomatik/instabil bradikardide hipoksi ve geri döndürülebilir nedenleri düzelt; atropin dozu 2026 şemasında 1 mg IV başlangıca güncellenmiştir.",
    "first30": [
      "ABC ve monitörizasyonu başlat; semptomatik/instabil bulguları ara.",
      "Atropin 1 mg IV uygula; 3–5 dakikada bir, toplam maksimum 3 mg'a kadar tekrarlanabilir.",
      "Yanıtsız veya yüksek dereceli blokta pacing ve vazopressör infüzyon seçenekleri için ileri basamağa geç."
    ],
    "quick": [
      "<strong>Acil olgu yönetimi, oksijenizasyon, damar yolu ve monitörizasyon.</strong> 12 derivasyon EKG al.",
      "<strong>İnstabiliteyi değerlendir:</strong> senkop/bilinç değişikliği, iskemi, şok, akut kalp yetmezliği.",
      "<strong>Atropin 1 mg IV.</strong> Gerektiğinde 3–5 dk arayla tekrarla; toplam maksimum 3 mg.",
      "Atropine yanıtsızlıkta veya yüksek dereceli AV blokta transkütan pacing; dopamin 5–20 mcg/kg/dk veya adrenalin 2–10 mcg/dk seçeneklerini değerlendir."
    ],
    "redFlags": [
      "Senkop veya akut bilinç değişikliği",
      "Miyokard iskemisi / devam eden göğüs ağrısı",
      "Şok bulguları veya akut kalp yetmezliği",
      "Mobitz II / tam AV blok ve ciddi bradikardi"
    ],
    "meds": [
      {
        "name": "Atropin",
        "dose": "1 mg",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "3–5 dk arayla",
        "maxDose": "3 mg toplam",
        "note": "2026 güncellemesinde başlangıç dozu 1 mg; doğrudan uygulama olarak özetlenmiştir."
      },
      {
        "name": "Dopamin",
        "dose": "5–20 mcg/kg/dk",
        "routes": [
          "IV"
        ],
        "authority": "ALGORITHM",
        "repeat": "Titrasyon",
        "maxDose": "",
        "note": "Atropine yanıtsız semptomatik bradikardide infüzyon seçeneği."
      },
      {
        "name": "Adrenalin",
        "dose": "2–10 mcg/dk",
        "routes": [
          "IV"
        ],
        "authority": "ALGORITHM",
        "repeat": "Titrasyon",
        "maxDose": "",
        "note": "Atropine yanıtsız semptomatik bradikardide infüzyon seçeneği."
      }
    ],
    "decision": {
      "q": "Bradikardi hemodinamik olarak instabil mi?",
      "yes": "Atropin → yanıtsızsa pacing / vazopressör infüzyon basamağı.",
      "no": "Monitörizasyon, nedenin araştırılması ve uygun merkeze nakil."
    }
  },
  {
    "id": "tachycardia",
    "title": "Taşikardi",
    "subtitle": "Stabilite • QRS • kardiyoversiyon",
    "category": "Kardiyak",
    "icon": "📈",
    "accent": "#d85a6b",
    "soft": "#ffedf0",
    "code": "SB-ASH-Y-08",
    "page": "18",
    "featured": false,
    "population": "adult",
    "priority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-08"
      ],
      "page": "18",
      "codeStatus": "verified"
    },
    "summary": "Önce instabiliteyi belirle; instabil taşikardide elektriksel tedavi, stabil hastada QRS genişliği ve düzenine göre algoritmik yaklaşım.",
    "first30": [
      "Monitörizasyon, damar yolu ve 12 derivasyon EKG'yi başlat.",
      "Senkop/bilinç değişikliği, iskemi, şok veya akut kalp yetmezliği varsa hastayı instabil kabul et.",
      "İnstabil hastada senkronize kardiyoversiyonu geciktirme; stabil hastada QRS genişliği ve düzenine göre ilerle."
    ],
    "quick": [
      "<strong>Stabiliteyi değerlendir.</strong> Senkop/bilinç değişikliği, iskemi, şok veya akut kalp yetmezliği instabilite bulgusudur.",
      "İnstabil hastada <strong>senkronize kardiyoversiyon</strong>; 2026 şemasında enerji ritim tipine göre ayrılır.",
      "Stabil, düzenli geniş kompleks taşikardide <strong>amiodaron 150 mg IV, 10 dakikada</strong> yaklaşımı yer alır.",
      "Dar kompleks ritimlerde düzenlilik, vagal manevra ve uygun antiaritmik basamakları şemaya göre değerlendir."
    ],
    "redFlags": [
      "Hipotansiyon/şok",
      "Senkop veya akut bilinç değişikliği",
      "Miyokard iskemisi",
      "Akut kalp yetmezliği",
      "Düzensiz geniş kompleks taşikardi"
    ],
    "meds": [
      {
        "name": "Amiodaron",
        "dose": "150 mg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "10 dakikada infüzyon",
        "maxDose": "",
        "note": "Stabil VT / uygun geniş kompleks ritim basamağında."
      },
      {
        "name": "Midazolam",
        "dose": "0,1 mg/kg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "Kardiyoversiyon öncesi",
        "maxDose": "",
        "note": "Kardiyoversiyon öncesi sedasyon için 2026 güncellemesinde kilo bazlı doz."
      }
    ],
    "decision": {
      "q": "Taşikardi instabilite bulgusu oluşturuyor mu?",
      "yes": "Senkronize kardiyoversiyon; sedasyon/analjezi ve enerji seçimini şemaya göre uygula.",
      "no": "QRS genişliği ve düzenine göre stabil taşikardi koluna geç."
    }
  },
  {
    "id": "cardiac-arrest",
    "title": "Kardiyak Arrest",
    "subtitle": "Şoklanabilir / şoklanamaz ritim",
    "category": "Resüsitasyon",
    "icon": "⚡",
    "accent": "#d4434b",
    "soft": "#ffe9eb",
    "code": "SB-ASH-Y-09–11",
    "page": "20–23",
    "featured": true,
    "population": "adult",
    "priority": "critical",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-09–11"
      ],
      "page": "20–23",
      "codeStatus": "verified"
    },
    "summary": "Yüksek kaliteli CPR, ritim ayrımı, erken IV/IO yol ve 2026 ilaç sıralamasına göre şoklanabilir/şoklanamaz arrest yönetimi.",
    "first30": [
      "Yanıtsızlık, anormal/olmayan solunum ve nabızsızlığı tanı; yüksek kaliteli CPR'ı başlat.",
      "Defibrilatörü bağla ve ritmi şoklanabilir (VF/pVT) / şoklanamaz (asistoli/NEA) olarak ayır.",
      "IV/IO yolu geciktirme; şoklanamaz ritimde adrenalin erişim sağlanır sağlanmaz, şoklanabilir ritimde şema sırasına göre uygula."
    ],
    "quick": [
      "<strong>Yüksek kaliteli CPR</strong> ve ritim analizi; kompresyon kesintilerini en aza indir.",
      "Asistoli/NEA'da <strong>adrenalin 1 mg IV/IO</strong> erişim sağlanır sağlanmaz; atropin ve rutin NaHCO₃ 2026 algoritmasından çıkarılmıştır.",
      "VF/pVT'de şok döngülerini sürdür; 2. şok sonrası adrenalin 1 mg, 3. şok sonrası amiodaron 300 mg (veya lidokain 1–1,5 mg/kg), 5. şok sonrası amiodaron 150 mg.",
      "Endotrakeal ilaç yolu kaldırılmıştır; ilaç yolu IV/IO'dur. ROSC olursa Resüsitasyon Sonrası Bakım algoritmasına geç."
    ],
    "redFlags": [
      "Kompresyon kesintilerinin uzaması",
      "IV/IO yerine ET ilaç uygulaması",
      "Şoklanabilir ritimde defibrilasyonun gecikmesi",
      "Geri döndürülebilir H/T nedenlerinin atlanması"
    ],
    "meds": [
      {
        "name": "Adrenalin",
        "dose": "1 mg",
        "routes": [
          "IV",
          "IO"
        ],
        "authority": "ALGORITHM",
        "repeat": "3–5 dk arayla; ritim koluna göre başlangıç zamanı",
        "maxDose": "",
        "note": "Asistoli/NEA'da erken; VF/pVT'de şema sırasına göre."
      },
      {
        "name": "Amiodaron",
        "dose": "300 mg",
        "routes": [
          "IV",
          "IO"
        ],
        "authority": "ALGORITHM",
        "repeat": "3. şok sonrası",
        "maxDose": "150 mg ek doz",
        "note": "5. şok sonrası 150 mg ek doz; lidokain alternatif olarak şemada yer alır."
      },
      {
        "name": "Lidokain",
        "dose": "1–1,5 mg/kg",
        "routes": [
          "IV",
          "IO"
        ],
        "authority": "ALGORITHM",
        "repeat": "3. şok sonrası alternatif",
        "maxDose": "",
        "note": "Amiodarona alternatif seçenek olarak."
      }
    ],
    "decision": {
      "q": "Ritim şoklanabilir mi (VF/pVT)?",
      "yes": "Defibrilasyon + 2 dk CPR döngüleri; ilaçları 2026 şok sırasına göre uygula.",
      "no": "Asistoli/NEA: CPR + erken adrenalin + geri döndürülebilir nedenler."
    }
  },
  {
    "id": "rosc",
    "title": "ROSC Sonrası Bakım",
    "subtitle": "MAP • ısı • oksijenasyon • ritim",
    "category": "Resüsitasyon",
    "icon": "🔄",
    "accent": "#288a73",
    "soft": "#e4f7f0",
    "code": "SB-ASH-Y-12",
    "page": "24",
    "featured": false,
    "population": "adult",
    "priority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-12"
      ],
      "page": "24",
      "codeStatus": "verified"
    },
    "summary": "Spontan dolaşım geri döndüğünde oksijenasyon, hemodinami, ısı ve disritmi kontrolünü bağımsız bir post-arrest algoritmasıyla yönet.",
    "first30": [
      "Hava yolu/ventilasyonu yeniden değerlendir, SpO₂ ve kapnografiyi uygun şekilde izle.",
      "12 derivasyon EKG, kan basıncı ve ritim monitörizasyonunu başlat.",
      "Hipotansiyonu hızla tanı; 2026 şemasındaki hedef MAP ≥65 mmHg ve vücut ısısı 32–37,5°C aralığını gözet."
    ],
    "quick": [
      "Spontan solunum yoksa ventilasyon/oksijenizasyonu sürdür; seri nabız ve ritim değerlendirmesi yap.",
      "<strong>12 derivasyon EKG ve vital bulguları değerlendir.</strong>",
      "2026 şeması post-arrest bakımında <strong>MAP ≥65 mmHg</strong> hedefini ve <strong>32–37,5°C</strong> vücut ısısı aralığını vurgular.",
      "Bradikardi/taşikardi/nöbet veya ventriküler ektopi gelişirse ilgili algoritmaya geç; yeniden arrestte ritim algoritmasına dön."
    ],
    "redFlags": [
      "MAP <65 mmHg / devam eden hipotansiyon",
      "Tekrarlayan malign aritmi",
      "Tekrar arrest",
      "Kontrolsüz hipoksi/hipoventilasyon",
      "Nöbet"
    ],
    "meds": [
      {
        "name": "Amiodaron",
        "dose": "150 mg",
        "routes": [
          "IV"
        ],
        "authority": "ALGORITHM",
        "repeat": "10 dakikada",
        "maxDose": "",
        "note": "Uygun ventriküler disritmi durumunda şemadaki seçeneklerden biri."
      },
      {
        "name": "Lidokain",
        "dose": "1–1,5 mg/kg",
        "routes": [
          "IV"
        ],
        "authority": "ALGORITHM",
        "repeat": "Bolus",
        "maxDose": "",
        "note": "Uygun ventriküler disritmi durumunda alternatif."
      }
    ],
    "decision": {
      "q": "ROSC sonrası hipotansiyon veya disritmi var mı?",
      "yes": "Hedef MAP/ritim yönetimini başlat; ilgili algoritma basamaklarına geç.",
      "no": "Oksijenasyon, ısı, EKG ve vital takibi sürdür; uygun merkeze nakil."
    }
  },
  {
    "id": "hypoglycemia",
    "title": "Hipoglisemi",
    "subtitle": "Kan şekeri • bilinç • dekstroz",
    "category": "Metabolik",
    "icon": "🍬",
    "accent": "#c98517",
    "soft": "#fff4db",
    "code": "SB-ASH-Y-17",
    "page": "32",
    "featured": true,
    "population": "adult",
    "priority": "critical",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-17"
      ],
      "page": "32",
      "codeStatus": "verified"
    },
    "summary": "Glukoz <60 mg/dL veya klinik hipoglisemide bilinç durumuna göre oral glikoz/dekstroz; 2026 şemasında IV dekstroz doğrudan uygulama basamağıdır.",
    "first30": [
      "Kan glikozunu hemen ölç; hipoglisemi bulgularını eş zamanlı değerlendir.",
      "Bilinç açık ve güvenli yutabiliyorsa ağızdan şekerli sıvı ver.",
      "Bilinç kapalı / oral alamıyorsa %10–%20 dekstrozdan 25 g glikozu IV bolus ver; yeniden glukoz ölç."
    ],
    "quick": [
      "<strong>Kan şekerini ölç.</strong> Glukoz <60 mg/dL ve/veya klinik hipoglisemi varsa bilinç durumunu değerlendir.",
      "Bilinç açık ve aspirasyon riski yoksa ağızdan şekerli sıvı ver.",
      "Bilinç kapalı/oral alamıyorsa <strong>%10–%20 dekstrozdan 25 g glikoz IV bolus.</strong>",
      "Glukoz <60 mg/dL sürüyorsa 5–10 dk arayla tekrar değerlendir/uygula; klinik düzelmeyi seri izle."
    ],
    "redFlags": [
      "Bilinç kaybı veya nöbet",
      "Tekrarlayan/refrakter hipoglisemi",
      "Aspirasyon riski",
      "Şok/dehidratasyon veya eşlik eden ağır hastalık"
    ],
    "meds": [
      {
        "name": "Dekstroz",
        "dose": "25 g glikoz (%10–%20 dekstrozdan)",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "Glukoz <60 mg/dL ise 5–10 dk arayla",
        "maxDose": "",
        "note": "2026 güncellemesinde SKKM onayı olmadan doğrudan uygulama olarak belirtilmiştir."
      }
    ],
    "decision": {
      "q": "Hasta güvenli şekilde oral alabiliyor mu?",
      "yes": "Ağızdan şekerli sıvı + seri glukoz/klinik değerlendirme.",
      "no": "IV dekstroz 25 g + yeniden glukoz ölçümü; yanıta göre tekrar."
    }
  },
  {
    "id": "stroke",
    "title": "İnme / SVO",
    "subtitle": "BEFAST • son normal zaman • uygun merkez",
    "category": "Nörolojik",
    "icon": "🧠",
    "accent": "#5a6fc8",
    "soft": "#ebefff",
    "code": "SB-ASH-Y-18",
    "page": "33",
    "featured": true,
    "population": "adult",
    "priority": "critical",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-18"
      ],
      "page": "33",
      "codeStatus": "verified"
    },
    "summary": "2026 algoritması Cincinnati/FAST yerine BEFAST taramasını kullanır; son normal zaman ve uygun inme merkezi seçimi kritik karar noktalarıdır.",
    "first30": [
      "BEFAST ile hızlı inme taraması yap ve hastanın son normal görüldüğü zamanı kesinleştir.",
      "ABC, SpO₂, kan glikozu ve vital bulguları değerlendir; hipoglisemiyi dışla.",
      "İnme şüphesinde zaman kaybetmeden uygun inme merkezine nakil planını başlat; rutin tansiyon düşürme yapma."
    ],
    "quick": [
      "<strong>BEFAST:</strong> Balance, Eyes, Face, Arms, Speech, Time ile tarama yap.",
      "Hastanın <strong>son normal görüldüğü zamanı</strong> kaydet; kan glikozunu ölç ve hipoglisemiyi dışla.",
      "2026 şemasında normalin üstündeki kan basıncını rutin olarak düşürmeme yaklaşımı öne çıkarılmıştır.",
      "Trombolitik için ilk 4,5 saat; endovasküler girişim için ilk 6 saat kriterlerini ve uygun merkez seçimini dikkate al."
    ],
    "redFlags": [
      "Yeni fokal nörolojik defisit",
      "Posterior dolaşım bulguları: ani denge/görme bozukluğu",
      "Bilinç bozukluğu / aspirasyon riski",
      "Hipoglisemi taklidi",
      "Semptom başlangıç/son normal zamanının belirsizliği"
    ],
    "meds": [],
    "decision": {
      "q": "BEFAST pozitif veya klinik inme şüphesi var mı?",
      "yes": "Son normal zamanı kaydet → glukozu dışla → uygun inme merkezine ön bildirim/nakil.",
      "no": "Alternatif nedenleri değerlendir; klinik şüphe sürüyorsa nörolojik acil yaklaşımını sürdür."
    }
  },
  {
    "id": "seizure",
    "title": "Nöbet / Status",
    "subtitle": "Benzodiazepin • ikinci basamak antiepileptik",
    "category": "Nörolojik",
    "icon": "〽️",
    "accent": "#7556a8",
    "soft": "#f1eaff",
    "code": "SB-ASH-Y-19",
    "page": "34",
    "featured": false,
    "population": "adult",
    "priority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-19"
      ],
      "page": "34",
      "codeStatus": "verified"
    },
    "summary": "Nöbeti güvenli ABC yaklaşımıyla yönet; 2026 şemasında valproik asit ve levetirasetam ikinci basamak seçenekler arasına eklenmiştir.",
    "first30": [
      "Hastayı yaralanmadan koru; hava yolunu aç, oksijenasyon/ventilasyonu değerlendir.",
      "Kan glikozunu ölç ve düzeltilebilir nedeni ara.",
      "Devam eden nöbette ilk benzodiazepin basamağını geciktirme; dirençliyse 2026 ikinci basamak seçeneklerine geç."
    ],
    "quick": [
      "ABC, oksijenasyon, monitörizasyon ve glukoz değerlendirmesini yap.",
      "Devam eden nöbette <strong>diazepam 5 mg IV</strong> veya <strong>midazolam 5 mg IV / 10 mg IM</strong> şemada ilk ilaç basamağıdır.",
      "Dirençli nöbette <strong>fenitoin 20 mg/kg</strong> veya <strong>valproik asit 40 mg/kg</strong> veya <strong>levetirasetam 60 mg/kg IV</strong> seçenekleri yer alır.",
      "Pentothal/fenobarbital önceki algoritmadan çıkarılmıştır; seri solunum ve bilinç değerlendirmesi yap."
    ],
    "redFlags": [
      "Status epileptikus / tekrarlayan nöbet",
      "Solunum depresyonu veya hipoksi",
      "Hipoglisemi",
      "Travma / gebelik / toksik neden şüphesi",
      "Nöbet sonrası uzamış bilinç bozukluğu"
    ],
    "meds": [
      {
        "name": "Diazepam",
        "dose": "5 mg",
        "routes": [
          "IV"
        ],
        "authority": "ALGORITHM",
        "repeat": "Şemaya göre",
        "maxDose": "",
        "note": "İlk benzodiazepin seçeneklerinden."
      },
      {
        "name": "Midazolam",
        "dose": "5 mg IV veya 10 mg IM",
        "routes": [
          "IV",
          "IM"
        ],
        "authority": "ALGORITHM",
        "repeat": "Şemaya göre",
        "maxDose": "",
        "note": "İlk benzodiazepin seçeneklerinden."
      },
      {
        "name": "Fenitoin",
        "dose": "20 mg/kg",
        "routes": [
          "IV"
        ],
        "authority": "ALGORITHM",
        "repeat": "İkinci basamak",
        "maxDose": "",
        "note": "Dirençli nöbet seçeneği."
      },
      {
        "name": "Valproik asit",
        "dose": "40 mg/kg",
        "routes": [
          "IV"
        ],
        "authority": "ALGORITHM",
        "repeat": "İkinci basamak",
        "maxDose": "",
        "note": "2026'da eklenen seçeneklerden."
      },
      {
        "name": "Levetirasetam",
        "dose": "60 mg/kg",
        "routes": [
          "IV"
        ],
        "authority": "ALGORITHM",
        "repeat": "İkinci basamak",
        "maxDose": "",
        "note": "2026'da eklenen seçeneklerden."
      }
    ],
    "decision": {
      "q": "Nöbet ilk benzodiazepin basamağına rağmen sürüyor mu?",
      "yes": "İkinci basamak antiepileptik seçeneklerinden uygun olanı şemaya/SKKM kararına göre uygula.",
      "no": "ABC ve bilinç takibini sürdür; nedeni değerlendir ve naklet."
    }
  },
  {
    "id": "burn",
    "title": "Yanık",
    "subtitle": "Alan • inhalasyon • sıvı • ağrı",
    "category": "Travma",
    "icon": "🔥",
    "accent": "#df6d38",
    "soft": "#fff0e7",
    "code": "SB-ASH-Y-28",
    "page": "48–51",
    "featured": false,
    "population": "adult",
    "priority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-28"
      ],
      "page": "48–51",
      "codeStatus": "verified"
    },
    "summary": "Yanma sürecini durdur, inhalasyon/hava yolu riskini erken tanı, yanık alanını değerlendir ve 2026 sıvı-ağrı yaklaşımına göre nakli planla.",
    "first30": [
      "Yanma sürecini durdur ve olay yeri güvenliğini sağla.",
      "Hava yolu/solunum sıkıntısı, inhalasyon yanığı ve boyunda sirküler yanık açısından erken değerlendir.",
      "Yanık alanını ve derecesini belirle; şok bulgusu varsa ilgili şok algoritmasına geç."
    ],
    "quick": [
      "Yanma sürecini durdur; acil olgu yönetimini uygula.",
      "İnhalasyon yanığı/hava yolu ödemi riski varsa oksijenizasyon ve ventilasyonu destekle, erken ileri hava yolunu düşün.",
      "Yanık alanını değerlendirmek için uygun yüzdelik yöntem kullan; yanık yüzeyini steril örtüyle koru.",
      "2026 güncellemesinde sıvı yaklaşımında Ringer Laktat/Parkland ve ağrıda fentanil öne çıkar; ayrıntıyı resmî şemadan doğrula."
    ],
    "redFlags": [
      "Yüz/boyun yanığı, inhalasyon bulgusu, stridor",
      "Elektrik yanığı",
      "Geniş yüzey alanlı / derin yanık",
      "Şok bulguları",
      "Sirküler ekstremite/gövde yanığı"
    ],
    "meds": [
      {
        "name": "Fentanil",
        "dose": "1 mcg/kg",
        "routes": [
          "IV",
          "IM"
        ],
        "authority": "SKKM",
        "repeat": "Ağrıya/şemaya göre",
        "maxDose": "",
        "note": "2026 karşılaştırmasında morfin yerine öne çıkan analjezik; uygulama öncesi resmî şema ve SKKM kararını kontrol et."
      }
    ],
    "decision": {
      "q": "Hava yolu tehdidi veya şok bulgusu var mı?",
      "yes": "Hava yolu/şok algoritmasını önceliklendir; yanık merkezine uygun nakil planla.",
      "no": "Alan/derinlik, ağrı ve sıvı gereksinimini değerlendirerek nakli sürdür."
    }
  },
  {
    "id": "trauma",
    "title": "Travmalı Hasta",
    "subtitle": "xABCDE • kanama • hızlı nakil",
    "category": "Travma",
    "icon": "🛡️",
    "accent": "#a74d4d",
    "soft": "#faeaea",
    "code": "Ek-2 • Travma",
    "page": "68",
    "featured": false,
    "population": "adult",
    "priority": "critical",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-20",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [],
      "page": "68",
      "codeStatus": "page-verified"
    },
    "summary": "2026 ilk değerlendirmede xABCDE: hayatı tehdit eden dış kanama kontrolü, hava yolundan önce ele alınır; yaşam tehdidi bulunan travmada sahada gereksiz gecikmeden kaçınılır.",
    "first30": [
      "Olay yeri güvenliği ve travma mekanizmasını değerlendir.",
      "x: hayatı tehdit eden dış kanamayı tanı ve derhal kontrol et.",
      "Ardından A-B-C-D-E; hava yolu, solunum, dolaşım, nörolojik durum ve ekspojuru sistematik tamamla."
    ],
    "quick": [
      "<strong>x — exsanguinating hemorrhage:</strong> masif dış kanamayı hemen kontrol et.",
      "<strong>A/B:</strong> hava yolu + servikal koruma; solunumu ve yaşamı tehdit eden toraks sorunlarını değerlendir.",
      "<strong>C:</strong> dolaşım/şok; dış kanama, pelvis ve iç kanama olasılığını değerlendir.",
      "<strong>D/E:</strong> GKS/pupiller, tam vücut değerlendirmesi ve hipotermiden korunma. Hayatı tehdit eden sorunları düzeltirken hızlı nakli sürdür."
    ],
    "redFlags": [
      "Kontrolsüz dış kanama",
      "Hava yolu tehdidi",
      "Tansiyon pnömotoraks / ciddi solunum yetmezliği",
      "Şok / pelvis instabilitesi",
      "GKS düşüşü veya fokal nörolojik bulgu"
    ],
    "meds": [],
    "decision": {
      "q": "Hayatı tehdit eden veya çoklu yaralanma var mı?",
      "yes": "Kritik sorunları hızla düzelt, immobilizasyon kararını kliniğe göre ver ve uygun travma merkezine hızlı naklet.",
      "no": "İkincil değerlendirmeyi nakil sürecinde tamamla; seri yeniden değerlendirme yap."
    }
  }
];
