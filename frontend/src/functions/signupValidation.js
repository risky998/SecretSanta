import { pickBy, mapKeys, keys } from 'lodash';

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

firebase.initializeApp(firebaseConfig);

/* Check:
1. firstName, lastName, message: exists
2. email: Valid Cornell email
3. confirmEmail: matches email
4. categories: at least one filled

Then, send error feedback to Signup for error message to be displayed.
If no errors, send to firebase
*/
export function* signupValidation({ form }) {
  try {
    let db = firebase.firestore();

    yield new Promise((res, rej) => {
      db.collection('users')
        .doc(form.email)
        .get()
        .then(doc => {
          console.log('here');
          if (doc.exists) {
            alert('You have already signed up');
            return;
          } else {
            db.collection('users')
              .doc(form.email)
              .set({
                First_Name: form.firstName,
                Last_Name: form.lastName,
                Email: form.email,
                Price_Range: form.priceRange,
                Categories: form.categories
              })

              .then(() => {
                res();
                alert('success', 'Your message was sent successfull');
              });
          }
        });
    });
  } catch (e) {
    console.log(e);
    alert('danger', 'Your message could not be sent');
  }
}
