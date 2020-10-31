<template>
  <div>
    <Header ref="header"/>
    <Nav />

    <div id="app-content">
      <router-view />
    </div>

    <Footer />
    
  </div>
</template>

<script>
import Header from '@/components/app/Header';
import Nav from '@/components/app/Nav';
import Footer from '@/components/app/Footer';
export default {
  name: 'main-layout',
  data() {
    catalogBasket: []
  },
  components: {
    Header, Nav, Footer
  },
  methods: {
    addToBasket(item) {
      console.log(item);  
      this.catalogBasket.push(1);
      console.log(this.catalogBasket);
      
    },
  },
}
</script>
