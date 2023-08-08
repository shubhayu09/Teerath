const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// const mongoURI = 'mongodb+srv://devyanshu:20205065@cluster0.cxhkwof.mongodb.net/teerath?retryWrites=true&w=majority'
const mongoURI = 'mongodb://devyanshu:20205065@ac-swaxonm-shard-00-00.cxhkwof.mongodb.net:27017,ac-swaxonm-shard-00-01.cxhkwof.mongodb.net:27017,ac-swaxonm-shard-00-02.cxhkwof.mongodb.net:27017/teerath?ssl=true&replicaSet=atlas-lfglnp-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async()=> {
    await mongoose.connect(mongoURI,{useNewUrlParser: true}, (err, result)=> {
        if(err){
            console.log("---",err);
        }
        else{
        console.log("connected");
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray ( async function(err, data){
            const foodCategory= await mongoose.connection.db.collection("foodCategory");
            foodCategory.find({}).toArray(async function(err, catData){
                if (err) {
                    console.log(err);
                } else {
                    global.food_items=data;
                    global.foodCategory = catData;
                }
            }
            //    if(err)console.log(err);
        //    else 
        //    {
        //     global.food_items = data;
            
        //    }
        )
        }
    )}})
}
module.exports = mongoDB;
