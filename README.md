# Saha112 — Vaka Rehberi

Mobil-first, offline çekirdekli, vaka bazlı hastane öncesi acil sağlık eğitim ve hızlı hatırlatma uygulaması.

## V0.49 Anahtar Nokta tamlık yeniden audit

- **Resmî Anahtar Nokta kapsamı tamamlandı:** Y-14, Y-23, Y-34, Y-35 ve Y-36 için Ek-2'deki klinik bulgu/profil tabloları ayrı **Resmî Anahtar Noktalar** bölümüne eklendi; ana saha algoritması kısa tutuldu.
- **Y-14:** Kalp yetmezliği bulguları ile akut dekompanse, hipertansif ve kardiyojenik şok profillerinin resmî ayrıntıları görünür.
- **Y-23:** Isı Krampları, Isı Yorgunluğu, Isı Çarpması ve pasif eksternal soğutma yöntemleri tablo halinde görünür.
- **Y-34 / Y-35 / Y-36:** Beta bloker-kalsiyum kanal blokeri, organofosfat ve opioid belirti/bulgu tablolarındaki eksik resmî öğeler tamamlandı.
- **UI:** Uzun kaynak etiketleri için ayrı okunabilir satır düzeni; tek referans kartı ve Y-38 uzun adli kartı için tam genişlik yerleşimi.
- **Regresyon koruması:** Validator ve UI audit yeni referans tablolarını ve yapı bütünlüğünü kilitler.
- **PWA:** İçerik, asset query'leri, UI audit ve service-worker cache birlikte V0.49'a yükseltildi.

### V0.48 önceki durum


- **Bağımsız geniş kaynak turu:** Yetişkin Y-01–Y-41; ilaç/doz/yol/tekrar, ATT/AABT kutu rengi, SKKM/ÇM telefon simgesi, kritik karar eşikleri, Anahtar Noktalar ve saha güvenliği yeniden sorgulandı.
- **Y-35 Kolinerjik:** Resmî Anahtar Noktadaki kişisel koruyucu ekipmanın tam/eksiksiz kullanılması ve sekresyonlarla temas edilmemesi saha özetinde görünür hale getirildi.
- **Y-23 Hipertermi:** Isı krampları ve ısı stresi tedavi kollarını belirleyen klinik kriterler ilk bakış özetine geri eklendi; böylece yalnız tedavi değil, doğru kola nasıl girileceği de görünür.
- **Regresyon koruması:** Y-29 elektrik güvenliği, Y-35 mesleki maruziyet güvenliği ve Y-23 dal kriterleri validator/UI audit ile kilitlendi.
- **PWA:** İçerik, kritik asset query'leri, UI audit ve service-worker cache birlikte V0.48'e yükseltildi.

### V0.47 önceki durum


- **2 temel protokol + 37 yetişkin vaka yeniden kontrol edildi:** kaynak tarihleri 25.09.2026 tam yeniden audit turuna taşındı; SB-ASH-Y-01–Y-41 kapsamı, kaynak sayfaları, ilaç/doz/yol/tekrar, yetki semantiği, algoritma geçişleri ve kritik Anahtar Noktalar tekrar çaprazlandı.
- **Y-38 kaynak tamamlama:** Resmî s.66 Yetişkin Glasgow Koma Skoru (motor/sözel/göz) ve “Adli Vakalara Yaklaşırken” tablosunun eksik saha kuralları ayrı **Resmî Anahtar Noktalar** bölümünde görünür hale getirildi.
- **Y-35 kaynak sadakati:** Atropin için resmî “IV yol açılana kadar 2–5 mg IM” ifadesi korunur.
- **Y-37 kaynak sadakati:** QRS uyarıları resmî karşılıklarıyla “5 küçük kare >100 ms” ve “8 küçük kare >160 ms” olarak görünür.
- **Regresyon koruması:** Validator/UI audit Y-38 GKS+adli tabloyu, Y-35/Y-37 ayrıntılarını ve tüm yetişkin kaynak audit tarihini kilitler.
- **PWA:** İçerik, arayüz asset query'leri, UI audit ve service-worker cache V0.47 olarak birlikte döndürülür.

### V0.46 önceki durum


- **Uygulama yolu çıkarımı kaldırıldı:** Y-13 hemorajik/non-hemorajik kristalloid, Y-14 kardiyojenik şok %0,9 NaCl, Y-22 anafilaksi %0,9 NaCl ve Y-23 ısı stresi/ısı çarpması %0,9 NaCl kutularında resmî şema uygulama yolunu ayrıca yazmadığı için önceki `IV` çıkarımı kaldırıldı; kartlar `OTHER / Şemaya göre` olarak tutulur.
- **Y-24 ayrımı bilinçli korundu:** Hipotermi Anahtar Noktası ısıtılmış IV sıvıları 40–42°C olarak açıkça tanımladığı için ılık %0,9 NaCl kartındaki IV yol bilgisi kaynak desteğiyle korunur.
- **Birebir kaynak ifadesi:** Y-14 ve Y-40 algoritmalarındaki alışılmadık resmî `SpO₂ >%94–98` yazımı yorumlanıp düzeltilmeden korunur.
- **Regresyon koruması:** Validator bu altı kaynakta-belirtilmeyen sıvı yolu çıkarımını, Y-24 IV kaynak desteğini ve Y-14/Y-40 resmî SpO₂ ifadesini kilitler.
- **PWA sürümü:** İçerik, HTML asset query'leri, UI audit ve service-worker cache birlikte V0.46'ya yükseltilir.

### V0.45 önceki durum


