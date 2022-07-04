

function urlBase64ToUint8Array (base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/")

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

async function triggerPushNotification () {
  if (!'serviceWorker' in navigator) {
    console.error('Service Workers are not supported in this browser')
    return
  }

  const register = await navigator.serviceWorker.register('https://testnotificationwebapp.azurewebsites.net/service-worker.js', {
    scope: '/'
  })
  console.log('waiting for acceptance')
  const pubKey = await fetch('https://testnotificationwebapp.azurewebsites.net/api/key')
    .then(response => response.json())
  console.log(pubKey)
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(pubKey.key)
  })
  const pushSub = JSON.stringify(subscription)
  console.log(`acceptance complete, subscription - ${pushSub}`)
  await fetch('https://testnotificationwebapp.azurewebsites.net/api/subscribe', {
    method: 'POST',
    body: pushSub,
    headers: {
      "Content-Type": 'application/json'
    }
  })
}
const triggerPush = document.querySelector('.trigger-push')
triggerPush.addEventListener('click', () => {
  triggerPushNotification().catch(err => console.error(err))
})

// if (window.location.protocol === "http:") {
//   window.location.href = "https:" + window.location.href.substring(5)
// }