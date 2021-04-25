
var axios = require('axios'); 
console.log("script is here!");
// API_KEY = "098dd2d89ebf5b8f4f59ee911d4dd1c7";
// PASSWORD = "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";
//product_id = 6691201941654;
let burl = "https://bf39dff873081d5f3188b06656b3cbc1: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@brandon-lambs-store.myshopify.com/admin/products/6693552193686/metafields.json";

let url = "https://098dd2d89ebf5b8f4f59ee911d4dd1c7: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@strange-wall.myshopify.com/admin/products/6693535449238/metafields.json";
console.log(url);
async function addMetafield () {
  
  // get product metafields
  await axios.get(url)
  .then(function(response) {
    console.log("success");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  // create metafield

  // send/update new metafield
}

addMetafield();


