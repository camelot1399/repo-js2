
Vue.component('filterblock', {
    data() {
        return {
            searchText: '',
            filtered: [],

        }
    },
    methods: {

    },
    template: `<form action="#" class="search-form" @submit.prevent="">
                    <input type="text" class="search-field" v-model="searchText">
                    <button class="btn-search" type="submit" @click="$root.$refs.products.filter(searchText)">
                        <i class="fas fa-search"></i>
                    </button>
                </form>`,
});