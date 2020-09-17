// Vue.component('breadcrumb', {
//   template: `<div>
//                   <div class="breadcrumb"> 
//                   <div class="breadcrumb__box center">
//                       <h1 class="breadcrumb__box_h1">New Arrivals</h1>
//                       <nav>
//                           <ul class="breadcrumb__box_nav"> 
//                               <li class="breadcrumb__list"><a href="index.html" class="breadcrumb__box_nav_item">Home </a></li>
//                               <li class="breadcrumb__list"><a href="catalog.html" class="breadcrumb__box_nav_item">Men </a></li>
//                               <li class="breadcrumb__list"><a href="#" class="breadcrumb__box_nav_item breadcrumb__box_nav_item_active">New Arrivals</a></li>
//                           </ul>
//                       </nav>
//                   </div>
//               </div>
//               </div>`
// });

const Breadcrumb = {
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

const catalogBox = {
  template: `<div><catalogbox ref="catalogbox"></catalogbox></div>`
}

const routes = [
  {
    path: '',
    components: {
      breadcrumb: breadcrumb,
      promo: promo
    }
  },
  { path: '/catalog', 
      components: {
      catalogBox: catalogBox,
      Breadcrumb: Breadcrumb
    } 
  }
]
  
const router = new VueRouter({
  routes
})