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

export function signupValidation() {

    handleSubmit(event) {
        event.preventDefault();
        const params = {
          firstName: this.inputFirstName.value,
          lastName: this.inputLastName.value,
          email: this.inputEmail.value,
          message: this.inputMessage.value,
          priceRange: this.state.priceRange
        };
        console.log(params);
        if (
          params.firstName &&
          params.lastName &&
          params.email &&
          params.message &&
          params.priceRange
        ) {
          let db = firebase.firestore();
          db.collection('users')
            .doc(params.email)
            .set({
              First_Name: params.firstName,
              Last_Name: params.lastName,
              Email: params.email,
              Message: params.message,
              Price_Range: params.priceRange
            })
            .then(() => {
              alert('success', 'Your message was sent successfull');
            })
            .catch(err => {
              console.log(err);
              alert('danger', 'Your message could not be sent');
            });
        }
      }
}