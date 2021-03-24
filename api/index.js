import { json } from 'body-parser'

const app = require('express')()
const API_END_POINT = 'http://localhost:3000/api/v1/files'

app.use(json())

app.get('/users', (req, res) => {
  res.json({ user: 'data' })
})

app.get('/login', (req, res) => {
  res.cookie('token', '123', { httpOnly: true })
  res.redirect('back')
})

app.get('/logout', (req, res) => {
  res.cookie('token', { maxAge: 0 })
  res.redirect('back')
})

app.get('/file-middleware/*', (req, res) => {
  console.log('--->', req.originalUrl)

  const fileUrl =
    API_END_POINT + req.originalUrl.replace('/api/file-middleware', '')
  console.log('===>', fileUrl)

  res.redirect(fileUrl)
})

export default app
