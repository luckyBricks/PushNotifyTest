self.addEventListener('push', (event) => {
  console.log('push event')
  const data = event.data.json()
  self.registration.showNotification(data.title, {
    body: "注册推送成功",
  })
})