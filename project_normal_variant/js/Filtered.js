
Vue.component('filterblock', {
    data() {
        return {
            searchText: '',
            filtered: [],

        }
    },
    methods: {

    },
    template: `<form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter(searchText)">
                    <input type="text" class="search-field" v-model="searchText">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>`,
});