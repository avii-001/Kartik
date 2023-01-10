show dbs  // view the existing databases
use <db_name> // use selected database
db // view the current database in use
show collections // view the list of collections
create collection  // db.createCollection(“<colection_name>”)
db.dropDatabase()
db.<collection_name>.<method>

Create 
insertOne  // {}
insertMany   // [{},{}]
Read
find()
find({filterObject})
find({filtctOberObject},{seleject})
findOne({filterObject})

Update
updateOne({filterObject},{})
updateMany({filterObject}.{})
replaceOne({filterObject},{})
Delete
deleteOne({filterObject})
deleteMany({filterObject})


Filter Operators  // query operators
$eq
$ne
$gt / $gte
$lt / $lte
$in
$nin

$not
$and
$or
$exists

Update Operators
$set
$inc
$rename
$unset

Read Modifiers

sort
limit
skip






/* CRUD */
db.users.insertOne({
    name: "ram",
    email: "ram@ram.com",
    role: "buyer"
})
db.users.insertMany([{
    name: "ram",
    email: "ram@ram.com",
    role: "buyer"
},
{
    name: "ram",
    email: "ram@ram.com",
    role: "buyer"
}])

db.users.find({ _id: ObjectId("63ba9c912f077e339294efb8") })
db.users.find({ role: "buyer" })
db.users.find({})

db.users.updateMany({ _id: ObjectId("63ba9c912f077e339294efb8") }, {$unse t: { seller: 1 } })
db.users.updateMany({ role: "buyer" }, {$set: { balance: 0 } })
db.users.deleteOne({ _id: ObjectId("63ba9c912f077e339294efb8") })
db.users.deleteOne()

ObjectId("63ba9cc02f077e339294efb9"),

db.users.find({_id:{$ne:ObjectId("63ba9cc02f077e339294efb9")}})

db.products.insertMany([
    {
        name:"one",
        brands:["puma","levis"]
    },
    {
        name:"two",
        brands:["puma","adidas"]
    },
    {
        name:"three",
        brands:["adidas"]
    },
])

db.products.insertOne({
    name: 'four',
    brands: [ 'puma',  ],
    price: 1000
})


db.products.find({brands:{$in:["adidas","levis"]}})

db.products.updateMany({},{$set:{price:0}})


db.products.find({brands:"puma",price:{$lt:1000},price:{$gte:500}})

db.products.find({$or:[{price:{$lt:1000}},{brands:"puma"}]})




