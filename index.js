import express from 'express'
import  routes  from './backend/routes/index.js'
import env from 'dotenv'

env.config()
const app = express()
app.use(express.json())
app.use('/api/v1', routes)

app.listen(process.env.PORT || 3000,()=>console.log(`App is running on port ${process.env.PORT}`))