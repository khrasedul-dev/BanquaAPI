const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./model/userModel')



//database connection
mongoose.connect('mongodb+srv://rasedul20:rasedul20@telegramproject.b9su4.mongodb.net/telegramProject?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then((d) => console.log('Database connected')).catch((e) => console.log(e))


const app = express()

app.use(cors())
app.use(express.json({
    type:['application/json','text/plain']
}))
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({"Status":"Server running"})
})

app.post('/',(req,res)=>{
    const uid = req.body.uid
    
    userModel.find({userId: uid})
    .then((user)=>{
        if (user.length > 0) {
            res.json({"result": user})
        }else{
            res.json({"result": false})
        }
    })
    .catch((e)=>console.log(e))

})

app.post("/update", (req, res) => {
    
    const {userId,my_wallet,reward_per,reward,today_wallet} = req.body
    
    userModel.updateOne({userId: userId}, {userId,my_wallet,reward_per,reward,today_wallet})
    .then(()=>{
        res.json({"result":"Data updated successfully"})
    })
    .catch((e)=>console.log(e))
    
})


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`)
})