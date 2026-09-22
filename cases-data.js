const APP_META = {
  "schemaVersion": 4,
  "contentVersion": "EK2-2026.08.25-practitioner-authority-4-2026.09.22",
  "productVersion": "0.18",
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
  "practitionerAuthority": {
    "ATT_AABT": {
      "label": "ATT + AABT",
      "officialLabel": "Acil Tıp Teknisyeni / Teknikeri",
      "description": "Resmî Ek-2 turkuaz kutu: Acil Tıp Teknisyeni ve Acil Tıp Teknikeri için uygulayıcı basamağı.",
      "symbol": "■"
    },
    "AABT": {
      "label": "AABT",
      "officialLabel": "Acil Tıp Teknikeri",
      "description": "Resmî Ek-2 turuncu kutu: Acil Tıp Teknikeri uygulayıcı basamağı. Saha112 kısa etiketi AABT olarak gösterilir.",
      "symbol": "■"
    },
    "UNVERIFIED": {
      "label": "Doğrulanmadı",
      "officialLabel": "Uygulayıcı yetkisi doğrulanmadı",
      "description": "Resmî kutu rengi henüz görsel olarak doğrulanmadı; ATT/AABT için çıkarım yapılmaz.",
      "symbol": "□"
    }
  },
  "routes": [
    "IV",
    "IM",
    "IO",
    "SL",
    "PO",
    "INHALER",
    "NEB",
    "IN",
    "BUCCAL",
    "RECTAL",
    "TOPICAL",
    "SC",
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
    "OTHER": "Şemaya göre",
    "INHALER": "İnhaler",
    "SC": "Subkutan (SC)"
  },
  "source": {
    "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
    "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
    "effectiveDate": "2026-08-25",
    "officialPageDate": "2026-09-11"
  },
  "clinicalAudit": {
    "scope": "21 yetişkin vaka",
    "source": "T.C. Sağlık Bakanlığı Ek-2 Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
    "effectiveDate": "2026-08-25",
    "officialPageDate": "2026-09-11",
    "reviewedAt": "2026-09-22"
  },
  "authorityAudit": {
    "source": "25.08.2026 tarihli Ek-2 resmî PDF",
    "reviewedAt": "2026-09-22",
    "method": "Telefon/SKKM-ÇM simgesi görsel olarak doğrulandı",
    "scope": [
      "SB-ASH-Y-07",
      "SB-ASH-Y-10",
      "SB-ASH-Y-11",
      "SB-ASH-Y-12",
      "SB-ASH-Y-19",
      "SB-ASH-Y-04",
      "SB-ASH-Y-05",
      "SB-ASH-Y-13",
      "SB-ASH-Y-14"
    ]
  },
  "integrityAudit": {
    "source": "25.08.2026 tarihli Ek-2 resmî PDF",
    "reviewedAt": "2026-09-22",
    "scope": "21 yetişkin kartında başlık/kod/PDF sayfa izi ve kaynakla doğrulanan klinik basamaklar",
    "status": "verified"
  },
  "expansionAudit": {
    "reviewedAt": "2026-09-22",
    "added": [
      "SB-ASH-Y-04",
      "SB-ASH-Y-13",
      "SB-ASH-Y-14",
      "SB-ASH-Y-16"
    ],
    "source": "25.08.2026 tarihli Ek-2 resmî PDF; algoritma ve anahtar nokta sayfaları görsel olarak doğrulandı",
    "adultPack3": {
      "reviewedAt": "2026-09-22",
      "source": "25.08.2026 tarihli Ek-2 resmî PDF",
      "algorithmCodes": [
        "SB-ASH-Y-29",
        "SB-ASH-Y-30",
        "SB-ASH-Y-31",
        "SB-ASH-Y-32"
      ]
    },
    "adultPack4": {
      "reviewedAt": "2026-09-22",
      "source": "25.08.2026 tarihli Ek-2 resmî PDF",
      "algorithmCodes": [
        "SB-ASH-Y-33",
        "SB-ASH-Y-34",
        "SB-ASH-Y-35",
        "SB-ASH-Y-36",
        "SB-ASH-Y-37"
      ]
    }
  },
  "adultExpansion2": {
    "reviewedAt": "2026-09-22",
    "algorithms": [
      "SB-ASH-Y-15",
      "SB-ASH-Y-20",
      "SB-ASH-Y-21",
      "SB-ASH-Y-25"
    ],
    "source": "25.08.2026 tarihli Ek-2 resmî PDF"
  },
  "practitionerAudit": {
    "reviewedAt": "2026-09-22",
    "source": "25.08.2026 tarihli Ek-2 resmî PDF",
    "method": "Resmî turkuaz/turuncu uygulayıcı kutu rengi sayfa görüntüsünden doğrulandı; SKKM/ÇM telefon simgesi ayrı tutuldu",
    "legend": {
      "ATT_AABT": "Turkuaz — Acil Tıp Teknisyeni / Teknikeri",
      "AABT": "Turuncu — Acil Tıp Teknikeri"
    },
    "verifiedMedicationCases": [
      "SB-ASH-Y-04",
      "SB-ASH-Y-05",
      "SB-ASH-Y-06",
      "SB-ASH-Y-07",
      "SB-ASH-Y-08",
      "SB-ASH-Y-09",
      "SB-ASH-Y-10",
      "SB-ASH-Y-11",
      "SB-ASH-Y-12",
      "SB-ASH-Y-13",
      "SB-ASH-Y-14",
      "SB-ASH-Y-15",
      "SB-ASH-Y-17",
      "SB-ASH-Y-19",
      "SB-ASH-Y-21",
      "SB-ASH-Y-22",
      "SB-ASH-Y-23",
      "SB-ASH-Y-24",
      "SB-ASH-Y-28",
      "SB-ASH-Y-34",
      "SB-ASH-Y-35",
      "SB-ASH-Y-36",
      "SB-ASH-Y-37",
      "SB-ASH-Y-39"
    ],
    "adultMedicationCardsComplete": true
  },
  "adultCoverage": {
    "reviewedAt": "2026-09-22",
    "verifiedCaseCards": 37,
    "coveredAlgorithmRange": "SB-ASH-Y-02–Y-41",
    "foundationalProtocolPending": "SB-ASH-Y-01 Olay Yeri Yönetimi"
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
        "note": "Akut başlangıç + yaşamı tehdit eden bulguda. Hipoperfüzyon sürerse 5 dk içinde tekrar.",
        "practitionerAuthority": "AABT"
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
        "note": "Anafilakside dolaşım desteği; şemadaki sıraya göre.",
        "practitionerAuthority": "AABT"
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
        "note": "Düzelme olmazsa resmî şemada SKKM/ÇM simgesiyle gösterilmiş.",
        "practitionerAuthority": "AABT"
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
        "note": "Anafilaksi Y-22 ileri basamağındaki antihistaminikler; resmî telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Salbutamol",
        "dose": "2,5–5 mg",
        "routes": [
          "OTHER"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Anafilaksi Y-22'de bronkospazm için; resmî kutu uygulama yolunu belirtmediğinden yol türetilmemiştir.",
        "practitionerAuthority": "AABT"
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
        "note": "Resmî şemada profilaktik basamak olarak gösterilmiş.",
        "practitionerAuthority": "AABT"
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
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-26",
        "SB-ASH-Y-22"
      ],
      "page": "44–45 / 37",
      "codeStatus": "verified"
    },
    "severityView": {
      "title": "Klinik görünüm",
      "note": "Bu ayrım hızlı eğitim görünümüdür; resmî arı sokması şemasında ayrı bir üçlü tedavi sınıflaması değildir."
    }
  },
  {
    "id": "allergic-reaction",
    "title": "Alerjik Reaksiyon",
    "subtitle": "Hayatı tehdit eden bulgu? • Anafilaksiye geçiş",
    "category": "Alerji",
    "icon": "🌿",
    "accent": "#7b6a9e",
    "soft": "#f1edf8",
    "code": "SB-ASH-Y-21",
    "page": "35",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "summary": "Akut başlangıçlı alerjik tabloda hayatı tehdit eden hava yolu, solunum veya dolaşım bulgusu varsa doğrudan Anafilaksi algoritmasına geç; yoksa destek, sıvı ve SKKM/ÇM ilaç basamaklarını uygula.",
    "criticalActions": [
      "Acil olgu yönetimini uygula ve akut başlangıçlı hayatı tehdit eden bulgu var mı değerlendir.",
      "Hayatı tehdit eden hava yolu/solunum/dolaşım bulgularından herhangi biri varsa Anafilaksi algoritmasına geç.",
      "Bu bulgular yoksa hava yolunu açık tut, O₂ desteği ver, damar yolu aç; SpO₂, EKG ve kan basıncını monitörize et."
    ],
    "quick": [
      "<strong>Hayatı tehdit eden bulgu varsa:</strong> anjiyoödem/stridor/hırıltılı solunum; takipne-wheezing-siyanoz-SpO₂ <%90-konfüzyon; soluk cilt/hipotansiyon/koma → <strong>Anafilaksi</strong>.",
      "Hayatı tehdit eden bulgu yoksa hava yolu + O₂ + damar yolu + SpO₂/EKG/KB takibi.",
      "<strong>Doğrudan:</strong> %0,9 NaCl 500 mL bolus.",
      "<strong>SKKM/ÇM:</strong> feniramin maleat 45,5 mg IV veya difenhidramin 25–50 mg IV yavaş puşe; profilaktik metilprednizolon 1–2 mg/kg IV (maks. 125 mg)."
    ],
    "warningFindings": [
      "Anjiyoödem, stridor veya hırıltılı solunum",
      "Takipne, wheezing, siyanoz, SpO₂ <%90 veya konfüzyon",
      "Soluk cilt, hipotansiyon veya koma",
      "Anjiyoödem varlığında erken ileri hava yolu hazırlığı gereksinimi"
    ],
    "meds": [
      {
        "name": "%0,9 NaCl",
        "dose": "500 mL",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "Bolus",
        "maxDose": "",
        "note": "Hayatı tehdit eden bulgu yok dalında, resmî şemada telefon simgesi olmayan sıvı basamağı.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Feniramin maleat veya Difenhidramin",
        "dose": "45,5 mg / 25–50 mg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Alternatif antihistaminikler: feniramin maleat 45,5 mg IV veya difenhidramin 25–50 mg IV yavaş puşe; telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Metilprednizolon",
        "dose": "1–2 mg/kg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "125 mg",
        "note": "Resmî şemada profilaktik olarak ve SKKM/ÇM telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Akut başlangıçlı hayatı tehdit eden bulgu var mı?",
      "yes": "Anafilaksi algoritmasına geç.",
      "no": "Hava yolu/O₂/IV/monitörizasyon → %0,9 NaCl 500 mL → SKKM/ÇM antihistaminik ve profilaktik metilprednizolon."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-21"
      ],
      "page": "35"
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
        "note": "İlk kritik ilaç; 2026 Ek-2'de doğrudan uygulama basamağı.",
        "practitionerAuthority": "AABT"
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
        "note": "Düzelme olmazsa.",
        "practitionerAuthority": "AABT"
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
        "note": "Dolaşım desteği.",
        "practitionerAuthority": "AABT"
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
        "note": "Resmî şemadaki ileri basamak.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Salbutamol",
        "dose": "2,5–5 mg",
        "routes": [
          "OTHER"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Bronkospazm için 2,5–5 mg; resmî Y-22 kutusu uygulama yolunu belirtmediğinden yol türetilmemiştir.",
        "practitionerAuthority": "AABT"
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
        "note": "Profilaktik basamak.",
        "practitionerAuthority": "AABT"
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
      "reviewedAt": "2026-09-22",
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
      "<strong>SpO₂ >%93</strong> olacak şekilde titre ederek O₂ ver; gerekirse PBV ile destekle.",
      "<strong>Damar yolu aç ve %0,9 NaCl (DAKŞ).</strong> Atağın derecesini belirle.",
      "<strong>Hafif-orta:</strong> salbutamol 4–8 puf inhaler veya 2,5–5 mg nebül. <strong>Ağır:</strong> salbutamol 2,5–5 mg + ipratropium bromür 500 mcg nebül. 20 dk sonra düzelme yoksa SKKM/ÇM basamağına geç."
    ],
    "warningFindings": [
      "Cümle kuramama, ortopne",
      "Solunum sayısı >30/dk veya belirgin yardımcı kas kullanımı",
      "Bilinç bulanıklığı ve sessiz toraks (ölümcül atak)"
    ],
    "meds": [
      {
        "name": "Salbutamol (ilk basamak)",
        "dose": "4–8 puf veya 2,5–5 mg",
        "routes": [
          "INHALER",
          "NEB"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Hafif-orta atakta ilk bronkodilatör; ağır atakta nebül 2,5–5 mg. İlk basamakta SKKM/ÇM telefon simgesi yok.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "İpratropium bromür (ağır ilk basamak)",
        "dose": "500 mcg",
        "routes": [
          "NEB"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Ağır atakta ilk salbutamol nebülü ile birlikte; ilk basamakta SKKM/ÇM telefon simgesi yok.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Salbutamol + İpratropium (20 dk sonrası)",
        "dose": "Salbutamol ilk doz şemasına göre + İpratropium 500 mcg",
        "routes": [
          "INHALER",
          "NEB"
        ],
        "authority": "SKKM",
        "repeat": "20 dk arayla",
        "maxDose": "maksimum 3 uygulama",
        "note": "20 dk sonra düzelme yoksa telefon simgeli basamak. Hafif-ortada ipratropium inhaler; ağır atakta nebül.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Metilprednizolon",
        "dose": "40 mg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "20 dk sonra düzelme yoksa resmî şemadaki telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Magnezyum sülfat",
        "dose": "1–2 g",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "%0,9 NaCl içinde 20–30 dk",
        "maxDose": "",
        "note": "Ölümcül astım atağında, ileri hava yolu hazırlığı ile birlikte telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
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
      "SpO₂ >%93 olacak şekilde titre ederek O₂ ver; gerekirse PBV ile destekle.",
      "İlk bronkodilatörü geciktirme; 20 dk sonra düzelme yoksa SKKM/ÇM telefon simgeli tekrar/steroid basamağına geç."
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
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
        "note": "Alerji ve aktif kanama kontraendikasyonlarını kontrol et.",
        "practitionerAuthority": "AABT"
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
        "note": "Hipotansiyon ve bradikardi yoksa; 3–5 dk arayla toplam 3 doz.",
        "practitionerAuthority": "AABT"
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
        "note": "Göğüs ağrısı devam ediyor ve hasta tarafından tolere edilemiyorsa.",
        "practitionerAuthority": "AABT"
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
      "reviewedAt": "2026-09-22",
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
    "id": "koah",
    "title": "KOAH",
    "subtitle": "Hafif-orta / ağır • SpO₂ %88–92",
    "category": "Solunum",
    "icon": "🫁",
    "accent": "#347fa0",
    "soft": "#e3f4f8",
    "code": "SB-ASH-Y-04",
    "page": "10",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "summary": "KOAH alevlenmesinde hastayı rahat pozisyonda tut, SpO₂ %88–92 hedefle; ilk bronkodilatörü uygula ve 20 dk sonraki SKKM/ÇM tedavi basamağını resmî akış sırasına göre uygula.",
    "severityView": {
      "title": "KOAH atak şiddeti",
      "note": "Resmî KOAH Anahtar Noktalarındaki hafif, orta ve ağır akut solunum yetmezliği ölçütleri."
    },
    "severity": {
      "mild": {
        "label": "Hafif",
        "bullets": [
          "Solunum sayısı <24/dk",
          "Kalp hızı <95/dk",
          "Oda havasında SpO₂ ≥%92 veya hastanın rutin aldığı O₂ seviyesinde",
          "O₂ desteğine ihtiyaç olmaması",
          "Aksesuar solunum kasları kullanımı yok",
          "Bilinç değişikliği yok"
        ],
        "action": "Rahat pozisyon + SpO₂ %88–92 hedefli O₂; salbutamol + ipratropium ilk basamak tedavisini uygula. 20 dk sonraki telefon simgeli tedavi basamağı SKKM/ÇM ile uygulanır."
      },
      "moderate": {
        "label": "Orta",
        "bullets": [
          "Solunum sayısı >24/dk",
          "Kalp hızı >95/dk",
          "Oda havasında SpO₂ <%92 veya hastanın rutin aldığı O₂ seviyesinde",
          "Oksijen desteği ile hipoksemi görülmemesi",
          "Aksesuar solunum kasları kullanımı mevcut",
          "Bilinç değişikliği yok"
        ],
        "action": "İlk bronkodilatörleri uygula; 20 dk sonraki telefon simgeli salbutamol + ipratropium + metilprednizolon basamağı SKKM/ÇM ile uygulanır."
      },
      "severe": {
        "label": "Ağır",
        "bullets": [
          "Solunum sayısı >24/dk",
          "Kalp hızı >95/dk",
          "Oda havasında SpO₂ <%92 veya hastanın rutin aldığı O₂ seviyesinde",
          "Oksijen desteği ile hipokseminin düzelmemesi",
          "Aksesuar solunum kasları kullanımı mevcut",
          "Bilinç değişikliği mevcut"
        ],
        "action": "İlk bronkodilatörleri uygula; 20 dk sonraki telefon simgeli tedavi basamağı SKKM/ÇM ile uygulanır. Tedaviye yanıt vermeyen ağır hastada SKKM/ÇM ile ileri hava yolu hazırlığı ve tolere ediyorsa NIMV değerlendir."
      }
    },
    "criticalActions": [
      "Acil olgu yönetimini uygula; hastayı rahat ettiği, tercihen oturur pozisyonda tut.",
      "SpO₂ %88–92 olacak şekilde titre ederek O₂ ver; gerekirse PBV ile solunumu destekle.",
      "Hafif-orta/ağır ayrımını yap ve salbutamol + ipratropium ilk basamağını geciktirme."
    ],
    "quick": [
      "Rahat/tercihen oturur pozisyon; <strong>SpO₂ %88–92</strong> hedefli O₂, gerekirse PBV.",
      "<strong>İlk basamak:</strong> salbutamol 4–8 puf veya 2,5–5 mg nebül + ipratropium bromür 500 mcg nebül birlikte.",
      "<strong>20 dk sonra SKKM/ÇM:</strong> salbutamol 2,5 mg + ipratropium bromür 500 mcg; 20 dk arayla en fazla 3 kez + metilprednizolon 40 mg IV.",
      "<strong>Ağır ve yanıtsız:</strong> SKKM/ÇM ile ileri hava yolu için hazırlık; tolere eden hastada non-invaziv mekanik ventilasyonu değerlendir."
    ],
    "warningFindings": [
      "O₂ desteğine rağmen hipokseminin düzelmemesi",
      "Aksesuar solunum kası kullanımı / solunum kas yorgunluğu",
      "Bilinç değişikliği",
      "Hemodinamik instabilite veya ventriküler/supraventriküler aritmi"
    ],
    "meds": [
      {
        "name": "Salbutamol (ilk basamak)",
        "dose": "4–8 puf veya 2,5–5 mg",
        "routes": [
          "INHALER",
          "NEB"
        ],
        "authority": "DIRECT",
        "practitionerAuthority": "AABT",
        "repeat": "",
        "maxDose": "",
        "note": "İpratropium bromür 500 mcg nebül ile birlikte; ilk basamakta SKKM/ÇM telefon simgesi yok."
      },
      {
        "name": "İpratropium bromür (ilk basamak)",
        "dose": "500 mcg",
        "routes": [
          "NEB"
        ],
        "authority": "DIRECT",
        "practitionerAuthority": "AABT",
        "repeat": "",
        "maxDose": "",
        "note": "İlk salbutamol uygulamasıyla birlikte; SKKM/ÇM telefon simgesi yok."
      },
      {
        "name": "Salbutamol + İpratropium (20 dk sonrası)",
        "dose": "2,5 mg + 500 mcg",
        "routes": [
          "NEB"
        ],
        "authority": "SKKM",
        "practitionerAuthority": "AABT",
        "repeat": "20 dk arayla",
        "maxDose": "en fazla 3 tekrar",
        "note": "20 dk sonraki resmî telefon simgeli basamak; SKKM/ÇM ile uygulanır."
      },
      {
        "name": "Metilprednizolon",
        "dose": "40 mg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "practitionerAuthority": "AABT",
        "repeat": "",
        "maxDose": "",
        "note": "20 dk sonrası telefon simgeli basamak."
      }
    ],
    "decision": {
      "q": "Ağır akut solunum yetmezliği bulguları var mı?",
      "yes": "Ağır KOAH kolunu uygula; 20 dk sonraki telefon simgeli tedavi SKKM/ÇM ile. Tedaviye yanıt vermiyorsa SKKM/ÇM ile ileri hava yolu hazırlığı ve tolere ediyorsa NIMV.",
      "no": "Hafif-orta KOAH kolunu uygula; SpO₂ %88–92 hedefini koru ve 20 dk sonraki telefon simgeli tedavi basamağını SKKM/ÇM ile sürdür."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-04"
      ],
      "page": "9–10"
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
        "note": "Orta hipotermi basamağında resmî şemada yer alır.",
        "practitionerAuthority": "AABT"
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
      "reviewedAt": "2026-09-22",
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
    "id": "hypothermic-arrest",
    "title": "Hipotermide Arrest Yönetimi",
    "subtitle": "≥60 sn nabız • ısıtma • KPR/defibrilasyon",
    "category": "Resüsitasyon",
    "icon": "❄️",
    "accent": "#387aa2",
    "soft": "#e7f3f8",
    "code": "SB-ASH-Y-25",
    "page": "43",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "critical",
    "clinicalStatus": "reviewed",
    "summary": "Vücut ısısı <35°C ve bilinç kapalıysa nabzı en az 60 sn değerlendir; arrestte KPR başlama kriterlerini, aktif/pasif ısıtmayı ve hipotermiye özgü defibrilasyon-KPR kurallarını uygula.",
    "criticalActions": [
      "Vücut ısısı <35°C ve bilinç kapalıysa nabzı en az 60 sn kontrol et.",
      "Nabız yoksa KPR başlama kriterlerini değerlendir; kriter varsa standart erişkin ileri yaşam desteğiyle birlikte pasif ve aktif ısıtma uygula.",
      "Vücut ısısı ≥35°C olana kadar KPR'yi sonlandırma; ilk defibrilasyon başarısız ve ısı <30°C ise sonraki defibrilasyonu ≥30°C'ye kadar ertele."
    ],
    "quick": [
      "Nabız varsa <strong>Hipotermi</strong> algoritmasına dön. Nabız yoksa KPR başlama kriterlerini değerlendir.",
      "KPR endikasyonu varsa standart erişkin ileri yaşam desteği + eş zamanlı pasif/aktif ısıtma; <strong>ısı ≥35°C olana kadar KPR'yi sonlandırma</strong>, >35°C'de Arrest algoritmasına geç.",
      "Kesintisiz KPR mümkün değilse: <strong><28°C: 5 dk KPR / 5 dk KPR'siz</strong>; <strong><20°C: 5 dk KPR / 10 dk KPR'siz</strong>. KPR'siz süreyi taşıma/kurtarma için kullan.",
      "KPR başlanmama kriterlerini ayrıca kontrol et: hava yolunun kar/buzla kaplı olması, >35 dk çığ altında kalma, ortam güvenliğinin sağlanamaması veya kompresyona izin vermeyecek şekilde tüm vücudun donması. SKKM/ÇM ile ECMO merkezine yönlendirmeyi düşün."
    ],
    "warningFindings": [
      "İlk defibrilasyon başarısız ve vücut ısısı <30°C — sonraki defibrilasyonu ≥30°C'ye kadar ertele",
      "Hava yolunun kar/buzla kaplı olması",
      "35 dk'dan fazla çığ altında kalma",
      "Ortam güvenliğinin sağlanamaması veya kardiyak kompresyona izin vermeyecek şekilde tüm vücudun donması"
    ],
    "meds": [],
    "decision": {
      "q": "En az 60 sn nabız kontrolünde nabız var mı?",
      "yes": "Hipotermi algoritmasına geç.",
      "no": "KPR başlama kriterlerini değerlendir; kriter varsa standart erişkin ileri yaşam desteği + pasif/aktif ısıtma ve ≥35°C'ye kadar resüsitasyon, kriter yoksa KPR'ye başlama."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-25"
      ],
      "page": "42–43"
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
        "note": "Isı çarpması şemasında; ısı stresinde 1000–2000 ml bolus.",
        "practitionerAuthority": "AABT"
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
      "reviewedAt": "2026-09-22",
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
      "reviewedAt": "2026-09-22",
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
        "note": "2026 güncellemesinde başlangıç dozu 1 mg; doğrudan uygulama olarak özetlenmiştir.",
        "practitionerAuthority": "AABT"
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
        "note": "Atropine yanıtsız semptomatik bradikardide; resmî şemada SKKM/ÇM telefon simgeli ileri basamak.",
        "practitionerAuthority": "AABT"
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
        "note": "Atropine yanıtsız semptomatik bradikardide; resmî şemada SKKM/ÇM telefon simgeli ileri basamak.",
        "practitionerAuthority": "AABT"
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
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-08"
      ],
      "page": "17",
      "codeStatus": "verified"
    },
    "summary": "Önce instabiliteyi belirle; devam eden tolere edilemeyen göğüs ağrısında fentanil basamağını, instabil hastada sedasyon + elektriksel tedaviyi, stabil hastada QRS genişliği ve düzenine göre resmî ilaç seçeneklerini uygula.",
    "criticalActions": [
      "Monitörizasyon, damar yolu ve 12 derivasyon EKG'yi başlat.",
      "Senkop/bilinç değişikliği, iskemi, şok veya akut kalp yetmezliği varsa hastayı instabil kabul et.",
      "İnstabil hastada ritim tipine göre elektriksel tedaviyi geciktirme; stabil hastada QRS genişliği ve düzenine göre ilerle."
    ],
    "quick": [
      "<strong>Hipoksemi varsa oksijen, damar yolu, monitörizasyon ve 12 derivasyon EKG.</strong> Senkop/ani bilinç değişikliği, iskemik göğüs ağrısı, şok veya akut kalp yetmezliği varsa hastayı instabil kabul et.",
      "Göğüs ağrısı devam ediyor ve hasta tarafından tolere edilemiyorsa <strong>fentanil 1 mcg/kg IV</strong> için SKKM/ÇM basamağını uygula.",
      "<strong>İnstabil:</strong> kardiyoversiyon öncesi midazolam 0,1 mg/kg IV ile sedasyon önerilir. Dar düzenli 100 J, dar düzensiz 200 J, geniş düzenli 100 J; geniş düzensizde defibrilasyon dozu. Yanıt yoksa amiodaron 300 mg IV 10 dk ve kardiyoversiyonu tekrarla.",
      "<strong>Stabil:</strong> QRS genişliği ve düzenine göre ilerle; geniş düzenlide amiodaron, torsades düşünülüyorsa magnezyum sülfat, dar düzenlide adenozin / metoprolol / diltiazem, olası AF'de metoprolol veya diltiazem seçeneklerini resmî şemaya göre uygula."
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
        "name": "Fentanil",
        "dose": "1 mcg/kg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Göğüs ağrısı devam ediyor ve hasta tarafından tolere edilemiyorsa.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Amiodaron — stabil geniş QRS",
        "dose": "150 mg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "%5 dekstroz içinde 10 dk",
        "maxDose": "",
        "note": "Stabil, geniş QRS ve düzenli ritimde ventriküler taşikardi veya belirsiz ritim basamağı.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Magnezyum sülfat",
        "dose": "2 g",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "10 dk'da",
        "maxDose": "",
        "note": "Stabil, geniş QRS ve düzensiz ritimde Torsades de Pointes düşünülüyorsa.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Adenozin",
        "dose": "6 mg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "Yanıtsızsa 2. doz 12 mg",
        "maxDose": "",
        "note": "Stabil, dar QRS ve düzenli ritimde hızlı IV puşe; ardından en az 20 mL %0,9 NaCl IV bolus.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Metoprolol",
        "dose": "5 mg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "3 kez tekrarlanabilir",
        "maxDose": "",
        "note": "Stabil dar QRS ritimlerde şemadaki uygun basamakta; adenozin yoksa veya olası atriyal fibrilasyonda.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Diltiazem",
        "dose": "0,25 mg/kg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "İkinci doz 0,35 mg/kg IV",
        "maxDose": "",
        "note": "Stabil dar QRS ritimlerde şemadaki uygun basamakta; adenozin yoksa veya olası atriyal fibrilasyonda.",
        "practitionerAuthority": "AABT"
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
        "note": "İnstabil hastada kardiyoversiyon öncesi sedasyon önerilir.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Amiodaron — kardiyoversiyon sonrası",
        "dose": "300 mg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "10 dk'da",
        "maxDose": "",
        "note": "İnstabil hastada kardiyoversiyona yanıt alınamazsa; ardından yanıtsızlık sürerse kardiyoversiyonu tekrarla.",
        "practitionerAuthority": "AABT"
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
      "reviewedAt": "2026-09-22",
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
        "note": "Asistoli/NEA'da damar yolu açılır açılmaz; VF/nVT'de 2. şok sonrası. Resmî arrest şemalarında SKKM/ÇM telefon simgesi yoktur.",
        "practitionerAuthority": "AABT"
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
        "note": "300 mg: 20 ml %5 dekstroz içinde 2–3 dk; 150 mg tekrar: 10 ml %5 dekstroz içinde 2–3 dk. Telefon simgesi yok.",
        "practitionerAuthority": "AABT"
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
        "note": "Amiodarona alternatif; 2% lidokain IV/IO. Resmî şemada SKKM/ÇM telefon simgesi yok.",
        "practitionerAuthority": "AABT"
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
      "reviewedAt": "2026-09-22",
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
        "note": "ROSC sonrası MAP <65 mmHg / devam eden hipotansiyonda, resmî şemadaki telefon simgeli basamakta.",
        "practitionerAuthority": "AABT"
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
        "note": "ROSC sonrası devam eden hipotansiyonda infüzyon; SKKM/ÇM telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
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
        "note": "ROSC sonrası devam eden hipotansiyonda alternatif infüzyon; SKKM/ÇM telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
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
        "note": "Ventriküler ektopi/sürekli olmayan VT basamağında; %5 dekstroz ile 10 dk. SKKM/ÇM telefon simgeli.",
        "practitionerAuthority": "AABT"
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
        "note": "Ventriküler ektopi/sürekli olmayan VT basamağında amiodarona alternatif; SKKM/ÇM telefon simgeli.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "ROSC sonrası MAP <65 mmHg, ventriküler ektopi veya başka bir komplikasyon var mı?",
      "yes": "Telefon simgeli ilaç basamaklarında SKKM/ÇM kararıyla ilerle; bradi/taşiaritmi, glisemi ve nöbet için ilgili algoritmaya geç.",
      "no": "SpO₂ %94–98, MAP ≥65 mmHg, 32–37,5°C ısı aralığı, EKG ve vital takibi sürdür."
    }
  },
  {
    "id": "hypovolemic-shock",
    "title": "Hipovolemik Şok",
    "subtitle": "Hemorajik / non-hemorajik • sıvı • MAP",
    "category": "Dolaşım",
    "icon": "🩸",
    "accent": "#b65454",
    "soft": "#faeaea",
    "code": "SB-ASH-Y-13",
    "page": "24",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "critical",
    "clinicalStatus": "reviewed",
    "summary": "Hemodinamik monitörizasyonu başlat; hemorajik şokta kanamayı kontrol edip düşük hacimli titrasyon, non-hemorajik şokta bolus ve yanıtsız hipotansiyonda SKKM/ÇM vazopressör basamağını uygula.",
    "criticalActions": [
      "Acil olgu yönetimi + hemodinamik monitörizasyon; EKG, tansiyon, pulse oksimetri, yüksek doz O₂, geniş damar yolu ve şok pozisyonu.",
      "Şoku hemorajik / non-hemorajik olarak ayır; hemorajik tabloda kanama kontrolünü geciktirme.",
      "Sıvı sonrası perfüzyon ve MAP'ı yeniden değerlendir; MAP <65 mmHg ve hipovolemi sürüyorsa SKKM/ÇM vazopressör basamağına geç."
    ],
    "quick": [
      "<strong>Hemorajik şok:</strong> direkt bası, sıkı bandaj/arter bası noktaları, turnike veya kanama durdurucu ajan ile kanama kontrolü.",
      "Hipotansif hemorajik hastada <strong>%0,9 NaCl veya Ringer Laktat 250–500 mL hızlı infüzyon</strong>; maksimum 1000 mL, SKB <strong>80–90 mmHg</strong> olacak şekilde titre et.",
      "<strong>Non-hemorajik şok:</strong> %0,9 NaCl veya Ringer Laktat 500–1000 mL bolusu 5–10 dk; sonra volüm durumunu kontrol et ve nedeni tanı/tedavi et. Hedef MAP 65–70 mmHg.",
      "MAP <65 mmHg ve hipovolemi sürüyor, yanıtsızsa <strong>SKKM/ÇM ile adrenalin 2–10 mcg/dk veya dopamin 5–20 mcg/kg/dk IV infüzyon.</strong>"
    ],
    "warningFindings": [
      "Taşikardi ve hipotansiyon",
      "Soğuk ekstremiteler / zayıf periferik nabızlar",
      "Kapiller geri dolum >2 sn",
      "Artan solunum hızı veya soluk-siyanotik cilt"
    ],
    "meds": [
      {
        "name": "Kristalloid — hemorajik şok",
        "dose": "250–500 mL",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "Hızlı infüzyon; yanıta göre titre et",
        "maxDose": "1000 mL",
        "note": "%0,9 NaCl veya Ringer Laktat; hedef SKB 80–90 mmHg.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Kristalloid — non-hemorajik şok",
        "dose": "500–1000 mL",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "5–10 dk bolus",
        "maxDose": "",
        "note": "%0,9 NaCl veya Ringer Laktat; bolus sonrası volüm durumunu yeniden değerlendir.",
        "practitionerAuthority": "AABT"
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
        "note": "MAP <65 mmHg ve hipovolemi devam ediyor, sıvıya yanıt alınamıyorsa telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
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
        "note": "Adrenaline alternatif; MAP <65 mmHg ve devam eden hipovolemide telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Şok hemorajik mi?",
      "yes": "Kanama kontrolü + 250–500 mL kristalloid hızlı infüzyon; maksimum 1000 mL ve SKB 80–90 mmHg hedefli titrasyon.",
      "no": "500–1000 mL kristalloid 5–10 dk bolus; nedeni tanı/tedavi et, MAP 65–70 mmHg hedefle; yanıtsız MAP <65'te SKKM/ÇM vazopressör."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-13"
      ],
      "page": "24"
    }
  },
  {
    "id": "acute-heart-failure-cardiogenic-shock",
    "title": "Kalp Yetmezliğine Bağlı Akut Akciğer Ödemi ve Kardiyojenik Şok",
    "subtitle": "Normotansif / hipertansif / kardiyojenik şok",
    "category": "Kardiyak",
    "icon": "🫀",
    "accent": "#4e67b5",
    "soft": "#e9edfb",
    "code": "SB-ASH-Y-14",
    "page": "26",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "critical",
    "clinicalStatus": "reviewed",
    "summary": "Oksijenasyon ve 12 derivasyon EKG sonrası hemodinamik profile göre normotansif dekompansasyon, hipertansif kalp yetmezliği veya kardiyojenik şok kolunda ilerle.",
    "criticalActions": [
      "Acil olgu yönetimini uygula; SpO₂ %94–98 hedefli O₂ ver, gerekirse PBV ile destekle.",
      "Kardiyak monitörizasyon ve 12 derivasyon EKG yap; yeni iskemi ve aritmiyi ara.",
      "Hastayı normotansif dekompanse kalp yetmezliği, hipertansif kalp yetmezliği veya kardiyojenik şok profiline ayır."
    ],
    "quick": [
      "<strong>Normotansif dekompanse kalp yetmezliği:</strong> SKKM/ÇM ile furosemid 20–40 mg IV.",
      "<strong>Hipertansif kalp yetmezliği:</strong> SKKM/ÇM ile izosorbid dinitrat 5 mg SL (maks. 3 doz) + furosemid 20–40 mg IV; non-invaziv mekanik ventilasyon/CPAP düşün.",
      "<strong>Kardiyojenik şok:</strong> SKKM/ÇM ile hipotansiyon için 250 mL %0,9 NaCl verilebilir.",
      "Kardiyojenik şokta SKKM/ÇM ile <strong>dopamin 2–5 mcg/kg/dk IV</strong>; gerektiğinde <strong>20 mcg/kg/dk</strong>'ya kadar titre edilebilir."
    ],
    "warningFindings": [
      "Şok bulguları, soğuk terleme ve hipotansiyon",
      "Pembe köpüklü balgam / bilateral ince raller",
      "Göğüs ağrısı veya yeni iskemi/aritmi",
      "Belirgin juguler venöz dolgunluk, periferik ödem ve ağır dispne"
    ],
    "meds": [
      {
        "name": "Furosemid",
        "dose": "20–40 mg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Normotansif dekompanse veya hipertansif kalp yetmezliği kolunda telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "İzosorbid dinitrat",
        "dose": "5 mg",
        "routes": [
          "SL"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "maksimum 3 doz",
        "note": "Hipertansif kalp yetmezliği kolunda telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "%0,9 NaCl",
        "dose": "250 mL",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "Hipotansiyon için",
        "maxDose": "",
        "note": "Kardiyojenik şok kolunda 'verilebilir' şeklinde telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Dopamin",
        "dose": "2–5 mcg/kg/dk",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "Titrasyon",
        "maxDose": "20 mcg/kg/dk",
        "note": "Kardiyojenik şok kolunda telefon simgeli IV infüzyon.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Kardiyojenik şok / hipotansiyon profili var mı?",
      "yes": "SKKM/ÇM ile 250 mL %0,9 NaCl değerlendir; dopamin 2–5 mcg/kg/dk IV, gerektiğinde 20 mcg/kg/dk'ya kadar titre et.",
      "no": "Normotansif dekompansasyonda furosemid; hipertansif profilde izosorbid dinitrat + furosemid ve CPAP/NIMV değerlendirmesi."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-14"
      ],
      "page": "25–26"
    }
  },
  {
    "id": "agitated-patient",
    "title": "Ajite Hastaya Yaklaşım",
    "subtitle": "Güvenlik • yatıştırma • neden • sedasyon",
    "category": "Genel",
    "icon": "⚠️",
    "accent": "#8a6a42",
    "soft": "#f7efe3",
    "code": "SB-ASH-Y-15",
    "page": "28",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "summary": "Önce olay yeri güvenliğini ve sözel yatıştırmayı sağla; kontrol sağlanmazsa güvenli alana çekil, SKKM/ÇM ve kolluk desteğiyle fiziksel/ilaçla kısıtlama basamaklarına ilerle.",
    "criticalActions": [
      "Olay yeri güvenliğini ve gerekli çevresel önlemleri değerlendir; güvenlik yoksa güvenli bölgeye çekil, SKKM/ÇM'yi ara ve kolluk kuvveti iste.",
      "Uygun iletişimle yatıştırmaya çalış; kontrol sağlanırsa nedeni travmatik / non-travmatik olarak değerlendir.",
      "Kontrol sağlanmıyorsa veya nedene yönelik tedaviye rağmen ajitasyon sürüyorsa kollukla fiziksel kısıtlama ve SKKM/ÇM ile sedasyon basamağına geç."
    ],
    "quick": [
      "<strong>Yatıştırma:</strong> uygun iletişimle kontrol sağlamaya çalış.",
      "Kontrol sağlanırsa nedeni değerlendir: <strong>travmatik</strong> ise Travmalı Hastada Acil Olgu Yönetimi; <strong>non-travmatik</strong> ise nedene yönelik tedavi.",
      "Güvenlik yoksa veya kontrol sağlanmıyorsa güvenli bölgeye çekil; <strong>SKKM/ÇM + kolluk</strong> desteği iste, kollukla fiziksel kısıtlama uygula.",
      "<strong>SKKM/ÇM sedasyon:</strong> midazolam 5 mg IM veya 2,5 mg IV; alternatif diazepam 5 mg IM. Halen ajite ise sedasyon dozunu tekrar et; diazepam alternatifinde tekrar 20 dk sonradır."
    ],
    "warningFindings": [
      "Olay yeri güvenliğinin sağlanamaması / gerekli önlemlerin alınmamış olması",
      "Sözel yatıştırmaya rağmen kontrol edilemeyen ajitasyon",
      "Travmatik neden olasılığı",
      "Metabolik, endokrin, enfeksiyöz, çevresel, alkol/madde, hipoglisemi, ilaç intoksikasyonu veya psikiyatrik neden şüphesi"
    ],
    "meds": [
      {
        "name": "Midazolam",
        "dose": "5 mg IM veya 2,5 mg IV",
        "routes": [
          "IM",
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "Halen ajite ise sedasyon dozunu tekrar et",
        "maxDose": "",
        "note": "İlaçla kısıtlama/sedasyon basamağı; resmî şemada SKKM/ÇM telefon simgeli.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Diazepam",
        "dose": "5 mg",
        "routes": [
          "IM"
        ],
        "authority": "SKKM",
        "repeat": "20 dk sonra",
        "maxDose": "",
        "note": "Midazolama alternatif benzodiazepin; anahtar noktalarda tekrarın 20 dk sonra yapılması belirtilir.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Uygun iletişimle kontrol sağlandı mı?",
      "yes": "Nedeni değerlendir; travmatik ise Travmalı Hasta algoritmasına, non-travmatik ise nedene yönelik tedaviye geç. Halen ajiteyse sedasyon basamağına ilerle.",
      "no": "Güvenli bölgeye çekil, SKKM/ÇM ve kolluk desteği iste; kollukla fiziksel kısıtlama ve SKKM/ÇM sedasyonunu değerlendir."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-15"
      ],
      "page": "27–28"
    }
  },
  {
    "id": "altered-consciousness",
    "title": "Bilinç Değişikliği",
    "subtitle": "Nedeni hızla ayır • ilgili algoritmaya yönlen",
    "category": "Genel",
    "icon": "🧠",
    "accent": "#6c62b7",
    "soft": "#efedfb",
    "code": "SB-ASH-Y-16",
    "page": "30",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "summary": "Solunum ve dolaşımı destekle; vital bulgular, EKG ve kan glikozunu değerlendir, ardından travma, inme, nöbet, zehirlenme, dolaşımsal, hipoksi veya glisemik nedenlere yönlen.",
    "criticalActions": [
      "Acil olgu yönetimini uygula; solunum ve dolaşımı destekle.",
      "Vital bulguları ve EKG'yi değerlendir; kan şekerini ölç.",
      "Nedeni araştır ve saptanan ana nedene ait resmî algoritmaya gecikmeden geç."
    ],
    "quick": [
      "<strong>Öykü:</strong> diyabet, ilaç/toksik maruziyet, tıbbi geçmiş ve travmayı sorgula.",
      "<strong>Olası nedenler:</strong> kafa travması; SSS (inme, tümör, nöbet, enfeksiyon); kardiyovasküler; enfeksiyon; metabolik; hipoksi; hipo/hiperglisemi; çevresel/zehirlenme; psikiyatrik.",
      "Travmada Travmalı Hastada Acil Olgu Yönetimi; inmede <strong>İnme / SVO</strong>; nöbette <strong>Nöbet / Konvülziyon</strong>; zehirlenmede <strong>Zehirlenmelere Genel Yaklaşım</strong> algoritmasına geç.",
      "Dolaşımsal nedende ritim analizi ve ilgili algoritma; hipokside oksijenizasyon/ventilasyon; hipo/hiperglisemide <strong>Diyabetik Aciller</strong> algoritmasına geç."
    ],
    "warningFindings": [
      "Solunum veya dolaşım desteği gerektiren bilinç değişikliği",
      "Travma, fokal nörolojik bulgu veya nöbet",
      "Ritim bozukluğu / dolaşımsal neden şüphesi",
      "Hipoksi, belirgin glukoz bozukluğu veya toksik maruziyet"
    ],
    "meds": [],
    "decision": {
      "q": "Bilinç değişikliğinin yönlendirdiği belirgin bir neden/algoritma saptandı mı?",
      "yes": "Travma, İnme/SVO, Nöbet/Konvülziyon, Zehirlenmelere Genel Yaklaşım, ritim algoritmaları veya Diyabetik Acillerden uygun olana geç.",
      "no": "Oksijenizasyon/ventilasyon ve dolaşım desteğini sürdür; seri vital-EKG-glukoz değerlendirmesiyle nedeni araştırarak hastaneye naklet."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-16"
      ],
      "page": "29–30"
    }
  },
  {
    "id": "hypoglycemia",
    "title": "Diyabetik Aciller",
    "subtitle": "Hipoglisemi / hiperglisemi • kan şekeri",
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
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-17"
      ],
      "page": "31",
      "codeStatus": "verified"
    },
    "summary": "Kan şekerini ölç; glukoz <60 mg/dL ve/veya klinik hipoglisemide bilinç durumuna göre oral glikoz ya da IV dekstroz uygula, glukoz >300 mg/dL ise %0,9 NaCl IV infüzyon başla ve şok/dehidratasyonda Hipovolemik Şok algoritmasına geç.",
    "criticalActions": [
      "Kan şekerini ölç ve bilinç durumunu değerlendir.",
      "Glukoz <60 mg/dL ve/veya klinik hipoglisemide bilinç açıksa oral şekerli sıvı; bilinç kapalıysa 25 g glikoz IV uygula.",
      "Glukoz >300 mg/dL ise %0,9 NaCl IV infüzyon başla; şok/dehidratasyon bulgularında Hipovolemik Şok algoritmasına geç."
    ],
    "quick": [
      "<strong>Kan şekerini ölç.</strong> Glukoz <60 mg/dL ve/veya klinik hipoglisemi varsa bilinç durumunu değerlendir.",
      "<strong>Hipoglisemi — bilinç açık:</strong> ağızdan şekerli sıvı ver; kan şekerini ve kliniği kontrol et, gerekirse 15 dk arayla tekrarla.",
      "<strong>Hipoglisemi — bilinç kapalı:</strong> %10–%20 dekstroz solüsyonlarından 25 g glikoz IV bolus; glukoz <60 mg/dL ise 5–10 dk arayla dekstroz solüsyonlarını tekrarla.",
      "<strong>Hiperglisemi:</strong> glukoz >300 mg/dL ise %0,9 NaCl IV infüzyon başla. Şok ve dehidratasyon bulguları varsa Hipovolemik Şok algoritmasına geç."
    ],
    "warningFindings": [
      "Bilinç değişikliği / oral alamama",
      "Glukoz <60 mg/dL'nin sürmesi",
      "Glukoz >300 mg/dL ile şok veya dehidratasyon bulguları"
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
        "note": "Bilinç kapalı hipoglisemi kolu; resmî turuncu kutuda telefon simgesi olmadan yer alır.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "%0,9 NaCl — hiperglisemi",
        "dose": "IV infüzyon",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Glukoz >300 mg/dL kolunda infüzyon başla; resmî şema bu basamakta hacim veya hız belirtmez.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Glukoz <60 mg/dL ve/veya klinik hipoglisemi var mı?",
      "yes": "Bilinç durumuna göre oral şekerli sıvı veya IV dekstroz uygula; seri kan şekeri ve klinik değerlendirme yap.",
      "no": "Glukoz >300 mg/dL ise %0,9 NaCl IV infüzyon başla; şok/dehidratasyonda Hipovolemik Şok algoritmasına geç."
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
      "reviewedAt": "2026-09-22",
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
        "note": "IV yavaş puşe; ilk ve 5 dk sonraki tekrar basamakları resmî şemada SKKM/ÇM telefon simgelidir.",
        "practitionerAuthority": "AABT"
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
        "note": "İlk ve 5 dk sonraki tekrar basamakları resmî şemada SKKM/ÇM telefon simgelidir.",
        "practitionerAuthority": "AABT"
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
        "note": "20 mg/kg IV; resmî şemada infüzyon hızı en fazla 25 mg/kg/dk olarak yazılıdır. SKKM/ÇM telefon simgeli.",
        "practitionerAuthority": "AABT"
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
        "note": "40 mg/kg IV infüzyon; ikinci basamak ve SKKM/ÇM telefon simgeli.",
        "practitionerAuthority": "AABT"
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
        "note": "60 mg/kg IV infüzyon; ikinci basamak ve SKKM/ÇM telefon simgeli.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "İlk benzodiazepin ve ikinci basamak antiepileptik sonrası nöbet sürüyor mu?",
      "yes": "5 dk sonra SKKM/ÇM ile diazepam veya midazolam tekrarını uygula; nöbet sürerse ileri hava yolu uygulaması için hazırlan.",
      "no": "Postiktal dönemde hava yolu açıklığına dikkat et ve nakli sürdür."
    }
  },
  {
    "id": "vertigo",
    "title": "Vertigo",
    "subtitle": "Nistagmus • BEFAST • santral/periferik ayrım",
    "category": "Nörolojik",
    "icon": "🌀",
    "accent": "#4d77a8",
    "soft": "#e9f0f8",
    "code": "SB-ASH-Y-20",
    "page": "34",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "standard",
    "clinicalStatus": "reviewed",
    "summary": "Hastayı rahat pozisyonda tut, damar yolu aç; BEFAST, şok bulguları, spontan nistagmus tipi ve bağımsız ayakta durma/yürüme ile santral-periferik ayrım yap.",
    "criticalActions": [
      "Acil olgu yönetimini uygula; hastanın rahat ettiği pozisyonda kalmasını sağla ve damar yolu aç.",
      "BEFAST kriterlerini ve şok bulgularını değerlendir.",
      "Spontan nistagmusun yönünü/tipini ve hastanın bağımsız ayakta durup yürüyebilmesini değerlendir."
    ],
    "quick": [
      "Spontan nistagmus <strong>yön değiştiren, vertikal veya pür torsiyonel</strong> ise santral neden kabul ederek <strong>İnme / SVO</strong> algoritmasına geç.",
      "Horizontal nistagmus varsa veya nistagmus yoksa hastanın <strong>bağımsız ayakta durup yürüyebilmesini</strong> değerlendir.",
      "Bağımsız ayakta duramıyor/yürüyemiyorsa santral neden → <strong>İnme / SVO</strong> algoritması.",
      "Bağımsız yürüyebiliyorsa periferik neden düşün; şok bulgusu varsa ilgili şok algoritmasına geç."
    ],
    "warningFindings": [
      "BEFAST kriterlerinde pozitiflik",
      "Yön değiştiren, vertikal veya pür torsiyonel nistagmus",
      "Bağımsız ayakta duramama veya yürüyememe",
      "Şok bulguları / sistemik dolaşım bozukluğu"
    ],
    "meds": [],
    "decision": {
      "q": "Santral vertigoyu düşündüren bulgu var mı?",
      "yes": "Yön değiştiren/vertikal/pür torsiyonel nistagmus veya bağımsız yürüyememe varsa İnme / SVO algoritmasına geç.",
      "no": "Periferik neden düşün; şok bulgusu varsa ilgili algoritmaya geç ve her aşamada hastaneye nakli sürdür."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-20"
      ],
      "page": "34"
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
      "reviewedAt": "2026-09-22",
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
        "name": "Ringer Laktat",
        "dose": "500 mL (<1 saat nakil)",
        "routes": [
          "OTHER"
        ],
        "authority": "DIRECT",
        "repeat": "Daha uzun nakil: (2 × VYA% × kg) / 16 mL/saat",
        "maxDose": "",
        "note": "Resmî Y-28'de Ringer Laktat başla; şok yoksa 1 saatten kısa nakilde 500 mL, daha uzun nakilde erişkin Parkland saatlik başlangıç formülü. Uygulama yolu kutuda açık yazılmadığından türetilmemiştir.",
        "practitionerAuthority": "AABT"
      },
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
        "note": "2026 Ek-2 yanık algoritmasında ağrı için 1 mcg/kg IV yavaş veya IM; SKKM/ÇM ile.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Hava yolu tehdidi veya şok bulgusu var mı?",
      "yes": "Hava yolu/şok algoritmasını önceliklendir; yanık merkezine uygun nakil planla.",
      "no": "Alan/derinlik, ağrı ve sıvı gereksinimini değerlendirerek nakli sürdür."
    }
  },
  {
    "id": "electrical-burn",
    "title": "Elektrik Yanıkları",
    "subtitle": "Elektrik güvenliği • ritim • rabdomyoliz • travma",
    "category": "Travma",
    "icon": "⚡",
    "accent": "#b86a2f",
    "soft": "#fff0e4",
    "code": "SB-ASH-Y-29",
    "page": "51",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "summary": "Elektrik kaynağını güvenli biçimde kesmeden müdahaleye başlama; hava yolu-solunumu destekle, erken ritim monitörizasyonu yap, rabdomyoliz ve spinal yaralanma riskini gözet.",
    "criticalActions": [
      "Yaralının elektrik kaynağından ayrıldığından ve güç kaynağının kesildiğinden emin olmadan müdahaleye başlama.",
      "Solunum sıkıntısı varsa hava yolunu açık tut; oksijenizasyon ve ventilasyonu destekle.",
      "Erken monitörizasyon, nabız ve ritim kontrolü yap; arrest veya aritmide ilgili algoritmaya geç."
    ],
    "quick": [
      "<strong>Elektrik güvenliği:</strong> yerdeki kabloların sıçrama/akım oluşturma riskine karşı en az 10 metre mesafede dur.",
      "Rabdomyoliz riskine karşı resmî şemaya göre <strong>erken ve yeterli Ringer Laktat sıvı tedavisi</strong> başla.",
      "Spinal immobilizasyonu sağla; eşlik eden travmayı değerlendir.",
      "Yanık alanları için <strong>Termal Yanık</strong> algoritmasına geç."
    ],
    "warningFindings": [
      "Elektrik kaynağının kesilmemiş olması veya yaralının kaynaktan ayrılmamış olması",
      "Arrest veya aritmi",
      "Solunum sıkıntısı / ventilasyon gereksinimi",
      "Spinal yaralanma veya rabdomyoliz riski"
    ],
    "meds": [],
    "decision": {
      "q": "Arrest veya aritmi var mı?",
      "yes": "İlgili ritim/arrest algoritmasına geç; elektrik güvenliği ve destek yaklaşımını sürdür.",
      "no": "Erken monitörizasyon ve ritim takibini sürdür; Ringer Laktat sıvı tedavisi, spinal immobilizasyon ve yanık alanları için Termal Yanık algoritmasına geç."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-29"
      ],
      "page": "51"
    }
  },
  {
    "id": "chemical-burn",
    "title": "Kimyasal Yanıklar",
    "subtitle": "KBRN farkındalığı • dekontaminasyon • 20 dk yıkama",
    "category": "Travma",
    "icon": "🧪",
    "accent": "#5f7a42",
    "soft": "#eef5e5",
    "code": "SB-ASH-Y-30",
    "page": "52",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "summary": "Olay yeri ve olası KBRN riskini yönet; kimyasal maruziyeti kes, görülebilen partikül/kalıntıları uzaklaştır ve bol su veya %0,9 NaCl ile 20 dakika nazikçe yıka.",
    "criticalActions": [
      "Olay yeri yönetimini uygula ve olası KBRN durumuna hazırlıklı ol.",
      "Acil olgu yönetimini uygula; kimyasal maruziyeti kes.",
      "Görülebilen partikül ve kalıntıları temizle; bol su veya %0,9 NaCl ile 20 dk boyunca nazikçe yıka."
    ],
    "quick": [
      "<strong>Kontaminasyonu sonlandır:</strong> kimyasalla teması kes ve görülebilen partikül/kalıntıları uzaklaştır.",
      "<strong>Dekontaminasyon:</strong> bol su veya %0,9 NaCl ile <strong>20 dk</strong> boyunca nazikçe yıka.",
      "Olası KBRN maruziyetinde olay yeri güvenliği ve kişisel korunmayı önceliklendir.",
      "Dekontaminasyon sonrası <strong>Termal Yanık</strong> algoritmasına geç."
    ],
    "warningFindings": [
      "Devam eden kimyasal kontaminasyon",
      "Olası KBRN olayı / güvenli olmayan olay yeri",
      "Ciltte veya giyside görünür partikül ve kimyasal kalıntı",
      "Dekontaminasyon tamamlanmadan ikincil maruziyet riski"
    ],
    "meds": [],
    "decision": {
      "q": "Kimyasal maruziyet kesildi ve 20 dk dekontaminasyon tamamlandı mı?",
      "yes": "Termal Yanık algoritmasına geç ve hastaneye nakli sürdür.",
      "no": "Olay yeri/KBRN güvenliğini koruyarak görülebilen kalıntıları uzaklaştır ve bol su veya %0,9 NaCl ile 20 dk yıkamayı tamamla."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-30"
      ],
      "page": "52"
    }
  },
  {
    "id": "poisoning-general",
    "title": "Zehirlenmelere Genel Yaklaşım",
    "subtitle": "Maddeyi tanı • ABC desteği • SKKM / UZEM",
    "category": "Zehirlenme",
    "icon": "🧪",
    "accent": "#6659a8",
    "soft": "#efedfa",
    "code": "SB-ASH-Y-31",
    "page": "54",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "summary": "Olay yeri ve acil olgu yönetimini uygula; maddeyi ve maruziyet ayrıntılarını tanımla, bilinç kapalıysa hava yolu-solunum-dolaşımı destekle, SKKM ile temas kurup UZEM yönergelerine göre hareket et.",
    "criticalActions": [
      "Olay yeri ve acil olgu yönetimini uygula; kişisel koruyucu ekipmana dikkat et.",
      "Maddeyi tanımla: ne/nasıl/ne kadar/ne zaman alındı, kusma oldu mu; bilinç kapalıysa hava yolunu güvenceye al ve solunum-dolaşımı destekle.",
      "SpO₂ %94–98 hedefli oksijenizasyon/ventilasyonu sürdür, damar yolu aç (DAKŞ) ve SKKM ile temas kurarak UZEM yönergelerine göre hareket et."
    ],
    "quick": [
      "<strong>Maruziyeti tanımla:</strong> alınan madde, yol, miktar, zaman ve kusma bilgisini öğren.",
      "Bilinç kapalıysa hava yolu güvenliğini sağla; solunum ve dolaşımı destekle. <strong>SpO₂ %94–98</strong> olacak şekilde oksijenizasyon/ventilasyonu sürdür.",
      "Damar yolu aç (DAKŞ); <strong>SKKM ile temas kur ve UZEM yönergelerine göre hareket et.</strong>",
      "Sürekli gözlem yap. Zehirlenme olgularının adli vaka olduğunu ve dekontaminasyon/tedavide SKKM hekiminin Zehir Danışma Merkezi önerisi alabileceğini unutma."
    ],
    "warningFindings": [
      "Bilinç bozukluğu, konfüzyon, konvülziyon veya koma",
      "Solunum frekansında belirgin değişiklik",
      "Bradikardi/taşikardi veya hipotansiyon/hipertansiyon",
      "Pupil değişikliği, aşırı terleme-tükürük/lakrimasyon veya belirgin gastrointestinal bulgular"
    ],
    "meds": [],
    "decision": {
      "q": "Spesifik toksidrom veya ilgili zehirlenme algoritmasına yönlendiren bulgu var mı?",
      "yes": "İlgili özel zehirlenme algoritmasına geç; SKKM/UZEM yönlendirmesini ve sürekli gözlemi sürdür.",
      "no": "Genel destek, SpO₂ %94–98, damar yolu, SKKM/UZEM yönlendirmesi ve sürekli gözlemle hastaneye naklet."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-31"
      ],
      "page": "53–54"
    }
  },
  {
    "id": "high-dose-drug",
    "title": "Yüksek Doz İlaç Alımı",
    "subtitle": "İlacı tanı • vital/EKG • toksidroma göre yönlen",
    "category": "Zehirlenme",
    "icon": "💊",
    "accent": "#875e73",
    "soft": "#f5eaf0",
    "code": "SB-ASH-Y-32",
    "page": "55",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "summary": "İlacın ne/nasıl/ne kadar/ne zaman alındığını ve kusma olup olmadığını belirle; vital bulgular, EKG ve fizik muayene sonrası yönlendirici toksidroma göre ilgili algoritmaya geç.",
    "criticalActions": [
      "Acil olgu yönetimini uygula.",
      "İlacı tanımla: ne, nasıl, ne kadar ve ne zaman alındı; kusma oldu mu öğren.",
      "Vital bulguları al, EKG'yi değerlendir ve fizik muayene yap; yönlendirici klinik bulguya göre ilgili algoritmaya geç."
    ],
    "quick": [
      "Tüm vücut salgılarında artma ve tarım ilacı olasılığında dekontamine et → <strong>Kolinerjik Ajanlarla Zehirlenme</strong> algoritmasına geç.",
      "Nöbette <strong>Nöbet / Konvülziyon</strong>; hipo/hiperglisemide <strong>Diyabetik Aciller</strong> algoritmasına geç.",
      "Koma + bradipne + pinpoint pupil varsa <strong>Narkotik / Opioid Zehirlenmeleri</strong> algoritmasına geç.",
      "Hipotermi varsa <strong>Hipotermi</strong> algoritmasına geç; spesifik bulgu yoksa seri vital/EKG/fizik değerlendirmeyi sürdür."
    ],
    "warningFindings": [
      "Koma, bradipne ve pinpoint pupil",
      "Nöbet",
      "Tüm vücut salgılarında artış / tarım ilacı maruziyeti",
      "Hipotermi veya belirgin glisemik bozukluk"
    ],
    "meds": [],
    "decision": {
      "q": "Spesifik yönlendirici toksidrom/bulgu var mı?",
      "yes": "Kolinerjik ajan, Nöbet/Konvülziyon, Diyabetik Aciller, Narkotik/Opioid veya Hipotermi algoritmalarından uygun olana geç.",
      "no": "Seri vital bulgular, EKG ve fizik muayeneyle destek yaklaşımını sürdür ve hastaneye naklet."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-32"
      ],
      "page": "55"
    }
  },
  {
    "id": "carbon-monoxide",
    "title": "Karbonmonoksit Zehirlenmesi",
    "subtitle": "≥10 L/dk O₂ • vital/ritim takibi • ileri hava yolu",
    "category": "Zehirlenme",
    "icon": "☁️",
    "accent": "#5e7080",
    "soft": "#edf1f4",
    "code": "SB-ASH-Y-33",
    "page": "56",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "summary": "Olay yeri güvenliğini sağla; karbonmonoksit maruziyetini sonlandır, rezervuarlı maske ile 10 L/dk'dan yüksek O₂ ver, vital/ritim takibini ve gerektiğinde ventilasyon desteğini sürdür.",
    "criticalActions": [
      "Olay yeri ve kişisel güvenliği sağla; özellikle kapalı alan yangınlarında dumana maruziyeti en aza indir.",
      "Acil olgu yönetimini uygula ve rezervuarlı maske ile 10 L/dk'dan yüksek O₂ ver.",
      "Vital bulguları takip et; gerekirse PBV uygula, ileri hava yolu yönetimi için hazırlıklı ol."
    ],
    "quick": [
      "<strong>O₂:</strong> rezervuarlı maske ile <strong>10 L/dk'dan yüksek</strong> akım kullan.",
      "Vital bulguları takip et; gerektiğinde <strong>PBV</strong> ve semptomatik tedavi uygula.",
      "İleri hava yolu yönetimi için hazırlıklı ol.",
      "Nöbet gelişirse <strong>Nöbet / Konvülziyon</strong> algoritmasına geç."
    ],
    "warningFindings": [
      "Kapalı alan yangını / yoğun duman maruziyeti",
      "PBV veya ileri hava yolu gereksinimi",
      "Nöbet",
      "Vital bulgularda klinik kötüleşme"
    ],
    "meds": [],
    "decision": {
      "q": "Nöbet veya solunum desteği gerektiren klinik kötüleşme var mı?",
      "yes": "Nöbette Nöbet / Konvülziyon algoritmasına geç; ventilasyon yetersizliğinde PBV ve ileri hava yolu hazırlığını sürdür.",
      "no": "10 L/dk'dan yüksek O₂, vital takip ve semptomatik destekle hastaneye nakli sürdür."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-33"
      ],
      "page": "56"
    }
  },
  {
    "id": "ccb-beta-blocker-poisoning",
    "title": "Kalsiyum Kanal Blokerleri / Beta Blokerler ile Zehirlenme",
    "subtitle": "Bradiaritmi • hipotansiyon • hipoglisemi",
    "category": "Zehirlenme",
    "icon": "💊",
    "accent": "#6574a8",
    "soft": "#edf0fa",
    "code": "SB-ASH-Y-34",
    "page": "58",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "summary": "Zehirlenmelere genel yaklaşımı uygula; SpO₂ %94–98 hedefle, damar yolu/monitörizasyonu sağla ve bradiaritmi, hipotansiyon ile hipoglisemiye göre ilgili kola ilerle.",
    "criticalActions": [
      "Zehirlenmelere Genel Yaklaşım algoritmasını uygula.",
      "SpO₂ %94–98 olacak şekilde O₂ ver; gerekirse PBV uygula, damar yolu aç (DAKŞ) ve monitörize et.",
      "Bradiaritmi, ciddi hipotansiyon ve hipoglisemiyi hızla değerlendir."
    ],
    "quick": [
      "Bradiaritmi varsa <strong>Bradikardi</strong> algoritmasına geç.",
      "Ciddi bulgu ve hipotansiyonda <strong>SKB >90 mmHg</strong> olacak şekilde %0,9 NaCl / Ringer Laktat IV hidrasyona başla.",
      "Kalsiyum kanal blokeri zehirlenmesinden emin olunan hipotansif hastada <strong>SKKM/ÇM ile 3 ampul kalsiyum glukonat</strong>, 100 mL %0,9 NaCl içinde 10 dk'da IV verilebilir.",
      "Hipoglisemi varsa <strong>Diyabetik Aciller</strong> algoritmasına geç."
    ],
    "warningFindings": [
      "Bilinç kaybı veya solunum depresyonu",
      "Bradikardi / bradiaritmi",
      "Hipotansiyon",
      "Bronkospazm veya hipoglisemi"
    ],
    "meds": [
      {
        "name": "%0,9 NaCl / Ringer Laktat",
        "dose": "IV hidrasyon",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "SKB >90 mmHg hedefiyle",
        "maxDose": "",
        "note": "Ciddi bulgu ve hipotansiyonda resmî Y-34'te telefon simgesiz hidrasyon basamağı; hacim/hız belirtilmemiştir.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Kalsiyum glukonat",
        "dose": "3 ampul (30 mL)",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Kalsiyum kanal blokeri zehirlenmesinden emin olunan ve hipotansiyonu eşlik eden hastada; 3 ampul (30 mL), 100 mL %0,9 NaCl içinde 10 dakikada IV. Resmî şemada SKKM/ÇM telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Bradiaritmi, ciddi hipotansiyon veya hipoglisemi var mı?",
      "yes": "Bradiaritmide Bradikardi; hipoglisemide Diyabetik Aciller algoritmasına geç. Hipotansiyonda SKB >90 hedefli IV hidrasyon; KKB zehirlenmesi kesin ve hipotansiyon eşlik ediyorsa SKKM/ÇM ile kalsiyum glukonat değerlendir.",
      "no": "Oksijenizasyon, DAKŞ, monitörizasyon ve seri klinik değerlendirmeyle nakli sürdür."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-34"
      ],
      "page": "57–58"
    }
  },
  {
    "id": "cholinergic-poisoning",
    "title": "Kolinerjik Ajanlarla Zehirlenme",
    "subtitle": "Dekontaminasyon • SLUDGE-BBB • atropin",
    "category": "Zehirlenme",
    "icon": "☣️",
    "accent": "#5f7d50",
    "soft": "#edf5e9",
    "code": "SB-ASH-Y-35",
    "page": "60",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "critical",
    "clinicalStatus": "reviewed",
    "summary": "Kişisel korunmayı ve dekontaminasyonu öncele; Zehirlenmelere Genel Yaklaşım algoritmasını uygula, SpO₂ >%94 hedefle ve ciddi kolinerjik bulgularda atropini sekresyonlar azalıncaya kadar tekrarla.",
    "criticalActions": [
      "Müdahaleden önce kişisel koruyucu ekipmanı kullan; dekontaminasyon yap ve cilt emilimini önle.",
      "Zehirlenmelere Genel Yaklaşım algoritmasını uygula; SpO₂ >%94 olacak şekilde O₂ ver, gerekirse PBV uygula.",
      "Ciddi kolinerjik bulguları değerlendir ve atropin basamağını geciktirme."
    ],
    "quick": [
      "<strong>Ciddi bulgular (SLUDGE-BBB):</strong> salivasyon, lakrimasyon, ürinasyon, defekasyon, GİS krampları, emezis, bradikardi, bronkore ve bronkospazm.",
      "<strong>Atropin:</strong> 1–2 mg IV; IV yol açılamıyorsa 2–5 mg IM.",
      "Trakeobronşiyal sekresyonlar azalıncaya kadar <strong>5 dk'da bir tekrarla</strong>.",
      "Kolinerjik etkili ajanlar arasında sinir gazları ve tarım ilaçları bulunur."
    ],
    "warningFindings": [
      "Yoğun sekresyon / bronkore ve bronkospazm",
      "Bradikardi",
      "Bilinç değişikliği, ajitasyon veya koma",
      "Devam eden kontaminasyon / ikincil maruziyet riski"
    ],
    "meds": [
      {
        "name": "Atropin",
        "dose": "1–2 mg IV / 2–5 mg IM",
        "routes": [
          "IV",
          "IM"
        ],
        "authority": "DIRECT",
        "repeat": "Trakeobronşiyal sekresyonlar azalıncaya kadar 5 dk'da bir",
        "maxDose": "",
        "note": "Resmî Y-35 algoritmasında SKKM/ÇM telefon simgesi yoktur; anahtar noktalarda maksimum doz belirtilmemiştir.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Ciddi kolinerjik bulgu ve semptomlar var mı?",
      "yes": "Atropin 1–2 mg IV; IV yol açılamıyorsa 2–5 mg IM. Trakeobronşiyal sekresyonlar azalıncaya kadar 5 dk'da bir tekrarla.",
      "no": "Dekontaminasyon, oksijenizasyon/ventilasyon ve genel zehirlenme yaklaşımıyla seri değerlendirmeyi sürdür."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-35"
      ],
      "page": "59–60"
    }
  },
  {
    "id": "opioid-poisoning",
    "title": "Narkotik / Opioid Zehirlenmeleri",
    "subtitle": "Solunum depresyonu • nalokson • ileri hava yolu",
    "category": "Zehirlenme",
    "icon": "💉",
    "accent": "#6c5c94",
    "soft": "#f0ecf8",
    "code": "SB-ASH-Y-36",
    "page": "62",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "critical",
    "clinicalStatus": "reviewed",
    "summary": "Zehirlenmelere genel yaklaşımı uygula; SpO₂ >%94 hedefle, solunum depresyonunda ventilasyon ve ileri hava yolunu hazırla, kan şekerini kontrol et ve SKKM/ÇM ile nalokson uygula.",
    "criticalActions": [
      "Zehirlenmelere Genel Yaklaşım algoritmasını uygula; SpO₂ >%94 olacak şekilde O₂ ver ve gerekirse PBV uygula.",
      "Solunum depresyonu varsa ileri hava yolu uygulaması için hazırlan; kan şekeri ölçümü yap.",
      "Solunum depresyonunda SKKM/ÇM ile nalokson basamağına geç; hipoglisemide Diyabetik Aciller algoritmasını uygula."
    ],
    "quick": [
      "<strong>Nalokson:</strong> SKKM/ÇM ile başlangıç 0,4–2 mg IM / IV / IO / SC; maksimum 10 mg.",
      "Algoritmada düzelme olmazsa <strong>2–3 dk'da bir tekrar</strong>; anahtar noktalarda istenen etkiye kadar 0,1–0,4 mg titrasyon belirtilir.",
      "Apne veya siyanoz varsa anahtar noktalarda <strong>2 mg IV</strong> belirtilir.",
      "Hipotansiyonda %0,9 NaCl IV yüklemesi yap; solunum depresyonu sürerse ileri hava yolu uygulaması için hazırlan."
    ],
    "warningFindings": [
      "Solunum depresyonu / apne / siyanoz",
      "Koma ve pinpoint pupil",
      "Hipotansiyon",
      "Hipoglisemi"
    ],
    "meds": [
      {
        "name": "Nalokson",
        "dose": "0,4–2 mg",
        "routes": [
          "IM",
          "IV",
          "IO",
          "SC"
        ],
        "authority": "SKKM",
        "repeat": "Düzelme olmazsa 2–3 dk; anahtar noktalarda yanıta göre 0,1–0,4 mg titrasyon",
        "maxDose": "10 mg",
        "note": "Resmî Y-36 telefon simgeli basamak. Anahtar noktada apne/siyanozda 2 mg IV; 0,4–2 mg başlangıç dozu opioid bağımlısı olmayan hasta için belirtilmiştir.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "%0,9 NaCl — hipotansiyon",
        "dose": "IV yükleme",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Hipotansiyon varlığında resmî Y-36'da telefon simgesiz %0,9 NaCl IV yükleme basamağı; hacim/hız belirtilmemiştir.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Solunum depresyonu var mı?",
      "yes": "SKKM/ÇM ile nalokson uygula; PBV/oksijenizasyonu sürdür, yanıtsız solunum depresyonunda ileri hava yoluna hazırlan.",
      "no": "Kan şekeri ve hemodinamiyi değerlendir; hipoglisemide Diyabetik Aciller, hipotansiyonda %0,9 NaCl yüklemesi ve seri gözlemle nakli sürdür."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-36"
      ],
      "page": "61–62"
    }
  },
  {
    "id": "tca-poisoning",
    "title": "Trisiklik Antidepresan Zehirlenmesi",
    "subtitle": "QRS genişliği • disritmi • NaHCO₃",
    "category": "Zehirlenme",
    "icon": "💊",
    "accent": "#8b596e",
    "soft": "#f7eaf0",
    "code": "SB-ASH-Y-37",
    "page": "64",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "critical",
    "clinicalStatus": "reviewed",
    "summary": "Zehirlenmelere genel yaklaşımı uygula; erken solunum ve ritim desteğini sağla, QRS genişliğini değerlendir ve QRS >0,10 sn ise SKKM/ÇM ile sodyum bikarbonat uygula.",
    "criticalActions": [
      "Zehirlenmelere Genel Yaklaşım algoritmasını uygula; SpO₂ >%94 olacak şekilde O₂ ver, gerekirse PBV uygula.",
      "Erken damar yolu ve monitörizasyonu sağla; QRS süresini, disritmi, nöbet, hipertermi ve hipotansiyonu değerlendir.",
      "QRS >0,10 sn ise SKKM/ÇM ile sodyum bikarbonat basamağına geç."
    ],
    "quick": [
      "Disritmi varsa ilgili ritim algoritmasına geç.",
      "<strong>QRS >0,10 sn:</strong> SKKM/ÇM ile sodyum bikarbonat (NaHCO₃) 1–2 mEq/kg IV puşe; 3–5 dk'da bir tekrarla.",
      "Hipotansiyonda %0,9 NaCl yüklemesi yap.",
      "Hipertermide Hipertermi; nöbette Nöbet / Konvülziyon algoritmasına geç. Anahtar noktalarda QRS >100 ms nöbet, >160 ms ventriküler aritmi açısından uyarıcıdır."
    ],
    "warningFindings": [
      "QRS genişliği >0,10 sn",
      "Disritmi / ventriküler aritmi",
      "Nöbet",
      "Hipotansiyon veya hipertermi"
    ],
    "meds": [
      {
        "name": "Sodyum bikarbonat (NaHCO₃)",
        "dose": "1–2 mEq/kg",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "3–5 dk'da bir",
        "maxDose": "",
        "note": "QRS süresi >0,10 sn olduğunda IV puşe; resmî Y-37 algoritmasında SKKM/ÇM telefon simgeli basamak.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "%0,9 NaCl — hipotansiyon",
        "dose": "Yükleme",
        "routes": [
          "OTHER"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Hipotansiyon varlığında resmî Y-37'de telefon simgesiz %0,9 NaCl yüklemesi; yol, hacim ve hız açık yazılmadığından türetilmemiştir.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "QRS >0,10 sn veya ciddi disritmi/nöbet/hipertermi var mı?",
      "yes": "QRS >0,10 sn ise SKKM/ÇM ile NaHCO₃ 1–2 mEq/kg IV puşe ve 3–5 dk tekrar; disritmi, nöbet ve hipertermi için ilgili algoritmaya geç.",
      "no": "Erken monitörizasyon, solunum desteği ve seri EKG/vital değerlendirmeyle nakli sürdür."
    },
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-37"
      ],
      "page": "63–64"
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
  },
  {
    "id": "crush-syndrome",
    "title": "Crush Sendromu",
    "subtitle": "Enkaz • %0,9 NaCl • hiperkalemi",
    "category": "Travma",
    "icon": "🧱",
    "accent": "#8a5a3b",
    "soft": "#f7eee7",
    "code": "SB-ASH-Y-39",
    "page": "69",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-39"
      ],
      "page": "68–69"
    },
    "summary": "Uzamış sıkışma/bası yaralanmasında kurtarma öncesinden başlayarak %0,9 NaCl ile hidrasyonu sürdür; potasyum içeren sıvılardan kaçın ve hiperkalemi için EKG izle.",
    "criticalActions": [
      "Güvenliği sağla; yarım saatten uzun göçük altında kalma, sıkışma veya basıya bağlı yaralanmada crush sendromunu düşün.",
      "IV/IO erişimi değerlendir; damar yolu sağlandığında %0,9 NaCl başla. Potasyum içeren sıvıları (Ringer Laktat vb.) kullanma.",
      "Kurtarma sırasında hidrasyonu sürdür; travma yönetimini uygula ve hiperkalemi açısından EKG çek."
    ],
    "quick": [
      "Kurtarma öncesinde damar yolu yoksa aç; damar yolu bulunduğunda <strong>%0,9 NaCl 1000 mL/saat</strong> başla.",
      "Kurtarma sırasında verilen %0,9 NaCl hidrasyonuna devam et. Kurtarma <strong>2 saatten uzun</strong> sürerse hızı <strong>500 mL/saat veya daha aza</strong> indir.",
      "Kurtarma sonrası Travmalı Hastada Acil Olgu Yönetimini uygula; hiperkalemi açısından EKG çek. <strong>Normal EKG hiperkalemiyi dışlamaz.</strong>",
      "Resmî telefon simgeli ileri basamakta toplam <strong>3000–6000 mL</strong> sıvı; hiperkalemi bulgusu varsa <strong>%10 kalsiyum glukonat 10–30 mL IV, 2–3 dk içinde</strong>."
    ],
    "warningFindings": [
      "Yarım saatten uzun sıkışma/göçük altında kalma",
      "Hiperkalemi: sivri T dalgaları, T dalgasının R'den büyük olması, bradikardi/dal bloğu/QRS genişlemesi",
      "İdrar çıkışının olmaması veya azalması",
      "Hipotermi — kurtarma ve sıvı tedavisi boyunca korun"
    ],
    "meds": [
      {
        "name": "%0,9 NaCl (kurtarma öncesi/sırasında)",
        "dose": "1000 mL/saat",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "Kurtarma >2 saat: 500 mL/saat veya daha az",
        "maxDose": "",
        "note": "Resmî algoritmada telefon simgesi olmayan ilk hidrasyon basamağı. Potasyum içeren sıvılar/Ringer Laktat kullanılmaz.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "%0,9 NaCl (ileri toplam sıvı)",
        "dose": "Toplam 3000–6000 mL",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Çeşitli faktörlere göre miktar değişebilir; resmî algoritmada SKKM/ÇM telefon simgeli ileri basamak.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Kalsiyum glukonat %10",
        "dose": "10–30 mL",
        "routes": [
          "IV"
        ],
        "authority": "SKKM",
        "repeat": "",
        "maxDose": "",
        "note": "Hiperkalemi bulguları varsa 2–3 dk içinde; resmî algoritmada SKKM/ÇM telefon simgeli.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Hiperkalemi bulgusu var mı?",
      "yes": "SKKM/ÇM telefon simgeli ileri basamakta %10 kalsiyum glukonat 10–30 mL IV'yi 2–3 dk içinde uygula; EKG ve seri klinik izlemi sürdür.",
      "no": "%0,9 NaCl hidrasyonu + travma yönetimi + EKG izlemini sürdür; normal EKG'nin hiperkalemiyi dışlamadığını unutma."
    }
  },
  {
    "id": "head-trauma",
    "title": "Kafa Travmalı Hastaya Yaklaşım",
    "subtitle": "GKS • oksijenasyon • KİBAS",
    "category": "Travma",
    "icon": "🪖",
    "accent": "#5f6fa8",
    "soft": "#edf0fb",
    "code": "SB-ASH-Y-40",
    "page": "71",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "critical",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-40"
      ],
      "page": "70–71"
    },
    "summary": "Kafa travmasında hava yolu ve oksijenasyonu güvenceye al; GKS, glukoz ve dolaşımı değerlendir, KİBAS/herniasyon bulgularını erken tanı.",
    "criticalActions": [
      "Acil olgu yönetimini uygula; GKS ≤8, solunum yetmezliği veya hava yolu tehdidinde ileri hava yolu yönetimine geç.",
      "SpO₂ %94–98 hedefli oksijenizasyon/ventilasyon sağla; yetişkinde ventilasyon hızını 10/dk olarak sürdür.",
      "Kan şekerini ölç; 60–300 mg/dL aralığında IV sıvı tedavisiyle SKB >100 mmHg hedefle. Nöbet/KİBAS varsa ilgili dala geç."
    ],
    "quick": [
      "<strong>GKS ≤8</strong> veya solunum yetmezliği/hava yolu tehlikesinde ileri hava yolu yönetimi uygula.",
      "<strong>SpO₂ %94–98</strong>; yetişkinde ventilasyon 10/dk. Kan şekerini ölç.",
      "KŞ <60 mg/dL veya >300 mg/dL ise Diyabetik Aciller algoritmasına geç. 60–300 mg/dL ise IV sıvı tedavisine başla ve <strong>SKB >100 mmHg</strong> olacak şekilde sürdür.",
      "KİBAS/herniasyon bulguları: Cushing triadı, GKS'de ≥2 puan düşüş, hemipleji/hemiparalizi, anizokori. Şok yoksa baş-gövdeyi <strong>30–45°</strong> yükselterek sevk et."
    ],
    "warningFindings": [
      "GKS ≤8 veya hızlı GKS düşüşü",
      "Cushing triadı: bradikardi + solunum düzensizliği + hipertansiyon",
      "Hemipleji/hemiparalizi veya anizokori",
      "Hava yolu tehdidi, hipoksi veya hipotansiyon"
    ],
    "meds": [],
    "decision": {
      "q": "GKS ≤8, hava yolu tehdidi, nöbet veya KİBAS bulgusu var mı?",
      "yes": "Hava yolu tehdidinde ileri hava yolu; nöbette Y-19; KİBAS varsa şok yokluğunda baş-gövde 30–45° ve hızlı nakil.",
      "no": "SpO₂ %94–98, glukoz ve SKB >100 mmHg hedeflerini koruyarak seri nörolojik değerlendirme ve nakli sürdür."
    }
  },
  {
    "id": "start-triage",
    "title": "Start Triyaj",
    "subtitle": "Yeşil • sarı • kırmızı • siyah",
    "category": "Afet",
    "icon": "🚦",
    "accent": "#b64a4a",
    "soft": "#faecec",
    "code": "SB-ASH-Y-41",
    "page": "73",
    "uiFeatured": false,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-22",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-41"
      ],
      "page": "72–73"
    },
    "summary": "START triyajda hastaları yürüyebilme, solunum, dolaşım ve komutlara uyum üzerinden hızlıca renk koduna ayır; her hasta için triyaj süresini 1 dakikanın altında tut.",
    "criticalActions": [
      "Triyaja sana en yakın hastadan başla; yürüyebilenleri seslenerek güvenli alana çağır ve YEŞİL kodla.",
      "Yürüyemeyende solunumu değerlendir; solunum yoksa başa pozisyon ver. Solunum dönmezse SİYAH, dönerse KIRMIZI kod.",
      "Solunumu olanlarda solunum sayısı, dolaşım ve komutlara uyumu sırayla değerlendir; kırmızı kriter yoksa uygun kodu ver."
    ],
    "quick": [
      "<strong>Yürüyebilen → YEŞİL.</strong> Yürüyemeyende önce solunumu değerlendir.",
      "Solunum yok → başa pozisyon ver; hâlâ yoksa <strong>SİYAH</strong>, solunum başlarsa <strong>KIRMIZI</strong>.",
      "Solunum sayısı <strong><10/dk veya >30/dk → KIRMIZI</strong>. 10–30/dk ise dolaşımı değerlendir.",
      "KGD >2 sn veya distal nabız yok → <strong>KIRMIZI</strong>. KGD <2 sn ve distal nabız varsa: komuta uyuyorsa <strong>SARI</strong>, uymuyorsa <strong>KIRMIZI</strong>."
    ],
    "warningFindings": [
      "Triyaj sırasında tedavi/KPR yapmak — resmî anahtar noktada yapılmaması belirtilir",
      "Bir hasta için triyajın 1 dakikayı aşması",
      "Yeniden triyaj ihtiyacının atlanması",
      "Hayat kurtarıcı kanama kontrolü ihtiyacında çevredeki uygun kişilerden destek alınmaması"
    ],
    "meds": [],
    "decision": {
      "q": "Hasta yürüyebiliyor mu?",
      "yes": "Güvenli alana çağır → YEŞİL kod.",
      "no": "Solunum → solunum sayısı → dolaşım (KGD/distal nabız) → komutlara uyum sırasıyla START değerlendirmesini tamamla."
    }
  }
];
