import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js'

import { firebaseConfig } from './config.js'

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

document.getElementById('SIGNUP-btn').addEventListener('click', function () {
  document.getElementById('Register').style.display = 'inline'
  document.getElementById('sign-in').style.display = 'none'
})

document.getElementById('SIGNIN-btn').addEventListener('click', function () {
  document.getElementById('Register').style.display = 'none'
  document.getElementById('sign-in').style.display = 'inline'
})

document.getElementById('signin-btn').addEventListener('click', function () {
  document.getElementById('Register').style.display = 'inline'
  document.getElementById('sign-in').style.display = 'none'
})

document.getElementById('signin-btn').addEventListener('click', function () {
  const signinEmail = document.getElementById('signin-email').value
  const signinPassword = document.getElementById('signin-password').value

  signInWithEmailAndPassword(auth, signinEmail, signinPassword)
    .then(userCredential => {
      const user = userCredential.user
      document.getElementById('result-box').style.display = 'inline'
      document.getElementById('sign-in').style.display = 'none'
      document.getElementById('result').innerHTML =
        'Welcome Back! Sign in successful'
    })

    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      document.getElementById('result-box').style.display = 'inline'
      document.getElementById('sign-in').style.display = 'none'
      document.getElementById('result').innerHTML = 'Oops! <br>' + errorMessage
    })
})

document.getElementById('signup-btn').addEventListener('click', function () {
  const signupEmail = document.getElementById('signup-email').value
  const signupPassword = document.getElementById('signup-password').value

  createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    .then(userCredential => {
      const user = userCredential.user
      document.getElementById('result-box').style.display = 'inline'
      document.getElementById('Register').style.display = 'none'
      document.getElementById('result').innerHTML = 'Sign up successful'
    })

    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      document.getElementById('result-box').style.display = 'inline'
      document.getElementById('Register').style.display = 'none'
      document.getElementById('result').innerHTML = 'Oops! <br>' + errorMessage
    })
})

document.getElementById('sign-out-btn').addEventListener('click', function () {
  signOut(auth)
    .then(() => {
      document.getElementById('result-box').style.display = 'none'
      document.getElementById('sign-in').style.display = 'inline'
    })
    .catch(error => {
      document.getElementById('result').innerHTML = 'Oops! <br>' + errorMessage
    })
})
