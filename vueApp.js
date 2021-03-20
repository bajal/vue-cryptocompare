const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";

const vm = new Vue({
        el: '#app',
        //Mock data for the value of BTC in USD
        data: { 
            // results: {
            //           "BTC": {"USD":3759.91,"EUR":3166.21}, 
            //           "ETH": {"USD":281.7,"EUR":236.25},
            //           "Doge":{"USD":5.60,"EUR":4.70}
            // }
            results: []
        },
        mounted() {
          axios.get(url).then(response => {
            this.results = response.data
          })
        }
});

