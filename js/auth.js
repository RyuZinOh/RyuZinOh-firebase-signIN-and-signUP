import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js';

const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const signUpEmail = document.getElementById('signUpEmail');
const signUpPassword = document.getElementById('signUpPassword');
const signInEmail = document.getElementById('signInEmail');
const signInPassword = document.getElementById('signInPassword');
const signUpError = document.getElementById('signUpError');
const signInError = document.getElementById('signInError');
const switchToSignIn = document.getElementById('switchToSignIn');
const switchToSignUp = document.getElementById('switchToSignUp');

// Function to switch to sign-up form
switchToSignUp.addEventListener('click', (e) => {
  e.preventDefault();
  signInForm.style.display = 'none';
  signUpForm.style.display = 'block';
  signUpError.textContent = '';  
  signInError.textContent = '';
});

// Function to switch to sign-in form
switchToSignIn.addEventListener('click', (e) => {
  e.preventDefault();
  signUpForm.style.display = 'none';
  signInForm.style.display = 'block';
  signUpError.textContent = '';  
  signInError.textContent = '';
});

// Handle sign-up
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signUpEmail.value;
  const password = signUpPassword.value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signed up:', userCredential.user);
      window.location.href = 'https://happilli.github.io';
    })
    .catch((error) => {
      signUpError.textContent = `Error signing up: ${error.message}`;
    });
});

// Handle sign-in
signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = signInEmail.value;
  const password = signInPassword.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signed in:', userCredential.user);
      
      window.location.href = 'https://happilli.github.io';
    })
    .catch((error) => {
      signInError.textContent = `Error signing in: ${error.message}`;
    });
});
