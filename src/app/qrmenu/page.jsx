import React from 'react'

const page = () => {
  return (
        <>
        <div className='d-flex align-items-center justify-content-center mt-5'>
        <img src="img/logo/logo.png" style={{width: "300px"}} alt="" />
        </div>
     <section id="menu" class="restaurant-menu menu section-padding">
     <div class="container">
       <div class="row">
         <div class="col-md-12 text-center">
           <div class="section-subtitle">
             <span>Restoran Menüsü</span>
           </div>
           <div class="section-title">Restoran Menüsü</div>
         </div>
       </div>
       <div class="row">
         <div class="col-md-12">
           <div class="row">
             <div class="tabs-icon col-md-10 offset-md-1 text-center">
               <div class="owl-carousel owl-theme">
                 <div id="tab-1" class="active item">
                   <h6>Çorbalar</h6>
                 </div>
                 <div id="tab-2" class="item">
                   <h6>Kahvaltı</h6>
                 </div>
                 <div id="tab-3" class="item">
                   <h6>Atıştırmalıklar</h6>
                 </div>
                 <div id="tab-4" class="item">
                   <h6>Salatalar</h6>
                 </div>
                 <div id="tab-5" class="item">
                   <h6>Sıcaklar</h6>
                 </div>
                 <div id="tab-6" class="item">
                   <h6>Pizzalar</h6>
                 </div>
                 <div id="tab-7" class="item">
                   <h6>Burgerler</h6>
                 </div>
                 <div id="tab-8" class="item">
                   <h6>Beyaz Etler</h6>
                 </div>
                 <div id="tab-9" class="item">
                   <h6>Kırmızı Etler</h6>
                 </div>
                 <div id="tab-10" class="item">
                   <h6>Balıklar</h6>
                 </div>
                 <div id="tab-11" class="item">
                   <h6>Tatlılar</h6>
                 </div>
                 <div id="tab-12" class="item">
                   <h6>Meşrubatlar</h6>
                 </div>
                 <div id="tab-13" class="item">
                   <h6>Sıcak İçecekler</h6>
                 </div>
                 <div id="tab-14" class="item">
                   <h6>Soğuk Kahveler</h6>
                 </div>
              
               </div>
             </div>
             <div class="restaurant-menu-content col-md-12">
   
               {/* <!-- Çorbalar --> */}
               <div id="tab-1-content" class="cont active">
                 <div class="menu-info">
                   <h5>Günün Çorbası <span class="price">75 TL</span></h5>
                 </div>
               </div>
   
               {/* <!-- Kahvaltı --> */}
               <div id="tab-2-content" class="cont">
                 <div class="menu-info">
                   <h5>Tabak Kahvaltı <span class="price">320 TL</span></h5>
                   <p>2 çeşit peynir, 2 çeşit zeytin, yeşillik söğüş tabağı, salam, 1 çeşit reçel, bal, kaymak, çikolatalı fındık kreması, haşlanmış yumurta,  börek</p>
                 </div>
                 <div class="menu-info">
                   <h5>Serpme Kahvaltı <span class="price">900 TL</span></h5>
                   <p>4 çeşit peynir, 3 çeşit zeytin, yeşillik söğüş tabağı, şarküteri tabağı, 2 çeşit reçel, bal, kaymak,  acuka, çikolatalı fındık kreması, kuru yemiş, menemen, sucuk tava, patates kızartması, peynirli börek</p>
                 </div>
                 <div class="menu-info">
                   <h5>Açık Büfe Kahvaltı <span class="price">400 TL</span></h5>
                 </div>
               </div>
   
               {/* <!-- Atıştırmalıklar --> */}
               <div id="tab-3-content" class="cont">
                 <div class="menu-info">
                   <h5>Kaşarlı Tost <span class="price">160 TL</span></h5>
                   <p>Yeşillik ve Patates kızartması ile servis edilir</p>
                 </div>
                 <div class="menu-info">
                   <h5>Karışık Tost <span class="price">180 TL</span></h5>
                   <p>Yeşillik ve Patates kızartması ile servis edilir</p>
                 </div>
                 <div class="menu-info">
                   <h5>Club Sandviç <span class="price">160 TL</span></h5>
                   <p>Yeşillik ve Patates kızartması ile servis edilir</p>
                 </div>
                 <div class="menu-info">
                   <h5>Çıtır Sepeti <span class="price">180 TL</span></h5>
                   <p>Soğan Halkası, Sosis, Mozzarella Stick, Parmak Patates</p>
                 </div>
                 <div class="menu-info">
                   <h5>Patates Tava <span class="price">100 TL</span></h5>
                 </div>
               </div>
   
               {/* <!-- Salatalar --> */}
               <div id="tab-4-content" class="cont">
                 <div class="menu-info">
                   <h5>Çoban Salata <span class="price">150 TL</span></h5>
                   <p>Domates, Salatalık, Biber, Maydanoz, Soğan</p>
                 </div>
                 <div class="menu-info">
                   <h5>Yeşil Salata <span class="price">170 TL</span></h5>
                   <p>Akdeniz yeşillikleri</p>
                 </div>
                 <div class="menu-info">
                   <h5>Sezar Salata <span class="price">250 TL</span></h5>
                   <p>Ice berg marul, Tavuk göğüs, Çeri domates, Parmesan peyniri, Kroton ekmek ile servis edilir</p>
                 </div>
                 <div class="menu-info">
                   <h5>Ilık Dana Bonfile Salatası <span class="price">310 TL</span></h5>
                   <p>Izgara bonfile parçaları, Yeşillik, Çeri domates, Salatalık, Köz kapya biber, Baby mısır, Parmesan peyniri</p>
                 </div>
                 <div class="menu-info">
                   <h5>Küp Pancarlı Buğday Salata <span class="price">230 TL</span></h5>
                   <p>Buğday, pancar, yeşillik, köz biber, peynir küpleri, mısır,Soya filiz</p>
                 </div>
               </div>
   
               {/* <!-- Sıcaklar --> */}
               <div id="tab-5-content" class="cont">
                 <div class="menu-info">
                   <h5>Fettucini Alfredo <span class="price">310 TL</span></h5>
                   <p>Krema, mantar, tavuk parçaları, parmesan peyniri</p>
                 </div>
                 <div class="menu-info">
                   <h5>Linguine Al Pesto <span class="price">280 TL</span></h5>
                   <p>Taze pesto sos, çeri domates, slice parmesan</p>
                 </div>
                 <div class="menu-info">
                   <h5>Penne Arabiata <span class="price">250 TL</span></h5>
                   <p>File zeytin, acı sos</p>
                 </div>
                 <div class="menu-info">
                   <h5>Linguine Di Mare <span class="price">310 TL</span></h5>
                   <p>Domates sos, deniz mahsulleri</p>
                 </div>
               </div>
   
               {/* <!-- Pizzalar --> */}
               <div id="tab-6-content" class="cont">
                 <div class="menu-info">
                   <h5>Margarita Pizza <span class="price">290 TL</span></h5>
                   <p>Mozarella, Domates, Fesleğen, Zeytinyağı</p>
                 </div>
                 <div class="menu-info">
                   <h5>Di Mare Pizza <span class="price">350 TL</span></h5>
                   <p>Mozarella, Deniz mahsulleri, Roka yaprakları</p>
                 </div>
                 <div class="menu-info">
                   <h5>Diavola Pizza <span class="price">320 TL</span></h5>
                   <p>Mozarella, Izgara sucuk, File zeytin, Cheddar sos</p>
                 </div>
                 <div class="menu-info">
                   <h5>Special Pizza <span class="price">320 TL</span></h5>
                   <p>Mozarella , Sucuk, Salam, Sosis, Mısır, Mantar, Kapya biber, File zeytin, Roka yaprakları</p>
                 </div>
               </div>
   
               {/* <!-- Burgerler --> */}
               <div id="tab-7-content" class="cont">
                 <div class="menu-info">
                   <h5>Sahi Burger <span class="price">330 TL</span></h5>
                   <p>Burger köftesi, yeşillik, turşu, domates, patates kızartması</p>
                 </div>
                 <div class="menu-info">
                   <h5>Sahi Chees Burger <span class="price">350 TL</span></h5>
                   <p>Burger sos, cheddar peyniri, yeşillik</p>
                 </div>
                 <div class="menu-info">
                   <h5>Çıtır Tavuk Burger <span class="price">290 TL</span></h5>
                   <p>Çıtır tavuk, mayonez, burger sos, karamelize soğan</p>
                 </div>
               </div>
   
               {/* <!-- Beyaz Etler --> */}
               <div id="tab-8-content" class="cont">
                 <div class="menu-info">
                   <h5>Mantar Soslu Körpe Piliç <span class="price">350 TL</span></h5>
                   <p>Baby sebze ve fırın patates ile</p>
                 </div>
                 <div class="menu-info">
                   <h5>Tavuk Schnitzel <span class="price">350 TL</span></h5>
                   <p>Parmak patates, roka, guacamole, dip salsa</p>
                 </div>
                 <div class="menu-info">
                   <h5>Izgara Piliç <span class="price">350 TL</span></h5>
                   <p>Baby sebze ve fırın patates ile</p>
                 </div>
                 <div class="menu-info">
                   <h5>Köri Soslu Tavuk <span class="price">350 TL</span></h5>
                   <p>Patates kızartması ile</p>
                 </div>
               </div>
   
               {/* <!-- Kırmızı Etler --> */}
               <div id="tab-9-content" class="cont">
                 <div class="menu-info">
                   <h5>Islama Köfte <span class="price">280 TL</span></h5>
                   <p>Izgara biber ve domates eşliğinde</p>
                 </div>
                 <div class="menu-info">
                   <h5>Izgara Bonfile <span class="price">520 TL</span></h5>
                   <p>Baby sebze, Patates tart demi glace sos</p>
                 </div>
                 <div class="menu-info">
                   <h5>Izgara Antirikot <span class="price">490 TL</span></h5>
                   <p>Baby sebze, Patates tart</p>
                 </div>
               </div>
   
               {/* <!-- Balıklar --> */}
               <div id="tab-10-content" class="cont">
                 <div class="menu-info">
                   <h5>Somon <span class="price">520 TL</span></h5>
                   <p>Fırın patates, baby sebze, narenciye sos</p>
                 </div>
                 <div class="menu-info">
                   <h5>Çipura Izgara <span class="price">490 TL</span></h5>
                   <p>Fırın patates, baby sebze, narenciye sos</p>
                 </div>
               </div>
   
               {/* <!-- Tatlılar --> */}
               <div id="tab-11-content" class="cont">
                 <div class="menu-info">
                   <h5>Fıstık Rüyası <span class="price">170 TL</span></h5>
                   <p>Kakaolu Kek arası bütün fıstıklı krema</p>
                 </div>
                 <div class="menu-info">
                   <h5>Tramisu <span class="price">170 TL</span></h5>
                   <p>Kahve ile ıslatılmış kek arasında özel krema</p>
                 </div>
                 <div class="menu-info">
                   <h5>Muzlu Mono Pasta <span class="price">170 TL</span></h5>
                   <p>Muz ve beyaz çikolata ile hafif bir lezzet</p>
                 </div>
                 <div class="menu-info">
                   <h5>Çikolatalı Sufle <span class="price">170 TL</span></h5>
                   <p>Vanilyalı dondurma ile</p>
                 </div>
               </div>
   
              {/* <!-- Meşrubatlar --> */}
               <div id="tab-12-content" class="cont">
                 <div class="menu-info">
                   <h5>Su 500 ml <span class="price">20 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Su 1.5 lt <span class="price">40 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Kola 330ml <span class="price">70 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Kola Zero 330ml <span class="price">70 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Fanta 330ml <span class="price">70 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Sprite 330ml <span class="price">70 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>İcetea  330 ml <span class="price">70 TL</span></h5>
                   <p>Şeftali, Limon</p>
                 </div>
                 <div class="menu-info">
                   <h5>Meyve Suyu  330 ml <span class="price">70 TL</span></h5>
                   <p>Şeftali, Portakal, Vişne</p>
   
                 </div>
                 <div class="menu-info">
                   <h5>Taze Sıkılmış Portakal Suyu <span class="price">110 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Ev yapımı Limonata <span class="price">110 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Ayran <span class="price">50 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Sade Soda <span class="price">40 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Churcill <span class="price">50 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Meyveli Soda <span class="price">50 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Frozen  <span class="price">120 TL</span></h5>
                   <p>Çilek, Karpuz, Limon-Nane</p>
   
                 </div>
                 <div class="menu-info">
                   <h5>Milkshake  <span class="price">120 TL</span></h5>
                   <p>Çilekli, Muzlu, Oreolu</p>
                 </div>
               </div>
   
               {/* <!-- Sıcak İçecekler --> */}
               <div id="tab-13-content" class="cont">
                 <div class="menu-info">
                   <h5>Türk Kahvesi <span class="price">70 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Çay fincan/bardak <span class="price">30 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Filtre Kahve <span class="price">90 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Americano <span class="price">110 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Espresso <span class="price">90 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Latte  <span class="price">110 TL</span></h5>
                   <p>Karamel, Çikolata, Vanilya, Beyaz Çikolata</p>
                 </div>
                 <div class="menu-info">
                   <h5>Mocha  <span class="price">110 TL</span></h5>
                   <p>Beyaz Çikolata, Çikolata</p>
                 </div>
                 <div class="menu-info">
                   <h5>Cappuccino <span class="price">110 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Sıcak Çikolata <span class="price">90 TL</span></h5>
                 </div>
                 <div class="menu-info">
                   <h5>Sahlep <span class="price">90 TL</span></h5>
                 </div>
               </div>
   
               {/* <!-- Soğuk Kahveler --> */}
               <div id="tab-14-content" class="cont">
                 <div class="menu-info">
                   <h5>Ice Latte  <span class="price">110 TL</span></h5>
                   <p>Karamel, Çikolata, Vanilya, Beyaz Çikolata, Fındık</p>
                 </div>
                 <div class="menu-info">
                   <h5>Ice Mocha  <span class="price">110 TL</span></h5>
                   <p>Beyaz Çikolata, Çikolata</p>
                 </div>
               </div>
   
   
   
             </div>
           </div>
         </div>
       </div>
     </div>
   </section></>
  )
}

export default page