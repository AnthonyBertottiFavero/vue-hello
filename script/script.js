const app = Vue.createApp({
    data() {
        return{
            developer: 'Programmatore!',
            imgSource: 'https://www.focusjunior.it/content/uploads/site_stored/imgs/0001/016/cosa-fa-esattamente-un-programmatore.jpg',
            displayFlex: 'd-flex justify-content-center',
        }
    }
});

app.mount('#app');