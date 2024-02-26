use("CRUD");
db.createCollection("mycrud")
db.mycrud.insertOne({
    "name": "John Doe",
    "age": 25,
    "city": "New York",
    "isStudent": false,
    "grades": [87, 92, 78],
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zipcode": "12345"
    }
})

db.mycrud.insertMany([
    {
        "name": "John Doe",
        "age": 25,
        "city": "New York",
        "isStudent": false,
        "grades": [87, 92, 78],
        "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "zipcode": "12345"
        }
    },
    {
        "name": "Jane Smith",
        "age": 30,
        "city": "San Francisco",
        "isStudent": true,
        "grades": [95, 89, 92],
        "address": {
            "street": "456 Oak St",
            "city": "Another Town",
            "zipcode": "67890"
        }
    },
    {
        "name": "Bob Johnson",
        "age": 22,
        "city": "Chicago",
        "isStudent": false,
        "grades": [78, 84, 70],
        "address": {
            "street": "789 Pine St",
            "city": "Yet Another Town",
            "zipcode": "54321"
        }
    }
]
)

// let age=db.mycrud.find({"age":25})
// console.log(age)
// console.log(age.count())
// // console.log(age.toArray())

// Update 
// let b=db.mycrud.updateOne({"age":25},{$set:{"age":76}})
// console.log(b)

// db.mycrud.updateMany({"age":76},{$set:{"age":12}})

// DELETE 
// db.mycrud.deleteOne({age:"12"})
db.mycrud.deleteMany({age:"12"})
