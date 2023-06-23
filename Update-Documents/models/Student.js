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


// Update Document
const updateDocById = async (id) => {
    try {
        // const result = await studentModel.findByIdAndUpdate(id, { name: "kamran" })
        const result = await studentModel.findByIdAndUpdate(id, { name: "Umair" }, { returnDocument:"after"})
        console.log(result)
    } catch (error) {
        console.log(error)
    }
} 

// Update one document
const updateOneDoc = async (id) => {
    try {
        // const result = await studentModel.updateOne({ _id: id }, { name: "Ali" })
        const result = await studentModel.updateOne({ _id: id }, { name: "Azhar" }, {upsert: true})
        console.log(result)
    } catch (error) {
        console.log(error)
        
    }
}

// Update many
const updateManyDoc = async (a) => {
    try {
         const result = await studentModel.updateOne({ age: a }, { name: "Usman" })
        // const result = await studentModel.updateOne({ _id: id }, { name: "Azhar" }, { upsert: true })
        console.log(result)
    } catch (error) {
        console.log(error)

    }
}

export {updateDocById, updateOneDoc, updateManyDoc}