- **Final tam kaynak audit'i:** 2 temel protokol ve 37 yetişkin vakanın tamamı 24.09.2026'da güncel 25.08.2026 Ek-2 sayfa görüntülerine karşı yeniden kontrol edildi; tüm vaka `reviewedAt` değerleri artık 24.09.2026 ve CI bunu zorunlu tutar.
- **Y-06 AKS:** SpO₂ >%90'da rutin O₂'den kaçınma, solunum sıkıntısı/ritim bozukluğunda O₂ kullanımı ve günlük yeterli aspirin alınmış olsa bile yükleme dozu önerisi tamamlandı.
- **Y-09/Y-10/Y-11 Arrest:** Yüksek kaliteli KPR ölçütleri (5–6 cm, 100–120/dk, >10 sn ara vermeme, recoil, hiperventilasyondan kaçınma, 2 dk'da uygulayıcı değişimi), ileri hava yolu öncesi/sonrası ventilasyon ve resmî geri döndürülebilir nedenler görünür hale getirildi.
- **Y-13 Hipovolemik Şok:** Resmî gri nottaki `MAP = (SKB + 2 × DKB) / 3` formülü eklendi.
- **Y-28 Yanık:** Parkland hesabında 1. derece yanıkların hesaplamaya dahil edilmediği açıkça belirtildi.
- **Son eski-tarihli vaka turu:** Y-08, Y-12, Y-15, Y-16, Y-20, Y-21, Y-31, Y-32 ve Y-37 tekrar okundu. Y-16 neden tablosu, Y-20 nistagmus/şok bileşenleri, Y-31 genel zehirlenme bulguları ve Y-37 antikolinerjik sendrom/erken destek ilkeleri tamamlandı.
- **Temiz PWA sürümü:** İçerik, HTML asset query'leri ve service-worker cache birlikte V0.45'e yükseltilir; böylece V0.44 altında değişmiş içerik bırakılmaz.

### V0.44 önceki durum

- **Sıkı ikinci kaynak audit'i:** Önceki audit sonuçları doğru kabul edilmeden resmî PDF sayfa görüntüleri yeniden okundu; metin, doz, yol, tekrar/maksimum, ATT/AABT rengi, SKKM/ÇM simgesi, Anahtar Nokta ve akış geometrisi tekrar çaprazlandı.
- **Y-38 önemli düzeltme:** Resmî s.67'deki ifade **“Tüm giysileri yararak vücut kontrolünü tamamla hipotermiden koru”**. V0.39'da bunu yanlışlıkla “çıkararak” diye değiştirmiştik. V0.44'te kaynak metnine geri dönüldü ve eski yanlış regresyon testi kaldırıldı.
- **Y-38 adli vaka ayrıntısı:** Ateşli silah yaralanmasında kıyafet kesilirken kurşun giriş yerinin kesilmemesi; kıyafetlerin tamamen çıkarıldıktan sonra muhafaza edilerek bilgi verilmesi Anahtar Noktası eklendi.
- **Y-22 Anafilaksi:** Alerjen maddenin uzaklaştırılması ve bilinen alerjenle temas sonrası hipotansiyon / sistolik KB'de %30'dan fazla düşme dahil eksik tanı Anahtar Noktaları eklendi.
- **Y-23 Hipertermi:** Pasif eksternal soğutma yöntemi açıklaştırıldı: üzerini çıkarma, soğuk/ılık su + havalandırma ile buharlaştırma, koltuk altı/kasığa ıslak bez veya spanç ve <39°C hedefi; aşırı soğutmadan kaçınma.
- **Y-33 Karbonmonoksit:** Yangın dumanında PVC, naylon ve diğer sentetik materyaller nedeniyle CO dışında toksik/irritan gazların bulunabileceği resmî uyarı eklendi.
- **Regresyon sertleştirmesi:** Y-38'in yanlış “çıkararak” metnine dönmesi artık hata; Y-22/Y-23/Y-33 yeni Anahtar Noktaları da validator/UI audit ile kilitlenir.
- **Solunum/kardiyak eksiklerinin tamamlanması:** Y-04 invaziv/NIMV endikasyonları; Y-05 ağır atak ölçütleri ve anafilaksi uyarısı; Y-07 hipotansiyon/nabız <40, asistoli riski ve resmî dopamin-adrenalin pratik infüzyon hazırlama bilgileri eklendi.
- **Yanık/ısı ortak Anahtar Noktaları:** Y-23 serin ortam-kıyafet-ambulans kabini soğutma; Y-28 termal yanığı musluk suyu ile yıka/kurula; Y-29 elektrik yanığı 4×VYA başlangıç sıvı formülü; Y-30 toz/sıvı kimyasal dekontaminasyon sıraları ve kaynak sayfa izleri eklendi.

### V0.43 önceki durum

- **Baştan sona yetişkin audit'i:** Y-01/Y-02 temel protokoller + 37 yetişkin vaka, ilaç/sıvı kartları, ATT/AABT kutu rengi, SKKM/ÇM telefon simgesi, Anahtar Noktalar ve algoritma geçişleri 25.08.2026 Ek-2'ye karşı yeniden tarandı.
- **Y-26 kapsam düzeltmesi:** Eski “Arı Sokması” kartı resmî **Isırma ve Sokmalar (SB-ASH-Y-26)** kapsamına döndürüldü. Kara ve deniz canlıları ayrı dallar; deniz canlılarında %0,9 NaCl/steril su 100–250 mL irrigasyon + en az 20 dk tolere edilebilir sıcak su; ortak yıkama-sabitleme, 5 dk ödem takibi ve vital/zehirlenme/alergi izlemi görünür.
- **Y-26 ilaç sınırı:** Y-22 Anafilaksi ilaçları Y-26'nın kendi ilaçları gibi gösterilmez; Y-26'nın ilaç kartı yoktur. Alerjik reaksiyon/anafilaksi varsa yalnız mavi “İlgili algoritmaya git” geçişi kullanılır. Arı iğnesi, yılan/akrep turnike yasağı-kompresyon bandı, kene çıkarma ve PPE Anahtar Noktaları eklendi.
- **Güvenlik/Anahtar Nokta tamamlama:** Y-03 kısmi tıkanıklıkta sırta vurma uyarısı; Y-06 nitrat kontrendikasyonları/PDE5 ve fentanil yavaş bolus; Y-24 42–46°C O₂ ve 40–42°C IV sıvı; Y-27 spinal stabilizasyon ve ıslak giysi/kurulama; Y-28 yapışmış giysi, sıvı başlama eşikleri ve yanık merkezi kriterleri eklendi.
- **Toksikoloji/Crush tamamlama:** Y-35 oral alımda ilk 30 dk gastrik lavajın acil serviste yapılması; Y-36 spontan solunum veya ajitasyonda IV naloksonu durdurma; Y-39 6 saat idrar takibi, idrar çıkışına göre ileri sıvı Anahtar Noktaları, doz türetilmeden hiperkalemi tedavi seçenekleri ve yürüyebilmenin crush'ı dışlamaması eklendi.
- **Y-41 START:** “Triyaja uygulayıcıya en yakın hastadan başlanır” Anahtar Noktası eklendi; mevcut renk ağacı ve yeniden triyaj kuralları korunur.
- **Audit metası:** Clinical/authority/integrity/practitioner/medication/adultCoverage denetim tarihleri 24.09.2026'ya taşındı; kaynakta sayısal değer bulunmayan alanlar uyarı olarak bırakılır, sayı türetilmez.

### V0.42 önceki durum

- **Geniş yapılandırılmış akış audit'i:** Y-14, Y-17, Y-18, Y-19, Y-25, Y-38, Y-40 ve Y-41 resmî 25.08.2026 Ek-2 sayfalarıyla yeniden karşılaştırıldı; Y-14/Y-17 kaynak gözden geçirme tarihi 24.09.2026 olarak yenilendi.
- **Y-25 ECMO semantiği:** “SKKM/ÇM ile görüşerek ECMO merkezine yönlendirmeyi düşün” kaynaktaki bağlantısız gri uyarı niteliğine döndürüldü; yalnız KPR “Evet” koluna bağlıymış gibi gösterilmez.
- **Y-25 ısıtma Anahtar Noktaları:** Vücut ısısı takibi/uzun nabız değerlendirmesi, aktif dış ısıtma teknikleri, 42–46°C ısıtılmış-nemlendirilmiş oksijen ve 40–42°C ısıtılmış IV sıvı bilgileri eklendi; orta-ciddi hipotermide bilinç değişikliği koşulu korunur.
- **Y-41 START Anahtar Noktaları:** Triyaj kartında yalnız renk kodu işaretleme, triyaj sırasında tedavi/KPR yapmama, ideal tek sağlık personeli ve geniş alan/çok yaralıda alan paylaşımı ile birden fazla personel kullanımı görünür hale getirildi.
- **Yetki rozeti yerleşimi:** AABT/SKKM rozetleri artık eylem metninin hemen altında, gri koşul/mavi algoritma geçişinden önce gösterilir. Böylece rozetler follow-up koşul veya geçişin yetkisiymiş gibi görünmez.
- **Regresyon:** Runtime smoke testi, AABT rozetinin `followUp` içeriğinden önce render edildiğini ayrıca doğrular.

### V0.41 önceki durum

- **V0.41 Y-19 Nöbet / Konvülziyon:** Resmî s.33 akışı yapılandırıldı: Acil olgu yönetimi → hava yolu/SpO₂ %94–98/PBV → DAKŞ → glukoz → kardiyak monitörizasyon → nöbet sonlandı/devam ediyor ayrımı.
- **Hipoglisemi geçişi:** Glikoz <60 mg/dl ve/veya hipoglisemi bulguları gri koşul; Diyabetik Aciller bağlantısı mavi `transition` olarak gösterilir.
- **Devam eden nöbet:** İlk diazepam 5 mg IV yavaş puşe veya midazolam 5 mg IV / 10 mg IM basamağı turuncu `AABT + SKKM`. Nöbet sürerse fenitoin 20 mg/kg (resmî şemada infüzyon hızı en fazla 25 mg/kg/dk) veya valproik asit 40 mg/kg IV infüzyon veya levetirasetam 60 mg/kg IV infüzyon yine `AABT + SKKM`.
- **5 dk tekrar:** İkinci basamak sonrası nöbet devam ediyorsa diazepam/midazolam tekrar basamağı `AABT + SKKM`; son kararda nöbet devam ediyorsa turkuaz ileri hava yolu hazırlığı, sonlandıysa turkuaz postiktal hava yolu takibi.
- **Kaynak geometrisi:** İlk benzodiazepinden sonra nöbet sonlanırsa doğrudan postiktal kola çıkılabilir; nöbet sürerse ikinci basamaklara ilerlenir. Böylece kaynakta olmayan “her hastaya tüm ilaçları sırayla ver” algısı oluşturulmaz.
- **Gri güvenlik uyarısı:** Hastayı engellemeye çalışmama; yaralanmayı önlemek için baş altına yastık/katlanmış battaniye yerleştirme ayrı nötr uyarı olarak korunur.

### V0.40 önceki durum

- **V0.40 Y-40 Kafa Travmalı Hastaya Yaklaşım:** Resmî s.71 ana akışı yapılandırıldı: Acil olgu yönetimi → GKS ≤8/solunum yetmezliği/hava yolu tehlikesinde ileri hava yolu → SpO₂ %94–98 ve yaşa göre ventilasyon → kan şekeri → iki glukoz kolu.
- **Glukoz dalları:** KŞ <60 veya >300 mg/dL → mavi Diyabetik Aciller geçişi. 60–300 mg/dL → turuncu AABT/DIRECT IV sıvı tedavisi ve SKB >100 mmHg hedefi.
- **Nöbet/KİBAS:** Normal glukoz kolunda nöbet → mavi Nöbet/Konvülziyon geçişi; KİBAS → s.70 Anahtar Noktasındaki “şok yoksa baş-gövde 30–45° yukarıda sevk” gri uyarısı. Gri uyarıya ATT/AABT/SKKM yetkisi uydurulmaz.
- **KİBAS/herniasyon bulguları:** Cushing triadı, GKS'nin ≥2 puan azalması, hemipleji/hemiparalizi ve anizokori Acil Uyarı Bulgularında korunur.
- **Ajite hasta Midazolamı:** 1–2,5 mg IV, 3–5 dk'da bir hasta sakinleşinceye kadar bilgisi Anahtar Noktalar kaynaklıdır; bu tabloda kutu rengi/telefon simgesi olmadığı için `ALGORITHM + UNVERIFIED` kalır.
- **Kaynak sadakati:** Y-40'ın dört ortak ana basamağı turkuaz `ATT_AABT + DIRECT`; IV sıvı kutusu turuncu `AABT + DIRECT`. Mavi algoritma geçişleri yetki rozeti değildir.

### V0.39 önceki durum

- **Y-17/Y-18/Y-38 ortak geçiş modeli:** Resmî mavi “... ALGORİTMASINA GİT” kutuları artık `followUp.transition` ile ortak biçimde modellenir. Gri koşul/uyarı ile turkuaz eylem aynı mavi kutuya dönüştürülmez.
- **Y-18 gri KB uyarısı:** “Tansiyon değerleri normalin üstünde olsa da tansiyonu düşürme” ayrı `followUp.notice` olarak gösterilir.
- **Y-38 pelvis kolu:** “Pelvis travması ya da şüphesi varsa pelvisi sabitle” turkuaz eylem olarak kalır; yalnız sonraki Hipovolemik Şok bağlantısı mavi geçiştir.
- **Y-38 metin notu (V0.39 — V0.44'te düzeltilmiştir):** V0.39'da “yararak” yanlışlıkla “çıkararak” yapılmıştı. V0.44 yeniden incelemede resmî s.67'nin “Tüm giysileri yararak vücut kontrolünü tamamla” dediği doğrulanarak geri alındı.
- **Y-25 Anahtar Noktalar:** Uzun resüsitasyon süreleri önerisi, ıslak giysi/termal örtü/sıcak ortam ve sert fiziksel hareketten kaçınma; ciddi hipotermide ölçülemeyen KB, ağrılı uyarana yanıtsızlık ve pupil refleksi kaybının tek başına ölüm belirtisi olmadığı eklendi.
- **Y-41 yeniden triyaj:** Zaman ve olanak olduğunda triyajın tekrarlanması ve daha ciddi triyaj kodu verilebilmesi açık hale getirildi.
- **Regresyon:** Follow-up renderer smoke testi artık hem mavi `transition` hem gri `notice` yollarını gerçek fonksiyon çağrısıyla doğrular.

### V0.38 önceki durum

- **Renderer runtime düzeltmesi:** `algorithmBranchLayout === "split"` yolundaki `const` yeniden-atama hatası kaldırıldı. Layout seçimi yan etkisiz `algorithmBranchLayoutClass()` ile yapılır; Y-17 split görünümü çalışma zamanında hata üretmez.
- **Gerçek runtime smoke:** Mevcut UI audit artık `app-core.js` içindeki gerçek renderer fonksiyonlarını çalıştırarak default/profiles/split, terminal triyaj, mavi geçiş, gri önkoşul ve gri uyarı yollarını doğrular.
- **Y-25 kaynak geometrisi:** “Vücut ısısı <35°C ve bilinç kapalı ise” gri önkoşul olarak eylem yetkisinden ayrıldı; Hipotermi ve Arrest algoritmalarına git kutuları mavi `transition` öğeleridir ve ATT/AABT/SKKM rozeti taşımaz.
- **Y-25 gri uyarılar:** Defibrilasyonun 30°C'ye kadar ertelenmesi bağımsız üst uyarı; ECMO merkezine yönlendirmeyi düşünme ifadesi KPR uygulanan kolda bağımsız gri uyarıdır. KPR endikasyonu olmayan durumlarla ECMO aynı hızlı özet maddesinde birleştirilmez.
- **Y-38 kritik travma tablosu:** s.65'teki kriterler tamamlandı: anormal solunum, oksijen desteğine rağmen SpO₂ %94 altı, dispne, pnömotoraks/yelken göğüs; kanama-nörolojik kriterler; penetran yaralanma/amputasyon; herhangi bir travmayla birlikte KAH-KOAH-kanama bozukluğu, 55 yaş üstü, yanık, hipotermi veya gebelik.
- **Y-38 mavi geçişler:** Arrest, Hipovolemik Şok ve Kafa Travmalı Hastaya Yaklaşım bağlantıları `followUp.kind="transition"` ile klinik geçiş olarak ayrılır; onay/yetki rozeti değildir.

### V0.37 önceki durum

- **V0.37 Y-38 Travmalı Hastada Acil Olgu Yönetimi:** Resmî s.67 akışı, mobilde tekrar üretmeden okunabilen lineer X-ABCDE omurgasına taşındı. Düzeltici “Hayır” çıkışları ilgili basamağın hemen altında gösterilir; kaynakta olmayan paralel dallar üretilmedi.
- **X / kanama:** Olay yeri güvenliği ve travma mekanizmasından sonra dışa doğru hayatı tehdit eden kanamada doğrudan bası korunur.
- **A/B:** Servikal-spinal immobilizasyon, güvensiz hava yolunda açma–orofaringeal airway–aspirasyon–ileri hava yolu; stabil olmayan solunumda ventilasyon desteği, tansiyon pnömotoraksta iğne dekompresyonu, açık pnömotoraks kapatma ve hemotoraksta solunum/dolaşım desteği görünür.
- **C/D/E ve geçişler:** Nabız yok → Arrest Yönetimi; dolaşım stabil değil → pelvis travması/şüphesinde sabitleme + Hipovolemik Şok; bilinç normal değil → Kafa Travmalı Hastaya Yaklaşım. Sonrasında giysileri yararak tam vücut kontrolü, hipotermiden koruma ve nakil sırasında ikincil değerlendirme/immobilizasyon sürdürme korunur.
- **Yetki sadakati:** Y-38 eylem kutuları resmî sayfada turkuaz ve telefon simgesizdir; yapılandırılmış dokuz basamak `ATT_AABT + DIRECT` olarak kilitlendi. Mavi “ilgili algoritmaya git” kutuları ayrı klinik geçiştir, SKKM onayı olarak yorumlanmadı.
- **Adli kanıt uyarısı:** Resmî gri uyarıdaki kanıt olabilecek materyallerin/giysilerin korunması Acil Uyarı Bulguları içinde görünür tutuldu.

### V0.36 önceki durum

- **V0.36 Y-25 Hipotermide Arrest Yönetimi:** Resmî s.42–43 akışı yapılandırıldı: <35°C + bilinç kapalı → en az 60 sn nabız kontrolü → Nabız var / Nabız yok → KPR başlama kriteri var / yok.
- **KPR kolu:** Kriter varsa standart erişkin ileri yaşam desteği ile eş zamanlı pasif/aktif ısıtma; vücut ısısı ≥35°C olana kadar KPR'yi sonlandırmama ve >35°C olduğunda Arrest Yönetimi algoritmasına geçiş görünür hale getirildi.
- **Aralıklı KPR:** Kesintisiz KPR olanağı yoksa <28°C için 5 dk KPR / 5 dk KPR'siz, <20°C için 5 dk KPR / 10 dk KPR'siz periyot aynı eylemin devam bilgisi olarak gösterilir; KPR'siz periyot taşıma/kurtarma için kullanılır.
- **Defibrilasyon uyarısı:** İlk defibrilasyon başarısızsa vücut sıcaklığı 30°C'ye ulaşıncaya kadar sonraki defibrilasyonun ertelenmesi resmî gri uyarı olarak görünür. Gri uyarıya ATT/AABT veya SKKM onay rengi uydurulmadı.
- **ECMO:** Kaynaktaki “SKKM/ÇM ile görüşerek ECMO merkezine yönlendirmeyi düşün” ifadesi not olarak korunur; bu ifade sarı “SKKM/ÇM onayı gerekli” rozeti olarak yeniden yorumlanmaz.
- **KPR başlanmama kriterleri:** Hava yolunun kar/buzla kaplı olması, 35 dk'dan fazla çığ altında kalma, ortam güvenliğinin sağlanamaması ve kompresyona izin vermeyecek şekilde bütün vücudun donması KPR yok kolunda açıkça görünür.

### V0.35 önceki durum

- **V0.35 Y-41 START Triyaj:** Resmî sayfa 73'teki karar ağacı yapılandırıldı: yürüyebilme → solunum → solunum sayısı → dolaşım (KGD/distal nabız) → komutlara uyum. Eski ayrı “Karar noktası” kutusu gizlendi.
- **Kaynak geometrisi:** Yürüyenler YEŞİL; solunum yoksa başa pozisyon sonrası solunum yok SİYAH / solunum başlarsa KIRMIZI; solunum <10 veya >30/dk KIRMIZI; 10–30/dk ise dolaşım; KGD >2 sn veya distal nabız yok KIRMIZI; KGD <2 sn ve distal nabız varsa komuta uyumla SARI/KIRMIZI ayrımı korunur.
- **Triyaj rengi ≠ mesleki yetki rengi:** Yeşil/sarı/kırmızı/siyah sonuçlar ayrı `triageCode` görsel semantiğidir. ATT/AABT kutu rengi veya SKKM/ÇM onay anlamı taşımaz.
- **Yetki sadakati:** START karar ağacındaki uygulayıcı basamakları resmî turkuaz ortak ATT/AABT kutularıdır; telefon simgesi bulunmadığından `DIRECT` olarak tutulur.

### V0.34 önceki durum

- **V0.34 Y-18 yapılandırılmış akış:** İnme / SVO, resmî SB-ASH-Y-18 sayfa 32 geometrisine göre dokuz adımlı saha akışına taşındı. Glukoz <60 mg/dL ve/veya hipoglisemi bulgusu ana akışa eşdeğer paralel dal yapılmadı; kan glikozu basamağından Diyabetik Aciller'e yan geçiş olarak korundu.
- **Y-18 yetki sadakati:** Y-18'de turuncu yalnız AABT kutusu yoktur. İlk sekiz adım `ATT_AABT + DIRECT`; yalnız son uygun merkez nakil kutusunda telefon simgesi bulunduğu için `ATT_AABT + SKKM` olarak kilitlendi.
- **BEFAST / pozisyon / KB:** BEFAST pozitifliği, hipoperfüzyon yoksa baş-gövde 30° yükseltme, kardiyak monitörizasyon + KB takibi ve “normalin üstünde olsa da tansiyonu düşürme” uyarısı kaynak konumlarına uygun biçimde görünür.
- **Zaman penceresi:** Son normal görülme zamanından 4,5 saat içinde trombolitik ve 6 saat içinde endovasküler girişim için uygun merkeze nakil bilgisi son basamakta korunur.
- **Tekrar azaltma:** Kaynak akışı artık algoritmanın içinde görüldüğünden Y-18'in eski ayrı Karar kutusu/jump'ı gizlendi.

### V0.33 önceki durum

- **V0.33 Y-17 yapılandırılmış akış:** Diyabetik Aciller resmî SB-ASH-Y-17 geometrisine taşındı. Ortak “Acil olgu yönetimini uygula → Kan şekerini ölç” başlangıcından sonra hipoglisemi ve hiperglisemi ayrılır; hipoglisemi kolu ayrıca Bilinci açık / Bilinci kapalı olarak dallanır.
- **Y-17 yetki sadakati:** Oral şekerli sıvı, yeniden kan şekeri/klinik değerlendirme ve ortak ölçüm adımları turkuaz `ATT_AABT + DIRECT`; IV dekstroz ve hiperglisemi %0,9 NaCl basamakları turuncu `AABT + DIRECT`. Resmî Y-17 sayfasında SKKM/ÇM telefon simgesi bulunmadığı için bu akışa SKKM rozeti eklenmedi.
- **Kaynakta belirtilmeyeni ekleme yok:** Hiperglisemi kolundaki %0,9 NaCl için resmî şemada hacim/hız belirtilmediğinden uygulama bunları üretmez. Şok/dehidratasyon varsa Hipovolemik Şok algoritmasına geçiş ayrı devam öğesi olarak korunur.
- **Responsive dallanma:** Y-17 ana hipoglisemi/hiperglisemi kolları geniş ekranda iki kolon, tablet/mobilde tek kolon; hipogliseminin Bilinci açık / Bilinci kapalı alt kolları da mevcut güvenli nested-branch düzenini kullanır.

### V0.32 önceki durum

- **Kaynak:** T.C. Sağlık Bakanlığı 25.08.2026 tarihli Ek-2 Hastane Öncesi Acil Tıbbi Yardım ve Bakım Akış Şemaları.
- **V0.32 Y-14 yapılandırılmış akış:** Kalp Yetmezliğine Bağlı Akut Akciğer Ödemi ve Kardiyojenik Şok, resmî sayfa 25–26'ya göre üç ortak başlangıç adımı ve üç hemodinamik profile ayrıldı: Normotansif dekompanse kalp yetmezliği, Hipertansif kalp yetmezliği ve Kardiyojenik şok.
- **Yetki sadakati:** Üç ortak başlangıç kutusu turkuaz `ATT_AABT + DIRECT`; üç tedavi profilindeki tüm tedavi basamakları turuncu ve telefon simgeli olduğundan `AABT + SKKM` olarak kilitlendi.
- **Profil seçim ipuçları:** Normotansif profil için algoritmadaki `SKB >100 mmHg`; hipertansif profil için Anahtar Noktalardaki `SKB >140 mmHg (genellikle >180)`; kardiyojenik şok için `SKB genellikle <90 mmHg` ve bozulmuş doku perfüzyonu kısa profil notları olarak görünür.
- **Daha az tekrar:** Y-14'te üç profil zaten karar yapısını gösterdiği için eski ayrı “Karar noktası” kutusu/jump gizlendi. Geniş masaüstünde üç profil yan yana, daha dar ekranlarda tek kolon gösterilir.
- **V0.31 kaynak geometrisi düzeltmesi:** ROSC Y-12'de “Arrest tekrarında ilgili ritim algoritmasına git” artık yedinci bağımsız üst dal değildir; resmî Y-12 görselindeki gibi alt sonuç/geçiş olarak gösterilir. Üst dallar yalnız Hipotansiyon, Ventriküler ektopi/sürekli olmayan VT, Bradiaritmi, Hipo/Hiperglisemi, Taşiaritmi ve Nöbet olarak kalır.
- **Y-08 / Y-09–Y-11 tekrar azaltma:** Nabızlı Taşikardi ve Kardiyak Arrestte dallı algoritma karar yapısını zaten gösterdiği için ayrı “Karar noktası” kutusu ve Karar jump'ı gizlendi. Klinik `decision` verisi korunur; yalnız yinelenen UI kaldırılır.
- **Y-11 antiaritmik okunabilirliği:** Resmî tek turuncu ilaç kutusunun içeriği bölünmeden korunur; 3. şok sonrası 300 mg amiodaron / lidokain başlangıç dozu ile dirençli-tekrarlayan VF-nVT'de 5. şok sonrası 150 mg amiodaron / lidokain tekrar dozu aynı eylem kartı içinde iki görsel segmente ayrılır.
- **Mobil gezinme:** Detay jump şeridinin sağ kenarında hafif “›” devam göstergesi bulunur; yatay kaydırılabilir başka sekmeler olduğu daha kolay fark edilir.
- **V0.30 yüksek öncelikli vaka akışı:** ROSC (Y-12), Hipovolemik Şok (Y-13) ve Anafilaksi (Y-22) uzun düz metin yerine resmî karar yapısına göre `algorithmSteps[] + algorithmBranches[]` modeline taşındı.
- **ROSC Y-12:** ortak yeniden değerlendirme sonrası hipotansiyon, ventriküler ektopi/sürekli olmayan VT, bradiaritmi, hipo/hiperglisemi, taşiaritmi, nöbet ve arrest tekrarı kolları ayrıldı. Hipotansiyon ilaç basamağı ile lidokain/amiodaron basamağı `SKKM + Yalnız AABT`; algoritmaya yönlendirme kollarında ek kısıt rozeti yoktur.
- **Hipovolemik Şok Y-13:** Hemorajik ve Non-hemorajik kollar ayrıldı. Kanama kontrolü ortak ATT/Tekniker; kristalloid basamakları `Yalnız AABT` fakat telefon simgesiz; yalnız MAP <65 mmHg ve yanıtsız devam eden hipovolemide vazopressör basamağı `SKKM + Yalnız AABT`.
- **Anafilaksi Y-22:** ilk IM adrenalin, hava yolu/O₂/monitörizasyon ve devam eden hipoperfüzyonda IM tekrar + 500 mL NaCl sırası açık hale getirildi. “Düzelme olmuyor” alt kolunda IV adrenalin, antihistaminik/salbutamol ve metilprednizolon SKKM gerektiren basamaklar olarak ayrıldı; ikinci NaCl 500 mL basamağı telefon simgesiz tutuldu.
- **Daha az tekrar:** Bu üç vakada ayrı “Karar noktası” kutusu artık gösterilmez; aynı kararlar yapılandırılmış dalların içinde görünür. Acil Uyarı Bulguları tek genişlikte gösterilir.
- **V0.29 erişim iyileştirmesi:** Ana arama artık yalnız vaka kartlarını değil Temel Protokoller'i de anlık filtreler. Arama bir temel protokolle eşleşiyorsa ekran önce protokol sonucuna kayar; vaka sonucu yok diye kullanıcı protokol eşleşmesini kaçırmaz. Y-02 güvenlik kararındaki tekrar eden ekipman cümlesi de bir sonraki adıma yönlendiren daha kısa metne çevrildi.
- **V0.28 Temel Protokoller — Y-02 Acil Olgu Yönetimi:** Y-02 de normal vaka kartı yapılmadan `PROTOCOLS[]` katmanına alındı. Ana ekranda protokoller 1. Olay Yeri Yönetimi → 2. Acil Olgu Yönetimi sırasıyla görünür. Y-01'in sonundaki geçiş Y-02'yi tek dokunuşla açar; Y-02'de olay yeri güvenli değil dalı Y-01'e geri bağlanır.
- **Y-02 hızlı hatırlatma:** Resmî “Acil Olgu Yönetimi Anahtar Noktalar” sayfasındaki SAMPLE ve XABCDE içerikleri ayrı, kompakt hatırlatma kartları olarak gösterilir. Akış ekranında ekipman yerleşimi → birincil değerlendirme → ikincil değerlendirme → ön tanı → ilgili vaka algoritması → yeniden değerlendirme sırası korunur.
- **Kolay erişim:** Y-02'de “Vaka algoritmalarını aç” geçişi kullanıcıyı doğrudan vaka kütüphanesine götürür. Protokoller arası geçişte geri düğmesi önce önceki protokole döner; kullanıcı ana ekrana fırlatılmaz.
- **Yetki sadakati:** Y-02 ana algoritma kutuları resmî PDF'de turkuaz ortak Acil Tıp Teknisyeni / Teknikeri rengindedir ve telefon simgesi yoktur; bu nedenle Y-02'ye AABT veya SKKM rozeti eklenmemiştir.
- **V0.27 Temel Protokoller — Y-01 Olay Yeri Yönetimi:** SB-ASH-Y-01 vaka sayısına eklenmeden ayrı `PROTOCOLS[]` veri katmanına alındı. Ana ekranda “Temel Protokoller / Saha başlangıcı” kartı olarak görünür; detay ekranında resmî sıra korunur: SKKM/ÇM ile ilk temas → kişisel koruyucu malzeme ve olay yeri güvenliği → gerekirse kurum desteği → hasta/yaralı güvenliği → olay/vaka sayısı ve ek kaynak değerlendirmesi → çoklu hastada triyaj → ekip/ekipman isteme → SB-ASH-Y-02 Acil Olgu Yönetimi'ne geçiş.
- **Y-01 yetki semantiği:** Resmî Y-01 sayfasında turuncu “yalnız Acil Tıp Teknikeri” kutusu yoktur; uygulayıcı basamakları turkuaz ortak ATT/Tekniker kapsamındadır. Telefon simgesi bulunan iki temas noktası protokol UI'sında `☎ SKKM/ÇM` olarak gösterilir; bu rozet ilaç onayı anlamına gelmez.
- **Veri şeması v5:** Vaka kartları `CASES[]` içinde 37 olarak kalır; temel protokoller ayrı `PROTOCOLS[]` dizisindedir. Böylece Y-01 normal vaka gibi sayılmaz ve ileride başka temel protokoller aynı katmana eklenebilir.
- **V0.26 gerçek ekran stabilizasyonu:** V0.25 Pages artefaktı Chromium'da 360, 390, 768 ve 1280 px görünüm genişliklerinde 37 yetişkin vakanın tamamında render edildi. Yatay sayfa/algoritma/ilaç kartı taşması saptanmadı. Mobilde tek satırda kesilen uzun vaka başlıkları üç satıra kadar okunabilir hale getirildi; uzun kaynak şeritleri satır kırabilir yapıldı. Bölüm jump butonları artık sabit scroll-margin varsayımı yerine sticky başlığın gerçek yüksekliğini ölçerek hedefe kaydırır.
- **V0.25 tam kapsam yeniden audit:** 37 yetişkin vaka kartı, Y-02–Y-41 kod kapsamı, ilaç/sıvı özetleri, kaynak izleri, yapılandırılmış action/branch yetkileri ve responsive UI tekrar tarandı. Eski `21 yetişkin` audit metadatası 37 kart olarak düzeltildi.
- **Yeni yakalanan Y-29 eksiği:** Elektrik Yanıkları algoritmasındaki turuncu, telefon simgesiz “rabdomiyoliz riskine karşı erken ve yeterli Ringer Laktat sıvı tedavisi” artık ilaç/uygulama kartında da görünür. Resmî kutuda miktar, hız ve yol belirtilmediği için bunlar türetilmedi.
- **Yeni yakalanan Y-40 eksikleri:** KŞ 60–300 mg/dL kolundaki turuncu, telefon simgesiz IV sıvı tedavisi (SKB >100 mmHg hedefi) eklendi. Anahtar Noktalar sayfasındaki midazolam 1–2,5 mg IV, 3–5 dk'da bir hasta sakinleşinceye kadar bilgisi de eklendi; tablo SKKM/ÇM veya uygulayıcı renk kodlaması yapmadığından bu kart nötr “Yetki belirtilmemiş” olarak tutulur ve yetki çıkarımı yapılmaz.
- **Görünüm / saha güvenliği:** Yapılandırılmış algoritma adımlarında yalnız SKKM gerektiren basamaklara sarı `◆ SKKM/ÇM` rozeti eklendi; DIRECT adımlara yeni rozet eklenmedi. “Yalnız AABT” katmanı bağımsız kalır. Algoritma/branch/ilaç metin boyutları okunabilirlik için ölçülü artırıldı.
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
- **Kaynak sadakati düzeltmeleri:** Termal Yanık Ringer Laktat, Y-34 IV %0,9 NaCl/RL hidrasyon, Y-36 hipotansiyon %0,9 NaCl ve Y-37 hipotansiyon %0,9 NaCl basamakları ilaç/sıvı kartlarına eklendi. Tarihsel olarak Arı Sokması kartında Y-22 anafilaksi ilaçları gösterilmişti; V0.43'te Y-26 resmî “Isırma ve Sokmalar” kapsamına ayrılarak bu ilaç seti karttan kaldırıldı. Y-22 salbutamol kutusunda uygulama yolu yazmadığı için önceki NEB çıkarımı kaldırılarak `Şemaya göre` yapıldı.
- **V0.17 uygulayıcı audit paketi:** ROSC Y-12, Hipovolemik Şok Y-13, Kalp Yetmezliğine Bağlı Akut Akciğer Ödemi ve Kardiyojenik Şok Y-14, Ajite Hastaya Yaklaşım Y-15, Diyabetik Aciller Y-17, Nöbet/Konvülziyon Y-19, Alerjik Reaksiyon Y-21 ve Anafilaksi Y-22 ilaç/sıvı kutuları resmî PDF görüntülerinden doğrulandı ve turuncu kutular `Yalnız AABT` olarak işlendi.
- **Y-17 kapsam düzeltmesi:** Önceki “Hipoglisemi” kartı resmî “Diyabetik Aciller” kapsamına geri getirildi. Glukoz >300 mg/dL kolundaki %0,9 NaCl IV infüzyon ve şok/dehidratasyonda Hipovolemik Şok algoritmasına geçiş eklendi; resmî şemada belirtilmeyen sıvı hacmi/hızı türetilmedi.
- **V0.16 uygulayıcı audit paketi:** Astım Y-05, AKS Y-06, Bradikardi Y-07, Nabızlı Taşikardi Y-08 ve Kardiyak Arrest Y-09/Y-10/Y-11 ilaç kutuları resmî PDF sayfa görüntülerinden renk bazında doğrulandı; bu paketteki ilaç basamakları turuncu “Acil Tıp Teknikeri” kutusuyla eşleştiği için `Yalnız AABT` kısıtı veri modeline işlendi.
- **Y-08 kaynak sadakati düzeltmesi:** Nabızlı Taşikardi kartındaki eksik resmî ilaç basamakları (fentanil, magnezyum sülfat, adenozin, metoprolol, diltiazem ve kardiyoversiyon sonrası amiodaron 300 mg) eklendi; mevcut amiodaron 150 mg ve midazolam basamakları bağlama göre ayrıştırıldı.
- **V0.15 uygulayıcı yetki katmanı:** SKKM/ÇM onayı (`authority`) ile resmî kutu renginden okunan ATT/AABT uygulayıcı yetkisi (`practitionerAuthority`) birbirinden ayrıldı. V0.15.1'de arayüz sadeleştirildi: turkuaz “Acil Tıp Teknisyeni / Teknikeri” ve henüz doğrulanmamış basamaklar ilaç kartında ek rozet üretmez; yalnız resmî turuncu “Acil Tıp Teknikeri” kutusu doğrulandığında `Yalnız AABT` kısıtı gösterilir. KOAH Y-04 pilot kapsamı bu modele göre işlenmiştir.
- **V0.9.3 aşamasındaki 17 kartlık klinik audit:** 21.09.2026 tarihinde güncel Ek-2 kaynak setiyle başlık, doz, yol, tekrar, yetki, algoritma sırası ve kaynak izi yeniden kontrol edildi; yalnız doğrulanabilen değişiklikler işlendi.
- **Gri ilaç yetkisi:** SB-ASH-Y-07, Y-10/Y-11, Y-12 ve Y-19 sayfalarındaki SKKM/ÇM telefon ikonları resmî PDF görüntülerinden ayrıca denetlendi; o aşamadaki 17 yetişkin vakada ilaç kartlarında çözümlenmemiş gri yetki kalmadı.
- **Kaynak bütünlüğü düzeltmesi:** V0.9.3'te mevcut 17 kartın resmî PDF sayfa izleri yeniden kilitlendi; Taşikardi s.17, ROSC s.23, Diyabetik Aciller s.31, İnme/SVO s.32, Nöbet/Konvülziyon s.33 ve Travmalı Hastada Acil Olgu Yönetimi Y-38 s.67 düzeltildi. Suda Boğulma at-çek-uzat, Hipoglisemi 15 dk yeniden değerlendirme, İnme %94–98/30° ve Termal Yanık kısa nakil 500 mL basamakları resmî metne göre tamamlandı.
- **İlk yetişkin genişleme paketi:** V0.10'da resmî PDF'nin algoritma + anahtar nokta sayfaları doğrudan incelenerek KOAH (Y-04), Hipovolemik Şok (Y-13), Kalp Yetmezliğine Bağlı Akut Akciğer Ödemi ve Kardiyojenik Şok (Y-14) ve Bilinç Değişikliği (Y-16) eklendi. Astım Y-05 yeniden kontrol edilerek SpO₂ >%93 ve ilk/20 dk sonrası SKKM yetki ayrımı düzeltildi.
- **İkinci yetişkin genişleme paketi:** V0.11'de Ajite Hastaya Yaklaşım (Y-15), Vertigo (Y-20), Alerjik Reaksiyon (Y-21) ve Hipotermide Arrest Yönetimi (Y-25) resmî PDF sayfalarından eklendi; telefon/SKKM simgeleri ve dozlar sayfa görüntülerinden doğrulandı.
- **Üçüncü yetişkin genişleme paketi:** V0.12'de Elektrik Yanıkları (Y-29), Kimyasal Yanıklar (Y-30), Zehirlenmelere Genel Yaklaşım (Y-31) ve Yüksek Doz İlaç Alımı (Y-32) resmî PDF sayfalarından eklendi. Kaynakta doz veya uygulama yolu açık yazmayan tedaviler için ilaç kartında çıkarım yapılmadı.
- **Dördüncü yetişkin genişleme paketi:** V0.13'te Karbonmonoksit Zehirlenmesi (Y-33), Kalsiyum Kanal Blokerleri / Beta Blokerler ile Zehirlenme (Y-34), Kolinerjik Ajanlarla Zehirlenme (Y-35), Narkotik / Opioid Zehirlenmeleri (Y-36) ve Trisiklik Antidepresan Zehirlenmesi (Y-37) resmî PDF'nin algoritma ve anahtar nokta sayfalarından eklendi. Telefon/SKKM simgeleri, dozlar ve tekrar aralıkları görüntüden doğrulandı.
- **Beşinci yetişkin genişleme paketi:** V0.14'te Crush Sendromu (Y-39), Kafa Travmalı Hastaya Yaklaşım (Y-40) ve Start Triyaj (Y-41) resmî PDF'nin anahtar nokta + algoritma sayfalarından eklendi. Y-39'daki ilk ve SKKM/ÇM telefon simgeli sıvı basamakları ayrı tutuldu; Y-40 anahtar noktasındaki sedasyon dozu V0.14'te yetki simgesi gösterilmediği için yapılandırılmış karta dönüştürülmemişti; V0.25'te doz görünür kılındı ancak yetki çıkarımı yapılmadan nötr tutuldu; Y-41 START eşikleri birebir korundu.
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
