import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBBUg252MthuhDrQIieQ38PXn1rnLmFgq0",
  authDomain: "yt-clone-2bea0.firebaseapp.com",
  projectId: "yt-clone-2bea0",
  storageBucket: "yt-clone-2bea0.appspot.com",
  messagingSenderId: "647883152745",
  appId: "1:647883152745:web:a1eaba438f608ebaa0b1f8"
};
 

firebase.initializeApp(firebaseConfig);

export default firebase.auth();