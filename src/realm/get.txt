exports = async function(payload, response){
	
	var collection = context.services.get("mongodb-atlas").db("matrixDB").collection("matrixApp")
	var users = await collection.find().toArray();

	users.forEach( user => {
		user._id = user._id.toString();
	});

	return users;
};