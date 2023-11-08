import { app, auth, db } from "./connect";
import { collection, query, where, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         sendPasswordResetEmail,
        updatePassword } from "firebase/auth"
import { addUser } from "./UserModel"

const userColl = collection(db, "users")

export const signUp = (profile, success, unsuccess) => {
    console.log(`username: ${profile.email}`)
    createUserWithEmailAndPassword(auth, profile.email, profile.password)
    .then((userCredential) => {
        const user = userCredential.user
        console.log(`User: ${user}`)
        addUser(profile, success, unsuccess, user)
    })
    .catch((error) => {
        const msg = `signUp error: ${error}`
        console.log(msg)
        unsuccess(msg)
    })
}

export const login = async(email, password, success, unsuccess) => {
    let firstname
    let lastname

    console.log(`Login with email: ${email}`)
    let qry = query(userColl, where('email', '==', email));
    console.log(`qry: ${qry}`)
    let snapshot = await getDocs(qry)
    snapshot.forEach((doc) => {
        data = doc.data();
        firstName = data.firstName;
        lastName = data.lastName;
    })

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(`logging with email: ${email}, ${firstName}, ${lastName}`)
        success(firstName, lastName, email)
    })
    .catch((error) => {
        const msg = `login error: ${error}`
        unsuccess(msg)
    })
}
export const logOut = (success, unsuccess) => {
    signOut(auth)
    .then(() => {
        console.log(`Logout success`)
        success()
    })
    .catch((error) => {
        const msg = `Logout error ${error}`
        console.log(msg)
        unsuccess(msg)
    })
}

export const getCurrentSignInUser = () => {
    return auth.currentUser
}

export const resetPassword = (email, success, unsuccess) => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
        success()
    })
    .catch((error) => {
        const msg = `Reset pass error: ${error}`
        console.log(msg)
        unsuccess(msg)
    })
}

export const changeUserPassword = (email, oldPassword, newPassword, success, unsuccess) => {
    signInWithEmailAndPassword(auth, email, oldPassword)
    .then((userCredential) => {
        const user = userCredential.user
        console.log(`in changepass funtion`)
        updatePassword(user, newPassword)
        .then(() => {
            const msg = `Change pass success: ${newPassword}`
            success(msg)
        })
        .catch((error) => {
            const msg = `Change pass error: ${error}`
            console.log(msg)
            unsuccess(msg)
        })
    })
    .catch((error) => {
        const msg = `Old pass error: ${error}`
        console.log(msg)
        unsuccess(msg)
      })
}