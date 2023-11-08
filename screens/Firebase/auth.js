import { app, auth, db } from "./connect";
import { collection, query, where, getDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { addUser } from "./UserModel"

// async function getCities(db) {
//     const citiesCol = collection(db, 'users');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
// }

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

    console.log(`Login with email: ${email} ${password}`)
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
        // const user = userCredential.user
        console.log(`User after login: ${email}`)
        console.log(`User after login: ${firstName}`)
        console.log(`User after login: ${lastName}`)
        success(firstName, lastName, email)
    })
    .catch((error) => {
        const msg = `login error: ${error}`
        console.log(msg)
        unsuccess(msg)
    })
}