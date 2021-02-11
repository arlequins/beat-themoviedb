const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use('/assets', express.static('dist/assets'))
app.use('/static', express.static('dist/static'))
app.use('/flagship', express.static('dist/flagship'))

app.use('*', (_req, res) => {
  res.sendFile(
    path.resolve(__dirname, 'dist', 'index.html')
  );
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
