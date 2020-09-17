Vue.component('filterCatalog', {
    data() {
        return {
            inputText: '',
        }
    },
    methods: {
        
    },
    template: `
                <div>
                    <form action="#" class="header__form" @submit.prevent="">
                            <div id="catalog__rectangle_filter_browse" class="browse catalog__rectangle_filter_item">Browse <i class="fas fa-caret-down"></i> 
                                <div id="catalog__filter_browse" class="catalog__filter_dropdown catalog__filter_dropdown_menuTop">
                                    <i class="fas fa-sort-up catalog__filter_dropdown__sortUp"></i>
                                    <div class="catalog__filter_dropdown_header">Women</div>
                                    <ul class="catalog__filter_dropdown_ul">
                                        <li class="catalog__filter_dropdown_li">Dresses</li>
                                        <li class="catalog__filter_dropdown_li">Tops</li>
                                        <li class="catalog__filter_dropdown_li">Sweaters/Knits</li>
                                        <li class="catalog__filter_dropdown_li">Jackets/Coats</li>
                                        <li class="catalog__filter_dropdown_li">Blazers</li>
                                        <li class="catalog__filter_dropdown_li">Denim</li>
                                        <li class="catalog__filter_dropdown_li">Leggings/Pants</li>
                                        <li class="catalog__filter_dropdown_li">Skirts/Shorts</li>
                                        <li class="catalog__filter_dropdown_li">Accessories </li>
                                        <li class="catalog__filter_dropdown_li">Bags/Purses</li>
                                        <li class="catalog__filter_dropdown_li">Swimwear/Underwear</li>
                                        <li class="catalog__filter_dropdown_li">Nightwear</li>
                                        <li class="catalog__filter_dropdown_li">Shoes</li>
                                        <li class="catalog__filter_dropdown_li">Beauty</li>
                                    </ul>

                                    <div class="catalog__filter_dropdown_header">Men</div>
                                    <ul class="catalog__filter_dropdown_ul">
                                        <li class="catalog__filter_dropdown_li">Shirts/Polos</li> 
                                        <li class="catalog__filter_dropdown_li">Sweaters</li> 
                                        <li class="catalog__filter_dropdown_li">Sweatshirts/Hoodies</li> 
                                        <li class="catalog__filter_dropdown_li">Blazers</li> 
                                        <li class="catalog__filter_dropdown_li">Jackets/vests</li> 
                                        <li class="catalog__filter_dropdown_li">Tees/Tank tops</li> 
                                    </ul>
                                </div>
                            </div>
                            <input type="text" placeholder="Search for Item..." class="form__input input_cfg" v-model="inputText">
                            <button class="btn_search">
                                <i class="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                `
});