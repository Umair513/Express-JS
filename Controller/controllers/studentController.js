const allStudent = (req, res) => {
    res.send("All Student")
}

const deleteStudent = (req, res) => {
    console.log(req.params)
    const { id } = req.params
    console.log(id)
    if (id == 10) {
        res.send("Ye popal singh ke id hy")
    }
    else {
        res.send(`Student Deleted ${id}`)
    }
}

// export {allStudent, deleteStudent}
module.exports = { allStudent, deleteStudent };