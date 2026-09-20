# Saha112 — Vaka Rehberi

Mobil-first, offline çekirdekli, vaka bazlı hastane öncesi acil sağlık eğitim ve hızlı hatırlatma uygulaması.

## V0.6 mimarisi

- **Kaynak:** T.C. Sağlık Bakanlığı 25.08.2026 tarihli Ek-2 Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları.
- **Hasta grubu katmanı:** Yetişkin / Çocuk / Doğum & Yenidoğan. Yalnız kaynak-kod-doz-yetki QA'sı tamamlanan kartlar yayımlanır.
- **İlk 30 saniye:** Her vaka için ayrı kritik ilk eylem katmanı.
- **İlaç modeli:** ad, doz, uygulama yolu, tekrar, maksimum doz ve standart yetki enumu.
- **Yetki enumları:** `DIRECT`, `SKKM`, `ALGORITHM`.
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
