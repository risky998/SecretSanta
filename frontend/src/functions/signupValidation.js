import React from 'react';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
let firebase = require('firebase/app');
// Add the Firebase products that you want to use
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyAIlaCmBLkyR7ULibDrOl_sDkVa1vL6fKM',
  authDomain: 'cornell-secret-santa.firebaseapp.com',
  databaseURL: 'https://cornell-secret-santa.firebaseio.com',
  projectId: 'cornell-secret-santa',  
  storageBucket: 'cornell-secret-santa.appspot.com',
  messagingSenderId: '813348939741',
  appId: '1:813348939741:web:8d829a38a20481a96df834'
};

firebase.initializeApp(firebaseConfig)

/* Check:
1. firstName, lastName, message: exists
2. email: Valid Cornell email
3. confirmEmail: matches email
4. categories: at least one filled

Then, send error feedback to Signup for error message to be displayed.
If no errors, send to firebase
*/
export function signupValidation(form) {
    if (form.firstName == ""){
        alert('Please enter your first name!')
    } else if (form.lastName == ""){
        alert('Please enter your last name!')
    } else if (form.confirmEmail != form.email){
        alert('Emails do not match')
    } else if (form.categories.length == 0){
        alert('No categories selected')
    } else if (!/[a-z]{2,4}[0-9]{1,4}@cornell\.edu/.test(form.email)){
        alert('Invalid email. Please enter a valid cornell email! If you have a cornell email which was not accepted, please contact us at yy447@cornell.edu')
    } else {
        let db = firebase.firestore();
        db.collection('users')
        .doc(form.email)
        .get()
        .then(doc => {
            if (doc.exists){
                alert('You have already signed up. If you think there was a mistake, please contact us as yy447@cornell.edu')
                return
            } else {
                db.collection('users').doc(form.email).set({
                    First_Name: form.firstName,
                    Last_Name: form.lastName,
                    Email: form.email,
                    Price_Range: form.priceRange,
                    Categories: form.categories
                })
                .then(() => {
                    alert('Thank you for signing up! You can now close this page, and wait for an email notifying you on your gift recipient.', 'Your message was sent successfull');
                })
                .catch(err => {
                    console.log(err);
                    alert('danger', 'Your message could not be sent');
                });
            }
        })
    }
}