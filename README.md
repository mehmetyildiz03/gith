# Saha112 — Vaka Rehberi

Mobil-first, offline çekirdekli, vaka bazlı hastane öncesi acil sağlık eğitim ve hızlı hatırlatma uygulaması.

## V0.24 mimarisi

- **Kaynak:** T.C. Sağlık Bakanlığı 25.08.2026 tarihli Ek-2 Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları.
- **V0.24 yetişkin ilaç içerik auditi:** Tüm yetişkin ilaç/sıvı kartları resmî algoritma ve “Anahtar Noktalar” sayfalarına karşı yeniden kontrol edildi. Dört kaynak-sadakati düzeltmesi yapıldı: Y-11 şoklanır ritimde adrenalin yolu IV olarak ayrıldı; Y-23 ısı stresi/ısı çarpması NaCl dozları iki karta ayrıldı; Y-05 20 dk tekrar bronkodilatör kartındaki INHALER/NEB genellemesi kaldırıldı; Y-22 anafilakside ikinci 500 mL NaCl basamağı ve ileri ilaç sırası görünür hale getirildi.
- **Arrest doğrulaması:** Güncel Y-11'de amiodaron açıkça yer alır: 3. şok sonrası 300 mg IV/IO; tekrarlayan/dirençli VF/nVT'de 5. şok sonrası 150 mg IV/IO. %2 lidokain 1–1,5 mg/kg IV/IO ve 5. şok sonrası 0,5–0,75 mg/kg IV/IO alternatiftir. Y-10 adrenalin IV/IO iken Y-11 2. şok sonrası adrenalin kutusu yalnız IV yazar; veri modeli bu farkı artık ayrı kartlarla korur.
- **V0.23 dallı algoritma yerleşim düzeltmesi:** Üst seviye dallar artık masaüstünde de tam genişlik ve alt alta akar. Yalnız tam genişlikteki bir ana dalın ilk alt dalları ≥980 px görünümde iki kolona çıkabilir; daha derin dallar ve tablet/mobil görünüm tek kolonda kalır. Böylece Arrest ve Taşikardi kartlarında iç içe iki-kolon nedeniyle oluşan dar, okunamaz kartlar engellendi.
- **V0.22 Kardiyak Arrest dallı modeli — Y-09/Y-10/Y-11:** Arrest Yönetimi ortak başlangıcı, nabız var/solunum yok-gasping ve nabız yok dalları; nabız yok altında Şoklanamaz NEA/Asistoli ile Şoklanır VF/nVT kolları `algorithmBranches[]` ile yapılandırıldı.
- **Arrest yetki ayrımı:** Resmî Y-10/Y-11'de adrenalin, defibrilasyon ve amiodaron/lidokain kutuları turuncu `AABT` fakat telefon simgesiz `DIRECT`; KPR, oksijenizasyon/ventilasyon, ritim-nabız değerlendirme ve ileri hava yolu kutuları turkuaz `ATT_AABT` + `DIRECT`. Bu ayrım regresyon testleriyle kilitlendi.
- **V0.21 dallı algoritma modeli — Nabızlı Taşikardi Y-08:** `algorithmBranches[]` eklendi. Ortak başlangıçtan sonra Stabil/Anstabil, stabil kolda Geniş/Dar QRS ve Düzenli/Düzensiz alt dalları ayrı yapılandırıldı. Her eylemde SKKM/ÇM telefon simgesi ve ATT/AABT kutu rengi bağımsız alan olarak korunur.
- **Y-08 kritik yetki ayrımı:** Resmî şemada vagal manevra ve ilk anstabil senkronize kardiyoversiyon turuncu `AABT` kutusudur ancak telefon simgesi taşımaz (`DIRECT`). Fentanil, midazolam, antiaritmik ilaç basamakları ve ilgili yanıtsızlık kardiyoversiyonları ise telefon simgelidir (`SKKM`). Bu kombinasyonlar regresyon testleriyle kilitlendi.
- **V0.20 lineer eylem yetki genişlemesi:** `algorithmSteps[]` pilotu Astım Y-05, Akut Koroner Sendrom Y-06 ve Bradikardi Y-07'ye genişletildi. Turkuaz ortak ATT/AABT basamakları rozet üretmez; resmî turuncu basamaklarda yalnız `Yalnız AABT` gösterilir. SKKM/ÇM telefon simgesi bilgisi `approvalAuthority` alanında renk katmanından bağımsız tutulur. Nabızlı Taşikardi gibi çok dallı şemalar düz listeye zorlanmadan ayrı dal modeliyle ele alınacaktır.
- **V0.19 eylem yetki pilotu — KOAH Y-04:** İlaç kartlarından bağımsız olarak algoritma adımları için `algorithmSteps[]` modeli eklendi. Her adım SKKM/ÇM durumunu (`approvalAuthority`) ve uygulayıcı kapsamını (`practitionerAuthority`) ayrı tutar. Resmî KOAH şemasında başlangıç/acil olgu yönetimi + pozisyon + O₂/PBV turkuaz `ATT_AABT`; ilk bronkodilatör, 20 dk tedavisi ve yanıtsız ağır hastada ileri hava yolu/NIMV turuncu `AABT` olarak görsel audit edildi. Arayüzde turkuaz/ortak adım için ek rozet gösterilmez; yalnız turuncu adımda `Yalnız AABT` görünür.
- **V0.18 yetişkin ilaç uygulayıcı auditi tamamlandı:** Hipertermi Y-23, Hipotermi Y-24, Termal Yanık Y-28, Kalsiyum Kanal/Beta Bloker Zehirlenmesi Y-34, Kolinerjik Zehirlenme Y-35, Opioid Y-36, TCA Y-37 ve Crush Y-39 resmî kutu renkleri de görsel olarak doğrulandı. Mevcut yetişkin ilaç/sıvı kartlarının tamamında uygulayıcı sonucu artık açıkça veri alanında bulunur.
- **Kaynak sadakati düzeltmeleri:** Termal Yanık Ringer Laktat, Y-34 IV %0,9 NaCl/RL hidrasyon, Y-36 hipotansiyon %0,9 NaCl ve Y-37 hipotansiyon %0,9 NaCl basamakları ilaç/sıvı kartlarına eklendi. Arı Sokması kartındaki Y-22 anafilaksi ilaç setine salbutamol eklendi. Y-22 salbutamol kutusunda uygulama yolu yazmadığı için önceki NEB çıkarımı kaldırılarak `Şemaya göre` yapıldı.
- **V0.17 uygulayıcı audit paketi:** ROSC Y-12, Hipovolemik Şok Y-13, Kalp Yetmezliğine Bağlı Akut Akciğer Ödemi ve Kardiyojenik Şok Y-14, Ajite Hastaya Yaklaşım Y-15, Diyabetik Aciller Y-17, Nöbet/Konvülziyon Y-19, Alerjik Reaksiyon Y-21 ve Anafilaksi Y-22 ilaç/sıvı kutuları resmî PDF görüntülerinden doğrulandı ve turuncu kutular `Yalnız AABT` olarak işlendi.
- **Y-17 kapsam düzeltmesi:** Önceki “Hipoglisemi” kartı resmî “Diyabetik Aciller” kapsamına geri getirildi. Glukoz >300 mg/dL kolundaki %0,9 NaCl IV infüzyon ve şok/dehidratasyonda Hipovolemik Şok algoritmasına geçiş eklendi; resmî şemada belirtilmeyen sıvı hacmi/hızı türetilmedi.
- **V0.16 uygulayıcı audit paketi:** Astım Y-05, AKS Y-06, Bradikardi Y-07, Nabızlı Taşikardi Y-08 ve Kardiyak Arrest Y-09/Y-10/Y-11 ilaç kutuları resmî PDF sayfa görüntülerinden renk bazında doğrulandı; bu paketteki ilaç basamakları turuncu “Acil Tıp Teknikeri” kutusuyla eşleştiği için `Yalnız AABT` kısıtı veri modeline işlendi.
- **Y-08 kaynak sadakati düzeltmesi:** Nabızlı Taşikardi kartındaki eksik resmî ilaç basamakları (fentanil, magnezyum sülfat, adenozin, metoprolol, diltiazem ve kardiyoversiyon sonrası amiodaron 300 mg) eklendi; mevcut amiodaron 150 mg ve midazolam basamakları bağlama göre ayrıştırıldı.
- **V0.15 uygulayıcı yetki katmanı:** SKKM/ÇM onayı (`authority`) ile resmî kutu renginden okunan ATT/AABT uygulayıcı yetkisi (`practitionerAuthority`) birbirinden ayrıldı. V0.15.1'de arayüz sadeleştirildi: turkuaz “Acil Tıp Teknisyeni / Teknikeri” ve henüz doğrulanmamış basamaklar ilaç kartında ek rozet üretmez; yalnız resmî turuncu “Acil Tıp Teknikeri” kutusu doğrulandığında `Yalnız AABT` kısıtı gösterilir. KOAH Y-04 pilot kapsamı bu modele göre işlenmiştir.
- **17 yetişkin vaka klinik audit:** 21.09.2026 tarihinde güncel Ek-2 kaynak setiyle başlık, doz, yol, tekrar, yetki, algoritma sırası ve kaynak izi yeniden kontrol edildi; yalnız doğrulanabilen değişiklikler işlendi.
- **Gri ilaç yetkisi:** SB-ASH-Y-07, Y-10/Y-11, Y-12 ve Y-19 sayfalarındaki SKKM/ÇM telefon ikonları resmî PDF görüntülerinden ayrıca denetlendi; mevcut 17 yetişkin vakada ilaç kartlarında çözümlenmemiş gri yetki kalmadı.
- **Kaynak bütünlüğü düzeltmesi:** V0.9.3'te mevcut 17 kartın resmî PDF sayfa izleri yeniden kilitlendi; Taşikardi s.17, ROSC s.23, Diyabetik Aciller s.31, İnme/SVO s.32, Nöbet/Konvülziyon s.33 ve Travmalı Hastada Acil Olgu Yönetimi Y-38 s.67 düzeltildi. Suda Boğulma at-çek-uzat, Hipoglisemi 15 dk yeniden değerlendirme, İnme %94–98/30° ve Termal Yanık kısa nakil 500 mL basamakları resmî metne göre tamamlandı.
- **İlk yetişkin genişleme paketi:** V0.10'da resmî PDF'nin algoritma + anahtar nokta sayfaları doğrudan incelenerek KOAH (Y-04), Hipovolemik Şok (Y-13), Kalp Yetmezliğine Bağlı Akut Akciğer Ödemi ve Kardiyojenik Şok (Y-14) ve Bilinç Değişikliği (Y-16) eklendi. Astım Y-05 yeniden kontrol edilerek SpO₂ >%93 ve ilk/20 dk sonrası SKKM yetki ayrımı düzeltildi.
- **İkinci yetişkin genişleme paketi:** V0.11'de Ajite Hastaya Yaklaşım (Y-15), Vertigo (Y-20), Alerjik Reaksiyon (Y-21) ve Hipotermide Arrest Yönetimi (Y-25) resmî PDF sayfalarından eklendi; telefon/SKKM simgeleri ve dozlar sayfa görüntülerinden doğrulandı.
- **Üçüncü yetişkin genişleme paketi:** V0.12'de Elektrik Yanıkları (Y-29), Kimyasal Yanıklar (Y-30), Zehirlenmelere Genel Yaklaşım (Y-31) ve Yüksek Doz İlaç Alımı (Y-32) resmî PDF sayfalarından eklendi. Kaynakta doz veya uygulama yolu açık yazmayan tedaviler için ilaç kartında çıkarım yapılmadı.
- **Dördüncü yetişkin genişleme paketi:** V0.13'te Karbonmonoksit Zehirlenmesi (Y-33), Kalsiyum Kanal Blokerleri / Beta Blokerler ile Zehirlenme (Y-34), Kolinerjik Ajanlarla Zehirlenme (Y-35), Narkotik / Opioid Zehirlenmeleri (Y-36) ve Trisiklik Antidepresan Zehirlenmesi (Y-37) resmî PDF'nin algoritma ve anahtar nokta sayfalarından eklendi. Telefon/SKKM simgeleri, dozlar ve tekrar aralıkları görüntüden doğrulandı.
- **Beşinci yetişkin genişleme paketi:** V0.14'te Crush Sendromu (Y-39), Kafa Travmalı Hastaya Yaklaşım (Y-40) ve Start Triyaj (Y-41) resmî PDF'nin anahtar nokta + algoritma sayfalarından eklendi. Y-39'daki ilk ve SKKM/ÇM telefon simgeli sıvı basamakları ayrı tutuldu; Y-40 anahtar noktasındaki sedasyon dozu yetki simgesi ayrıca gösterilmediği için yapılandırılmış ilaç/yetki kartına dönüştürülmedi; Y-41 START eşikleri birebir korundu.
- **Severity ve tema sağlamlaştırması:** Şiddet sekmeleri vaka verisinden üretilir; case-local renk artık global `--soft` temasını ezmez (`--case-soft`).
- **Yetişkin kapsamı:** V0.14 sonunda vaka kartları ve bağlı kaynak kodları SB-ASH-Y-02–Y-41 aralığını kesintisiz kapsar. SB-ASH-Y-01 Olay Yeri Yönetimi bir vaka değil temel protokol olarak ayrı katmanda ele alınacaktır.
- **Hasta grubu katmanı:** Yetişkin / Çocuk / Doğum & Yenidoğan. Yalnız kaynak-kod-doz-yetki QA'sı tamamlanan kartlar yayımlanır.
- **İlk Kritik Adımlar:** Her vaka için ayrı kritik ilk eylem katmanı; resmî algoritmada olmayan sabit bir 30 saniye süresi iddia edilmez.
- **Terminoloji:** Resmî algoritma başlıkları korunur; örn. SB-ASH-Y-12 **Resüsitasyon Sonrası Bakım**. Kullanıcıya açıklayıcı alt başlıkta ROSC açılımı verilir.
- **Acil Uyarı Bulguları:** Önceliği, müdahaleyi veya nakil kararını değiştirebilecek bulgular için standart kullanıcı terimi.
- **UI/klinik ayrımı:** `uiPriority`, `uiFeatured`, `criticalActions` ve `warningFindings` Saha112 arayüz alanlarıdır; resmî algoritma sınıflaması olarak sunulmaz.
- **Uygulama yolu etiketi:** Teknik `NEB` kodu kullanıcıya `Nebülizasyon`, `SC` kodu `Subkutan (SC)` olarak gösterilir.
- **Dokunma hedefleri:** Telefon/tablet Chrome testinde temel etkileşim kontrolleri en az 44 CSS px dokunma yüksekliğine sabitlenir.
- **Hızlı Saha modu:** Öncelikli vakaları öne alır; detayda İlk Kritik Adımlar, Acil Uyarı Bulguları, karar ve ilaç dozlarını öne çıkarır; açıklayıcı/kaynak alanlarını geri çeker.
- **Hasta grupları:** Yetişkin / Çocuk / Doğum & Yenidoğan mimaride kalıcıdır. Doğrulanmış kartı olmayan grup `Yakında` olarak pasif görünür ve ilk onaylı kart geldiğinde otomatik açılır.
- **İlaç modeli:** ad, doz, uygulama yolu, tekrar, maksimum doz, SKKM/ÇM onay enumu ve bağımsız uygulayıcı yetki enumu.
- **SKKM/ÇM enumları:** `DIRECT`, `SKKM`, `ALGORITHM`.
- **Uygulayıcı enumları:** `ATT_AABT`, `AABT`, `UNVERIFIED`; resmî kutu rengi görsel audit edilmeden `ATT_AABT` veya `AABT` atanmaz.
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

- **KOAH ileri hava yolu/NIMV:** Yanıtsız ağır KOAH'taki ileri hava yolu hazırlığı ve NIMV basamağı resmî telefon simgesine uygun olarak SKKM/ÇM şeklinde işaretlendi.
