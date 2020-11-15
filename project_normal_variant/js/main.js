const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        errorShow: false,
        errorText: [],
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    // console.log(error);
                    // активировать компонент ошибки
                    
                    this.errorText = error;
                    this.errorShow = true;

                })
        },
    },
    mounted() {
        console.log(this);
    }
});

