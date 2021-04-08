import React, { useContext, useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase-utils';

const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            //if a user has been authenticated
            if (user) {
                // createUserProfileDocument  goes into firebase and grab that user, if user is not found we save a record of it in fb. This method also returns a documentReference which we can use CRUD actions on
                const userRef = await createUserProfileDocument(user);
                //Now we set the state of current user to whatever info is in our google auth user
                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
