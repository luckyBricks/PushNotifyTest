# Browser Push Notification Example

This repository aims to build a simple case for the browser notification feature.
When click on the **get notification permission**, the browser will register a service-worker by the server-side public key.
Then the backend will trigger a notification for the browser’s subscription.

The backend is an express server, please run `npm i` to initial the project.
This application is hosting on the Azure App Service. [View Now](https://testnotificationwebapp.azurewebsites.net/testpage.html)

The front-end files including in the `/public`.

> Notice: The service worker `beforeinstallprompt` event won't fire if the page is served over HTTP.
> Installability requires a service worker with a fetch event handler, and
> if the page isn't served over HTTPS, the service worker won't load.
