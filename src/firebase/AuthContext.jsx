import React, { useContext, useState, useEffect } from 'react';
import { auth, createUserProfileDocument, firestore } from './firebase-utils';

const AuthContext = React.createContext();

//exported hook to be able to get info about AuthContext on other pages
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
            //if a user has been authenticated
            if (userAuth) {
                // createUserProfileDocument  goes into firebase and grab that user, if user is not found we save a record of it in firebase. This method also returns a documentReference which we can use CRUD actions on
                const userRef = await createUserProfileDocument(userAuth);

                //Now we set the state of current user to whatever info is in our snapShot Object
                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            }
            //If the user isnt sign in we will set current user to null
            setCurrentUser(userAuth);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    function signOut() {
        return auth.signOut();
    }

    function signIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const getUsers = async () => {
        try {
            // first await to get firestore.collection('users').get() to get all the data in the users table in firebase cloud storage
            const users = await firestore
                .collection('users')
                .get()
                //after awaiting .get() u will be returned an array of snapshot OBJECTS. The array contains zero or more snapshot objects which represent the results of the query
                //aka this is what is returned from .get() is complete      {_firestore: t, _delegate: t}
                .then((snapshot) => {
                    // then u got to go through each of the snapshot objects returned from the query and iterate through it to get the data
                    snapshot.forEach((doc) => {
                        console.log(doc.data()); // ex will return  {email: "petertran198@gmail.com", createdAt: t, displayName: "petertran98"}
                    });
                })
                .catch((error) => {
                    console.log('Error getting users: ', error);
                });
            return users;
        } catch (error) {
            console.log(error, '----Auth Context Page');
        }
    };

    const value = {
        currentUser,
        signOut,
        signIn,
        getUsers,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
