import firebase from 'firebase/app';
import 'firebase/auth';

/*
const firebaseConfig = {
    apiKey: "AIzaSyC51jEkAzhn1oeTVkSo8rDyTow0vPq95Ys",
    authDomain: "clone-6edf3.firebaseapp.com",
    projectId: "clone-6edf3",
    storageBucket: "clone-6edf3.appspot.com",
    messagingSenderId: "562890722184",
    appId: "1:562890722184:web:9c376c6c084f2bb220883d"
  };
*/

  const firebaseConfig = {
    apiKey: "AIzaSyC51jEkAzhn1oeTVkSo8rDyTow0vPq95Ys",
    authDomain: "clone-6edf3.firebaseapp.com",
    projectId: "clone-6edf3",
    storageBucket: "clone-6edf3.appspot.com",
    messagingSenderId: "562890722184",
    appId: "1:562890722184:web:9c376c6c084f2bb220883d"
  };

 
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCXqluRm_X4vGxvV8DJp9JYPngMq06L7uw",
  //   authDomain: "wmsystem-4ac34.firebaseapp.com",
  //   databaseURL: "https://wmsystem-4ac34.firebaseio.com",
  //   projectId: "wmsystem-4ac34",
  //   storageBucket: "wmsystem-4ac34.appspot.com",
  //   messagingSenderId: "486491218037",
  //   appId: "1:486491218037:web:99684e52a4a27954c9583c"
  // };

firebase.initializeApp(firebaseConfig);

export default firebase.auth();