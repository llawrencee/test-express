import express from "express"

const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("If you are seeing this, it means that it is working.")
})

app.listen(port, () => {
  console.log(`App Listening on Port: ${port}`)
})
