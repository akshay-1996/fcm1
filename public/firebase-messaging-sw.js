// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.8.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyAERSIBOLVPtLLf73rxchW5-rC-PNzrHbs",
    authDomain: "fcm1-71ce9.firebaseapp.com",
    projectId: "fcm1-71ce9",
    storageBucket: "fcm1-71ce9.appspot.com",
    messagingSenderId: "658677162062",
    appId: "1:658677162062:web:7ceecee41283c63be2e31f"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  }});