const webpush = require('web-push')

const vapidPublicKey = process.env.VAPID_PUBLIC_KEY || ''
const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY || ''

if (vapidPrivateKey === '' || vapidPublicKey === '') {
  console.log("你需要设置VAPID公私钥，并在环境变量中加入，可以试试这个")
  console.log(webpush.generateVAPIDKeys())
} else {
  webpush.setVapidDetails(
    'mailto:bricks9711@outlook.com',
    vapidPublicKey,
    vapidPrivateKey
  )
}

module.exports = {
  webpush: webpush,
  vapidPublicKey: vapidPublicKey
}