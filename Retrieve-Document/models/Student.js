import mongoose from "mongoose";

// Definig Schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 50 },
    fees: { type: mongoose.Decimal128, required: true, validate: (v) => { v >= 5500.50 } },
    hobbies: { type: Array },
    isActive: { type: Boolean },
    comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
    join: { type: Date, default: Date.now }
})



// Compiling Schema 
const studentModel = mongoose.model("student", studentSchema)


// Retrieve all documents
const getAllDoc = async () => {
    const result = await studentModel.find()
    console.log(result)
    // result.forEach(
    //     (item) => {
    //         console.log(
    //             item.name,
    //             item.age,
    //             item.fees.toString(),
    //             item.hobbies[0],
    //             item.hobbies[1],
    //             item.isActive,
    //             item.comments[0].value,
    //             item.comments[0].publish,
    //             item.join
    //         )
    //     }
    // )
}


// Retrieve all documents with specific fields
const getAllDocSpecificField = async () => {
    // const result = await studentModel.find().select("name age") // include
    const result = await studentModel.find().select("-name -age") // exclude
    console.log(result)

}

// Retrieve Single Document
const getSingleDoc = async () => {
    const result = await studentModel.findById("64943e0a7a64f560910b8a75")
    // console.log(result)
    console.log(result._id.toString(), result.name)
    console.log(result._id.getTimestamp(), result.name)
}


// Retrieve Single Document with specific field
const getSingleDocSpecificField = async () => {
    const result = await studentModel.findById("64943e0a7a64f560910b8a75", "name age")
    console.log(result)

}

// Retrieve document by field
const getDocbyField = async () => {
    const result = await studentModel.find({ name: "Josal" })
    console.log(result)
}

// Retrieve document by field with specific field
const getDocbyFieldSpecificField = async () => {
    const result = await studentModel.find({ name: "Josal" }).select("name age fees")
    console.log(result)
}

// Retrieve limited Documents
const getLimitedDoc = async () => {
    const result = await studentModel.find().limit(1)
    console.log(result)
}

// Retrieve Skip Documents
const getSkipDoc = async () => {
    const result = await studentModel.find().skip(1)
    console.log(result)
}

// Count Documents
const getDocCount = async () => {
    const result = await studentModel.find().countDocuments()
    console.log(result)
}


// Sort Documents
const getSortedDoc = async () => {
    // const result = await studentModel.find().sort({ age: 1 }) // incresing order
    const result = await studentModel.find().sort({ age: -1 })  // decresing order
    console.log(result)
}

// Mix
const mixDocs = async () => {
    const result = await studentModel.find({}, { name: 1, age: 1 }, { limit: 2, skip: 1 })
    console.log(result)
}

// Comparison Querry Operator
const compDoc = async () => {
    // const result = await studentModel.find({ age: { $gt: 20 } })
    // const result = await studentModel.find({ age: { $in: [20, 23, 25,35] } })
    const result = await studentModel.find({ age: { $nin: [20, 23, 25, 35] } })
    console.log(result)
}

// Logical Querry Operator
const logDoc = async () => {
    const result = await studentModel.find({$and: [{age: 20}, {fees: 650000}]})
    console.log(result)
}

export { getAllDoc, getAllDocSpecificField, getSingleDoc, getSingleDocSpecificField, getDocbyField, getDocbyFieldSpecificField, getLimitedDoc, getSkipDoc, getDocCount, getSortedDoc, mixDocs, compDoc, logDoc }