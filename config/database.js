const mongoose = require('mongoose')

const mongoDB = () => {
    mongoose.connect('mongodb://localhost:27017/ticket-master',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
    })
    .then(()=>{
        console.log('connected to the db')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = mongoDB