import express from 'express';

const app = express()
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
const port = 5000

app.get('/', (req,res) => {
  res.send('Welcome')
})

app.listen(port, async () => {
  console.log(`Server running on ${port}`)
})