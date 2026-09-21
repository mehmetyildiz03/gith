# Saha112 — Vaka Rehberi

Mobil-first, offline çekirdekli, vaka bazlı hastane öncesi acil sağlık eğitim ve hızlı hatırlatma uygulaması.

## V0.9.2 mimarisi

- **Kaynak:** T.C. Sağlık Bakanlığı 25.08.2026 tarihli Ek-2 Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları.
- **17 yetişkin vaka klinik audit:** 21.09.2026 tarihinde güncel Ek-2 kaynak setiyle başlık, doz, yol, tekrar, yetki, algoritma sırası ve kaynak izi yeniden kontrol edildi; yalnız doğrulanabilen değişiklikler işlendi.
- **Gri ilaç yetkisi:** SB-ASH-Y-07, Y-10/Y-11, Y-12 ve Y-19 sayfalarındaki SKKM/ÇM telefon ikonları resmî PDF görüntülerinden ayrıca denetlendi; mevcut 17 yetişkin vakada ilaç kartlarında çözümlenmemiş gri yetki kalmadı.
- **Hasta grubu katmanı:** Yetişkin / Çocuk / Doğum & Yenidoğan. Yalnız kaynak-kod-doz-yetki QA'sı tamamlanan kartlar yayımlanır.
- **İlk Kritik Adımlar:** Her vaka için ayrı kritik ilk eylem katmanı; resmî algoritmada olmayan sabit bir 30 saniye süresi iddia edilmez.
- **Terminoloji:** Resmî algoritma başlıkları korunur; örn. SB-ASH-Y-12 **Resüsitasyon Sonrası Bakım**. Kullanıcıya açıklayıcı alt başlıkta ROSC açılımı verilir.
- **Acil Uyarı Bulguları:** Önceliği, müdahaleyi veya nakil kararını değiştirebilecek bulgular için standart kullanıcı terimi.
- **UI/klinik ayrımı:** `uiPriority`, `uiFeatured`, `criticalActions` ve `warningFindings` Saha112 arayüz alanlarıdır; resmî algoritma sınıflaması olarak sunulmaz.
- **Uygulama yolu etiketi:** Teknik `NEB` kodu kullanıcıya `Nebülizasyon` olarak gösterilir.
- **Dokunma hedefleri:** Telefon/tablet Chrome testinde temel etkileşim kontrolleri en az 44 CSS px dokunma yüksekliğine sabitlenir.
- **Hızlı Saha modu:** Öncelikli vakaları öne alır; detayda İlk Kritik Adımlar, Acil Uyarı Bulguları, karar ve ilaç dozlarını öne çıkarır; açıklayıcı/kaynak alanlarını geri çeker.
- **Hasta grupları:** Yetişkin / Çocuk / Doğum & Yenidoğan mimaride kalıcıdır. Doğrulanmış kartı olmayan grup `Yakında` olarak pasif görünür ve ilk onaylı kart geldiğinde otomatik açılır.
- **İlaç modeli:** ad, doz, uygulama yolu, tekrar, maksimum doz ve standart yetki enumu.
- **Yetki enumları:** `DIRECT`, `SKKM`, `ALGORITHM`.
- **Yetki işaretleri:** `✓` yeşil = SKKM/ÇM telefon simgesi olmayan, onay beklemeyen basamak; `◆` sarı = SKKM/ÇM telefon simgeli basamak; `•` gri yalnız henüz yetki simgesi doğrulanmamış içerik için ayrılmıştır. Yeşil/sarı ATT-AABT mesleki yetki renklerinin yerine geçmez.
- **Kaynak izi:** belge, yürürlük tarihi, kod/sayfa, son içerik inceleme tarihi ve resmî bağlantılar vaka ile birlikte tutulur.
- **PWA:** offline çekirdek, 192/512 PNG ikon, Apple touch icon, service worker.
- **QA kapısı:** JavaScript syntax + veri şeması + duplicate ID + PWA varlık kontrolleri geçmeden Pages deploy edilmez.
- **UI denetimi:** Koyu mod temel kontrastları, vaka accent metinleri ve kritik bölüm hiyerarşisi CI içinde ayrıca doğrulanır.

## Yerel doğrulama

```bash
python3 scripts/build_icons.py
node --check cases-data.js
node --check app-core.js
node --check sw.js
node scripts/validate.mjs
```

## Güvenlik

Saha112 resmî Sağlık Bakanlığı uygulaması değildir. Eğitim/hızlı hatırlatma amacı taşır. Güncel resmî akış şeması, kurum talimatı, ekip yetkisi, SKKM/ÇM kararı ve hastanın klinik durumu her zaman önceliklidir.
