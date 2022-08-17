const mongoose = require('mongoose');

// open connection
mongoose.connect('mongodb://localhost:27017/newFruitsDB', {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "everyone has a name :)"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    rating: 9,
    review: "peru are nice !"    
});

const mango = new Fruit({
    name: "mango",
    rating: 8,
    review: "i love mangoes."
});

mango.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema); 

// const banana = new Fruit({
//     name: "banana",
//     rating: 9,
//     review: "Great Fruit !"    
// });

// const kiwi = new Fruit({
//     name: "kiwi",
//     rating: 4,
//     review: "Great Fruit !"    
// });

// const orange = new Fruit({
//     name: "orange",
//     rating: 7,
//     review: "Great Fruit !"    
// });

// Fruit.insertMany([banana, kiwi, orange], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Succesfully saved all the fruits");
//     }
// })

Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }else{
        
        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
})



// Fruit.updateOne({_id: "62f5f8aff1e656e10e4a9232"}, {name: "Peach"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Succesfuky updated gthe document");
//     }
// })

Person.updateOne({name: "Rushi"}, {favFruit: mango},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Fav food updated successfully!");
    }
})

// Fruit.deleteOne({_id: "62f5f8aff1e656e10e4a9232"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("dELETED SUCCESSFULY");
//     }
// });

