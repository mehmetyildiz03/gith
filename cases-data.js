const APP_META = {
  "schemaVersion": 5,
  "contentVersion": "EK2-2026.08.25-adult-source-integrity-reaudit-2026.09.25",
  "productVersion": "0.51",
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
      "label": "Yetki belirtilmemiş",
      "description": "İlaç/doz resmî belgede yer alır; ilgili kaynak bölümünde SKKM/ÇM yetki kodlaması bulunmadığından DIRECT/SKKM çıkarımı yapılmaz.",
      "symbol": "•",
      "visualLabel": "Kaynakta SKKM/ÇM yetkisi belirtilmemiş"
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
      "label": "Kaynakta belirtilmemiş",
      "officialLabel": "Uygulayıcı yetkisi kaynakta belirtilmemiş",
      "description": "İlgili kaynak bölümünde uygulayıcı kutu rengi bulunmuyor veya yetki kodlaması yapılmıyor; ATT/AABT çıkarımı yapılmaz.",
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
    "scope": "37 yetişkin vaka kartı + 2 temel protokol; SB-ASH-Y-01–Y-41 kaynak kapsamı",
    "source": "T.C. Sağlık Bakanlığı Ek-2 Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
    "effectiveDate": "2026-08-25",
    "officialPageDate": "2026-09-11",
    "reviewedAt": "2026-09-25"
  },
  "authorityAudit": {
    "source": "25.08.2026 tarihli Ek-2 resmî PDF",
    "reviewedAt": "2026-09-25",
    "method": "Telefon/SKKM-ÇM simgesi görsel olarak doğrulandı",
    "scope": "Yetişkin ilaç/sıvı kutuları ve yapılandırılmış eylem basamaklarında SKKM/ÇM telefon simgesi; yetki kodlaması olmayan Anahtar Noktalar öğelerinde çıkarım yapılmaz"
  },
  "integrityAudit": {
    "source": "25.08.2026 tarihli Ek-2 resmî PDF",
    "reviewedAt": "2026-09-25",
    "scope": "37 yetişkin kartı + Y-01/Y-02 temel protokollerinde başlık/kod/PDF sayfa izi ve kaynakla doğrulanan basamaklar",
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
    "reviewedAt": "2026-09-25",
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
      "SB-ASH-Y-29",
      "SB-ASH-Y-34",
      "SB-ASH-Y-35",
      "SB-ASH-Y-36",
      "SB-ASH-Y-37",
      "SB-ASH-Y-39",
      "SB-ASH-Y-40"
    ],
    "sourceUnspecifiedMedicationItems": [
      "SB-ASH-Y-40/Midazolam"
    ],
    "adultMedicationCardsComplete": true
  },
  "actionAudit": {
    "reviewedAt": "2026-09-25",
    "source": "25.08.2026 tarihli Ek-2 resmî PDF",
    "method": "Resmî turkuaz/turuncu kutular ve SKKM/ÇM telefon simgesi adım bazında ayrı alanlarda görsel olarak doğrulandı",
    "verifiedCases": [
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
      "SB-ASH-Y-17",
      "SB-ASH-Y-18",
      "SB-ASH-Y-19",
      "SB-ASH-Y-22",
      "SB-ASH-Y-25",
      "SB-ASH-Y-26",
      "SB-ASH-Y-38",
      "SB-ASH-Y-40",
      "SB-ASH-Y-41"
    ],
    "verifiedBranchCases": [
      "SB-ASH-Y-08",
      "SB-ASH-Y-09",
      "SB-ASH-Y-10",
      "SB-ASH-Y-11",
      "SB-ASH-Y-12",
      "SB-ASH-Y-13",
      "SB-ASH-Y-14",
      "SB-ASH-Y-17",
      "SB-ASH-Y-19",
      "SB-ASH-Y-22",
      "SB-ASH-Y-25",
      "SB-ASH-Y-26",
      "SB-ASH-Y-40",
      "SB-ASH-Y-41"
    ],
    "pilot": true
  },
  "medicationContentAudit": {
    "reviewedAt": "2026-09-25",
    "source": "25.08.2026 tarihli Ek-2 resmî PDF",
    "scope": "Tüm yetişkin ilaç/sıvı kartları resmî algoritma ve anahtar nokta sayfalarına karşı yeniden kontrol edildi",
    "correctedCases": [
      "SB-ASH-Y-05",
      "SB-ASH-Y-09",
      "SB-ASH-Y-10",
      "SB-ASH-Y-11",
      "SB-ASH-Y-12",
      "SB-ASH-Y-13",
      "SB-ASH-Y-14",
      "SB-ASH-Y-21",
      "SB-ASH-Y-22",
      "SB-ASH-Y-23",
      "SB-ASH-Y-29",
      "SB-ASH-Y-35",
      "SB-ASH-Y-40"
    ],
    "sourceUnspecifiedAuthorityItems": [
      "SB-ASH-Y-40/Midazolam"
    ],
    "status": "complete"
  },
  "adultCoverage": {
    "reviewedAt": "2026-09-25",
    "verifiedCaseCards": 37,
    "coveredAlgorithmRange": "SB-ASH-Y-01–Y-41",
    "foundationalProtocols": [
      "SB-ASH-Y-01",
      "SB-ASH-Y-02"
    ],
    "foundationalProtocolPending": null
  }
};

const PROTOCOLS = [
  {
    "id": "scene-management",
    "order": 1,
    "title": "Olay Yeri Yönetimi",
    "subtitle": "Güvenlik • kaynak • triyaj • ekipman",
    "category": "Temel Protokol",
    "icon": "⌖",
    "accent": "#177b8f",
    "soft": "#e8f7f9",
    "code": "SB-ASH-Y-01",
    "page": "5",
    "population": "adult",
    "clinicalStatus": "reviewed",
    "summary": "Sahaya girişten Acil Olgu Yönetimi algoritmasına geçişe kadar olay yeri güvenliği, hasta/yaralı güvenliği, triyaj ve kaynak koordinasyonunu düzenler.",
    "flow": [
      {
        "type": "step",
        "html": "<strong>SKKM/ÇM ile iletişime geç, olay yeri hakkında bilgi al; olayın büyüklüğünü tahmin et.</strong>",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "type": "decision",
        "lead": "Gerekli kişisel koruyucu malzemelerini kullan.",
        "question": "Olay yeri güvenliği var mı?",
        "yes": "Güvenlik sağlanmışsa hasta/yaralı güvenliğini değerlendir.",
        "no": "Gerekli ise ilgili kurum desteği iste. Güvenlik sağlanıncaya kadar güvenli noktada bekle.",
        "noSkkmContact": true
      },
      {
        "type": "decision",
        "question": "Hasta/Yaralı güvenliği var mı?",
        "yes": "Güvenlik varsa olay ve kaynak değerlendirmesine geç.",
        "no": "Hasta güvenliğini sağla."
      },
      {
        "type": "step",
        "html": "Olay, yaralanma ve/veya hastalığın oluş şeklini, olabilecek vaka sayısını ve ek kaynak ihtiyacını değerlendir.",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "type": "step",
        "html": "Hasta/Yaralı birden fazla ise <strong>triyaj yap.</strong> Ek kaynak ihtiyacını belirle.",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "type": "step",
        "html": "<strong>İhtiyaç duyulan ekip ve ekipmanı iste.</strong>",
        "practitionerAuthority": "ATT_AABT",
        "skkmContact": true
      },
      {
        "type": "transition",
        "html": "Acil Olgu Yönetimi algoritmasına geç.",
        "targetCode": "SB-ASH-Y-02",
        "targetProtocolId": "emergency-case-management",
        "buttonLabel": "Acil Olgu Yönetimi'ni aç"
      }
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-01"
      ],
      "page": "5"
    }
  },
  {
    "id": "emergency-case-management",
    "order": 2,
    "title": "Acil Olgu Yönetimi",
    "subtitle": "XABCDE • SAMPLE • ön tanı • yeniden değerlendirme",
    "category": "Temel Protokol",
    "icon": "✚",
    "accent": "#2367a8",
    "soft": "#eaf3fb",
    "code": "SB-ASH-Y-02",
    "page": "6–7",
    "population": "adult",
    "clinicalStatus": "reviewed",
    "summary": "Olay yeri güvenliğinden sonra ekipman yerleşimi, XABCDE ile birincil değerlendirme, ayrıntılı ikincil değerlendirme, ön tanı ve ilgili vaka algoritmasına geçişi düzenler.",
    "helperText": "Bu akış tüm vakalarda ilk sistematik değerlendirme için kullanılır; ön tanıdan sonra ilgili vaka algoritmasına geçilir ve hasta yeniden değerlendirilir.",
    "keyPoints": [
      {
        "id": "sample",
        "title": "SAMPLE öykü",
        "items": [
          ["S", "Belirtiler ve Bulgular"],
          ["A", "Alerjiler / Kötü Alışkanlıklar"],
          ["M", "Kullanılan İlaçlar"],
          ["P", "Tıbbi Özgeçmiş"],
          ["L", "Son İlaç-Gıda Alımı / Son Adet Tarihi"],
          ["E", "Çağrı Gerektiren Durum"]
        ]
      },
      {
        "id": "xabcde",
        "title": "XABCDE birincil değerlendirme",
        "items": [
          ["X", "Hayatı tehdit eden kanamaları tanı ve müdahale et"],
          ["A", "Hava yolu açıklığının kontrolünü sağla"],
          ["B", "Solunum desteği kontrolünü sağla"],
          ["C", "Dolaşım desteği kontrolünü sağla"],
          ["D", "Kısa nörolojik muayene"],
          ["E", "Hastanın kıyafetlerini çıkar, genel görünümünü kontrol et"]
        ]
      }
    ],
    "flow": [
      {
        "type": "decision",
        "lead": "Gerekli ise triyaj yap.",
        "question": "Olay yeri güvenli mi?",
        "yes": "Gerekli ekipmanları alma basamağına geç.",
        "no": "Olay Yeri Yönetimi algoritmasına geri dön.",
        "noTargetProtocolId": "scene-management",
        "noButtonLabel": "Olay Yeri Yönetimi'ni aç"
      },
      {
        "type": "step",
        "html": "<strong>Gerekli tüm ekipmanları al.</strong>",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "type": "step",
        "html": "<strong>Ekip ve Malzeme Yerleşimi:</strong> Kullanılacak malzeme kol mesafesinde ulaşılabilecek şekilde olmalıdır.",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "type": "step",
        "html": "<strong>Birincil Değerlendirme:</strong> Genel görünüm ve bilinç durumuyla birlikte dolaşımsal ve solunumsal riskleri belirlemek için XABCDE yaklaşımını uygula.",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "type": "step",
        "html": "<strong>İkincil Değerlendirme:</strong> Ayrıntılı tüm vücut muayenesi, tıbbi öykü, vital bulgular ve nörolojik muayene.",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "type": "step",
        "html": "<strong>Ön tanıyı belirle.</strong>",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "type": "transition",
        "html": "Ön tanıya göre ilgili algoritmaya git.",
        "targetAction": "cases",
        "buttonLabel": "Vaka algoritmalarını aç"
      },
      {
        "type": "step",
        "html": "<strong>Yeniden değerlendir.</strong>",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-02"
      ],
      "page": "6–7"
    }
  }
];

