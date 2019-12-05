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
data = []

let db = firebase.firestore();
db.collection('users')
.get()
.then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // console.log(doc.id)
        data.push({email:doc.data().Email, categories:doc.data().Categories, price:doc.data().Price_Range})
        // data.push({first_name:doc.data().First_Name,last_name:doc.data().Last_Name, email:doc.data().Email})
    })
    console.log(data)
    console.log(data.length)
    const fs = require('fs')
    fs.writeFile('Data.json', JSON.stringify(data), (err) => {
        if (err) throw err;
    })
    // const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    // const csvWriter = createCsvWriter({
    // path: 'emails.csv',
    // header: [
    //     {id: 'first_name', title: 'First_name'},
    //     {id: 'last_name', title: 'Last_name'},
    //     {id: 'email', title: 'Email'},
    // ]
    // });
    // csvWriter
    // .writeRecords(data)
    // .then(()=> console.log('The CSV file was written successfully'));
})