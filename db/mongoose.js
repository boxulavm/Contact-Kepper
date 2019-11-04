const mongoose = require('mongoose')
const mongoURI = require('../config') ;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => {
    console.log('Database connected')
})