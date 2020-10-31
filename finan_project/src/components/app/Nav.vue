<template>
  <div>
    <div class="nav center">
      <ul class="menu">

          <router-link 
            v-for="link in links"
            :key="link.title"
            tag="li"
            active-class="active"
            :to="link.url"
            exact
            class="menu__item"
            :exact="link.exact"
          >
            <a href="#" class="menu__link" :alt="link.title">{{link.title}}</a>
            <div class="drop" :class="link.class">
                  <div class="drop__flex">
                      <div class="drop__header">women</div>
                      <div class="drop__list">
                          <ul class="drop__ul">
                              <li class="drop__li"> <a href="#" class="drop__link">Dresses</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Tops</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Sweaters/Knits</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Jackets/Coats</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Blazers</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Denim</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Leggings/Pants</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Skirts/Shorts</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Accessories </a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Bags/Purses</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Swimwear/Underwear</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Nightwear</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Shoes</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Beauty</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="drop__flex">
                      <div class="drop__header">women</div>
                      <div class="drop__list">
                          <ul class="drop__ul">
                              <li class="drop__li"> <a href="#" class="drop__link">Dresses</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Tops</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Sweaters/Knits</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Jackets/Coats</a></li>
                          </ul>
                      </div>

                      <div class="drop__header">women</div>
                      <div class="drop__list">
                          <ul class="drop__ul">
                              <li class="drop__li"> <a href="#" class="drop__link">Dresses</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Tops</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Sweaters/Knits</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Jackets/Coats</a></li>
                          </ul>
                      </div>
                  </div>

                  <div class="drop__flex">
                      <div class="drop__header">women</div>
                      <div class="drop__list">
                          <ul class="drop__ul">
                              <li class="drop__li"> <a href="#" class="drop__link">Dresses</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Tops</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Sweaters/Knits</a></li>
                              <li class="drop__li"> <a href="#" class="drop__link">Jackets/Coats</a></li>
                          </ul>
                      </div>
                      <a  href="#" class="drop__linkImg">
                          <span class="drop__linkImg_text">Super 
                              sale!</span>

                          <img src="../../assets/imgs/super_sale.png" alt="super sale">
                      </a>
                  </div>
              </div>
          </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: () => ({
    links: [
      {title: 'Home', url: '/', exact: true},
      {title: 'Man', url: '/catalog'},
      {title: 'Kids', url: '/catalog'},
      {title: 'Accoseriese', url: '/catalog'},
      {title: 'Featured', url: '/catalog', class: 'drop__last'},
      {title: 'Hot Deals', url: '/catalog', class: 'drop__last'}
    ],
  }),
}
</script>
