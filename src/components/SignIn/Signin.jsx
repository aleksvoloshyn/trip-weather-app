import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

// import userPic from './../../../public/images/avatar.jpg'

import css from './signin.module.scss'

// Firebase конфигурация
const firebaseConfig = {
  apiKey: 'AIzaSyBdvuyyCjpsytvyza-8oA7BzrruqalMdZY',
  authDomain: 'trip-weatherapp.firebaseapp.com',
  projectId: 'trip-weatherapp',
  storageBucket: 'trip-weatherapp.appspot.com',
  messagingSenderId: '1006708555940',
  appId: '1:1006708555940:web:fd7d0ed56be98244a6e631',
  measurementId: 'G-QB6LCGCP58',
}

// Инициализация Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const Signin = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const newUser = result.user
        if (newUser) {
          setUser(newUser)
          console.log(newUser)
          console.log(newUser.photoURL)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className={css.signin}>
      {user ? (
        <div className={css.signin__info}>
          {/* <span>{user.email}</span> */}

          <img
            src={user.photoURL}
            alt="user photo"
            // alt={user.photoURL}
            className={css.signin__photo}
            width={30}
          />

          <button onClick={handleSignOut} className={css.signin__signoutButton}>
            Sign out
          </button>
        </div>
      ) : (
        <button onClick={handleSignIn} className={css.signin__signinButton}>
          Sign in with Google
        </button>
      )}
    </div>
  )
}

export default Signin
