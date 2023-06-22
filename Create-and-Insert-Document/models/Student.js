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

// const createDoc = async () => {
//     try {
//         // Creating new Document
//         const studentDoc = new studentModel({
//             name: "Umair",
//             age: 24,
//             fees: 6500.70,
//             hobbies: ["dancing", "reading",],
//             isActive: true,
//             comments: [{ value: "This is good mongoose" }]
//         })

//         // Saving Document
//         const result = await studentDoc.save()
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }

const createDoc = async (name, age, fees, hobby, isActive, comment) => {
    try {
        // Creating new Document
        const studentDoc = new studentModel({
            name: name,
            age: age,
            fees: fees,
            hobbies: hobby,
            isActive: isActive,
            comments: comment
        })

        // Saving Document
        const result = await studentDoc.save()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

const createMultiDoc = async () => {
    try {
        // Creating new Document
        const umairDoc = new studentModel({
            name: "Umair",
            age: 24,
            fees: 6500.70,
            hobbies: ["dancing", "reading",],
            isActive: true,
            comments: [{ value: "This is good mongoose" }]
        })
        const popalDoc = new studentModel({
            name: "Popal",
            age: 24,
            fees: 6500.70,
            hobbies: ["dancing", "reading",],
            isActive: true,
            comments: [{ value: "This is good mongoose" }]
        })
        const josalDoc = new studentModel({
            name: "Josal",
            age: 24,
            fees: 6500.70,
            hobbies: ["dancing", "reading",],
            isActive: true,
            comments: [{ value: "This is good mongoose" }]
        })

        // Saving Document
        // const result = await studentDoc.save()
        //  console.log(result)


        // Saving Multiple Documents
        const result = await studentModel.insertMany([umairDoc, popalDoc, josalDoc])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export { createMultiDoc, createDoc }
