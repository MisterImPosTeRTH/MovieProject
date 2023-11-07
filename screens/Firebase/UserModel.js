import { app, db } from './connect'
import { collection, setDoc, doc } from 'firebase/firestore'

const userColl = collection(db, "users")

export const addUser = (profile, success, unsuccess, user) => {
  console.log(`add User in UserModel user id: ${user.uid}, displayName: ${user.displayname}`)
  console.log(`add User FirstName: ${profile.firstname}, LastName: ${profile.lastname}, Email: ${profile.email}`)

  setDoc(doc(userColl, user.uid), {
    firstName: profile.firstname,
    lastName: profile.lastname,
    email: profile.email,
    })
  .then(() => {
    console.log("Add User Success")
    success(firstname, lastname, email)
  })
  .catch((error) => {
    const msg = `addUser in users collection error: ${error}`
    console.log(msg)
    unsuccess(msg)
  })
}