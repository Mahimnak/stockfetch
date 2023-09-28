const axios = require("axios");
var options = {
    method: 'GET',
    url: 'https://latest-stock-price.p.rapidapi.com/price',
    params: {Indices: 'NIFTY 50'},
    headers: {
      'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com',
      'x-rapidapi-key': '3a1226aec6msh213c6d25b0efaa7p119e56jsnb95f411d2aa3'
    }
   };
     
     
   axios.request(options).then(function (response) {
     var dataFromResponse = response.data;
     console.log(dataFromResponse);
    }).catch(function (error) {
     console.error(error);
    });
   