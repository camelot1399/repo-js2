Vue.component('imageSlide', {
    data() {
        return {
            cartId: this.$route.query.id,
            baseUrl: 'https://raw.githubusercontent.com/camelot1399/static/master/catalog.json',
            catalogItems: [],
            currentItem: [],
            itemName: '',
            itemImg: '',
            itemPrice: '',
        }
    },
    methods: {

    },
    mounted() {
        this.$root.getJson(this.baseUrl)
        .then(data => {
            for(let el of data){
                this.catalogItems.push(el);
            }
            this.currentItem.push(this.catalogItems.find(el => el.id == this.cartId));

            this.currentItem.forEach(el => {
                console.log(el.id);
                this.itemName = el.productName;
                this.itemImg = el.productImg;
                this.itemPrice = el.productPrice;
            })
        });

        

    },
    template: `<section class="imageSlide">
       
                <div class="imageSlide__box">
                    <div class="imageSlide__layer">
                        <img :src="this.itemImg" alt="">
                    </div>
                    <div class="imageSlide__arrow imageSlide__arrow_left"><i class="fas fa-angle-left" aria-hidden="true"></i></div>
                    <div class="imageSlide__arrow imageSlide__arrow_right"><i class="fas fa-angle-right" aria-hidden="true"></i></div>
                </div>
                
                <section class="productDescription center">
                    <div class="productDescription__box productDescription__box_center">
                        <span class="productDescription__box_span1">WOMEN COLLECTION</span>
                        <h1 class="productDescription__box_h1">{{this.itemName}}</h1>
                        <span class="productDescription__star">
                            <img src="src/assets/imgs/singlePage/star.png" alt="star">
                        </span>
                        <p class="productDescription__box_p">Compellingly actualize fully researched processes before proactive outsourcing. Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize parallel core competencies rather than exceptional portals. </p>

                        <div class="productDescription__info">
                            <div class="productDescription__item">MATERIAL: <span>COTTON</span></div>
                            <div class="productDescription__item">DESIGNER: <span>BINBURHAN</span></div>
                        </div>

                        <div class="productDescription__price">$561</div>
                        
                        <hr class="productDescription__box_hr">

                        <form action="#" id="productDescription__form">
                            <div class="productDescription__form_box">
                                <div class="productDescription__form_box_item">
                                    <div class="productDescription__form_box_label">CHOOSE COLOR</div>
                                    <div class="productDescription__form_box_browse open_dropDown">
                                        Red <i class="fas fa-caret-down" aria-hidden="true"></i> 

                                        <div class="catalog__filter_dropdown">
                                            <i class="fas fa-sort-up catalog__filter_dropdown__sortUp" aria-hidden="true"></i>
                                            <ul class="catalog__filter_dropdown_ul">
                                                <li class="catalog__filter_dropdown_li">RED</li>
                                                <li class="catalog__filter_dropdown_li">GREEN</li>
                                                <li class="catalog__filter_dropdown_li">BLACK</li>
                                                <li class="catalog__filter_dropdown_li">WHITE</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div class="productDescription__form_box_item">
                                    <div class="productDescription__form_box_label">CHOOSE SIZE</div>
                                    <div class="productDescription__form_box_browse open_dropDown">
                                        XXL <i class="fas fa-caret-down" aria-hidden="true"></i> 

                                        <div class="catalog__filter_dropdown">
                                            <i class="fas fa-sort-up catalog__filter_dropdown__sortUp" aria-hidden="true"></i>
                                            <ul class="catalog__filter_dropdown_ul">
                                                <li class="catalog__filter_dropdown_li">s</li>
                                                <li class="catalog__filter_dropdown_li">xs</li>
                                                <li class="catalog__filter_dropdown_li">l</li>
                                                <li class="catalog__filter_dropdown_li">xl</li>
                                                <li class="catalog__filter_dropdown_li">m</li>
                                                <li class="catalog__filter_dropdown_li">xm</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div class="productDescription__form_box_item">
                                    <div class="productDescription__form_box_label">QUANTITY</div>
                                    <input type="number" class="productDescription__form_box_browse" value="2" min="1">
                                </div>

                                <div class="productDescription__form_box_item">
                                    <div class="productDescription__form_box_label">ваввыааы</div>

                                    <div class="productDescription__form_box_browse open_dropDown btn__gray">
                                        XXL <i class="fas fa-caret-down" aria-hidden="true"></i> 

                                        <div class="catalog__filter_dropdown">
                                            <i class="fas fa-sort-up catalog__filter_dropdown__sortUp" aria-hidden="true"></i>
                                            <ul class="catalog__filter_dropdown_ul">
                                                <li class="catalog__filter_dropdown_li">s</li>
                                                <li class="catalog__filter_dropdown_li">xs</li>
                                                <li class="catalog__filter_dropdown_li">l</li>
                                                <li class="catalog__filter_dropdown_li">xl</li>
                                                <li class="catalog__filter_dropdown_li">m</li>
                                                <li class="catalog__filter_dropdown_li">xm</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <button id="productDescription__form_box_btn">Add to Cart</button>
                        </form>
                    </div>
                </section>

            </section>`
})