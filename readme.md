# Browser Push Notify Example 

This repo aims to build a simple case for the browser notification feature. 

When click on the **get notification permission**, the browser will register a `service-worker`by the **server-side** public key. Then the backend will trigger a notification for the browser’s subscription.

## How to use

```shell
git clone https://github.com/luckyBricks/PushNotifyTest.git
cd ./PushNotifyTest
npm i
node ./index.js
```

It will start a server which running the page and provide the pub-key for notification.

Please make sure you can serve the page with **HTTPS**.

## Notice

The service worker `beforeinstallprompt` event won't fire if the page is served over **HTTP**. 

If the page isn't served over **HTTPS**, the service worker won't be loaded by browser.
