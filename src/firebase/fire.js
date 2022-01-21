import firebase from "firebase"
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAT512b7iFIEOL3jb60EgigFo27YTPPM-k",
    authDomain: "mini-project-5a434.firebaseapp.com",
    projectId: "mini-project-5a434",
    storageBucket: "mini-project-5a434.appspot.com",
    messagingSenderId: "490003002365",
    appId: "1:490003002365:web:97e8b7b587de8506819f94"
};

const fire = firebase.initializeApp(firebaseConfig);
//var database = firebase.database();
export const auth = firebase.auth();
const db=firebase.firestore();
export {db};
export default fire;