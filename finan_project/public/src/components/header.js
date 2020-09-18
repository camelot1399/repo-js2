Vue.component('headerComponent', {
    method: {
        addProduct(product) {
            console.log(product);
        },
    },
    template: `<div>
                <header class="header center">
                    <div class="header__left">
                    <div class="logo"> 
                        <a href="/" class="logo__link">
                            <img src="../src/assets/imgs/logo.png" alt="BRAND" class="logo__img">BRAN 
                            <span class="logo__D">D</span> 
                        </a>
                    </div>
                    <filterCatalog ref="filterCatalog"></filterCatalog>
                </div>
                <div class="header__right">
                    <basket ref="basket"></basket>
                    
                    <a href="#" class="btnMyAccount">My Account
                    <i class="fas fa-sort-down mleft_icon"></i>
                    </a> 
                </div>
            </header>
    </div>`
});