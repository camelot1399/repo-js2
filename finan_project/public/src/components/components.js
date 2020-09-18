const breadcrumb = {
    template: `<div>
                <div class="breadcrumb"> 
                    <div class="breadcrumb__box center">
                        <h1 class="breadcrumb__box_h1">New Arrivals</h1>
                        <nav>
                            <ul class="breadcrumb__box_nav"> 
                                <li class="breadcrumb__list"><a href="index.html" class="breadcrumb__box_nav_item">Home </a></li>
                                <li class="breadcrumb__list"><a href="catalog.html" class="breadcrumb__box_nav_item">Men </a></li>
                                <li class="breadcrumb__list"><a href="#" class="breadcrumb__box_nav_item breadcrumb__box_nav_item_active">New Arrivals</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                </div>`
}

const promo = {
    template: `
    <section class="promo center">
        <div class="promo__content ">
            <h1>THE BRAND</h1>
            <h2>OF LUXERIOUS <span class="h2_fashion">FASHION</span></h2> 
        </div>
    </section>`
}

const promo2 = {
    template: `
    <section class="promo2 center">
        <div class="promo2__item">
            <a href="#" class="promo2__link"> 
                <img class="promo2__img" src="src/assets/imgs/promo2_1.png" alt="">
                <div class="promo2__label">
                    <div>hOT dEAL</div>
                    <div class="promo2__labelRed">FOR MEN</div>
                </div>
            </a>
        </div>
        <div class="promo2__item ">
            <a href="#" class="promo2__link"> 
                <img class="promo2__img" src="src/assets/imgs/promo2_3.png" alt="">
                <div class="promo2__label">
                    <div>LUXIROUS &amp; trendy</div>
                    <div class="promo2__labelRed">ACCESORIES</div>
                </div>
            </a>
        </div>
        <div class="promo2__item">
            <a href="#" class="promo2__link"> 
                <img class="promo2__img" src="src/assets/imgs/promo2_2.png" alt="">
                <div class="promo2__label">
                    <div>30% offer</div>
                    <div class="promo2__labelRed">women</div>
                </div>
            </a>
        </div>
        <div class="promo2__item">
            <a href="#" class="promo2__link"> 
                <img class="promo2__img" src="src/assets/imgs/promo2_4.png" alt="">
                <div class="promo2__label">
                    <div>new arrivals</div>
                    <div class="promo2__labelRed">FOR kids</div>
                </div>
            </a>
        </div>
    </section>`
}

const offer30 = {
    template: `
    <section class="offer30 center">
        <article class="offer30__left">
            <div class="offer30__left_bg1"></div>
            <div class="offer30__left_bg2"></div>
            <h2 class="offer30__left_h2">30% <span class="offer30__left_offer">OFFER</span> <br><span class="offer30__left_forWomen">FOR WOMEN</span></h2>
        </article>
        <div class="offer30__right">
           
            <div class="offer30__right_list">
               
                <article class="offer30__right_item">
                    <div class="offer30__right_item__left">
                        <img src="src/assets/imgs/offer30/car.png" alt="">
                    </div>
                    <div class="offer30__right_item__right">
                        <div class="offer30__right_item__right_label">Free Delivery</div>
                         <div class="offer30__right_item__right_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                    </div>
                </article>
                
                <article class="offer30__right_item">
                    <div class="offer30__right_item__left">
                        <img src="src/assets/imgs/offer30/sale.png" alt="">
                    </div>
                    <div class="offer30__right_item__right">
                        <div class="offer30__right_item__right_label">Sales &amp; discounts</div>
                         <div class="offer30__right_item__right_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                    </div>
                </article>
                
                <article class="offer30__right_item">
                    <div class="offer30__right_item__left">
                        <img src="src/assets/imgs/offer30/corona.png" alt="">
                    </div>
                    <div class="offer30__right_item__right">
                        <div class="offer30__right_item__right_label">Quality assurance</div>
                         <div class="offer30__right_item__right_text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                    </div>
                </article>
                   
            </div>
            
        </div>
    </section>`
}

