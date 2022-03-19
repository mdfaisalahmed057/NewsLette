const firebaseConfig = {
    apiKey: "AIzaSyBZD1oJb6WeRyy17nEbw-WVjUwGvP0zFo4",
    authDomain: "newsletter-9d5a5.firebaseapp.com",
    projectId: "newsletter-9d5a5",
    storageBucket: "newsletter-9d5a5.appspot.com",
    messagingSenderId: "497798152173",
    appId: "1:497798152173:web:2d247ecffccfd09bf9f1e4",
    measurementId: "G-Q02CJT91FF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db= firebase.firestore()
const auth=firebase.auth();