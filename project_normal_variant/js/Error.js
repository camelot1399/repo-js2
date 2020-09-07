Vue.component('error', {
    props: ['errorText'],
    data() {
        return {
            text1: 'ошибка',
        }
    },
    template: `<div class="errorBlock">{{text1}} {{errorText}}</div>`,
});