const subscribe = {
    template: `<section class="subscribe center">
       
    <div class="subscribe_bg"></div>
    <div class="subscribe_bg2"></div>
    
     <article class="subscribe__left">
         <div class="subscribe__slider">
             <div class="s__slider_icon">
                 <img src="src/assets/imgs/subscribe/left__icon.png" alt="">
             </div>
             
             <div class="s__slider_info">
                 <div class="s__slider_info_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</div>
                 <div class="s__slider_info_podpis">
                     <span class="s__slider_info_podpis_red">Bin Burhan</span>
                     <div>Dhaka, Bd</div>
                 </div>
                  <div class="s__slider_info_spots">
                      <div class="spots__list">
                          <div class="spots__item"></div>
                          <div class="spots__item"></div>
                          <div class="spots__item"></div>
                      </div>
                  </div>
             </div>
         </div>
     </article>
     
     <section class="subscribe__right">
         <h3 class="subscribe__right_h3">Subscribe <br> <span class="subscribe__right_h3_text">FOR OUR NEWLETTER AND PROMOTION</span></h3>
         
         <form class="subscribe__form">
             <input class="subscribe__form_input input_cfg" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter Your Email" required="">
             <button class="subscribe_form_btn">Subscribe</button>
         </form>
     </section>
     
 </section>`
}

const catalogbox = {
    template: `<catalogbox ref="catalogbox"></catalogbox>`
}

const catalogCart = {
    template: `<catalogCart ref="catalogCart"></catalogCart>`
}

const offer3list = {
    template: `<section class="offer3list">
    <div class="offer3list__center center">
       
        <article class="offer3list__center_item">
                <div class="offer3list__center_item__left">
                    <img src="src/assets/imgs/offer30/car.png" alt="">
                </div>
                <div class="offer3list__center_item__label">Free Delivery</div>
                <div class="offer3list__center_item__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
            </article>
            
        <article class="offer3list__center_item">
                <div class="offer3list__center_item__left">
                    <img src="src/assets/imgs/offer30/sale.png" alt="">
                </div>
                <div class="offer3list__center_item__label">Sales &amp; discounts</div>
                <div class="offer3list__center_item__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
            </article>
            
        <article class="offer3list__center_item">
                <div class="offer3list__center_item__left">
                    <img src="src/assets/imgs/offer30/corona.png" alt="">
                </div>
                <div class="offer3list__center_item__label">Quality assurance</div>
                <div class="offer3list__center_item__text">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
            </article>
        
    </div>
</section>`
}

const catalogBox = {
    template: `<div><catalogbox ref="catalogbox"></catalogbox></div>`
  }

const userInfo = {
    template: `<section class="userInfo center">
    <div class="userInfo__shippingAdress">
        <h4 class="userInfo__h4">Shipping Adress</h4>
        
        <form action="#" id="userInfo__shippingAdress_form" class="userInfo__form">
            <div id="catalog__rectangle_filter_shippingAddress" class="userInfo__form_item">
                <div class="userInfo__shippingAdress_form_text">Bangladesh <i class="fas fa-caret-down" aria-hidden="true"></i> </div>

                <div id="catalog__filter_browse" class="catalog__filter_dropdown">
                    <ul class="catalog__filter_dropdown_ul">
                        <li class="catalog__filter_dropdown_li">1</li>
                        <li class="catalog__filter_dropdown_li">2</li>
                        <li class="catalog__filter_dropdown_li">3</li>
                    </ul>
                </div>

            </div>
            <input type="text" placeholder="State" class="userInfo__form_item">
            <input type="text" placeholder="Postcode / Zip" class="userInfo__form_item">
            <input type="submit" id="userInfo__shippingAdress_submit" class="userInfo__form_item_btn" value="get a quote">
        </form>
         
    </div>
    <div class="userInfo__couponDiscount">
         <h4 class="userInfo__h4">coupon  discount</h4>
         <p class="userInfo__p">Enter your coupon code if you have one</p>
         
        <form action="#" id="userInfo__couponDiscount_form" class="userInfo__form">
            <input type="text" placeholder="Postcode / Zip" class="userInfo__form_item">
            <input type="submit" id="userInfo__couponDiscount_submit" class="userInfo__form_item_btn" value="Apply coupon">
        </form>
         
    </div>
    <div class="userInfo__grandTotal">
        <div class="userInfo__grandTotal_box">
            <div class="userInfo__grandTotal_box_item1">sub total <span>$900</span></div>
            <div class="userInfo__grandTotal_box_item2">GRAND TOTAL <span class="userInfo__grandTotal_box_item2_price">$900</span></div>
        </div>
        
        <div class="userInfo__grandTotal_box2">
            <button class="userInfo__grandTotal_btn">proceed to checkout</button>
        </div>
        
        
    </div>
</section>`
}

const imageSlide = {
    template: `<imageSlide ref="imageSlide"></imageSlide>`
}