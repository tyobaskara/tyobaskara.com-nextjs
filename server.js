const express = require('express')
const next = require('next')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 4000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(compression())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    if (port === 4000) {
      console.log('> Ready on http://localhost:4000')
    } else {
      console.log('> Ready on:', port)
    }
  })
})