import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAmTKDq7DEYheskgdpVPlzU_4U9eltU7jA",
  authDomain: "login-react-544e8.firebaseapp.com",
  projectId: "login-react-544e8",
  storageBucket: "login-react-544e8.appspot.com",
  messagingSenderId: "231258758006",
  appId: "1:231258758006:web:d4df67a304e416fe0db857",
  measurementId: "G-Y0K50DHBM5"
}

const fire = firebase.initializeApp(firebaseConfig);
export default fire;