Vue.component('error', {
    data() {
        return {
            text1: 'Ошибка',
        }
    },
    template: `<div class="errorBlock">{{text1}} {{$root.errorText}}</div>`,
});