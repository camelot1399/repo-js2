<template>
  <div class="home">
    <Promo />
    
    <Promo2 />

    <FeaturedItems />

    <Offer30 />

    <Subscribe />
  </div>
</template>

<script>
// @ is an alias to /src
import Promo from '@/components/app/Promo';
import Promo2 from '@/components/app/Promo2';
import FeaturedItems from '@/components/app/FeaturedItems';
import Offer30 from '@/components/app/Offer30';
import Subscribe from '@/components/app/Subscribe';

export default {
  name: 'Home',
  components: {
    Promo, Promo2, FeaturedItems, Offer30, Subscribe 
  }
}
</script>
