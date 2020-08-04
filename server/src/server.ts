import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)



console.log("ok")

app.listen(3333, () =>{
  console.log('Servidor na porta 3333')
})