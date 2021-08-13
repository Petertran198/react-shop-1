import React, { useContext, useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase-utils';

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

    const value = {
        currentUser,
        signOut,
        signIn,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
