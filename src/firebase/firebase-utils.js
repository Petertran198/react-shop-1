//Pull in inital firebase
import firebase from 'firebase/app';
//Also pull in these two services for db and auth services
import 'firebase/auth';
import 'firebase/firestore';

// Firebase app config details
const config = {
    apiKey: 'AIzaSyCgf7D5iFdwFW7A9rC9Q3Fyf564CjS8u6s',
    authDomain: 'shop-db-60e32.firebaseapp.com',
    projectId: 'shop-db-60e32',
    storageBucket: 'shop-db-60e32.appspot.com',
    messagingSenderId: '836764985660',
    appId: '1:836764985660:web:4212512b2d2055da009639',
};

firebase.initializeApp(config);
// Got from pulling in the firebase/auth services & firebase/firestore
// gonna export this out whenever u need to references this Authentication service or Cloud Firestore services
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export function signWithGoogle() {
    //Create a new instance of firebase provider
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    //This method takes in a param of which popup provider to signin to and allow authentication with that provider
    // aka a method to signInWithGoogle
    return auth.signInWithPopup(provider);
}
