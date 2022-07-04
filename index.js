require('dotenv').config()

const webpush = require('web-push')
const express = require('express')
const configuredWebPush = require("./configured-web-push")

const app = express()

const port = process.env.PORT || 4000

app.use(express.static('public'))


app.get('/api/key', (req, res) => {

  if (configuredWebPush.vapidPublicKey !== '') {
    res.send({
      key: configuredWebPush.vapidPublicKey
    })
  } else {
    res.status(500).send({
      key: '尚未设置VAPID公钥'
    })
  }
})

app.post('/api/subscribe', (req, res) => {
  const subscription = req.body
  res.status(201).json({})
  const payload = JSON.stringify({
    title: "测试推送消息"
  })
  webpush.sendNotification(subscription, payload)
    .catch((err) => console.error(err))
})

app.post('/api/save-subscription', (req, res) => {
  console.log(req.body)
  res.send('Success')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
