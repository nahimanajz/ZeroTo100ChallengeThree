import express from 'express'
import  routes  from './backend/routes/index.js'
import env from 'dotenv'
import cors from 'cors'


env.config()
const app = express()
app.use(cors())
app.use('/api/v1', routes)

app.listen(process.env.PORT || 4000,()=>console.log(`App is running on port ${process.env.PORT}`))