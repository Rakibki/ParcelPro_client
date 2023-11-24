// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyACkojtj5FY0HHb-f-fgSP5ym8JZD9m-Ng",
//   authDomain: "parcelmanagementparcelpro.firebaseapp.com",
//   projectId: "parcelmanagementparcelpro",
//   storageBucket: "parcelmanagementparcelpro.appspot.com",
//   messagingSenderId: "567667317293",
//   appId: "1:567667317293:web:bf2bc3b20669170712b6a4"
// };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth