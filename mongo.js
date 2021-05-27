const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@fullstack.wcuqi.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const phonenumberSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Number = mongoose.model('Number', phonenumberSchema)

const phonenumber = new Number({
    name: process.argv[3],
    number: process.argv[4]
})

if (process.argv.length === 3) {
    console.log('phonebook:')
    Number.find({}).then(result => {
        result.forEach(phonenumber => {
            console.log(`${phonenumber.name} ${phonenumber.number}`)
        })
        mongoose.connection.close()
    })
} else {
    phonenumber.save().then(() => {
        console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
        mongoose.connection.close()
    })
}


