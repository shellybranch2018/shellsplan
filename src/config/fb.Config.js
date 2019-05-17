
  import firebase from 'firebase/app' 
  import 'firebase/firestore'
  import 'firebase/auth'
  
  var firebaseConfig = {
    apiKey: "AIzaSyA8L_CitdWmNCijILlDSdV1YAu0BhPl4nk",
    authDomain: "net-ninja-shellsplan.firebaseapp.com",
    databaseURL: "https://net-ninja-shellsplan.firebaseio.com",
    projectId: "net-ninja-shellsplan",
    storageBucket: "net-ninja-shellsplan.appspot.com",
    messagingSenderId: "809736970204",
    appId: "1:809736970204:web:91f311ac4cdc2565"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots:true })

  export default firebase;