const CASES = [
  {
    "id": "bee",
    "title": "Isırma ve Sokmalar",
    "subtitle": "Arı • yılan/akrep • kene • deniz canlıları",
    "category": "Çevresel",
    "icon": "🐾",
    "accent": "#b77708",
    "soft": "#fff3d4",
    "code": "SB-ASH-Y-26",
    "page": "45",
    "uiFeatured": true,
    "population": "adult",
    "uiPriority": "high",
    "clinicalStatus": "reviewed",
    "summary": "Isıran veya sokan etkeni belirle; kara ve deniz canlılarında resmî Y-26 bakımını uygula, vital/zehirlenme/alergi bulgularını izle ve gerektiğinde ilgili alerji-anafilaksi algoritmasına geç.",
    "criticalActions": [
      "Acil olgu yönetimini uygula; ısıran/sokan etkeni belirle, ısırılan yeri ve yarayı değerlendir.",
      "Kara canlılarında lokal soğuk; deniz canlılarında %0,9 NaCl veya steril su ile 100–250 mL irrigasyon ve tolere edilebilir sıcak suda en az 20 dk bekletme yaklaşımını uygula.",
      "Yıka ve sabitle; ödem sınırını her 5 dk'da bir izle. Vital bulgularla birlikte zehirlenme, alerjik reaksiyon ve anafilaksi bulgularını gözle."
    ],
    "quick": [
      "<strong>Arı:</strong> Görülebilen arı iğnesini çıkar.",
      "<strong>Yılan/akrep:</strong> Turnike uygulama. Kompresyon bandı/sıkı bandaj kullanılıyorsa bir parmak girecek kadar gevşek olmalıdır.",
      "<strong>Kene:</strong> Ezmeden ve parçalamadan çıkar. Eğitimli, kendinden emin ve gerekli ekipmanı olan ambulans ekibi hastane öncesinde çıkarabilir; aksi durumda keneyi çıkarmadan naklet.",
      "<strong>Kişisel korunma:</strong> İlk müdahale ve taşıma sırasında bulaş riskine karşı uygun kişisel koruyucu ekipman kullan.",
      "<strong>Alerjik reaksiyon / anafilaksi:</strong> Y-26 içinde ilaç basamağı türetilmez; ilgili algoritmaya geç."
    ],
    "warningFindings": [
      "Yılan/akrep ısırma-sokmalarında turnike kullanımı",
      "Kenenin ezilmesi, parçalanması veya deneyimsiz müdahaleyle çıkarılması",
      "Hızla artan ödem, zehirlenme bulguları, alerjik reaksiyon veya anafilaksi",
      "Deniz canlısı temasında uygun irrigasyon/sıcak su uygulamasının atlanması"
    ],
    "meds": [],
    "decision": {
      "q": "Isıran/sokan etken kara canlısı mı, deniz canlısı mı?",
      "yes": "Kara canlısı yaklaşımını uygula; lokal soğuk sonrası ortak yara bakımı ve seri değerlendirmeye geç.",
      "no": "Deniz canlısı yaklaşımını uygula; irrigasyon + en az 20 dk tolere edilebilir sıcak su sonrası ortak bakıma geç."
    },
    "decisionIntegrated": true,
    "algorithmBranchLayout": "split",
    "algorithmSteps": [
      {
        "html": "<strong>Acil olgu yönetimini uygula.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Isıran veya sokan etkeni belirle.</strong> Isırılan yeri tespit et, yaralanma izini değerlendir.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "algorithmBranches": [
      {
        "label": "Kara canlıları",
        "steps": [
          {
            "html": "<strong>Isırılan bölgeye lokal soğuk uygula.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          },
          {
            "html": "<strong>Yıka ve sabitle.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          },
          {
            "html": "<strong>Her 5 dk'da bir ödemin sınırını izle.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          },
          {
            "html": "Hastanın <strong>vitallerini takip et; zehirlenme, alerjik reaksiyon ve anafilaksi bulgularını gözlemle.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT",
            "followUp": {
              "label": "Alerjik reaksiyon / anafilaksi varsa",
              "transition": "İLGİLİ ALGORİTMAYA GİT"
            }
          }
        ]
      },
      {
        "label": "Deniz canlıları",
        "steps": [
          {
            "html": "Isırılan bölgeyi <strong>%0,9 NaCl veya steril su ile 100–250 mL arasında sıvı ile irrige et.</strong> Bölgeyi mümkünse yakmayacak seviyede lokal sıcak su içinde <strong>en az 20 dk</strong> beklet.",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          },
          {
            "html": "<strong>Yıka ve sabitle.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          },
          {
            "html": "<strong>Her 5 dk'da bir ödemin sınırını izle.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          },
          {
            "html": "Hastanın <strong>vitallerini takip et; zehirlenme, alerjik reaksiyon ve anafilaksi bulgularını gözlemle.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT",
            "followUp": {
              "label": "Alerjik reaksiyon / anafilaksi varsa",
              "transition": "İLGİLİ ALGORİTMAYA GİT"
            }
          }
        ]
      }
    ],
    "source": {
      "documentId": "EK2-2026",
      "documentTitle": "Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları",
      "effectiveDate": "2026-08-25",
      "officialPageDate": "2026-09-11",
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-26"
      ],
      "page": "44–45",
      "codeStatus": "verified"
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
          "OTHER"
        ],
        "authority": "DIRECT",
        "repeat": "Bolus",
        "maxDose": "",
        "note": "Hayatı tehdit eden bulgu yok dalında, resmî şemada telefon simgesi olmayan sıvı basamağı. Kaynak bu NaCl bolusu için uygulama yolunu ayrıca belirtmediğinden yol türetilmemiştir.",
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
      "reviewedAt": "2026-09-25",
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
      "<strong>Hipoperfüzyon sürüyorsa</strong> adrenalin 0,3–0,5 mg IM'yi 5 dk içinde tekrarla + %0,9 NaCl 500 mL bolus.",
      "<strong>Düzelme olmazsa SKKM/ÇM:</strong> adrenalin 1 mcg/dk IV infüzyonu yavaş uygula; ardından %0,9 NaCl 500 mL bolus.",
      "<strong>SKKM/ÇM ileri basamak:</strong> difenhidramin 25–50 mg veya feniramin 45,5 mg IV yavaş; bronkospazm için salbutamol 2,5–5 mg; profilaktik metilprednizolon 1–2 mg/kg IV (maks. 125 mg).",
      "<strong>Anahtar Nokta:</strong> Alerjen madde uzaklaştırılmalıdır. Bilinen alerjenle temas sonrası hipotansiyon veya sistolik kan basıncında %30'dan fazla düşme de anafilaksi tanı ölçütlerinden biridir."
    ],
    "warningFindings": [
      "Anjiyoödem, stridor, hırıltılı solunum",
      "Takipne, wheezing, siyanoz, SpO₂ < %90, konfüzyon",
      "Soluk cilt, hipotansiyon, koma",
      "Deri/mukoza tutulumu ile birlikte solunum bulgusu veya azalmış kan basıncı/dolaşım bozukluğu",
      "Muhtemel alerjen temasından kısa süre sonra deri/mukoza, solunum, dolaşım veya gastrointestinal bulgulardan en az ikisinin görülmesi",
      "Bilinen alerjenle temas sonrası hipotansiyon veya sistolik kan basıncında %30'dan fazla düşme"
    ],
    "referenceGroups": [
      {
        "title": "Anafilaksi Tanı Kriterleri",
        "items": [
          ["1", "Ani başlangıçlı cilt/mukoza tutulumu (yaygın ürtiker, kaşıntı, kızarıklık, şiş dudaklar, dil veya uvula) ile birlikte solunum bulgularından veya azalmış kan basıncı/dolaşım bozukluğu bulgularından en az biri."],
          ["2", "Toksik madde/maruziyet veya muhtemel bir alerjenle temastan kısa süre sonra deri-mukoza, solunum, dolaşım ve gastrointestinal bulgu gruplarından iki veya daha fazlasının görülmesi."],
          ["3", "Hasta için alerjen olduğu bilinen maddeyle temas sonrasında hipotansiyon veya sistolik kan basıncında %30’dan fazla düşme."],
          ["Dolaşım", "Azalmış kan basıncı/dolaşım bozukluğu ile ilişkili bulgular arasında hipotoni, senkop veya inkontinans yer alabilir."],
          ["Not", "Alerjen madde uzaklaştırılmalıdır."]
        ]
      }
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
          "OTHER"
        ],
        "authority": "DIRECT",
        "repeat": "Hipoperfüzyonda 500 mL; düzelme olmazsa adrenalin infüzyonu sonrası 500 mL bolus basamağı tekrar yer alır",
        "maxDose": "",
        "note": "Resmî Y-22'de 500 mL bolus, devam eden hipoperfüzyonda tekrarlanan IM adrenalin ile birlikte ve düzelme olmazsa IV adrenalin infüzyonundan sonra yeniden yer alır. NaCl satırında uygulama yolu ayrıca belirtilmediğinden yol türetilmemiştir.",
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
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-22"
      ],
      "page": "36–37",
      "codeStatus": "verified"
    },
    "decisionIntegrated": true,
    "algorithmSteps": [
      {
        "html": "<strong>Acil olgu yönetimini uygula.</strong> Akut başlangıçlı yaşamı tehdit eden hava yolu, solunum veya dolaşım bulgularını değerlendir.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Adrenalin 0,3–0,5 mg IM.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "AABT"
      },
      {
        "html": "<strong>Hava yolunu açık tut; SpO₂ %94–98 hedefli O₂ ver.</strong> Damar yolu aç; anjiyoödemde erken ileri hava yolu hazırlığı yap; SpO₂, EKG ve KB izle.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "algorithmBranches": [
      {
        "label": "Hipoperfüzyon sürüyor",
        "note": "İlk IM adrenalinden ve destek tedavisinden sonra.",
        "steps": [
          {
            "html": "<strong>Adrenalin 0,3–0,5 mg IM'yi 5 dk içinde tekrarla</strong> + <strong>%0,9 NaCl 500 mL bolus</strong>.",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "AABT"
          }
        ],
        "branches": [
          {
            "label": "Düzelme olmuyor",
            "steps": [
              {
                "html": "<strong>Adrenalin 1 mcg/dk IV infüzyonu yavaş uygula.</strong>",
                "approvalAuthority": "SKKM",
                "practitionerAuthority": "AABT"
              },
              {
                "html": "<strong>%0,9 NaCl 500 mL bolus.</strong>",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "AABT"
              },
              {
                "html": "<strong>Difenhidramin 25–50 mg veya feniramin maleat 45,5 mg IV yavaş</strong>; bronkospazm için <strong>salbutamol 2,5–5 mg</strong>.",
                "approvalAuthority": "SKKM",
                "practitionerAuthority": "AABT"
              },
              {
                "html": "Profilaktik <strong>metilprednizolon IV 1–2 mg/kg</strong> (maks. 125 mg).",
                "approvalAuthority": "SKKM",
                "practitionerAuthority": "AABT"
              }
            ]
          }
        ]
      }
    ]
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
      "Ağır atak: cümle kuramaz, kelimelerle konuşur; yatamaz, ortopne vardır.",
      "Ağır atak: solunum sayısı ≥30/dk, yardımcı solunum kasları devrede.",
      "Ağır atak: SpO₂ <%90, kalp hızı >120 atım/dk, bilinç huzursuz/ajite.",
      "Bilinç bulanıklığı ve sessiz toraks birlikteyse ölümcül atak.",
      "Etiyolojide anafilaksiyi göz önünde bulundur."
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
        "dose": "Hafif-orta: 2. salbutamol uygulaması + ipratropium 500 mcg inhaler; ağır: 2. salbutamol uygulaması + ipratropium 500 mcg nebül",
        "routes": [
          "OTHER"
        ],
        "authority": "SKKM",
        "repeat": "Düzelme yoksa her iki ilaç 20 dk arayla",
        "maxDose": "maksimum 3 uygulama",
        "note": "Resmî Y-05, 20 dk sonra düzelme yoksa hafif-ortada ipratropium 500 mcg inhaler; ağır atakta ipratropium 500 mcg nebül ile ikinci salbutamol uygulamasını belirtir. Salbutamol tekrar dozu kutuda ayrıca sayısal olarak yazılmadığından türetilmemiştir.",
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
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-05"
      ],
      "page": "11–12",
      "codeStatus": "verified"
    },
    "algorithmSteps": [
      {
        "html": "<strong>Başlangıç:</strong> acil olgu yönetimini uygula; hastayı rahat ettiği (tercihen oturur) pozisyonda tut. <strong>SpO₂ >%93</strong> olacak şekilde O₂ titre et; gerekirse PBV ile destekle. Damar yolu aç, %0,9 NaCl DAKŞ ve atağın derecesini belirle.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>İlk tedavi:</strong> hafif-orta atakta salbutamol 4–8 puf inhaler veya 2,5–5 mg nebül; ağır atakta salbutamol 2,5–5 mg + ipratropium bromür 500 mcg nebül.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "AABT"
      },
      {
        "html": "<strong>20 dk sonra düzelme yoksa SKKM/ÇM:</strong> ikinci salbutamol + ipratropium bromür; düzelme olmazsa 20 dk arayla, en fazla 3 uygulama + metilprednizolon 40 mg IV.",
        "approvalAuthority": "SKKM",
        "practitionerAuthority": "AABT"
      },
      {
        "html": "<strong>Ölümcül astım atağı:</strong> bilinç bulanıklığı ve sessiz toraks varsa SKKM/ÇM ile erken ileri hava yolu için hazırlan; magnezyum sülfat 1–2 g IV, %0,9 NaCl içinde 20–30 dk uygulanabilir.",
        "approvalAuthority": "SKKM",
        "practitionerAuthority": "AABT"
      }
    ]
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
      "<strong>Oksijen:</strong> SpO₂ < %90 ise O₂ ver. SpO₂ >%90 ise rutin O₂ uygulamasından kaçın; solunum sıkıntısı veya ritim bozukluğunda uygulanabilir.",
      "<strong>Asetilsalisilik asit 160–325 mg çiğnet.</strong> Hipotansiyon/bradikardi yoksa SKKM/ÇM ile isosorbid dinitrat 5 mg SL; ağrı sürerse 3–5 dk arayla toplam 3 doza kadar.",
      "<strong>Nitrat güvenliği:</strong> hipotansiyon, sağ ventrikül MI, bradikardi veya sildenafil/vardenafil/tadalafil kullanımı varsa izosorbid dinitrat verme.",
      "<strong>Fentanil:</strong> diğer girişimlere rağmen tolere edilemeyen şiddetli ağrıda SKKM/ÇM ile 1 mcg/kg IV yavaş bolus; bulantı ve solunum depresyonu açısından izle.",
      "<strong>ST elevasyonlu MI:</strong> kapı-balon (<strong>120 dk içinde perkütan girişim</strong>) ve kapı-iğne (fibrinolitik uygulama) sürelerini nakil ve uygun merkez seçiminde gözet."
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
        "note": "Alerji ve aktif kanama kontraendikasyonlarını kontrol et. Hasta günlük yeterli doz aspirin kullanmış olsa bile resmî Anahtar Noktada yükleme dozu verilmesi önerilir.",
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
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-06"
      ],
      "page": "13–14",
      "codeStatus": "verified"
    },
    "algorithmSteps": [
      {
        "html": "<strong>Başlangıç:</strong> acil olgu yönetimini uygula, ağrıyı sorgula; hastayı sakinleştir, gereksiz efordan kaçın ve yürütme. En kısa sürede vital bulgulara bak, monitörize et ve 12 derivasyonlu EKG al. <strong>SpO₂ <%90 ise O₂ ver.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Asetilsalisilik asit 160–325 mg çiğnet.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "AABT"
      },
      {
        "html": "<strong>SKKM/ÇM:</strong> hipotansiyon ve bradikardi yoksa izosorbid dinitrat 5 mg SL; ağrı devam ederse 3–5 dk arayla toplam 3 doza kadar.",
        "approvalAuthority": "SKKM",
        "practitionerAuthority": "AABT"
      },
      {
        "html": "<strong>SKKM/ÇM:</strong> göğüs ağrısı devam ediyor ve hasta tarafından tolere edilemiyorsa fentanil 1 mcg/kg IV.",
        "approvalAuthority": "SKKM",
        "practitionerAuthority": "AABT"
      }
    ]
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
      "Bilinç kaybı",
      "Kısmi hava yolu tıkanıklığında sırta vurma gibi müdahaleler tam tıkanıklığa dönüşmeye neden olabilir."
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
      "reviewedAt": "2026-09-25",
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
      "Hemodinamik instabilite veya ventriküler/supraventriküler aritmi",
      "NIMV'yi tolere edememe veya NIMV başarısızlığı; sedasyonla kontrol edilemeyen ajitasyon; inatçı kusma/aspirasyon riski invaziv mekanik ventilasyon açısından uyarıcıdır.",
      "NIMV açısından: aksesuar solunum kası kullanımı, paradoksal karın hareketi/interkostal çekilme, klinik şiddetli dispne veya oksijene rağmen devam eden hipoksi"
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
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-04"
      ],
      "page": "9–10"
    },
    "algorithmSteps": [
      {
        "html": "<strong>Başlangıç:</strong> acil olgu yönetimini uygula; hastayı rahat ettiği (tercihen oturur) pozisyonda tut. <strong>SpO₂ %88–92</strong> olacak şekilde O₂ titre et; gerekirse PBV ile solunumu destekle.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Hafif-orta / ağır ilk tedavi:</strong> salbutamol 4–8 puf veya 2,5–5 mg nebül + ipratropium bromür 500 mcg nebül birlikte.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "AABT"
      },
      {
        "html": "<strong>20 dk sonra SKKM/ÇM:</strong> salbutamol 2,5 mg + ipratropium bromür 500 mcg; 20 dk arayla en fazla 3 kez + metilprednizolon 40 mg IV.",
        "approvalAuthority": "SKKM",
        "practitionerAuthority": "AABT"
      },
      {
        "html": "<strong>Tedaviye yanıt vermeyen ağır hasta:</strong> SKKM/ÇM ile ileri hava yolu için hazırlıklı ol; tolere eden hastada non-invaziv mekanik ventilasyonu değerlendir.",
        "approvalAuthority": "SKKM",
        "practitionerAuthority": "AABT"
      }
    ]
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
      "<strong>Ağır:</strong> bilinç kapalı, <28°C → orta hipotermi tedavisine ek hava yolu güvenliği.",
      "<strong>Anahtar Nokta:</strong> Orta/ciddi hipotermide bilinç değişikliği varsa aktif dış ısıtmayı düşün; ısıtılmış-nemlendirilmiş O₂ <strong>42–46°C</strong>, ısıtılmış IV sıvılar <strong>40–42°C</strong>."
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
        "note": "Orta hipotermi basamağında resmî şemada yer alır; Anahtar Nokta ayrıca ısıtılmış IV sıvıları 40–42°C olarak tanımladığı için IV yol bilgisi kaynakça desteklenir.",
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
      "reviewedAt": "2026-09-25",
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
      "Vücut ısısı ≥35°C olana kadar KPR'yi sonlandırma; ilk defibrilasyon başarısızsa vücut sıcaklığı 30°C'ye ulaşıncaya kadar sonraki defibrilasyonu ertele."
    ],
    "quick": [
      "Vücut ısısı <strong><35°C</strong> ve bilinç kapalıysa en az <strong>60 sn nabız kontrolü</strong> yap.",
      "Nabız varsa <strong>Hipotermi algoritmasına geç.</strong> Nabız yoksa KPR başlama kriterlerini değerlendir.",
      "KPR başlama kriteri varsa standart erişkin ileri yaşam desteği + eş zamanlı pasif/aktif ısıtma uygula; <strong>vücut ısısı ≥35°C olana kadar KPR'yi sonlandırma</strong>, >35°C olduğunda Arrest Yönetimi algoritmasına geç.",
      "Kesintisiz KPR olanağı yoksa: <strong><28°C: 5 dk KPR / 5 dk KPR'siz</strong>; <strong><20°C: 5 dk KPR / 10 dk KPR'siz</strong>. KPR'siz periyodu taşıma ve kurtarma için kullan. <strong>Uzun resüsitasyon süreleri önerilir.</strong>",
      "İlk defibrilasyon girişimi başarısızsa <strong>vücut sıcaklığı 30°C'ye ulaşıncaya kadar defibrilasyonu ertele.</strong>",
      "KPR endikasyonu olmayan durumlar: hava yolunun kar/buzla kaplı olması, 35 dk'dan fazla çığ altında kalma, ortam güvenliğinin sağlanamaması veya kardiyak kompresyona izin vermeyecek şekilde tüm vücudun donması.",
      "<strong>SKKM/ÇM ile görüşerek ECMO merkezine yönlendirmeyi düşün.</strong>"
    ],
    "warningFindings": [
      "İlk defibrilasyon başarısızsa vücut sıcaklığı 30°C'ye ulaşıncaya kadar defibrilasyonu ertele",
      "Islak giysileri çıkar; battaniye ya da termal örtü ile ört; sıcak ortama al; uygulamalarda sert fiziksel hareketlerden kaçın (örn. entübasyon ve aspirasyon sırasında).",
      "Ciddi hipotermide kan basıncının ölçülememesi, ağrılı uyarana yanıt olmaması ve pupil refleksinin kaybı ölüm belirtisi değildir.",
      "Vücut ısısını takip et; nabzı uzun süre değerlendir (en az 60 sn).",
      "Aktif dış ısıtma teknikleri: ısıtma cihazları, sıcak su paketleri, sıcak banyo ve kimyasal ısı paketleri.",
      "Isıtılmış nemlendirilmiş oksijen 42–46°C ve ısıtılmış IV sıvılar 40–42°C; bilinç değişikliği olan orta ve ciddi hipotermide düşünülmelidir.",
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
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-25"
      ],
      "page": "42–43"
    },
    "decisionIntegrated": true,
    "algorithmSteps": [
      {
        "html": "<strong>Acil olgu yönetimini uygula.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "precondition": "Vücut ısısı <35°C ve bilinç kapalı ise",
        "html": "<strong>En az 60 sn nabız kontrolü yap.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "algorithmNotices": [
      "Hipotermiye bağlı kardiyak arrestte, ilk defibrilasyon girişiminin başarısız olması durumunda, vücut sıcaklığı 30°C'ye ulaşıncaya kadar defibrilasyon ertelenmelidir.",
      "SKKM/ÇM ile görüşerek ECMO merkezine yönlendirmeyi düşün."
    ],
    "algorithmBranches": [
      {
        "label": "Nabız var",
        "transition": "HİPOTERMİ ALGORİTMASINA GİT"
      },
      {
        "label": "Nabız yok",
        "steps": [
          {
            "html": "<strong>KPR başlama kriterleri var mı?</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          }
        ],
        "branches": [
          {
            "label": "Evet",
            "steps": [
              {
                "html": "<strong>Standart erişkin ileri yaşam desteği uygulamasına başla.</strong> Eş zamanlı olarak pasif ve aktif ısıtma yöntemlerini uygula.",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT",
                "followUp": {
                  "label": "Kesintisiz KPR olanağı yoksa",
                  "html": "<strong>&lt;28°C:</strong> 5 dk KPR + 5 dk KPR'siz periyot. <strong>&lt;20°C:</strong> 5 dk KPR + 10 dk KPR'siz periyot. KPR'siz periyodu taşıma ve kurtarma için kullan."
                }
              },
              {
                "html": "<strong>Vücut ısısı ≥35°C olana kadar KPR'yi sonlandırma.</strong> Vücut ısısı <strong>&gt;35°C</strong> olduğunda:",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              }
            ],
            "transition": "ARREST YÖNETİMİ ALGORİTMASINA GİT"
          },
          {
            "label": "Hayır",
            "note": "KPR endikasyonu olmayan durumlar: hava yolunun karla/buzla kaplı olması; 35 dk'dan fazla çığ altında kalma; ortam güvenliğinin sağlanamaması; kardiyak kompresyona izin vermeyecek şekilde bütün vücudun donması.",
            "steps": [
              {
                "html": "<strong>KPR'ye başlama.</strong>",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              }
            ]
          }
        ]
      }
    ]
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
      "<strong>Solunum geri gelirse O₂;</strong> solunum yok/gasping ise arrest yönetimi algoritmasına geç.",
      "Bilinç kapalıysa veya travma şüphesi varsa (sığ suya dalma/atlama, su sporları vb.) <strong>spinal stabilizasyon sağla.</strong>",
      "Sudan çıkarıldıktan sonra <strong>ıslak giysileri çıkar, hastayı kurula ve hipotermiden koru.</strong>"
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
      "reviewedAt": "2026-09-25",
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
      "<strong>Isı krampları:</strong> kas krampları, normal ya da hafif artmış vücut ısısı ve terleme → dinlenme + oral sıvı replasmanı.",
      "<strong>Isı stresi:</strong> ısı kramplarına ek olarak normal ya da artmış vücut ısısı (<40°C), bulantı, kusma, baş ağrısı, halsizlik ve ortostatik hipotansiyon → damar yolu aç, ortam ısısını düşür, %0,9 NaCl 1000–2000 ml bolus başla.",
      "<strong>Isı çarpması:</strong> >40°C vücut ısısı + bilinç bulanıklığı; vital/kan şekeri, damar yolu, monitörizasyon.",
      "<strong>%0,9 NaCl 1000 ml bolus</strong> ve vücut ısısını <39°C olacak şekilde pasif eksternal soğutma.",
      "<strong>Pasif eksternal soğutma:</strong> Hastanın üzerini çıkar; vücuda soğuk ya da ılık su sıkıp havalandırma ile buharlaşmayı sağla. Koltuk altı ve kasık bölgelerine ıslak bez veya spanç koy.",
      "<strong>Soğutma hedefi:</strong> vücut ısısını <39°C'ye indir; hastayı serin ortama al, kıyafetlerini çıkar ve ambulans kabinini soğut; aşırı soğutma ile hipotermi oluşturmaktan kaçın."
    ],
    "warningFindings": [
      "Vücut ısısı >40°C",
      "Bilinç değişikliği",
      "Kollaps / şok",
      "Nefes darlığı"
    ],
    "referenceGroups": [
      {
        "title": "Hipertermi — Klinik Bulgular",
        "items": [
          ["Isı Krampları", "Kas seyirmeleri; alt ekstremiteler ve abdomende ağrılı spazmlar; bulantı, kusma, güçsüzlük ve aşırı terleme."],
          ["Isı Yorgunluğu", "Solukluk; yoğun terleme; ortostatik hipotansiyon; baş ağrısı; güçsüzlük, bitkinlik ve susuzluk."],
          ["Isı Çarpması", "Bilinç durumunda değişiklik; beden ısısında artış; minimal ya da çok az terleme; kollaps, şok, nefes darlığı, bulantı ve kusma."]
        ]
      },
      {
        "title": "Pasif Eksternal Soğutma Yöntemleri",
        "items": [
          ["Evoperasyon", "Hastanın üzeri çıkartılır. Vücuduna soğuk ya da ılık su sıkılır ve havalandırma açılarak buharlaşması sağlanır."],
          ["İmmersiyon", "Hastanın koltuk altı ve kasık bölgelerine ıslak bez ya da spanç konulur."],
          ["Hedef", "Soğutmada hedef vücut ısısı <39°C’yi sağlamaktır. Aşırı soğutma yapılarak hipotermiye neden olmaktan kaçınılmalıdır."]
        ]
      }
    ],
    "meds": [
      {
        "name": "%0,9 NaCl — ısı stresi",
        "dose": "1000–2000 mL bolus",
        "routes": [
          "OTHER"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Resmî Y-23 ısı stresi kolunda damar yolu açıldıktan ve ortam ısısı düşürüldükten sonra; sıvı kutusu uygulama yolunu ayrıca belirtmediğinden yol türetilmemiştir.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "%0,9 NaCl — ısı çarpması",
        "dose": "1000 mL bolus",
        "routes": [
          "OTHER"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Resmî Y-23 ısı çarpması kolunda; eş zamanlı soğutma ve seri yeniden değerlendirme ile. Sıvı kutusu uygulama yolunu ayrıca belirtmediğinden yol türetilmemiştir.",
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
      "reviewedAt": "2026-09-25",
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
      "reviewedAt": "2026-09-25",
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
      "Stabil değil: senkop/ani bilinç değişikliği, iskemik göğüs ağrısı, şok bulguları, akut kalp yetmezliği, hipotansiyon veya nabız <40 atım/dk.",
      "Asistoli riski: yakın asistoli öyküsü, Mobitz Tip 2 AV blok, tam AV blok veya ventriküler duraklama >3 sn."
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
        "note": "Atropine yanıtsız semptomatik bradikardide; resmî şemada SKKM/ÇM telefon simgeli ileri basamak. Anahtar Nokta pratik hesabı: Dopamin ampul 200 mg; 500 mL %0,9 NaCl içine 100 mg dopamin; dakikada hastanın kilosunun yarısı kadar damla gönderildiğinde 5 mcg/kg/dk infüzyon başlangıcı ('YARIM-YARIM-YARIM').",
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
        "note": "Atropine yanıtsız semptomatik bradikardide; resmî şemada SKKM/ÇM telefon simgeli ileri basamak. Anahtar Nokta pratik hazırlama: 250 mL izotonik/dekstroz içine 1 mg/1 mL adrenalin = 4 mcg/mL; 500 mL içine = 2 mcg/mL; 1000 mL içine = 1 mcg/mL.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Bradikardi hemodinamik olarak instabil mi?",
      "yes": "Atropin → yanıtsızsa SKKM/ÇM ile pacing / dopamin / adrenalin infüzyon basamağı.",
      "no": "Monitörizasyon, nedenin araştırılması ve uygun merkeze nakil."
    },
    "algorithmSteps": [
      {
        "html": "<strong>Başlangıç:</strong> acil olgu yönetimini uygula. Hipoksemikse (SpO₂ <%94) oksijenizasyon; damar yolu, monitörizasyon ve 12 derivasyon EKG. Altta yatan nedeni tanımla ve müdahale et; stabiliteyi değerlendir.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Stabil değilse:</strong> atropin 1 mg IV; yanıta göre 3–5 dk'da bir tekrarlanabilir, maksimum 3 mg.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "AABT"
      },
      {
        "html": "<strong>Yeterli yanıt yoksa veya asistoli riski varsa SKKM/ÇM:</strong> adrenalin 2–10 mcg/dk IV infüzyon veya dopamin 5–20 mcg/kg/dk IV infüzyon veya transkütan pacing; QRS >0,12 sn ise pacing'i öncelikli düşün.",
        "approvalAuthority": "SKKM",
        "practitionerAuthority": "AABT"
      },
      {
        "html": "<strong>Stabil ve asistoli riski yoksa:</strong> yakın vital takibi yap.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ]
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
      "reviewedAt": "2026-09-25",
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
    },
    "algorithmSteps": [
      {
        "html": "<strong>Başlangıç:</strong> acil olgu yönetimini uygula. Hipoksemikse oksijen başla; damar yolu, monitörizasyon ve 12 derivasyon EKG. Stabiliteyi senkop/ani bilinç değişikliği, iskemik göğüs ağrısı, şok bulguları ve akut kalp yetmezliği açısından değerlendir.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Göğüs ağrısı devam ediyor ve hasta tarafından tolere edilemiyorsa:</strong> fentanil 1 mcg/kg IV.",
        "approvalAuthority": "SKKM",
        "practitionerAuthority": "AABT"
      }
    ],
    "algorithmBranches": [
      {
        "label": "Stabil",
        "note": "QRS genişliği ve ritim düzenine göre ilerle.",
        "branches": [
          {
            "label": "Geniş QRS",
            "branches": [
              {
                "label": "Düzenli",
                "steps": [
                  {
                    "html": "Ventriküler taşikardi ya da belirsiz ritim ise <strong>amiodaron 150 mg IV</strong>, %5 dekstroz ile 10 dk'da. Önceden kesin tanılı dal bloklu SVT varsa düzensiz dar kompleks gibi tedavi et.",
                    "approvalAuthority": "SKKM",
                    "practitionerAuthority": "AABT"
                  },
                  {
                    "html": "Etkisizse <strong>kardiyoversiyon</strong> (sedasyon sonrası).",
                    "approvalAuthority": "SKKM",
                    "practitionerAuthority": "AABT"
                  }
                ]
              },
              {
                "label": "Düzensiz",
                "steps": [
                  {
                    "html": "Dal bloklu atriyal fibrilasyon ise dar kompleks gibi tedavi et. Torsades de Pointes düşünülüyorsa <strong>magnezyum sülfat 2 g IV, 10 dk'da</strong>.",
                    "approvalAuthority": "SKKM",
                    "practitionerAuthority": "AABT"
                  }
                ]
              }
            ]
          },
          {
            "label": "Dar QRS",
            "branches": [
              {
                "label": "Düzenli",
                "steps": [
                  {
                    "html": "<strong>Vagal manevra uygula.</strong>",
                    "approvalAuthority": "DIRECT",
                    "practitionerAuthority": "AABT"
                  },
                  {
                    "html": "<strong>Adenozin 6 mg hızlı IV puşe</strong> ve ardından en az 20 mL %0,9 NaCl IV bolus; yanıtsızsa 2. doz 12 mg. Adenozin yoksa metoprolol 5 mg IV (3 kez tekrarlanabilir) veya diltiazem 0,25 mg/kg IV, ikinci doz 0,35 mg/kg IV. Etkisizse kardiyoversiyon (sedasyon sonrası).",
                    "approvalAuthority": "SKKM",
                    "practitionerAuthority": "AABT"
                  }
                ]
              },
              {
                "label": "Düzensiz",
                "steps": [
                  {
                    "html": "Olası atriyal fibrilasyonda <strong>metoprolol 5 mg IV</strong> (3 kez tekrarlanabilir) veya <strong>diltiazem 0,25 mg/kg IV</strong>; ikinci doz 0,35 mg/kg IV.",
                    "approvalAuthority": "SKKM",
                    "practitionerAuthority": "AABT"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "label": "Anstabil",
        "steps": [
          {
            "html": "Kardiyoversiyon öncesi <strong>midazolam 0,1 mg/kg IV</strong> ile sedasyon önerilir.",
            "approvalAuthority": "SKKM",
            "practitionerAuthority": "AABT"
          },
          {
            "html": "<strong>Senkronize kardiyoversiyon:</strong> dar düzenli QRS 100 J; dar düzensiz QRS 200 J; geniş düzenli QRS 100 J; geniş düzensiz QRS için defibrilasyon (senkronize değil) dozu.",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "AABT"
          },
          {
            "html": "Yanıt alınamazsa <strong>amiodaron 300 mg IV, 10 dk'da</strong>; yanıt yine alınamazsa kardiyoversiyonu tekrarla.",
            "approvalAuthority": "SKKM",
            "practitionerAuthority": "AABT"
          }
        ]
      }
    ],
    "decisionIntegrated": true
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
      "reviewedAt": "2026-09-25",
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
      "Defibrilatörü bağla ve ritmi şoklanabilir (VF/nVT) / şoklanamaz (asistoli/NEA) olarak ayır.",
      "IV/IO yolu geciktirme; şoklanamaz ritimde adrenalin erişim sağlanır sağlanmaz, şoklanabilir ritimde şema sırasına göre uygula."
    ],
    "quick": [
      "<strong>Yüksek kaliteli KPR:</strong> göğse <strong>5–6 cm</strong> derinlikte, <strong>100–120/dk</strong> bası yap; kompresyona <strong>10 sn'den fazla ara verme</strong>, hiperventilasyondan kaçın ve göğsün tamamen gevşemesine izin ver. Kompresyon uygulayanı her 2 dk'da bir veya yorulursa daha sık değiştir.",
      "<strong>Hava yolu/ventilasyon:</strong> ileri hava yolundan önce 30:2; ileri hava yolundan sonra kesintisiz 100–120 bası/dk + <strong>10 solunum/dk</strong>. SpO₂ <strong>%90–98</strong> olacak şekilde O₂ ver.",
      "<strong>Asistoli/NEA:</strong> adrenalin 1 mg IV/IO, 3–5 dk arayla. Güncel Y-10/Y-11 arrest akışında atropin veya rutin NaHCO₃ arrest ilacı olarak yer almıyor.",
      "<strong>VF/nVT:</strong> 2. defibrilasyon sonrası adrenalin 1 mg IV, 3–5 dk arayla; 3. defibrilasyon sonrası amiodaron 300 mg IV/IO veya %2 lidokain 1–1,5 mg/kg IV/IO; tekrarlayan/dirençli VF/nVT'de 5. şok sonrası amiodaron 150 mg IV/IO veya lidokain 0,5–0,75 mg/kg IV/IO.",
      "<strong>Şok enerjisi:</strong> firma önerisine göre; anahtar noktalarda bifazik 120–200 J, monofazik 360 J, cihaz tipi bilinmiyorsa en yüksek enerji. Sonraki şoklar aynı veya artan doz; 4. şoktan sonra en yüksek enerji.",
      "<strong>Geri döndürülebilir nedenler:</strong> hipoksi, hipovolemi, hiper/hipokalemi-metabolik nedenler-hipoglisemi, hipotermi, hidrojen iyonu/asidoz; koroner veya pulmoner tromboz, tansiyon pnömotoraks, kardiyak tamponad ve toksin/terapötik bozuklukları gözden geçir.",
      "ROSC olursa Resüsitasyon Sonrası Bakım algoritmasına geç."
    ],
    "warningFindings": [
      "Kompresyon kesintisinin 10 sn'yi aşması veya bası hız/derinliğinin 100–120/dk ve 5–6 cm hedefinden sapması",
      "IV/IO yerine ET ilaç uygulaması",
      "Şoklanabilir ritimde defibrilasyonun gecikmesi",
      "Geri döndürülebilir H/T nedenlerinin atlanması"
    ],
    "meds": [
      {
        "name": "Adrenalin — şoklanamaz ritim",
        "dose": "1 mg",
        "routes": [
          "IV",
          "IO"
        ],
        "authority": "DIRECT",
        "repeat": "3–5 dk arayla",
        "maxDose": "",
        "note": "Y-10 Asistoli/NEA: 1 mg IV/IO (1/10000), 3–5 dk arayla. Telefon simgesi yok.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Adrenalin — şoklanır ritim",
        "dose": "1 mg",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "2. defibrilasyon sonrası; 3–5 dk arayla",
        "maxDose": "",
        "note": "Y-11 VF/nVT: 2. defibrilasyon sonrası 1 mg 1/10000 IV. Y-11 kutusu IO yazmadığından IO bu karta eklenmemiştir.",
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
        "note": "Y-11: 300 mg, 20 mL %5 dekstroz içinde IV/IO bolus 2–3 dk; tekrarlayan/dirençli VF/nVT'de 5. şok sonrası 150 mg, 10 mL %5 dekstroz içinde IV/IO bolus 2–3 dk. Lidokaine alternatiftir.",
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
        "repeat": "3. şok sonrası; 5. şok sonrası 0,5–0,75 mg/kg tekrar",
        "maxDose": "",
        "note": "Y-11: %2 lidokain IV/IO bolus; amiodarona alternatif. 5. şok sonrası 0,5–0,75 mg/kg IV/IO bolus tekrar verilebilir.",
        "practitionerAuthority": "AABT"
      }
    ],
    "decision": {
      "q": "Ritim şoklanabilir mi (VF/nVT)?",
      "yes": "Defibrilasyon + 2 dk CPR döngüleri; ilaçları 2026 şok sırasına göre uygula.",
      "no": "Asistoli/NEA: CPR + erken adrenalin + geri döndürülebilir nedenler."
    },
    "algorithmSteps": [
      {
        "html": "<strong>Bilinç kapalı / yanıtsız hastada</strong> nabız ve solunumu eş zamanlı kontrol et; değerlendirmeyi en fazla 10 saniyede tamamla.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "algorithmBranches": [
      {
        "label": "Nabız var; solunum yok / gasping",
        "steps": [
          {
            "html": "<strong>5–6 saniyede bir soluk ver.</strong> Her 2 dakikada bir nabız kontrolü yap.",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          }
        ]
      },
      {
        "label": "Nabız yok",
        "note": "30:2 KPR + BVM ile başla, defibrilatör hazır olana kadar sürdür; ritim ve nabzı değerlendir.",
        "steps": [
          {
            "html": "<strong>30 kalp masajı / 2 solunum (BVM)</strong> ile KPR uygula; defibrilatör hazır olana kadar devam et.",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          }
        ],
        "branches": [
          {
            "label": "Şoklanamaz — NEA / Asistoli",
            "note": "Ritmi ve nabzı 2 dk arayla yeniden değerlendir; ritim değişirse uygun kola geç.",
            "steps": [
              {
                "html": "Göğüs basısına başla; <strong>oksijenizasyonu ve ventilasyonu sağla.</strong>",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              },
              {
                "html": "<strong>Adrenalin 1 mg IV/IO</strong>; 3–5 dk arayla tekrarla (1/10000).",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "AABT"
              },
              {
                "html": "Uygun zamanda <strong>ileri hava yolu uygulaması</strong> yap.",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              },
              {
                "html": "<strong>2 dk arayla ritmi ve nabzı değerlendir.</strong> Nabız yok ve ritim NEA/Asistoli ise 2 dk KPR'ye devam et; VF/nVT'ye dönerse şoklanır ritim koluna geç. Nabız varsa Resüsitasyon Sonrası Bakım algoritmasına geç.",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              }
            ]
          },
          {
            "label": "Şoklanır — VF / nVT",
            "note": "Şoklar arasında yüksek kaliteli KPR'yi kesintisiz sürdür; ritim değişirse uygun kola geç.",
            "steps": [
              {
                "html": "Göğüs basısına başla; oksijenizasyonu ve ventilasyonu sağla. <strong>Şok hazır olana kadar KPR'ye ara verme.</strong>",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              },
              {
                "html": "<strong>1. defibrilasyon:</strong> firma önerisine göre. Anahtar noktalarda bifazik 120–200 J, monofazik 360 J; cihaz tipi bilinmiyorsa en yüksek enerji düzeyi. Şok sonrası ara vermeden göğüs basısına devam et.",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "AABT"
              },
              {
                "html": "<strong>2 dk arayla ritmi ve nabzı değerlendir; IV veya IO yol aç.</strong>",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              },
              {
                "html": "<strong>2. defibrilasyon</strong>; şok sonrası ara vermeden göğüs basısına devam et. <strong>Adrenalin 1 mg IV</strong>; 3–5 dk'da bir ver.",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "AABT"
              },
              {
                "html": "<strong>2 dk arayla ritmi ve nabzı değerlendir; ileri hava yolu uygulaması yap.</strong>",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              },
              {
                "html": "<strong>3. defibrilasyon</strong>; ardından <strong>amiodaron 300 mg IV/IO bolus</strong> (2–3 dk; 20 mL %5 dekstroz içinde) veya <strong>%2 lidokain 1–1,5 mg/kg IV/IO bolus</strong>.",
                "followUp": {
                  "label": "Dirençli / tekrarlayan VF-nVT — 5. şok sonrası",
                  "html": "<strong>Amiodaron 150 mg IV/IO bolus</strong> (2–3 dk; 10 mL %5 dekstroz içinde) veya <strong>%2 lidokain 0,5–0,75 mg/kg IV/IO bolus</strong> tekrar ver."
                },
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "AABT"
              }
            ]
          }
        ]
      }
    ],
    "decisionIntegrated": true
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
      "reviewedAt": "2026-09-25",
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
          "OTHER"
        ],
        "authority": "SKKM",
        "repeat": "Hipotansiyon devam ediyorsa",
        "maxDose": "",
        "note": "ROSC sonrası MAP <65 mmHg / devam eden hipotansiyonda, resmî şemadaki telefon simgeli basamakta. Kaynak %0,9 NaCl için uygulama yolunu ayrıca belirtmediğinden yol türetilmemiştir.",
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
    },
    "decisionIntegrated": true,
    "algorithmSteps": [
      {
        "html": "<strong>Yeniden değerlendir:</strong> monitörizasyon ve 12 derivasyonlu EKG; spontan solunum yoksa oksijenizasyon/ventilasyonu sürdür. SpO₂ %94–98, ısı 32–37,5°C aralığı; 2 dk'da bir nabız ve ritim kontrolü, vital bulguları değerlendir.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "algorithmBranches": [
      {
        "label": "Hipotansiyon — SKB <90 mmHg",
        "note": "Nedeni araştır; hedef MAP ≥65 mmHg.",
        "steps": [
          {
            "html": "Hipotansiyon nedenlerini araştır ve <strong>MAP ≥65 mmHg</strong> hedefle.",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          },
          {
            "html": "Hipotansiyon devam ediyorsa <strong>%0,9 NaCl infüzyonu ve/veya adrenalin 2–10 mcg/dk IV infüzyon veya dopamin 5–20 mcg/kg/dk IV infüzyon</strong>.",
            "approvalAuthority": "SKKM",
            "practitionerAuthority": "AABT"
          }
        ]
      },
      {
        "label": "Ventriküler ektopi / sürekli olmayan VT",
        "note": "PVC, bigemini, couplet, triplet, R-on-T veya sürekli olmayan VT.",
        "steps": [
          {
            "html": "<strong>%2 lidokain 1–1,5 mg/kg IV bolus</strong> veya <strong>amiodaron 150 mg IV</strong> (%5 dekstroz ile 10 dk).",
            "approvalAuthority": "SKKM",
            "practitionerAuthority": "AABT"
          }
        ]
      },
      {
        "label": "Bradiaritmi",
        "steps": [
          {
            "html": "<strong>Bradikardi algoritmasına git.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          }
        ]
      },
      {
        "label": "Hipo / Hiperglisemi",
        "steps": [
          {
            "html": "<strong>Diyabetik Aciller algoritmasına git.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          }
        ]
      },
      {
        "label": "Taşiaritmi",
        "steps": [
          {
            "html": "<strong>Taşiaritmi algoritmasına git.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          }
        ]
      },
      {
        "label": "Nöbet",
        "steps": [
          {
            "html": "<strong>Nöbet / Konvülziyon algoritmasına git.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          }
        ]
      }
    ],
    "algorithmAfter": [
      {
        "label": "Arrest tekrar ederse",
        "html": "<strong>İlgili ritim algoritmasına git.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ]
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
      "MAP <65 mmHg ve hipovolemi sürüyor, yanıtsızsa <strong>SKKM/ÇM ile adrenalin 2–10 mcg/dk veya dopamin 5–20 mcg/kg/dk IV infüzyon.</strong>",
      "<strong>MAP (Ortalama Arter Basıncı) = (SKB + 2 × DKB) / 3.</strong>"
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
          "OTHER"
        ],
        "authority": "DIRECT",
        "repeat": "Hızlı infüzyon; yanıta göre titre et",
        "maxDose": "1000 mL",
        "note": "%0,9 NaCl veya Ringer Laktat; hedef SKB 80–90 mmHg. Resmî Y-13 sıvı kutusu uygulama yolunu ayrıca belirtmediğinden yol türetilmemiştir.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Kristalloid — non-hemorajik şok",
        "dose": "500–1000 mL",
        "routes": [
          "OTHER"
        ],
        "authority": "DIRECT",
        "repeat": "5–10 dk bolus",
        "maxDose": "",
        "note": "%0,9 NaCl veya Ringer Laktat; bolus sonrası volüm durumunu yeniden değerlendir. Resmî Y-13 sıvı kutusu uygulama yolunu ayrıca belirtmediğinden yol türetilmemiştir.",
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
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-13"
      ],
      "page": "24"
    },
    "decisionIntegrated": true,
    "algorithmSteps": [
      {
        "html": "<strong>Acil olgu yönetimini uygula.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Hemodinamik monitörizasyon:</strong> EKG, tansiyon, pulse oksimetri; yüksek doz O₂, geniş damar yolu ve şok pozisyonu.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "algorithmBranches": [
      {
        "label": "Hemorajik şok",
        "steps": [
          {
            "html": "<strong>Kanama kontrolü:</strong> direkt bası, sıkı bandaj, arter bası noktaları, turnike veya kanama durdurucu ajan.",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          },
          {
            "html": "Hipotansif hastada <strong>%0,9 NaCl veya Ringer Laktat 250–500 mL hızlı infüzyon</strong>; maksimum 1000 mL, SKB 80–90 mmHg olacak şekilde titre et.",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "AABT"
          }
        ]
      },
      {
        "label": "Non-hemorajik şok",
        "steps": [
          {
            "html": "<strong>%0,9 NaCl veya Ringer Laktat 500–1000 mL bolus</strong>, 5–10 dk. Her bolustan sonra volüm durumunu kontrol et.",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "AABT"
          },
          {
            "html": "Belirlenebilir şok nedenlerini tanı ve yönet; <strong>MAP 65–70 mmHg</strong> hedefle.",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          },
          {
            "html": "<strong>MAP <65 mmHg ve hipovolemi devam ediyor, yanıt alınamıyorsa:</strong> adrenalin 2–10 mcg/dk IV infüzyon veya dopamin 5–20 mcg/kg/dk IV infüzyon.",
            "approvalAuthority": "SKKM",
            "practitionerAuthority": "AABT"
          }
        ]
      }
    ]
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
      "Acil olgu yönetimini uygula; resmî şemadaki ifadeyle SpO₂ >%94–98 olacak şekilde O₂ ver, gerekirse PBV ile destekle.",
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
    "referenceGroups": [
      {
        "title": "Kalp Yetmezliği Bulguları",
        "items": [
          ["1", "Kalp yetmezliği öyküsü"],
          ["2", "Nefes darlığı ve ortopne"],
          ["3", "Pembe köpüklü balgam"],
          ["4", "Periferal ödem"],
          ["5", "Şok bulguları, soğuk terleme ve hipotansiyon"],
          ["6", "Efor kapasitesinin azalması"],
          ["7", "Göğüs ağrısı"],
          ["8", "Oturur vaziyette juguler venöz dolgunluk"],
          ["9", "Bilateral ince raller"]
        ]
      },
      {
        "title": "Klinik Profiller",
        "items": [
          ["ADKY", "Yeni başlangıçlı kalp yetmezliği ya da kronik kalp yetmezliğinin akut alevlenmesi; hipertansiyon ve kardiyojenik şok görülmez. Hafif-orta pulmoner konjesyon görülür; tüm acil hastaların %50–70’ini oluşturur. İlerleyici nefes darlığı, periferal/abdominal konjesyon, juguler venöz dolgunluk ve hepatojuguler reflü görülebilir."],
          ["HKY", "Sistolik kan basıncı >140 mmHg (genellikle >180 mmHg); sol ventrikül fonksiyonu genellikle korunmuştur. Semptomlar 48 saatte gelişir; hava açlığı, anksiyete, öksürük; hasta yatamaz, oturur pozisyonda durur ve SpO₂ <90 görülebilir."],
          ["KŞ", "Doku perfüzyonu bozulmuştur. Sistolik kan basıncı genellikle <90 mmHg; istirahatte takipne, taşikardi, venöz doluşta uzama, soğuk ve siyanotik ekstremiteler görülebilir."]
        ]
      }
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
          "OTHER"
        ],
        "authority": "SKKM",
        "repeat": "Hipotansiyon için",
        "maxDose": "",
        "note": "Kardiyojenik şok kolunda 'verilebilir' şeklinde telefon simgeli basamak. Resmî Y-14 NaCl satırı uygulama yolunu ayrıca belirtmediğinden yol türetilmemiştir.",
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
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-14"
      ],
      "page": "25–26"
    },
    "decisionIntegrated": true,
    "algorithmBranchLayout": "profiles",
    "algorithmSteps": [
      {
        "html": "<strong>Acil olgu yönetimini uygula.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>SpO₂ >%94–98 olacak şekilde oksijen ver</strong>; gerekirse PBV ile destekle.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Kardiyak monitörizasyon ve 12 derivasyonlu EKG</strong>; yeni gelişen kardiyak iskemi ve aritmilere dikkat et.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "algorithmBranches": [
      {
        "label": "Normotansif dekompanse kalp yetmezliği",
        "note": "Algoritma kolu: SKB >100 mmHg.",
        "steps": [
          {
            "html": "<strong>Furosemid 20–40 mg IV.</strong>",
            "approvalAuthority": "SKKM",
            "practitionerAuthority": "AABT"
          }
        ]
      },
      {
        "label": "Hipertansif kalp yetmezliği",
        "note": "Anahtar Noktalar: SKB >140 mmHg (genellikle >180 mmHg); akut dispne/ortopne ve SpO₂ <90 görülebilir.",
        "steps": [
          {
            "html": "<strong>İzosorbid dinitrat 5 mg SL tablet</strong> (maksimum 3 doz) + <strong>furosemid 20–40 mg IV</strong>.",
            "approvalAuthority": "SKKM",
            "practitionerAuthority": "AABT"
          },
          {
            "html": "<strong>Noninvaziv mekanik ventilasyonu düşün — CPAP.</strong>",
            "approvalAuthority": "SKKM",
            "practitionerAuthority": "AABT"
          }
        ]
      },
      {
        "label": "Kardiyojenik şok",
        "note": "Anahtar Noktalar: doku perfüzyonu bozulmuştur; SKB genellikle <90 mmHg, soğuk/siyanotik ekstremiteler görülebilir.",
        "steps": [
          {
            "html": "Hipotansiyon için <strong>250 mL %0,9 NaCl verilebilir.</strong>",
            "approvalAuthority": "SKKM",
            "practitionerAuthority": "AABT"
          },
          {
            "html": "<strong>Dopamin 2–5 mcg/kg/dk IV</strong>; gerektiğinde <strong>20 mcg/kg/dk'ya kadar</strong> çıkılabilir.",
            "approvalAuthority": "SKKM",
            "practitionerAuthority": "AABT"
          }
        ]
      }
    ]
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
      "reviewedAt": "2026-09-25",
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
      "<strong>Olası nedenler:</strong> kafa travması; SSS (inme, tümör, nöbet, enfeksiyon); kardiyovasküler (MI, KKY, disritmi); enfeksiyon (şok, sepsis, menenjit vb.); metabolik (üremi, hepatik nedenler, tiroidit, elektrolit bozuklukları, asidoz/alkaloz); hipoksi; hipo/hiperglisemi; çevresel/zehirlenme (CO, ilaçlar, hipotermi, kolinerjikler, alkol vb.); psikiyatrik nedenler.",
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
      "reviewedAt": "2026-09-25",
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
      "reviewedAt": "2026-09-25",
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
    },
    "decisionIntegrated": true,
    "algorithmBranchLayout": "split",
    "algorithmSteps": [
      {
        "html": "<strong>Acil olgu yönetimini uygula.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Kan şekerini ölç.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "algorithmBranches": [
      {
        "label": "Hipoglisemi — Glikoz <60 mg/dl ve/veya klinik hipoglisemiyi düşündürüyorsa",
        "branches": [
          {
            "label": "Bilinci açık",
            "steps": [
              {
                "html": "<strong>Ağızdan şekerli sıvı ver.</strong>",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              },
              {
                "html": "<strong>Kan şekerini kontrol et ve kliniği değerlendir.</strong> Gerekirse 15 dk'da bir tekrarla.",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              }
            ]
          },
          {
            "label": "Bilinci kapalı",
            "steps": [
              {
                "html": "<strong>%10–%20'lik dekstroz solüsyonlarından 25 g glikoz IV bolus olarak ver.</strong>",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "AABT"
              },
              {
                "html": "<strong>Kan şekerini ölç.</strong>",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              },
              {
                "html": "Glikoz <strong>&lt;60 mg/dl</strong> ise her <strong>5–10 dk'da bir</strong> dekstroz solüsyonlarını tekrarla.",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "AABT"
              }
            ]
          }
        ]
      },
      {
        "label": "Hiperglisemi — Glikoz >300 mg/dl",
        "steps": [
          {
            "html": "<strong>%0,9 NaCl IV infüzyon başla.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "AABT",
            "followUp": {
              "label": "Şok ve dehidratasyon bulguları varsa",
              "transition": "HİPOVOLEMİK ŞOK ALGORİTMASINA GİT"
            }
          }
        ]
      }
    ]
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
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-18"
      ],
      "page": "32",
      "codeStatus": "verified"
    },
    "summary": "BEFAST ile hastane öncesi inme taraması yap; hava yolu-solunum, glukoz, hipoperfüzyon ve kan basıncını değerlendir; son normal görülme zamanına göre SKKM/ÇM ile uygun merkeze nakli planla.",
    "criticalActions": [
      "Aspirasyon, üst hava yolu obstrüksiyonu, hipoventilasyon ve travmayı değerlendir; SpO₂ %94–98 olacak şekilde oksijen ver, gerekirse PBV ile destekle.",
      "Kan glikozunu ölç; glukoz <60 mg/dL ve/veya hipoglisemi bulguları varsa Diyabetik Aciller algoritmasına geç.",
      "BEFAST pozitifse hipoperfüzyon yokluğunda baş ve gövdeyi 30° yükselt; kardiyak monitörizasyon/KB takibi yap ve son normal görülme zamanına göre uygun merkeze nakli düzenle."
    ],
    "quick": [
      "<strong>BEFAST:</strong> B (balance) denge kaybı, E (eyes) bulanık görme, F (face) yüzde asimetri, A (arms) kollardan birinde güç kaybı, S (speech) konuşma bozukluğu, T (time) arama zamanı.",
      "SpO₂ <strong>%94–98 olacak şekilde</strong> uygun yöntemle oksijen ver; gerekirse solunumu PBV ile destekle. Damar yolu aç (DAKŞ) ve kan glikozunu ölç.",
      "Hipoperfüzyon belirtisi yoksa <strong>baş ve gövdeyi 30° yükselt.</strong> Kardiyak monitörizasyon ve KB takibi yap; tansiyon normalin üstünde olsa da tansiyonu düşürme.",
      "Hastanın son olarak normal görüldüğü zamandan <strong>4,5 saat içinde trombolitik</strong>, <strong>6 saat içinde endovasküler girişim</strong> için uygun merkeze nakli değerlendir."
    ],
    "warningFindings": [
      "BEFAST pozitifliği / yeni fokal nörolojik bulgu",
      "Aspirasyon, üst hava yolu obstrüksiyonu veya hipoventilasyon",
      "Glukoz <60 mg/dL ve/veya hipoglisemi bulguları",
      "Hipoperfüzyon bulguları",
      "Son normal görülme zamanının belirsizliği"
    ],
    "meds": [],
    "decision": {
      "q": "BEFAST hastane öncesi inme skalası pozitif mi?",
      "yes": "Hipoperfüzyon yoksa baş ve gövdeyi 30° yükselt; kardiyak monitörizasyon ve KB takibi yap; son normal görülme zamanına göre SKKM/ÇM ile uygun merkeze naklet.",
      "no": "Resmî Y-18 ana akışı BEFAST pozitifliği üzerinden ilerler; klinik değerlendirmeyi sürdür."
    },
    "decisionIntegrated": true,
    "algorithmSteps": [
      {
        "html": "<strong>Acil olgu yönetimini uygula.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Aspirasyon, üst hava yolu obstrüksiyonu, hipoventilasyon ve travma yönünden değerlendir.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "SpO₂ <strong>%94–98 olacak şekilde</strong> uygun yöntemle oksijen ver; gerekirse solunumu <strong>PBV ile destekle.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Damar yolu aç (DAKŞ).</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Kan glikoz seviyesini ölç.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT",
        "followUp": {
          "label": "Glikoz <60 mg/dl ve/veya hipoglisemi bulguları varsa",
          "transition": "DİYABETİK ACİLLER ALGORİTMASINA GİT"
        }
      },
      {
        "html": "<strong>BEFAST hastane öncesi inme skalası pozitifse</strong> inme akışına devam et.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "Hasta hipoperfüzyon belirtileri göstermiyor ise <strong>baş ve gövdeyi 30° yükselt.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Kardiyak monitörizasyon ve KB takibi yap.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT",
        "followUp": {
          "label": "Kan basıncı takibi",
          "notice": "Tansiyon değerleri normalin üstünde olsa da tansiyonu düşürme."
        }
      },
      {
        "html": "Hastanın son olarak normal görüldüğü zamandan <strong>4,5 saat içinde trombolitik</strong>, <strong>6 saat içinde endovasküler girişim</strong> için uygun merkeze naklet.",
        "approvalAuthority": "SKKM",
        "practitionerAuthority": "ATT_AABT"
      }
    ]
  },
  {
    "id": "seizure",
    "title": "Nöbet / Konvülziyon",
    "subtitle": "Devam eden nöbet • ilaç basamakları • postiktal bakım",
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
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "algorithmCodes": [
        "SB-ASH-Y-19"
      ],
      "page": "33",
      "codeStatus": "verified"
    },
    "summary": "Nöbet/konvülziyonda hava yolunu ve oksijenasyonu güvenceye al; glukozu değerlendir, devam eden nöbette SKKM/ÇM telefon simgeli ilaç basamaklarını sırayla uygula ve postiktal hava yolunu izle.",
    "criticalActions": [
      "Hava yolu açıklığını sağla; SpO₂ %94–98 olacak şekilde oksijen ver, gerekirse PBV ile solunumu destekle.",
      "DAKŞ aç, kan glikoz seviyesini ölç ve kardiyak monitörizasyon yap.",
      "Nöbet devam ediyorsa SKKM/ÇM telefon simgeli benzodiazepin ve ikinci basamak antikonvülzan akışını sırayla uygula; nöbet sürerse ileri hava yolu için hazırlan."
    ],
    "quick": [
      "Acil olgu yönetimi → hava yolu → <strong>SpO₂ %94–98</strong> → gerekirse PBV → DAKŞ → kan glikozu → kardiyak monitörizasyon.",
      "Glikoz <strong><60 mg/dl ve/veya hipoglisemi bulguları</strong> varsa Diyabetik Aciller algoritmasına geç.",
      "Nöbet devam ediyorsa SKKM/ÇM ile <strong>diazepam 5 mg IV yavaş puşe</strong> veya <strong>midazolam 5 mg IV / 10 mg IM</strong>.",
      "Nöbet sürerse SKKM/ÇM ile <strong>fenitoin 20 mg/kg</strong> (resmî şemada infüzyon hızı en fazla 25 mg/kg/dk) veya <strong>valproik asit 40 mg/kg IV infüzyon</strong> veya <strong>levetirasetam 60 mg/kg IV infüzyon</strong>.",
      "5 dk sonra hâlâ devam ediyorsa SKKM/ÇM ile <strong>diazepam 5 mg IV yavaş puşe</strong> veya <strong>midazolam 5 mg IV / 10 mg IM</strong>; nöbet yine sürüyorsa ileri hava yolu uygulaması için hazırlan.",
      "Nöbet sonlandıysa <strong>postiktal dönemde hava yolu açıklığına dikkat et.</strong>"
    ],
    "warningFindings": [
      "Hastayı engellemeye çalışma; yaralanmayı önlemek için başının altına yastık, katlanmış battaniye vb. yerleştir.",
      "Glikoz <60 mg/dl ve/veya hipoglisemi bulguları",
      "İlaç basamaklarına rağmen nöbetin devam etmesi",
      "Postiktal dönemde hava yolu açıklığının bozulması"
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
      "q": "Nöbet devam ediyor mu?",
      "yes": "SKKM/ÇM telefon simgeli ilaç basamaklarını sırayla uygula; son tekrar sonrası hâlâ sürüyorsa ileri hava yolu için hazırlan.",
      "no": "Postiktal dönemde hastanın hava yolu açıklığına dikkat et."
    },
    "decisionIntegrated": true,
    "algorithmBranchLayout": "split",
    "algorithmSteps": [
      {
        "html": "<strong>Acil olgu yönetimini uygula.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "Hava yolu açıklığını sağla. SpO₂ <strong>%94–98</strong> olacak şekilde uygun yöntemle oksijen ver; gerekirse solunumu PBV ile destekle.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Damar yolu aç (DAKŞ).</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Kan glikoz seviyesini ölç.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT",
        "followUp": {
          "label": "Glikoz <60 mg/dl ve/veya hipoglisemi bulguları varsa",
          "transition": "DİYABETİK ACİLLER ALGORİTMASINA GİT"
        }
      },
      {
        "html": "<strong>Kardiyak monitörizasyon yap.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "algorithmNotices": [
      "Hastayı engellemeye çalışma; yaralanmayı önlemek için hastanın başının altına yastık, katlanmış battaniye vb. yerleştir."
    ],
    "algorithmBranches": [
      {
        "label": "Nöbet sonlandı",
        "steps": [
          {
            "html": "<strong>Postiktal dönemde hastanın hava yolu açıklığına dikkat et.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          }
        ]
      },
      {
        "label": "Nöbet devam ediyor",
        "steps": [
          {
            "html": "<strong>Diazepam 5 mg IV yavaş puşe</strong> ya da <strong>Midazolam 5 mg IV / 10 mg IM</strong> uygula.",
            "approvalAuthority": "SKKM",
            "practitionerAuthority": "AABT"
          }
        ],
        "branches": [
          {
            "label": "İlk benzodiazepin sonrası nöbet sonlandı",
            "steps": [
              {
                "html": "<strong>Postiktal dönemde hastanın hava yolu açıklığına dikkat et.</strong>",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              }
            ]
          },
          {
            "label": "İlk benzodiazepin sonrası nöbet devam ediyor",
            "steps": [
              {
                "html": "<strong>Fenitoin 20 mg/kg</strong> (infüzyon hızı en fazla 25 mg/kg/dk) ya da <strong>Valproik asit 40 mg/kg IV infüzyon</strong> ya da <strong>Levetirasetam 60 mg/kg IV infüzyon</strong> uygula.",
                "approvalAuthority": "SKKM",
                "practitionerAuthority": "AABT"
              },
              {
                "html": "5 dk sonra nöbet devam ediyorsa <strong>Diazepam 5 mg IV yavaş puşe</strong> ya da <strong>Midazolam 5 mg IV / 10 mg IM</strong> uygula.",
                "approvalAuthority": "SKKM",
                "practitionerAuthority": "AABT"
              }
            ],
            "branches": [
              {
                "label": "Evet — nöbet devam ediyor",
                "steps": [
                  {
                    "html": "<strong>İleri hava yolu uygulaması için hazırlan.</strong>",
                    "approvalAuthority": "DIRECT",
                    "practitionerAuthority": "ATT_AABT"
                  }
                ]
              },
              {
                "label": "Hayır — nöbet sonlandı",
                "steps": [
                  {
                    "html": "<strong>Postiktal dönemde hastanın hava yolu açıklığına dikkat et.</strong>",
                    "approvalAuthority": "DIRECT",
                    "practitionerAuthority": "ATT_AABT"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
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
      "<strong>Nistagmus:</strong> gözlerin tekrarlayan ve kontrolsüz biçimde yana, aşağı-yukarı veya dairesel düzende hareket etmesidir.",
      "Spontan nistagmus <strong>yön değiştiren, vertikal veya pür torsiyonel</strong> ise santral neden kabul ederek <strong>İnme / SVO</strong> algoritmasına geç.",
      "Horizontal nistagmus varsa veya nistagmus yoksa hastanın <strong>bağımsız ayakta durup yürüyebilmesini</strong> değerlendir.",
      "Bağımsız ayakta duramıyor/yürüyemiyorsa santral neden → <strong>İnme / SVO</strong> algoritması.",
      "Bağımsız yürüyebiliyorsa periferik neden düşün; şok bulgusu varsa ilgili şok algoritmasına geç.",
      "<strong>Şok değerlendirmesi:</strong> sistemik dolaşım bulguları, kapiller geri dolum, nabız dolgunluğu ve hızı, cilt dolaşımı, kan basıncı ve bilinç durumunu değerlendir."
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
      "reviewedAt": "2026-09-25",
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
      "reviewedAt": "2026-09-25",
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
      "Yanma sürecini durdur; acil olgu yönetimini uygula. <strong>Termal yanığı musluk suyu ile yıka ve kurula.</strong>",
      "İnhalasyon yanığı/hava yolu ödemi riski varsa oksijenizasyon ve ventilasyonu destekle, erken ileri hava yolunu düşün.",
      "<strong>Yanık alanı hesabı:</strong> erişkinde Dokuzlar Kuralı genel fikir verir; çocukta daha hassas Lund-Browder şeması tercih edilir. Pratik hesapta hastanın parmakları bitişik avuç içi toplam VYA’nın yaklaşık %1’i kabul edilir. Yanık yüzeyini steril örtüyle koru.",
      "<strong>Ringer Laktat başla.</strong> Şok yoksa 1 saatten kısa nakilde 500 mL Ringer Laktat; daha uzun nakilde Parkland yaklaşımı <strong>(2 × VYA% × kg) / 16 mL/saat</strong>. <strong>1. derece yanıklar Parkland hesabına dahil edilmez.</strong> Ağrı için fentanil 1 mcg/kg IV yavaş/IM, SKKM/ÇM ile.",
      "Giysi ve takıları çıkar; <strong>cilde yapışmış giysiyi ayırmaya çalışma.</strong> Yanık yüzeyini uygun yanık örtüsü/steril örtü ile koru.",
      "Hastane öncesi sıvı tedavisini; ağırlığı <strong>≥30 kg ve yanık alanı ≥%15</strong> veya ağırlığı <strong><30 kg ve yanık alanı ≥%10</strong> ise değerlendir. İdrar çıkışına göre sıvı hızını saatlik <strong>%10–30</strong> artır veya azalt. Uzun nakilde vital bulgular, monitörizasyon ve idrar çıkışını takip et; resmî Anahtar Nokta tablosunda idrar çıkışı <strong>0,5–1 mL/saat</strong> olarak yazılıdır.",
      "<strong>Yanık merkezi/ünitesi:</strong> yaş 10–50'de kısmi kalınlık >%25 VYA; <10 veya >50 yaşta >%20 VYA; tam kalınlık >%10 VYA; el-yüz-ayak-perine, büyük eklem, sirküler ekstremite, inhalasyon, elektrik/kimyasal yanık, eşlik eden kırık/majör travma veya yüksek riskli hastada SKKM/ÇM ile uygun merkeze nakli değerlendir."
    ],
    "warningFindings": [
      "Yüz/boyun yanığı, inhalasyon bulgusu, stridor",
      "Elektrik veya kimyasal yanık — ilgili ayrı algoritmaya geç",
      "Geniş yüzey alanlı / derin yanık",
      "Şok bulguları",
      "Sirküler ekstremite/gövde yanığı"
    ],
    "referenceGroups": [
      {
        "title": "Yanık Alanı Hesaplama",
        "items": [
          ["Erişkin", "Dokuzlar Kuralı genel bir fikir verebilir."],
          ["Çocuk", "Daha hassas diyagramların kullanılması uygundur; kaynak Lund-Browder şemasını örnekler."],
          ["Pratik", "Hastanın parmakları bitişik avuç içi toplam vücut yüzey alanının yaklaşık %1’i kabul edilebilir."]
        ]
      }
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
        "note": "Resmî Y-28'de Ringer Laktat başla; şok yoksa 1 saatten kısa nakilde 500 mL, daha uzun nakilde erişkin Parkland saatlik başlangıç formülü. Ortak Yanık Anahtar Noktasına göre 1. derece yanıklar hesaplamaya dahil edilmez. Uygulama yolu kutuda açık yazılmadığından türetilmemiştir.",
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
      "Yanık alanları için <strong>Termal Yanık</strong> algoritmasına geç.",
      "<strong>Yanık Anahtar Noktası:</strong> Elektrik çarpmalarında saatlik başlangıç Ringer Laktat miktarı <strong>(4 × yanmış VYA% × kg) / 16</strong> formülüyle belirtilmiştir."
    ],
    "warningFindings": [
      "Elektrik kaynağının kesilmemiş olması veya yaralının kaynaktan ayrılmamış olması",
      "Arrest veya aritmi",
      "Solunum sıkıntısı / ventilasyon gereksinimi",
      "Spinal yaralanma veya rabdomyoliz riski"
    ],
    "meds": [
      {
        "name": "Ringer Laktat — rabdomiyoliz riski",
        "dose": "Erken ve yeterli sıvı tedavisi",
        "routes": [
          "OTHER"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Resmî Y-29 turuncu kutu: rabdomiyoliz riskine karşı erken ve yeterli Ringer Laktat sıvı tedavisi başla. Miktar, hız ve uygulama yolu kutuda belirtilmediğinden türetilmemiştir.",
        "practitionerAuthority": "AABT"
      }
    ],
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
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-29"
      ],
      "page": "48–49 / 51"
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
      "Dekontaminasyon sonrası <strong>Termal Yanık</strong> algoritmasına geç.",
      "<strong>Yanık Anahtar Noktası:</strong> Toz kimyasal yanıkta sil → süpür → fırçala → yıka → kurula; sıvı kimyasal yanıkta yıka → sil → kurula."
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
      "reviewedAt": "2026-09-25",
      "officialPageUrl": "https://acilafet.saglik.gov.tr/TR-119840/hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalari.html",
      "officialPdfUrl": "https://dosyamerkez.saglik.gov.tr/Eklenti/55773/0/ek-2-hastane-oncesi-acil-tibbi-yardim-ve-bakim-akis-semalaripdf.pdf",
      "section": "adult",
      "codeStatus": "verified",
      "algorithmCodes": [
        "SB-ASH-Y-30"
      ],
      "page": "48 / 52"
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
      "Bilinç durumunda bozulma, konfüzyon, konvülziyonlar veya koma",
      "Solunum frekansında değişiklik",
      "Pupil çapında değişiklik veya lakrimasyon (gözyaşı miktarında artma)",
      "Bradikardi veya taşikardi",
      "Baş ağrısı, baş dönmesi veya kulak çınlaması",
      "Bulantı-kusma, karın ağrısı, batında hassasiyet veya diyare",
      "Aşırı terleme; tükürük salgısında artma veya azalma",
      "Hipotansiyon veya hipertansiyon"
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
      "reviewedAt": "2026-09-25",
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
      "reviewedAt": "2026-09-25",
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
      "Yangın dumanı; özellikle PVC, naylon ve diğer sentetik materyallerin yanması sonucu karbonmonoksitin yanı sıra çok sayıda toksik ve irritan gaz içerebilir.",
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
      "reviewedAt": "2026-09-25",
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
      "Hipoglisemi varsa <strong>Diyabetik Aciller</strong> algoritmasına geç.",
      "<strong>Anahtar Nokta — semptomatik bradikardi:</strong> Atropin 1 mg IV; 3–5 dk arayla maksimum 3 mg'a kadar uygulanabilir. Eksternal pacemaker uygulanabilir. Bu bilgi Anahtar Nokta tablosundadır; akışta bradiaritmide Bradikardi algoritmasına geçilir."
    ],
    "warningFindings": [
      "Bilinç kaybı veya solunum depresyonu",
      "Bradikardi / bradiaritmi",
      "Hipotansiyon",
      "Bronkospazm veya hipoglisemi"
    ],
    "referenceGroups": [
      {
        "title": "Beta Bloker / Kalsiyum Kanal Blokeri — Belirtiler ve Klinik Bulgular",
        "items": [
          ["1", "Baş dönmesi ve bilinç kaybı"],
          ["2", "Bronkospazm; özellikle astım ve kronik bronşiti bulunan hastalarda"],
          ["3", "Solunum depresyonu"],
          ["4", "Bradikardi ve hipotansiyon"],
          ["5", "Hipoglisemi"],
          ["6", "Bulantı-kusma"],
          ["7", "Konuşma bozukluğu (geveleyerek konuşma)"]
        ]
      },
      {
        "title": "Tedavi İlkeleri / Antidot",
        "items": [
          ["Tedavi", "Genel zehirlenme yaklaşımına ek olarak hipotansiyonda IV sıvı replasmanı uygulanabilir; semptomatik bradikardi tedavi edilmelidir."],
          ["Atropin", "Semptomatik bradikardide 1 mg IV; 3–5 dk arayla maksimum 3 mg. Eksternal pacemaker uygulanabilir."],
          ["Kalsiyum", "Kalsiyum kanal blokerine bağlı olduğu doğrulanmışsa kalsiyum glukonat tedavisi uygulanır; ayrıntılı doz ve hazırlama ilaç kartında gösterilir."]
        ]
      }
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
      "reviewedAt": "2026-09-25",
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
      "Müdahaleden önce kişisel koruyucu ekipmanı tam ve eksiksiz kullan; sekresyonlarla temas etme; dekontaminasyon yap ve cilt emilimini önle.",
      "Zehirlenmelere Genel Yaklaşım algoritmasını uygula; SpO₂ >%94 olacak şekilde O₂ ver, gerekirse PBV uygula.",
      "Ciddi kolinerjik bulguları değerlendir ve atropin basamağını geciktirme."
    ],
    "quick": [
      "<strong>Kişisel güvenlik:</strong> Kişisel koruyucu ekipmanı tam ve eksiksiz kullan; sekresyonlarla temas etme.",
      "<strong>Ciddi bulgular (SLUDGE-BBB):</strong> salivasyon, lakrimasyon, ürinasyon, defekasyon, GİS krampları, emezis, bradikardi, bronkore ve bronkospazm.",
      "<strong>Atropin:</strong> 1–2 mg IV; IV yol açılamazsa açılana kadar 2–5 mg IM uygulanabilir.",
      "Trakeobronşiyal sekresyonlar azalıncaya kadar <strong>5 dk'da bir tekrarla</strong>.",
      "Kolinerjik etkili ajanlar arasında sinir gazları ve tarım ilaçları bulunur.",
      "Oral alımda ilk 30 dk içinde gastrik lavaj etkili olabilir; <strong>resmî Anahtar Noktaya göre acil serviste uygulanmalıdır.</strong>",
      "Kontaminasyonda hasta <strong>ambulans kabinine alınmadan önce kıyafetleri çıkarılmalı</strong>; hasta yıkanmalı veya ıslak bezle silinmelidir."
    ],
    "warningFindings": [
      "Yoğun sekresyon / bronkore ve bronkospazm",
      "Bradikardi",
      "Bilinç değişikliği, ajitasyon veya koma",
      "Sekresyonlarla temas / devam eden kontaminasyon / ikincil maruziyet riski"
    ],
    "referenceGroups": [
      {
        "title": "Organofosfatlar — Belirtiler ve Klinik Bulgular",
        "items": [
          ["1", "İshal; ter, tükürük, gözyaşı salgılarında ve idrarda artış; miyozis; dışkılamada artış; şiddetli karın ağrısı; kusma veya kusma eğilimi ve solunum sıkıntısı."],
          ["2", "SSS baskılanmasına bağlı ajitasyondan komaya kadar ilerleyen bilinç değişiklikleri ve solunum felci görülebilir."],
          ["3", "Bradikardi veya taşikardi ve hipertansiyon görülebilir."]
        ]
      },
      {
        "title": "Kişisel Güvenlik ve Dekontaminasyon",
        "items": [
          ["KKE", "Kişisel koruyucu ekipmanı tam ve eksiksiz kullan; sekresyonlarla temas etme."],
          ["Dekon", "Dekontaminasyon ve cilt emilimini önle. Hasta ambulans kabinine alınmadan önce kıyafetlerini çıkar; hastayı yıka veya ıslak bezle sil."],
          ["Gastrik", "Ağızdan alımlarda gastrik lavaj ilk 30 dakika içinde etkili olabilir; acil servislerde uygulanmalıdır."]
        ]
      },
      {
        "title": "Tedavi İlkeleri / Antidot",
        "items": [
          ["Tedavi", "Kişisel güvenlik ve dekontaminasyona ek hava yolu yönetimi ve oksijenizasyon önemlidir; oral alımda ilk 30 dk gastrik lavaj acil serviste uygulanabilir."],
          ["Atropin", "1–2 mg IV; IV yol açılamazsa açılana kadar 2–5 mg IM. Trakeobronşiyal sekresyonlar azalıncaya kadar 5 dk'da bir tekrarlanır; maksimum doz belirtilmemiştir."]
        ]
      }
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
        "note": "Resmî Y-35 algoritmasında SKKM/ÇM telefon simgesi yoktur. Anahtar Nokta: atropin 1–2 mg IV; IV yol açılamazsa açılana kadar 2–5 mg IM uygulanabilir; trakeobronşiyal sekresyonlar azalıncaya kadar 5 dk'da bir tekrarlanır. Maksimum doz belirtilmemiştir.",
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
      "reviewedAt": "2026-09-25",
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
      "Hipotansiyonda %0,9 NaCl IV yüklemesi yap; solunum depresyonu sürerse ileri hava yolu uygulaması için hazırlan.",
      "<strong>Naloksonu kesme koşulu:</strong> spontan solunum eforu geri dönerse veya ajitasyon gelişirse IV nalokson uygulamasını durdur."
    ],
    "warningFindings": [
      "Solunum depresyonu / apne / siyanoz",
      "Koma ve pinpoint pupil",
      "Hipotansiyon",
      "Hipoglisemi"
    ],
    "referenceGroups": [
      {
        "title": "Opioid Analjezikler — Belirtiler ve Klinik Bulgular",
        "items": [
          ["Nöro", "Bilinç değişikliği, kişilik değişiklikleri, konvülziyon ve koma."],
          ["Solunum", "Solunum depresyonu, akciğer ödemi ve bronkospazm."],
          ["Göz", "Pinpoint pupiller."],
          ["Dolaşım", "Hipotansiyon, ritim bozukluğu ve bradikardi."],
          ["Metabolik", "Hipoglisemi, terleme ve hipotermi."],
          ["GİS", "Bulantı, kusma, barsak seslerinde azalma ve ileus."],
          ["Organ", "Karaciğer yetmezliği ve akut böbrek yetmezliği görülebilir."]
        ]
      },
      {
        "title": "Tedavi İlkeleri / Antidot",
        "items": [
          ["Tedavi", "Solunum depresyonunda ileri hava yolu yönetimi uygulanır; hipoglisemi veya hipovolemi varsa ilgili akış şemasına göre tedavi edilir."],
          ["Nalokson", "SKKM/ÇM onayıyla opioid bağımlısı olmayanda 0,4–2 mg IV/IM/IO/SC; ardından yanıta göre 0,1–0,4 mg. Apne/siyanozda 2 mg IV; maksimum 10 mg. Solunum çabası döner veya ajitasyon gelişirse IV nalokson sonlandırılır."]
        ]
      }
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
        "note": "Resmî Y-36 telefon simgeli basamak. Anahtar noktada apne/siyanozda 2 mg IV; 0,4–2 mg başlangıç dozu opioid bağımlısı olmayan hasta için belirtilmiştir. Spontan solunum eforu geri dönerse veya ajitasyon gelişirse IV nalokson durdurulur.",
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
      "reviewedAt": "2026-09-25",
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
      "<strong>Antikolinerjik sendrom:</strong> sedasyon, deliryum, koma, midriyazis, kırmızı-kuru cilt, ritim bozuklukları, konvülziyonlar, solunum arresti ve hipertermi görülebilir.",
      "<strong>Tedavi ilkeleri:</strong> erken solunum desteğini sağla, ileri yaşam desteğine hazır ol; şok tedavisini geciktirme, erken monitörizasyonla ritim bozukluğu/konvülziyonları tedavi et ve hipertermiye yönelik önlem al.",
      "Disritmi varsa ilgili ritim algoritmasına geç.",
      "<strong>QRS >0,10 sn:</strong> SKKM/ÇM ile sodyum bikarbonat (NaHCO₃) 1–2 mEq/kg IV puşe; 3–5 dk'da bir tekrarla.",
      "Hipotansiyonda %0,9 NaCl yüklemesi yap.",
      "Hipertermide Hipertermi; nöbette Nöbet / Konvülziyon algoritmasına geç. Anahtar Nokta: 5 küçük kare >100 ms QRS nöbet, 8 küçük kare >160 ms QRS ventriküler aritmi açısından uyarıcıdır."
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
      "reviewedAt": "2026-09-25",
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
    "subtitle": "X-ABCDE • kanama • hızlı nakil",
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
      "reviewedAt": "2026-09-25",
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
    "summary": "Travma mekanizmasını değerlendir; hayatı tehdit eden dış kanamayı hava yolundan önce kontrol et, ardından hava yolu-solunum-dolaşım-bilinç-tam vücut değerlendirmesi ve nakli sürdür.",
    "criticalActions": [
      "Olay yeri yönetimini uygula, güvenliği sağla ve travma mekanizmasını değerlendir.",
      "Dışa doğru hayatı tehdit eden kanama varsa doğrudan bası uygula.",
      "Hava yolu/servikal-spinal koruma, solunum, nabız-dolaşım, bilinç ve tam vücut değerlendirmesini sırayla tamamla."
    ],
    "quick": [
      "<strong>X:</strong> Dışa doğru hayatı tehdit eden kanama varsa doğrudan bası uygula.",
      "<strong>A/B:</strong> Servikal-spinal immobilizasyonu sağla; hava yolu güvenli değilse aç/aspire et, gerekirse ileri hava yolu düşün. Solunum stabil değilse ventilasyonu destekle ve yaşamı tehdit eden toraks sorunlarını tedavi et.",
      "<strong>C:</strong> Nabız yoksa Arrest Yönetimi'ne geç. Dolaşım stabil değilse pelvis travması/şüphesinde pelvisi sabitle ve Hipovolemik Şok algoritmasına geç.",
      "<strong>D/E:</strong> Bilinç normal değilse Kafa Travmalı Hastaya Yaklaşım algoritmasına geç; tüm giysileri yararak vücut kontrolünü tamamla ve hipotermiden koru.",
      "<strong>Nakil:</strong> İkincil değerlendirmeyi nakil sırasında tamamla, immobilizasyonu sürdür ve naklet."
    ],
    "warningFindings": [
      "Yetersiz/bozulmuş hava yolu veya ventilasyon: anormal hızlı ya da yavaş solunum; oksijen desteği ile düzelmeyen, SpO₂'nin %94 altında kalması; dispne; açık pnömotoraks ya da yelken göğüs; şüpheli pnömotoraks.",
      "Önemli dış kanama ya da şüphelenilen iç kanama / anormal nörolojik durum: GKS <13; geçirilen ya da geçirilmiş nöbet; duyusal ya da motor defisit.",
      "Penetran yaralanmanın kafa, boyun, gövdede veya diz ve dirsek proksimalinde olması; parmaklar hariç distale doğru oluşan ekstremite amputasyonları.",
      "Herhangi bir travma ile birlikte: yandaş hastalık öyküsü (KAH, KOAH, kanama bozuklukları), 55 yaş üstü, yanık, hipotermi veya gebelik.",
      "Kanıt olabilecek materyallerin (giysilerin) korunması gerekir.",
      "Ateşli silah yaralanmasında hastanın kıyafetleri kesilirken kurşun giriş yeri kesilmemeli; kıyafetler tamamen çıkartılmışsa muhafaza edilerek bilgi verilmelidir."
    ],
    "meds": [],
    "referenceGroups": [
      {
        "title": "Yetişkin Glasgow Koma Skoru — Motor Yanıt",
        "items": [
          ["6", "Komutlara uyuyor"],
          ["5", "Verilen uyarıyı lokalize ediyor"],
          ["4", "Verilen uyarıya normal fleksör yanıt veriyor"],
          ["3", "Verilen uyarıya anormal fleksör yanıt veriyor"],
          ["2", "Verilen uyarıya ekstansör yanıt veriyor"],
          ["1", "Yanıtsız"],
          ["NT", "Etkileyen diğer faktörler nedeniyle değerlendirilemiyor"]
        ]
      },
      {
        "title": "Yetişkin Glasgow Koma Skoru — Sözel Yanıt",
        "items": [
          ["5", "Oryante"],
          ["4", "Konfüze"],
          ["3", "Sözlü uyarıyı kelimelerle yanıtlıyor"],
          ["2", "Sözlü uyarıyı anlamsız seslerle yanıtlıyor"],
          ["1", "Yanıtsız"],
          ["NT", "Etkileyen diğer faktörler nedeniyle değerlendirilemiyor"]
        ]
      },
      {
        "title": "Yetişkin Glasgow Koma Skoru — Göz Yanıtı",
        "items": [
          ["4", "Spontan göz açık"],
          ["3", "Sesli uyaranla gözünü açıyor"],
          ["2", "Basınçlı uyaranla gözünü açıyor"],
          ["1", "Yanıtsız"],
          ["NT", "Etkileyen diğer faktörler nedeniyle değerlendirilemiyor"]
        ]
      },
      {
        "title": "Adli Vakalara Yaklaşırken",
        "wide": true,
        "items": [
          ["1", "Kişisel koruyucu ekipman mutlaka giyilmelidir."],
          ["2", "Olay yerine giriş ve çıkışlar emniyet ekipleri tarafından oluşturulan güvenli yoldan olmalıdır."],
          ["3", "Delil olabilecek biyolojik, kimyasal, fiziksel ve iz bulgularına dokunulmamalı; yerleri değiştirilmemelidir."],
          ["4", "Olay yerinde ölen şahısların pozisyonları değiştirilmemeli; müdahale edilecekse mutlaka bilgi verilmelidir."],
          ["5", "Kapı ve pencere yüzeylerinde fail ya da faillere yönelik izler olabileceğinden mümkünse temastan kaçınılmalıdır."],
          ["6", "Olay yerinde sağlık ekipleri tarafından eldiven, enjektör, spanç vb. herhangi bir madde bırakılmamalıdır."],
          ["7", "Kolluk kuvvetleri ile birlikte çalışılmalıdır."],
          ["8", "Hasta kayıt defteri ve tablet üzerinden ASOS’a adli vaka girilmelidir."],
          ["9", "Hastane kayıt girişlerinde adli vaka olarak açılacağı bildirilmelidir."],
          ["10", "Ateşli silah yaralanmasında hastanın kıyafetleri kesilirken kurşun giriş yeri kesilmemelidir; kıyafetler tamamen çıkartılmışsa muhafaza edilerek bilgi verilmelidir."],
          ["11", "Ası vakalarında müdahale edilecekse ip düğüm bölgesinden değil, düğüme uzak bir yerden kesilmelidir."]
        ]
      }
    ],
    "decision": {
      "q": "Travmada X-ABCDE sırasında yaşamı tehdit eden bir sorun saptandı mı?",
      "yes": "Sorunu bulunduğu basamakta düzelt veya ilgili algoritmaya geç; ardından değerlendirmeyi sürdür.",
      "no": "İkincil değerlendirmeyi nakil sırasında tamamla, immobilizasyonu sürdür ve naklet."
    },
    "decisionIntegrated": true,
    "algorithmSteps": [
      {
        "html": "<strong>Olay yeri yönetimini uygula ve güvenliği sağla.</strong> Travma mekanizmasını değerlendir.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "Eğer dışa doğru <strong>hayatı tehdit eden kanama</strong> varsa doğrudan bası uygula.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Hava yolu açık ve güvenilir mi?</strong> Servikal ve spinal immobilizasyonu sağla.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT",
        "followUp": {
          "label": "Hayır — hava yolu açık/güvenilir değilse",
          "html": "Hava yolunu aç. Orofaringeal hava yolunu yerleştir. Ağız içi ve orofarinksi aspire et. İleri hava yolu uygulamalarını düşün."
        }
      },
      {
        "html": "<strong>Solunum stabil mi?</strong> Her iki akciğer eşit havalanıyor mu? SpO₂ <strong>&gt;%94</strong>, solunum sayısı <strong>10–30/dk</strong> mı?",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT",
        "followUp": {
          "label": "Hayır — solunum stabil değilse",
          "html": "Solunumu destekle. İleri hava yolu uygulamalarını düşün. Tansiyon pnömotoraks varsa iğne dekompresyonu uygula. Açık pnömotoraks varsa uygun teknikle kapat. Hemotoraks varsa solunumu ve dolaşımı destekle."
        }
      },
      {
        "html": "<strong>Nabız var mı?</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT",
        "followUp": {
          "label": "Hayır",
          "transition": "ARREST YÖNETİMİ ALGORİTMASINA GİT"
        }
      },
      {
        "html": "<strong>Dolaşım stabil mi?</strong> Şemadaki eşikleri değerlendir: KGD &gt;2 sn, nabız &gt;120 atım/dk, SKB &lt;90 mmHg.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT",
        "followUp": {
          "label": "Hayır — dolaşım stabil değilse",
          "html": "Pelvis travması ya da şüphesi varsa pelvisi sabitle.",
          "transition": "HİPOVOLEMİK ŞOK ALGORİTMASINA GİT"
        }
      },
      {
        "html": "<strong>Bilinç normal mi?</strong> GKS=15, uyanık ve basit komutlara uyuyor mu? Anizokori, midriyazis, pin-point pupil ve taraf bulgusuna dikkat et.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT",
        "followUp": {
          "label": "Hayır",
          "transition": "KAFA TRAVMALI HASTAYA YAKLAŞIM ALGORİTMASINA GİT"
        }
      },
      {
        "html": "<strong>Tüm giysileri yararak vücut kontrolünü tamamla; hipotermiden koru.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>İkincil değerlendirmeyi nakil sırasında tamamla.</strong> İmmobilizasyonu sürdür ve naklet.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ]
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
      "reviewedAt": "2026-09-25",
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
      "Resmî telefon simgeli ileri basamakta toplam <strong>3000–6000 mL</strong> sıvı; hiperkalemi bulgusu varsa <strong>%10 kalsiyum glukonat 10–30 mL IV, 2–3 dk içinde</strong>.",
      "<strong>Anahtar Nokta — idrar takibi:</strong> sıvı tedavisi başlandıktan sonra 6 saat izle. İdrar çıkışı ve yakın takip varsa >6000 mL/gün; idrar çıkışı var ancak yakın takip yoksa 3000–6000 mL/gün; idrar çıkışı yoksa 500–1000 mL/gün + bir önceki gün tahmini toplam kayıp kadar IV sıvı bilgisi resmî tabloda yer alır.",
      "Hiperkalemi acil tedavi seçenekleri Anahtar Noktalarda <strong>kalsiyum glukonat, insülin-dekstroz, sodyum bikarbonat ve diyaliz</strong> olarak sayılır; burada kaynakta olmayan doz türetilmez.",
      "<strong>Hastanın kendi imkânıyla çıkmış veya yürüyebiliyor olması crush sendromunu dışlamaz.</strong>"
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
      "reviewedAt": "2026-09-25",
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
      "Acil olgu yönetimini uygula; GKS ≤8, solunum yetmezliği veya hava yolu tehlikesi varsa ileri hava yolu yönetimi uygula.",
      "Resmî şemadaki ifadeyle SpO₂ >%94–98 olacak şekilde oksijenizasyon ve ventilasyonu sağla; yetişkinde ventilasyon sayısını 10/dk sürdür.",
      "Kan şekerini ölç; 60–300 mg/dL aralığında IV sıvı tedavisiyle SKB >100 mmHg hedefle; nöbet ve KİBAS bulgularını değerlendir."
    ],
    "quick": [
      "<strong>GKS ≤8</strong> ya da solunum yetmezliği veya hava yolu tehlikesi varsa ileri hava yolu yönetimi uygula.",
      "<strong>SpO₂ >%94–98</strong>; ventilasyon sayısı yetişkinlerde 10/dk, çocuklarda 20/dk, bebeklerde 25/dk.",
      "Kan şekerini ölç. <strong>KŞ <60 mg/dL veya >300 mg/dL</strong> ise Diyabetik Aciller algoritmasına geç.",
      "<strong>60 mg/dL < KŞ <300 mg/dL:</strong> IV sıvı tedavisine başla; <strong>SKB >100 mmHg</strong> olacak şekilde sıvı tedavisini sürdür.",
      "Nöbet varsa Nöbet / Konvülziyon algoritmasına geç. KİBAS varsa ve şok bulguları yoksa sırt tahtasının baş kısmını gövdesiyle birlikte <strong>30–45°</strong> yukarıda olacak şekilde sevk et."
    ],
    "warningFindings": [
      "Cushing Triadı: bradikardi, solunum düzensizliği, hipertansiyon",
      "GKS'nin 2 puan veya daha fazla azalması",
      "Hemipleji veya hemiparalizi gelişmesi",
      "Anizokori",
      "GKS ≤8, solunum yetmezliği veya hava yolu tehlikesi"
    ],
    "meds": [
      {
        "name": "IV sıvı tedavisi",
        "dose": "SKB >100 mmHg hedefiyle",
        "routes": [
          "IV"
        ],
        "authority": "DIRECT",
        "repeat": "",
        "maxDose": "",
        "note": "Resmî Y-40'ta KŞ 60–300 mg/dL kolunda turuncu kutu: IV sıvı tedavisine başla ve SKB >100 mmHg olacak şekilde sürdür. Sıvı türü, hacmi ve hızı belirtilmediğinden türetilmemiştir.",
        "practitionerAuthority": "AABT"
      },
      {
        "name": "Midazolam — ajite hasta (Anahtar Noktalar)",
        "dose": "1–2,5 mg",
        "routes": [
          "IV"
        ],
        "authority": "ALGORITHM",
        "repeat": "3–5 dk'da bir; hasta sakinleşinceye kadar",
        "maxDose": "",
        "note": "Y-40 Anahtar Noktalar sayfasında yer alır. Bu tablo uygulayıcı kutu rengi veya SKKM/ÇM telefon simgesiyle yetki kodlaması yapmadığından DIRECT/SKKM ve ATT/AABT çıkarımı yapılmamıştır.",
        "practitionerAuthority": "UNVERIFIED",
        "sourceAuthorityStatus": "KEYPOINT_NO_SYMBOL"
      }
    ],
    "decision": {
      "q": "Kan şekeri <60 mg/dL veya >300 mg/dL mi?",
      "yes": "Diyabetik Aciller algoritmasına geç.",
      "no": "60–300 mg/dL aralığında IV sıvı tedavisine başla; SKB >100 mmHg hedefini koru ve nöbet/KİBAS açısından değerlendir."
    },
    "decisionIntegrated": true,
    "algorithmBranchLayout": "split",
    "algorithmSteps": [
      {
        "html": "<strong>Acil olgu yönetimini uygula.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>GKS ≤8 ya da solunum yetmezliği veya hava yolu tehlikesi varsa ileri hava yolu yönetimi uygula.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "SpO₂ <strong>>%94–98</strong> olacak şekilde oksijenizasyon ve ventilasyonu sağla. Ventilasyon sayısı: yetişkinlerde <strong>10/dk</strong>, çocuklarda <strong>20/dk</strong>, bebeklerde <strong>25/dk</strong>.",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      },
      {
        "html": "<strong>Kan şekerini ölç.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "algorithmBranches": [
      {
        "label": "KŞ <60 mg/dL veya >300 mg/dL",
        "transition": "DİYABETİK ACİLLER ALGORİTMASINA GİT"
      },
      {
        "label": "60 mg/dL < KŞ <300 mg/dL",
        "steps": [
          {
            "html": "<strong>IV sıvı tedavisine başla.</strong> SKB <strong>>100 mmHg</strong> olacak şekilde sıvı tedavisini sürdür.",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "AABT"
          }
        ],
        "branches": [
          {
            "label": "Nöbet varsa",
            "transition": "NÖBET / KONVÜLZİYON ALGORİTMASINA GİT"
          },
          {
            "label": "KİBAS varsa",
            "notices": [
              "Şok bulguları yoksa sırt tahtasının baş kısmı gövdesiyle birlikte 30–45° yukarıda olacak şekilde sevk edilmelidir."
            ]
          }
        ]
      }
    ]
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
      "reviewedAt": "2026-09-25",
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
      "KGD >2 sn veya distal nabız yok → <strong>KIRMIZI</strong>. KGD <2 sn ve distal nabız varsa: komuta uyuyorsa <strong>SARI</strong>, uymuyorsa <strong>KIRMIZI</strong>.",
      "<strong>Yeniden triyaj:</strong> Zaman ve olanak olduğunda tekrarla; gerekirse daha ciddi triyaj kodu verilebilir."
    ],
    "warningFindings": [
      "Triyaja, uygulayıcıya en yakın hastadan başlanır.",
      "Triyaj kartında yaralıların nakil öncelik sırasını belirlemek amacıyla sadece renk kodu işaretlenir; triyaj sırasında tedavi/KPR yapılmaz.",
      "İdeal olarak triyajı tek sağlık personeli yapar; geniş alanlarda veya yaralı sayısının çok olduğu durumlarda birden fazla sağlık personeli alanı paylaşarak triyaj yapabilir.",
      "Triyaj süresi her hasta için 1 dk’dan kısa olmalıdır.",
      "Zaman ve olanak olduğunda triyaj tekrarlanmalıdır; yeniden triyajda yaralıya daha ciddi triyaj kodu verilebilir.",
      "Kanama kontrolü gibi hayat kurtarıcı müdahaleler için çevredeki uygun kişiler değerlendirilebilir."
    ],
    "meds": [],
    "decision": {
      "q": "Hasta yürüyebiliyor mu?",
      "yes": "Güvenli alana çağır → YEŞİL kod.",
      "no": "Solunum → solunum sayısı → dolaşım (KGD/distal nabız) → komutlara uyum sırasıyla START değerlendirmesini tamamla."
    },
    "decisionIntegrated": true,
    "algorithmSteps": [
      {
        "html": "<strong>Seslen, güvenli alana çağır.</strong>",
        "approvalAuthority": "DIRECT",
        "practitionerAuthority": "ATT_AABT"
      }
    ],
    "algorithmBranches": [
      {
        "label": "Yürüyenler — YEŞİL KOD",
        "triageCode": "green"
      },
      {
        "label": "Yürüyemeyenler",
        "steps": [
          {
            "html": "<strong>Solunumu değerlendir.</strong>",
            "approvalAuthority": "DIRECT",
            "practitionerAuthority": "ATT_AABT"
          }
        ],
        "branches": [
          {
            "label": "Solunum yok",
            "steps": [
              {
                "html": "<strong>Başa pozisyon ver.</strong>",
                "approvalAuthority": "DIRECT",
                "practitionerAuthority": "ATT_AABT"
              }
            ],
            "branches": [
              {
                "label": "Pozisyon sonrası solunum yok — SİYAH KOD",
                "triageCode": "black"
              },
              {
                "label": "Pozisyon sonrası solunum var — KIRMIZI KOD",
                "triageCode": "red"
              }
            ]
          },
          {
            "label": "Solunum var",
            "branches": [
              {
                "label": "Solunum sayısı <10/dk veya >30/dk — KIRMIZI KOD",
                "triageCode": "red"
              },
              {
                "label": "Solunum sayısı 10–30/dk",
                "steps": [
                  {
                    "html": "<strong>Dolaşımı değerlendir.</strong>",
                    "approvalAuthority": "DIRECT",
                    "practitionerAuthority": "ATT_AABT"
                  }
                ],
                "branches": [
                  {
                    "label": "KGD >2 sn veya distal nabız yok — KIRMIZI KOD",
                    "triageCode": "red"
                  },
                  {
                    "label": "KGD <2 sn ve distal nabız var",
                    "branches": [
                      {
                        "label": "Komutlara uyuyorsa — SARI KOD",
                        "triageCode": "yellow"
                      },
                      {
                        "label": "Komutlara uymuyorsa — KIRMIZI KOD",
                        "triageCode": "red"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
