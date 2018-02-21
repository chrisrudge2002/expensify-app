import { firebase, googleAuthProivder } from './firebase';


export const login = async () => {
    await firebase.auth().signInWithPopup(googleAuthProivder);
};

export const logout = async () => {
    
};