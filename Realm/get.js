exports = async function (payload, response) {
  
    var collection = context.services.get("mongodb-atlas").db("Rebajas").collection("Rebajas");
     
    var Products = await collection.find().toArray();
    
   Products.forEach (product =>{
      product._id = product._id.toString();
   });
    
    return Products;
  };