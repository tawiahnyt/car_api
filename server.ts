import express, {Application} from 'express'

const app: Application = express()

app.use(express.json())

// app.use('/api/v1', require('./routes'))

app.listen(3000, () => {
  console.log('Server is up and running on port 3000')
})