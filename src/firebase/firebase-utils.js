//Pull in inital firebase
import firebase from 'firebase/app';
//Also pull in these two services for db and auth services
import 'firebase/auth';
import 'firebase/firestore';
import { useHistory } from 'react-router';

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

//function to get back the auth object from the auth library and store it in firebase database
//Made async because waiting to fetching login infomation
export const createUserProfileDocument = async (user, additionalData) => {
    //If no user obj was found, just exit
    if (!user) return;
    //Retrieve the account obj  Reference first because in order to perform CRUD method in firebase u must first get the documentRef
    const userRef = firestore.doc(`users/${user.uid}`);
    //Then get the account info associated with that with .get()
    const snapShot = await userRef.get();
    //If the account info  was not found inside firebase db then store it
    //because it is a new user that firebase firestore did not add in yet
    //.exists is a property of the snapShot object that tells us if there is data for that "user"
    if (!snapShot.exists) {
        const { displayName, email } = user;

        const createdAt = new Date();
        //Using our account Reference obj, which allow us to perform CRUD action, we can save an instance of this in our firestore nosql db
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error.....', error.message);
        }
    }
    return userRef;
};

export function signWithGoogle() {
    //Create a new instance of firebase provider
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    //This method takes in a param of which popup provider to signin to and allow authentication with that provider
    // aka a method to signInWithGoogle
    return auth.signInWithRedirect(provider);
}

// export function signUp(signupInfo) {
//     auth.createUserWithEmailAndPassword(signupInfo.email, signupInfo.password);
//     alert('yes');
// }
