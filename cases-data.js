const APP_META = {
  "schemaVersion": 3,
  "contentVersion": "EK2-2026.08.25-clinical-audit-2026.09.21",
  "productVersion": "0.9.3",
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
      "description": "Akış şemasında SKKM/ÇM onayı gerektirmeyen basamak olarak doğrulanmış.",
      "symbol": "✓",
      "visualLabel": "SKKM/ÇM onayı gerektirmez"
    },
    "SKKM": {
      "label": "SKKM/ÇM",
      "description": "Uygulama/ileri basamak için SKKM/ÇM kararı veya onayı gerekir.",
      "symbol": "◆",
      "visualLabel": "SKKM/ÇM onayı gerekli"
    },
    "ALGORITHM": {
      "label": "Akış şeması",
      "description": "İlaç/doz şemada yer alır; yetki ayrımı bu sürümde ayrıca doğrulanmadığından resmî şema ve kurum talimatı kontrol edilmelidir.",
      "symbol": "•",
      "visualLabel": "Yetki simgesi doğrulanmadı"
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
  "routeLabels": {
    "IV": "İntravenöz (IV)",
    "IM": "İntramüsküler (IM)",
    "IO": "İntraosseöz (IO)",
    "SL": "Sublingual (SL)",
    "PO": "Oral (PO)",
    "NEB": "Nebülizasyon",
    "IN": "İntranazal (IN)",
    "BUCCAL": "Bukkal",
    "RECTAL": "Rektal",
    "TOPICAL": "Topikal",
    "OTHER": "Şemaya göre"
  },
  "source": {
    "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
    "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
    "effectiveDate": "2026-08-25",
    "officialPageDate": "2026-09-11"
  },
  "clinicalAudit": {
    "scope": "17 yetişkin vaka",
    "source": "T.C. Sağlık Bakanlığı Ek-2 Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
    "effectiveDate": "2026-08-25",
    "officialPageDate": "2026-09-11",
    "reviewedAt": "2026-09-21"
  },
  "authorityAudit": {
    "source": "25.08.2026 tarihli Ek-2 resmî PDF",
    "reviewedAt": "2026-09-21",
    "method": "Telefon/SKKM-ÇM simgesi görsel olarak doğrulandı",
    "scope": [
      "SB-ASH-Y-07",
      "SB-ASH-Y-10",
      "SB-ASH-Y-11",
      "SB-ASH-Y-12",
      "SB-ASH-Y-19"
    ]
  },
  "integrityAudit": {
    "source": "25.08.2026 tarihli Ek-2 resmî PDF",
    "reviewedAt": "2026-09-21",
    "scope": "Mevcut 17 yetişkin kartında başlık/kod/PDF sayfa izi ve doğrudan görülen eksik basamaklar",
    "status": "verified"
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
    "code": "SB-ASH-Y-26 + SB-ASH-Y-22",
    "page": "44–45 / 37",
    "uiFeatured": true,
    "summary": "İğneyi, lokal bakımı ve sistemik reaksiyona geçişi tek ekranda ayır. Lokal reaksiyon, sistemik bulgu ve anafilaksiye geçiş eğitim amaçlı ayrılır; resmî şema ayrı bir üçlü tedavi sınıflaması tanımlamaz.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula</strong>; etkeni belirle, ısırılan/sokulan yeri ve yarayı değerlendir.",
      "<strong>Arı iğnesi görünüyorsa çıkar.</strong> Kara canlısı sokmalarında lokal soğuk uygula; bölgeyi yıka ve sabitle.",
      "<strong>Ödem sınırını yaklaşık 5 dakikada bir izle.</strong> Vital bulgular, zehirlenme, alerjik reaksiyon ve anafilaksi bulgularını takip et.",
      "<strong>Alerjik reaksiyon / anafilaksi varsa ilgili algoritmaya geç.</strong> Her aşamada hastaneye nakil esastır."
    ],
    "warningFindings": [
      "Ağız-dil-boğaz/anjiyoödem, stridor veya belirgin hırıltı",
      "Takipne, siyanoz, SpO₂ < %90 veya konfüzyon",
      "Soluk cilt, hipotansiyon, bilinç kaybı/koma",
      "Hızlı ilerleyen sistemik reaksiyon veya bronkospazm"
    ],
    "severity": {
      "mild": {
        "label": "Lokal reaksiyon",
        "bullets": [
          "Reaksiyon sokma bölgesiyle sınırlı",
          "Yaşamı tehdit eden hava yolu, solunum veya dolaşım bulgusu yok"
        ],
        "action": "İğne görünüyorsa çıkar. Lokal soğuk uygula, yıka/sabitle, ödem sınırını takip et ve vital bulguları izle. Sistemik bulgu gelişirse düzeyi yükselt."
      },
      "moderate": {
        "label": "Sistemik bulgu",
        "bullets": [
          "Lokal alanın dışına taşan alerjik/sistemik bulgu var",
          "Henüz yaşamı tehdit eden hava yolu, solunum veya dolaşım bulgusu yok"
        ],
        "action": "Bu görünüm eğitimsel bir ara ayrımdır. 2026 resmî şema arı sokması için ayrı bir üçlü tedavi sınıflaması tanımlamaz; alerjik reaksiyon/anafilaksi açısından değerlendirip Anafilaksi algoritmasına geçiş yap."
      },
      "severe": {
        "label": "Anafilaksi",
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
        "repeat": "Hipoperfüzyon sürerse 5 dk içinde",
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
      "yes": "Anafilaksi bulgularını kontrol et → gerekiyorsa SB-ASH-Y-22 Anafilaksi algoritmasına geç.",
      "no": "Lokal bakım + seri yeniden değerlendirme + nakil."
    },
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "criticalActions": [
      "Etkeni ve sokma yerini değerlendir; görünür arı iğnesi varsa çıkar.",
      "Hava yolu-solunum-dolaşım tehdidi ve sistemik alerji/anafilaksi bulgularını aynı anda ara.",
      "Yaşamı tehdit eden anafilaksi bulgusu varsa gecikmeden anafilaksi algoritmasına geç ve IM adrenalini önceliklendir."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-26",
        "SB-ASH-Y-22"
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
    "uiFeatured": true,
    "summary": "Akut başlangıçlı, yaşamı tehdit eden hava yolu/solunum/dolaşım bulgularında gecikmeden IM adrenalin ve X-ABCDE odaklı destek.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula.</strong> Akut başlangıç + yaşamı tehdit eden bulguları ara.",
      "<strong>Adrenalin 0,3–0,5 mg IM.</strong>",
      "<strong>Hava yolu açıklığını sağla; SpO₂ %94–98 hedefli O₂.</strong> Damar yolu aç, anjiyoödemde erken ileri hava yolu hazırlığı yap; SpO₂, EKG ve KB izle.",
      "<strong>Hipoperfüzyon sürüyorsa</strong> IM adrenalin 5 dk içinde tekrarla ve %0,9 NaCl 500 ml bolus uygula."
    ],
    "warningFindings": [
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
        "repeat": "Hipoperfüzyon sürerse 5 dk içinde",
        "maxDose": "",
        "note": "İlk kritik ilaç; 2026 Ek-2'de doğrudan uygulama basamağı."
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
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "criticalActions": [
      "Akut başlangıç + hava yolu, solunum veya dolaşım tehdidini tanı.",
      "Adrenalin 0,3–0,5 mg IM uygula.",
      "Hava yolunu hazırla; SpO₂ %94–98 hedefli O₂, damar yolu ve monitörizasyonu başlat."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-22"
      ],
      "page": "36–37",
      "codeStatus": "verified"
    }
  },
  {
    "id": "asthma",
    "title": "Astım",
    "subtitle": "Hafif-orta ve ağır atak ayrımı",
    "category": "Solunum",
    "icon": "🫁",
    "accent": "#1189a3",
    "soft": "#e1f7fa",
    "code": "SB-ASH-Y-05",
    "page": "12",
    "uiFeatured": true,
    "summary": "Rahat pozisyon, SpO₂ hedefi, bronkodilatörler ve ağır/ölümcül atakta erken hava yolu hazırlığı.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula</strong>; hastayı rahat ettiği, tercihen oturur pozisyonda tut.",
      "<strong>SpO₂ %94–98</strong> hedefleyerek O₂ ver; gerekirse PBV ile destekle.",
      "<strong>Damar yolu aç ve %0,9 NaCl (DAKŞ).</strong> Atağın derecesini belirle.",
      "<strong>Hafif-orta:</strong> salbutamol 4–8 puf veya 2,5–5 mg nebül. <strong>Ağır:</strong> salbutamol 2,5–5 mg + ipratropium 500 mcg nebül."
    ],
    "warningFindings": [
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
        "repeat": "20 dk arayla",
        "maxDose": "maksimum 3 uygulama",
        "note": "4–8 puf inhaler veya 2,5–5 mg nebül; 2026 Ek-2 tekrar aralığına göre."
      },
      {
        "name": "İpratropium bromür",
        "dose": "500 mcg",
        "routes": [
          "NEB"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Salbutamol ile kombine nebül; 2026 Ek-2 başlangıç bronkodilatör basamağında doğrudan."
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
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "criticalActions": [
      "Hastayı rahat, tercihen oturur pozisyona al ve atağın ağırlığını değerlendir.",
      "SpO₂ %94–98 hedefli O₂ ver; gerekirse PBV ile destekle.",
      "Bronkodilatörü geciktirme; ağır/ölümcül atakta sessiz toraks ve bilinç değişikliğini kırmızı bayrak kabul et."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-05"
      ],
      "page": "11–12",
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
    "uiFeatured": false,
    "summary": "Hastayı yürütmeden, erken 12 derivasyon EKG ve uygun ilaç basamaklarıyla yönet; STEMI’de SKKM/ÇM ile reperfüzyon planını hızlandır.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula, ağrı sorgula.</strong> Hastayı sakinleştir; gereksiz efordan kaçın ve kesinlikle yürütme.",
      "<strong>En kısa sürede vital bulgular + 12 derivasyonlu EKG.</strong>",
      "<strong>SpO₂ < %90 ise O₂ ver.</strong>",
      "<strong>Asetilsalisilik asit 160–325 mg çiğnet.</strong> Hipotansiyon/bradikardi yoksa SKKM/ÇM ile isosorbid dinitrat 5 mg SL; ağrı sürerse 3–5 dk arayla toplam 3 doza kadar."
    ],
    "warningFindings": [
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
        "repeat": "3–5 dk arayla",
        "maxDose": "toplam 3 doz",
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
    "uiPriority": "standard",
    "clinicalStatus": "reviewed",
    "criticalActions": [
      "Hastayı yürütme; eforu durdur ve ağrıyı değerlendir.",
      "Vital bulgularla birlikte mümkün olan en erken 12 derivasyon EKG'yi al.",
      "ASA uygunluğunu değerlendir; SpO₂ <%90 ise O₂ ver ve STEMI şüphesinde reperfüzyon planını erkenden başlat."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-06"
      ],
      "page": "13–14",
      "codeStatus": "verified"
    }
  },
  {
    "id": "airway",
    "title": "Hava Yolu Tıkanıklıkları",
    "subtitle": "Kısmi vs tam tıkanma",
    "category": "Solunum",
    "icon": "🗣️",
    "accent": "#4976c5",
    "soft": "#e8f0ff",
    "code": "SB-ASH-Y-03",
    "page": "8",
    "uiFeatured": false,
    "summary": "Ses/öksürük varlığıyla kısmi ve tam tıkanmayı ayır; tam tıkanmada 5 sırt vuruşu + 5 karına bası döngüsü.",
    "quick": [
      "<strong>Bilinç açık mı?</strong> Bilinç kapalıysa arrest yönetimi algoritmasına geç.",
      "<strong>Ses çıkarıyor/öksürüyor mu?</strong> Evetse kısmi tıkanma: öksürmeyi teşvik et, takip et.",
      "<strong>Tam tıkanma:</strong> 5 kez sırta vur + 5 kez karına bası; cisim çıkana kadar devam et.",
      "<strong>Bilinç kaybı gelişirse arrest yönetimine geç.</strong> İleri hava yolu başarısızsa resmî şemada SKKM/ÇM ile iğne krikotirotomi basamağı bulunur."
    ],
    "warningFindings": [
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
    "uiPriority": "standard",
    "clinicalStatus": "reviewed",
    "criticalActions": [
      "Etkili öksürük/ses var mı hızlıca ayır.",
      "Etkili öksürük varsa öksürmeyi teşvik et ve izle.",
      "Tam tıkanmada 5 sırt vuruşu + 5 karına bası; bilinç kaybında arrest yönetimine geç."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
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
    "uiFeatured": false,
    "summary": "Vücut ısısı ve bilinç durumuna göre pasif/aktif ısıtma, oksijen, monitörizasyon ve ağır tabloda hava yolu güvenliği.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula.</strong> Soğuk çevreden uzaklaştır; ıslak/soğuk kıyafetleri çıkar, ısı kaybını engelle.",
      "<strong>Hafif:</strong> bilinç açık, titreme, 32–35°C → sıcak ortam/kıyafet/battaniye, sıcak içecek ve minimal hareket.",
      "<strong>Orta:</strong> bilinç bozukluğu, 28–32°C → monitörize et, ılık O₂, ısı paketleri/termal battaniye, ılık %0,9 NaCl ve immobilizasyon.",
      "<strong>Ağır:</strong> bilinç kapalı, <28°C → orta hipotermi tedavisine ek hava yolu güvenliği."
    ],
    "warningFindings": [
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
      "no": "SB-ASH-Y-25 Hipotermide Arrest Yönetimi algoritmasına geç; nabız değerlendirmesini en az 60 sn yap."
    },
    "population": "adult",
    "uiPriority": "standard",
    "clinicalStatus": "reviewed",
    "criticalActions": [
      "Soğuk maruziyeti durdur; ıslak-soğuk giysileri çıkar ve ısı kaybını azalt.",
      "Bilinç, solunum, nabız ve mümkünse çekirdek ısıyı değerlendir; hastayı gereksiz hareket ettirme.",
      "Ağır hipotermide nabzı en az 60 sn değerlendir; nabız yoksa SB-ASH-Y-25 Hipotermide Arrest Yönetimi algoritmasına geç."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-24",
        "SB-ASH-Y-25"
      ],
      "page": "40–43",
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
    "uiFeatured": false,
    "summary": "Öncelik hava yolu ve solunum: spontan solunum varsa O₂; yoksa BVM, geri dönmezse arrest yönetimi.",
    "quick": [
      "<strong>Acil olgu yönetimini uygula.</strong> Hava yolu güvenliğini sağla ve solunumu kontrol et.",
      "<strong>Spontan solunum varsa</strong> maske ile O₂ ver.",
      "<strong>Spontan solunum yoksa</strong> BVM ile solunumu destekle.",
      "<strong>Solunum geri gelirse O₂;</strong> solunum yok/gasping ise arrest yönetimi algoritmasına geç."
    ],
    "warningFindings": [
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
    "uiPriority": "standard",
    "clinicalStatus": "reviewed",
    "criticalActions": [
      "Sağlık personeli olarak suya girme; at-çek-uzat protokolüyle hastayı sudan çıkarmayı dene, başarılamıyorsa profesyonel yardım çağır.",
      "Spontan solunum varsa O₂; yoksa BVM ile ventilasyon desteği ver.",
      "Apne/gasping sürüyorsa arrest yönetimine geç; travma ve hipotermiyi eş zamanlı düşün."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-27"
      ],
      "page": "46–47",
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
    "uiFeatured": false,
    "summary": "Isı krampları, ısı stresi ve ısı çarpmasını klinik şiddete göre ayır; ısı çarpmasında hızlı soğutma ve sıvı desteği.",
    "quick": [
      "<strong>Isı krampları:</strong> dinlenme + oral sıvı replasmanı.",
      "<strong>Isı stresi:</strong> damar yolu, ortam ısısını düşür, %0,9 NaCl 1000–2000 ml bolus başla.",
      "<strong>Isı çarpması:</strong> >40°C vücut ısısı + bilinç bulanıklığı; vital/kan şekeri, damar yolu, monitörizasyon.",
      "<strong>%0,9 NaCl 1000 ml bolus</strong> ve vücut ısısını <39°C olacak şekilde pasif eksternal soğutma."
    ],
    "warningFindings": [
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
    "uiPriority": "standard",
    "clinicalStatus": "reviewed",
    "criticalActions": [
      "Hastayı sıcak ortamdan çıkar ve hızlı klinik değerlendirme yap.",
      "Vücut ısısı, bilinç, vital bulgular ve kan şekerini değerlendir.",
      "Isı çarpmasında soğutmayı ve IV sıvı desteğini geciktirme; hedef <39°C olacak şekilde seri yeniden değerlendir."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-23"
      ],
      "page": "38–39",
      "codeStatus": "verified"
    }
  },
  {
    "id": "bradycardia",
    "title": "Bradikardi",
    "subtitle": "Semptomatik/instabil • atropin • pacing",
    "category": "Kardiyak",
    "icon": "💓",
    "accent": "#7159c8",
    "soft": "#f0edff",
    "code": "SB-ASH-Y-07",
    "page": "16",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-07"
      ],
      "page": "15–16",
      "codeStatus": "verified"
    },
    "summary": "Semptomatik/instabil bradikardide hipoksi ve geri döndürülebilir nedenleri düzelt; atropin dozu 2026 şemasında 1 mg IV başlangıca güncellenmiştir.",
    "criticalActions": [
      "ABC ve monitörizasyonu başlat; semptomatik/instabil bulguları ara.",
      "Atropin 1 mg IV uygula; 3–5 dakikada bir, toplam maksimum 3 mg'a kadar tekrarlanabilir.",
      "Yanıtsız veya yüksek dereceli blokta pacing ve vazopressör infüzyon seçenekleri için ileri basamağa geç."
    ],
    "quick": [
      "<strong>Acil olgu yönetimi, oksijenizasyon, damar yolu ve monitörizasyon.</strong> 12 derivasyon EKG al.",
      "<strong>İnstabiliteyi değerlendir:</strong> senkop/bilinç değişikliği, iskemi, şok, akut kalp yetmezliği.",
      "<strong>Atropin 1 mg IV.</strong> Gerektiğinde 3–5 dk arayla tekrarla; toplam maksimum 3 mg.",
      "Atropine yanıtsızlıkta veya yüksek dereceli AV blokta <strong>SKKM/ÇM ile</strong> transkütan pacing; dopamin 5–20 mcg/kg/dk veya adrenalin 2–10 mcg/dk."
    ],
    "warningFindings": [
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
        "authority": "SKKM",
        "repeat": "Titrasyon",
        "maxDose": "",
        "note": "Atropine yanıtsız semptomatik bradikardide; resmî şemada SKKM/ÇM telefon simgeli ileri basamak."
      },
      {
        "name": "Adrenalin",
        "dose": "2–10 mcg/dk",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "Titrasyon",
        "maxDose": "",
        "note": "Atropine yanıtsız semptomatik bradikardide; resmî şemada SKKM/ÇM telefon simgeli ileri basamak."
      }
    ],
    "decision": {
      "q": "Bradikardi hemodinamik olarak instabil mi?",
      "yes": "Atropin → yanıtsızsa SKKM/ÇM ile pacing / dopamin / adrenalin infüzyon basamağı.",
      "no": "Monitörizasyon, nedenin araştırılması ve uygun merkeze nakil."
    }
  },
  {
    "id": "tachycardia",
    "title": "Nabızlı Taşikardi",
    "subtitle": "Stabilite • QRS • kardiyoversiyon",
    "category": "Kardiyak",
    "icon": "📈",
    "accent": "#d85a6b",
    "soft": "#ffedf0",
    "code": "SB-ASH-Y-08",
    "page": "17",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-08"
      ],
      "page": "17",
      "codeStatus": "verified"
    },
    "summary": "Önce instabiliteyi belirle; instabil hastada ritim tipine göre 2026 elektriksel tedavi enerjilerini kullan, stabil hastada QRS genişliği ve düzenine göre ilerle.",
    "criticalActions": [
      "Monitörizasyon, damar yolu ve 12 derivasyon EKG'yi başlat.",
      "Senkop/bilinç değişikliği, iskemi, şok veya akut kalp yetmezliği varsa hastayı instabil kabul et.",
      "İnstabil hastada ritim tipine göre elektriksel tedaviyi geciktirme; stabil hastada QRS genişliği ve düzenine göre ilerle."
    ],
    "quick": [
      "<strong>Stabiliteyi değerlendir.</strong> Senkop/bilinç değişikliği, iskemi, şok veya akut kalp yetmezliği instabilite bulgusudur.",
      "İnstabil hastada elektriksel tedavi: <strong>dar düzenli 100 J, dar düzensiz 200 J, geniş düzenli 100 J; geniş düzensizde defibrilasyon dozu.</strong>",
      "Stabil, uygun geniş kompleks/VT basamağında <strong>amiodaron 150 mg IV, %5 dekstroz içinde 10 dakikada</strong> (SKKM/ÇM).",
      "Dar kompleks ritimlerde düzenlilik, vagal manevra ve uygun antiaritmik basamakları şemaya göre değerlendir."
    ],
    "warningFindings": [
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
        "note": "Stabil VT / uygun geniş kompleks ritim basamağında; %5 dekstroz içinde 10 dakikada (SKKM/ÇM)."
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
      "yes": "Ritim tipine göre elektriksel tedavi: dar düzenli 100 J; dar düzensiz 200 J; geniş düzenli 100 J; geniş düzensizde defibrilasyon dozu. Kardiyoversiyon gereken hastada sedasyonu şemaya göre uygula.",
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
    "code": "SB-ASH-Y-09 / Y-10 / Y-11",
    "page": "18–22",
    "uiFeatured": true,
    "population": "adult",
    "uiPriority": "critical",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-09",
        "SB-ASH-Y-10",
        "SB-ASH-Y-11"
      ],
      "page": "18–22",
      "codeStatus": "verified"
    },
    "summary": "Yüksek kaliteli CPR, ritim ayrımı, erken IV/IO yol ve 2026 ilaç sıralamasına göre şoklanabilir/şoklanamaz arrest yönetimi.",
    "criticalActions": [
      "Yanıtsızlık, anormal/olmayan solunum ve nabızsızlığı tanı; yüksek kaliteli CPR'ı başlat.",
      "Defibrilatörü bağla ve ritmi şoklanabilir (VF/pVT) / şoklanamaz (asistoli/NEA) olarak ayır.",
      "IV/IO yolu geciktirme; şoklanamaz ritimde adrenalin erişim sağlanır sağlanmaz, şoklanabilir ritimde şema sırasına göre uygula."
    ],
    "quick": [
      "<strong>Yüksek kaliteli CPR</strong> ve ritim analizi; kompresyon kesintilerini en aza indir.",
      "Asistoli/NEA'da <strong>adrenalin 1 mg IV/IO</strong> erişim sağlanır sağlanmaz; atropin ve rutin NaHCO₃ 2026 algoritmasından çıkarılmıştır.",
      "VF/nVT'de şok döngülerini sürdür; <strong>2. şok sonrası adrenalin 1 mg</strong>, <strong>3. şok sonrası amiodaron 300 mg veya lidokain 1–1,5 mg/kg</strong>, <strong>5. şok sonrası amiodaron 150 mg veya lidokain 0,5–0,75 mg/kg</strong>.",
      "Endotrakeal ilaç yolu kaldırılmıştır; ilaç yolu IV/IO'dur. ROSC olursa Resüsitasyon Sonrası Bakım algoritmasına geç."
    ],
    "warningFindings": [
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
        "authority": "DIRECT",
        "repeat": "3–5 dk arayla; ritim koluna göre başlangıç zamanı",
        "maxDose": "",
        "note": "Asistoli/NEA'da damar yolu açılır açılmaz; VF/nVT'de 2. şok sonrası. Resmî arrest şemalarında SKKM/ÇM telefon simgesi yoktur."
      },
      {
        "name": "Amiodaron",
        "dose": "300 mg",
        "routes": [
          "IV",
          "IO"
        ],
        "authority": "DIRECT",
        "repeat": "3. şok sonrası 300 mg; 5. şok sonrası 150 mg",
        "maxDose": "",
        "note": "300 mg: 20 ml %5 dekstroz içinde 2–3 dk; 150 mg tekrar: 10 ml %5 dekstroz içinde 2–3 dk. Telefon simgesi yok."
      },
      {
        "name": "Lidokain",
        "dose": "1–1,5 mg/kg",
        "routes": [
          "IV",
          "IO"
        ],
        "authority": "DIRECT",
        "repeat": "3. şok sonrası 1–1,5 mg/kg; 5. şok sonrası 0,5–0,75 mg/kg tekrar",
        "maxDose": "",
        "note": "Amiodarona alternatif; 2% lidokain IV/IO. Resmî şemada SKKM/ÇM telefon simgesi yok."
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
    "title": "Resüsitasyon Sonrası Bakım",
    "subtitle": "Spontan dolaşım geri döndükten sonra (ROSC)",
    "category": "Resüsitasyon",
    "icon": "🔄",
    "accent": "#288a73",
    "soft": "#e4f7f0",
    "code": "SB-ASH-Y-12",
    "page": "23",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-12"
      ],
      "page": "23",
      "codeStatus": "verified"
    },
    "summary": "Spontan dolaşım geri döndüğünde oksijenasyon, hemodinami, ısı ve disritmi kontrolünü bağımsız resüsitasyon sonrası bakım algoritmasıyla yönet.",
    "criticalActions": [
      "Hava yolu/ventilasyonu yeniden değerlendir, SpO₂ ve kapnografiyi uygun şekilde izle.",
      "12 derivasyon EKG, kan basıncı ve ritim monitörizasyonunu başlat.",
      "Hipotansiyonu hızla tanı; 2026 şemasındaki hedef MAP ≥65 mmHg ve vücut ısısı 32–37,5°C aralığını gözet."
    ],
    "quick": [
      "Yeniden değerlendir: monitörizasyon, 12 derivasyon EKG; spontan solunum yoksa oksijenizasyon/ventilasyonu sürdür. <strong>SpO₂ %94–98</strong>, ateş <strong>32–37,5°C</strong>, 2 dk'da bir nabız ve ritim kontrolü.",
      "Hipotansiyonda nedeni araştır; hedef <strong>MAP ≥65 mmHg</strong>. Hipotansiyon sürerse SKKM/ÇM ile %0,9 NaCl infüzyonu ve/veya adrenalin 2–10 mcg/dk ya da dopamin 5–20 mcg/kg/dk IV infüzyonu.",
      "Prematür ventriküler kontraksiyon / bigemini / couplet / triplet / R-on-T / sürekli olmayan VT varsa SKKM/ÇM ile <strong>lidokain 1–1,5 mg/kg IV bolus</strong> veya <strong>amiodaron 150 mg IV, %5 dekstroz ile 10 dk</strong>.",
      "Bradiaritmi, hipo/hiperglisemi, taşiaritmi veya nöbette ilgili algoritmaya; tekrar arrestte ilgili ritim algoritmasına geç."
    ],
    "warningFindings": [
      "MAP <65 mmHg / devam eden hipotansiyon",
      "Tekrarlayan malign aritmi",
      "Tekrar arrest",
      "Kontrolsüz hipoksi/hipoventilasyon",
      "Nöbet"
    ],
    "meds": [
      {
        "name": "%0,9 NaCl",
        "dose": "İnfüzyon",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "Hipotansiyon devam ediyorsa",
        "maxDose": "",
        "note": "ROSC sonrası MAP <65 mmHg / devam eden hipotansiyonda, resmî şemadaki telefon simgeli basamakta."
      },
      {
        "name": "Adrenalin",
        "dose": "2–10 mcg/dk",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "Titrasyon",
        "maxDose": "",
        "note": "ROSC sonrası devam eden hipotansiyonda infüzyon; SKKM/ÇM telefon simgeli basamak."
      },
      {
        "name": "Dopamin",
        "dose": "5–20 mcg/kg/dk",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "Titrasyon",
        "maxDose": "",
        "note": "ROSC sonrası devam eden hipotansiyonda alternatif infüzyon; SKKM/ÇM telefon simgeli basamak."
      },
      {
        "name": "Amiodaron",
        "dose": "150 mg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "10 dakikada",
        "maxDose": "",
        "note": "Ventriküler ektopi/sürekli olmayan VT basamağında; %5 dekstroz ile 10 dk. SKKM/ÇM telefon simgeli."
      },
      {
        "name": "Lidokain",
        "dose": "1–1,5 mg/kg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "IV bolus",
        "maxDose": "",
        "note": "Ventriküler ektopi/sürekli olmayan VT basamağında amiodarona alternatif; SKKM/ÇM telefon simgeli."
      }
    ],
    "decision": {
      "q": "ROSC sonrası MAP <65 mmHg, ventriküler ektopi veya başka bir komplikasyon var mı?",
      "yes": "Telefon simgeli ilaç basamaklarında SKKM/ÇM kararıyla ilerle; bradi/taşiaritmi, glisemi ve nöbet için ilgili algoritmaya geç.",
      "no": "SpO₂ %94–98, MAP ≥65 mmHg, 32–37,5°C ısı aralığı, EKG ve vital takibi sürdür."
    }
  },
  {
    "id": "hypoglycemia",
    "title": "Hipoglisemi",
    "subtitle": "Diyabetik Aciller • hipoglisemi kolu",
    "category": "Metabolik",
    "icon": "🍬",
    "accent": "#c98517",
    "soft": "#fff4db",
    "code": "SB-ASH-Y-17",
    "page": "31",
    "uiFeatured": true,
    "population": "adult",
    "uiPriority": "critical",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-17"
      ],
      "page": "31",
      "codeStatus": "verified"
    },
    "summary": "Glukoz <60 mg/dL veya klinik hipoglisemide bilinç durumuna göre oral glikoz/dekstroz; 2026 şemasında IV dekstroz doğrudan uygulama basamağıdır.",
    "criticalActions": [
      "Kan glikozunu hemen ölç; hipoglisemi bulgularını eş zamanlı değerlendir.",
      "Bilinç açık ve güvenli yutabiliyorsa ağızdan şekerli sıvı ver; kan şekerini/kliniği kontrol et ve gerekirse 15 dk arayla tekrarla.",
      "Bilinç kapalı / oral alamıyorsa %10–%20 dekstrozdan 25 g glikozu IV bolus ver; yeniden glukoz ölç."
    ],
    "quick": [
      "<strong>Kan şekerini ölç.</strong> Glukoz <60 mg/dL ve/veya klinik hipoglisemi varsa bilinç durumunu değerlendir.",
      "Bilinç açık ve aspirasyon riski yoksa ağızdan şekerli sıvı ver; <strong>kan şekerini ve kliniği kontrol et, gerekirse 15 dk arayla tekrarla.</strong>",
      "Bilinç kapalı/oral alamıyorsa <strong>%10–%20 dekstrozdan 25 g glikoz IV bolus.</strong>",
      "Glukoz <60 mg/dL sürüyorsa 5–10 dk arayla tekrar değerlendir/uygula; klinik düzelmeyi seri izle."
    ],
    "warningFindings": [
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
      "yes": "Ağızdan şekerli sıvı → kan şekeri/klinik kontrolü → gerekirse 15 dk arayla tekrar.",
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
    "page": "32",
    "uiFeatured": true,
    "population": "adult",
    "uiPriority": "critical",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-18"
      ],
      "page": "32",
      "codeStatus": "verified"
    },
    "summary": "2026 algoritması Cincinnati/FAST yerine BEFAST taramasını kullanır; son normal zaman ve uygun inme merkezi seçimi kritik karar noktalarıdır.",
    "criticalActions": [
      "BEFAST ile hızlı inme taraması yap ve hastanın son normal görüldüğü zamanı kesinleştir.",
      "Aspirasyon/üst hava yolu obstrüksiyonu, hipoventilasyon ve travmayı değerlendir; SpO₂ %94–98 hedefle, gerekirse PBV ile destekle; kan glikozunu ölç.",
      "Hipoperfüzyon yoksa baş ve gövdeyi 30° yükselt; uygun inme merkezine nakli başlat ve yüksek tansiyonu rutin olarak düşürme."
    ],
    "quick": [
      "<strong>BEFAST:</strong> Balance, Eyes, Face, Arms, Speech, Time ile tarama yap.",
      "SpO₂ <strong>%94–98</strong> hedefle; gerekirse PBV ile solunumu destekle. Kan glikozunu ölç ve hipoglisemiyi dışla.",
      "Hipoperfüzyon bulgusu yoksa <strong>baş ve gövdeyi 30° yükselt.</strong> Tansiyon normalin üstünde olsa da rutin olarak düşürme.",
      "Son normal görüldüğü zamandan itibaren trombolitik için ilk 4,5 saat; endovasküler girişim için ilk 6 saat kriterlerini ve uygun merkez seçimini dikkate al."
    ],
    "warningFindings": [
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
    "title": "Nöbet / Konvülziyon",
    "subtitle": "Status epileptikus yönetimi • SKKM/ÇM ilaç basamakları",
    "category": "Nörolojik",
    "icon": "〽️",
    "accent": "#7556a8",
    "soft": "#f1eaff",
    "code": "SB-ASH-Y-19",
    "page": "33",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-19"
      ],
      "page": "33",
      "codeStatus": "verified"
    },
    "summary": "Nöbeti güvenli ABC yaklaşımıyla yönet; devam eden nöbette resmî şemadaki benzodiazepin ve ikinci basamak antiepileptiklerin tamamı SKKM/ÇM telefon simgelidir.",
    "criticalActions": [
      "Hastayı yaralanmadan koru; hava yolunu aç, oksijenasyon/ventilasyonu değerlendir.",
      "Kan glikozunu ölç ve düzeltilebilir nedeni ara.",
      "Devam eden nöbette ilk benzodiazepin basamağını geciktirme; dirençliyse 2026 ikinci basamak seçeneklerine geç."
    ],
    "quick": [
      "Acil olgu yönetimi; hava yolunu sağla, <strong>SpO₂ %94–98</strong> hedefle, damar yolu (DAKŞ), kan glikozu ve kardiyak monitörizasyonu yap.",
      "Nöbet sürüyorsa <strong>SKKM/ÇM ile diazepam 5 mg IV yavaş puşe</strong> veya <strong>midazolam 5 mg IV / 10 mg IM</strong>.",
      "Ardından SKKM/ÇM ile <strong>fenitoin 20 mg/kg</strong> (infüzyon hızı resmî şemada en fazla 25 mg/kg/dk) veya <strong>valproik asit 40 mg/kg IV infüzyon</strong> veya <strong>levetirasetam 60 mg/kg IV infüzyon</strong>.",
      "5 dk sonra nöbet devam ediyorsa SKKM/ÇM ile <strong>diazepam 5 mg IV yavaş puşe</strong> veya <strong>midazolam 5 mg IV / 10 mg IM</strong> tekrar; devam ederse ileri hava yolu için hazırlan."
    ],
    "warningFindings": [
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
        "authority": "SKKM",
        "repeat": "İkinci basamak sonrası 5 dk sonra nöbet sürerse 5 mg IV tekrar",
        "maxDose": "",
        "note": "IV yavaş puşe; ilk ve 5 dk sonraki tekrar basamakları resmî şemada SKKM/ÇM telefon simgelidir."
      },
      {
        "name": "Midazolam",
        "dose": "5 mg IV veya 10 mg IM",
        "routes": [
          "IV",
          "IM"
        ],
        "authority": "SKKM",
        "repeat": "İkinci basamak sonrası 5 dk sonra nöbet sürerse 5 mg IV / 10 mg IM tekrar",
        "maxDose": "",
        "note": "İlk ve 5 dk sonraki tekrar basamakları resmî şemada SKKM/ÇM telefon simgelidir."
      },
      {
        "name": "Fenitoin",
        "dose": "20 mg/kg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "İkinci basamak",
        "maxDose": "",
        "note": "20 mg/kg IV; resmî şemada infüzyon hızı en fazla 25 mg/kg/dk olarak yazılıdır. SKKM/ÇM telefon simgeli."
      },
      {
        "name": "Valproik asit",
        "dose": "40 mg/kg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "İkinci basamak",
        "maxDose": "",
        "note": "40 mg/kg IV infüzyon; ikinci basamak ve SKKM/ÇM telefon simgeli."
      },
      {
        "name": "Levetirasetam",
        "dose": "60 mg/kg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "İkinci basamak",
        "maxDose": "",
        "note": "60 mg/kg IV infüzyon; ikinci basamak ve SKKM/ÇM telefon simgeli."
      }
    ],
    "decision": {
      "q": "İlk benzodiazepin ve ikinci basamak antiepileptik sonrası nöbet sürüyor mu?",
      "yes": "5 dk sonra SKKM/ÇM ile diazepam veya midazolam tekrarını uygula; nöbet sürerse ileri hava yolu uygulaması için hazırlan.",
      "no": "Postiktal dönemde hava yolu açıklığına dikkat et ve nakli sürdür."
    }
  },
  {
    "id": "burn",
    "title": "Termal Yanık",
    "subtitle": "Alan • inhalasyon • sıvı • ağrı",
    "category": "Travma",
    "icon": "🔥",
    "accent": "#df6d38",
    "soft": "#fff0e7",
    "code": "SB-ASH-Y-28",
    "page": "50",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-28"
      ],
      "page": "48–50",
      "codeStatus": "verified"
    },
    "summary": "Termal yanma sürecini durdur, inhalasyon/hava yolu riskini erken tanı, yanık alanını değerlendir ve 2026 sıvı-ağrı yaklaşımına göre nakli planla.",
    "criticalActions": [
      "Yanma sürecini durdur ve olay yeri güvenliğini sağla.",
      "Hava yolu/solunum sıkıntısı, inhalasyon yanığı ve boyunda sirküler yanık açısından erken değerlendir.",
      "Yanık alanını ve derecesini belirle; şok bulgusu varsa ilgili şok algoritmasına geç."
    ],
    "quick": [
      "Yanma sürecini durdur; acil olgu yönetimini uygula.",
      "İnhalasyon yanığı/hava yolu ödemi riski varsa oksijenizasyon ve ventilasyonu destekle, erken ileri hava yolunu düşün.",
      "Yanık alanını değerlendirmek için uygun yüzdelik yöntem kullan; yanık yüzeyini steril örtüyle koru.",
      "<strong>Ringer Laktat başla.</strong> Şok yoksa 1 saatten kısa nakilde 500 mL Ringer Laktat; daha uzun nakilde Parkland yaklaşımı <strong>(2 × VYA% × kg) / 16 mL/saat</strong>. Ağrı için fentanil 1 mcg/kg IV yavaş/IM, SKKM/ÇM ile."
    ],
    "warningFindings": [
      "Yüz/boyun yanığı, inhalasyon bulgusu, stridor",
      "Elektrik veya kimyasal yanık — ilgili ayrı algoritmaya geç",
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
        "note": "2026 Ek-2 yanık algoritmasında ağrı için 1 mcg/kg IV yavaş veya IM; SKKM/ÇM ile."
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
    "title": "Travmalı Hastada Acil Olgu Yönetimi",
    "subtitle": "xABCDE • kanama • hızlı nakil",
    "category": "Travma",
    "icon": "🛡️",
    "accent": "#a74d4d",
    "soft": "#faeaea",
    "code": "SB-ASH-Y-38",
    "page": "67",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "critical",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-21",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-38",
        "SB-ASH-Y-02"
      ],
      "page": "65–67 / 6–7",
      "codeStatus": "verified"
    },
    "summary": "Travma mekanizmasını değerlendir; hayatı tehdit eden dış kanamayı hava yolundan önce kontrol et, ardından hava yolu-solunum-dolaşım-bilinç-tam vücut değerlendirmesi ve hızlı nakli sürdür.",
    "criticalActions": [
      "Olay yeri yönetimini uygula, güvenliği sağla ve travma mekanizmasını değerlendir.",
      "Hayatı tehdit eden dış kanama varsa doğrudan bası uygula.",
      "Ardından hava yolu/servikal koruma, solunum, dolaşım, bilinç ve tam vücut değerlendirmesini sistematik tamamla."
    ],
    "quick": [
      "<strong>Kanama:</strong> hayatı tehdit eden dış kanama varsa doğrudan bası uygula.",
      "<strong>Hava yolu / solunum:</strong> servikal-spinal immobilizasyonu gözet; hava yolunu aç, solunumu değerlendir ve yaşamı tehdit eden toraks sorunlarına müdahale et.",
      "<strong>Dolaşım:</strong> nabız ve perfüzyonu değerlendir; pelvis travması/şüphesinde pelvisi sabitle ve hipovolemik şok algoritmasına gerektiğinde geç.",
      "<strong>Bilinç / ekspojur:</strong> GKS-pupilleri değerlendir, tüm giysileri çıkararak vücut kontrolünü tamamla, hipotermiden koru; ikincil değerlendirmeyi ve immobilizasyonu nakil sırasında sürdür."
    ],
    "warningFindings": [
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
