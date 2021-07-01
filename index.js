import express from 'express'
import  routes  from './backend/routes/index.js'
import env from 'dotenv'
import cors from 'cors'
import path from 'path'


env.config()
const app = express()
app.use(cors())

const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname,'backend/build')))   
// app.get('*', (req, res) => { 
//   res.sendFile(path.join(__dirname, 'backend/build', 'index.html')) 
// });

app.use('/api/v1', routes)
app.get('/test',(req,res)=>res.send('hello'))


app.listen(process.env.PORT || 5000,()=>console.log(`App is running on port ${process.env.PORT}`))