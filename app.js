import express, { static as stattic } from 'express'
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(stattic('dist'))

app.listen(PORT, () => {
  //eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send('3') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})
