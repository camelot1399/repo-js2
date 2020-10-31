<template>
  <div>
    <section id="catalog" class="featuredItems center">
      
        <div class="featuredItems_header">
            <h2 class="featuredItems_header_h2">Fetured Items</h2> 
            <span class="featuredItems_header_info">Shop for items based on what we featured in this week</span>
        </div>        
        
        <catalogList />

        <div class="featuredItems_header"> 
           <router-link
            to="/catalog"
           > 
             <a href="/catalog" class="btnMyAccount">Browse All Product
               <i class="fas fa-long-arrow-alt-right mleft_icon"></i>
            </a> 
           </router-link>
        </div>
        
    </section>
  </div>
</template>

<script>
import Breadcrumb from '@/components/app/Breadcrumb';
import catalogList from '@/components/app/CatalogList';
export default {
  name: 'featuredItems',
  components: {
    catalogList
  }
}
</script>
