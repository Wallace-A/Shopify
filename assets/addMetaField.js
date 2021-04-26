var axios = require('axios'); 
const API_KEY = "098dd2d89ebf5b8f4f59ee911d4dd1c7";
const PASSWORD = "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";
const product_id = 6691201941654;
let url = `https://${API_KEY}:${PASSWORD}@strange-wall.myshopify.com/admin/products/${product_id}/metafields.json`;

async function addMetafield () {
  //  metafield name and value
  let metaNamespace = "global";
  let metavalue = 0;
  // get product metafields
  await axios.get(url)
  .then(function(response) {
    // search for namespace in existing metafields
    const globalField = response.data.metafields.find(element => element.namespace === metaNamespace);
    // if metafield exists set metavalue to value + 1
    if(globalField) {
      metavalue = globalField.value + 1;
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  // create metafield
  const metafield = {
    "metafield": {
      "namespace": metaNamespace,
      "key": "test",
      "value": metavalue,
      "value_type": "integer"
    }
  };
  // send/update new metafield
  axios.post(url, metafield)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

addMetafield();


