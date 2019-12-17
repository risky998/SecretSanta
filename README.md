# SecretSanta
A Campus Wide Secret Santa Project!


This Christmas, we want everyone at Cornell to enjoy the festive season by participating in a campus-wide Secret Santa gift exchange!

The app was built using React and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

We used Google Firebase for our database and for hosting. 

Our matching algorithm was developed in Python. 

-----
__Frontend Folder__

The frontend folder contains all the instructions needed to run the React App, as well as detailed instructions on using Create React App.

Remember to `npm install -i` before attempting to run the Application. 

-----
__Algo Folder__

The algo folder contains the algorithm that we will be using to match people during the Secret Santa exchange. 

The algorithm was developed in Python and is a three part algorithm:

1. A querying and information retrieval script written in Javascript - this helps us obtain relevant information from the database. 

2. A preprocessing program written in Python. We use an external API to build a similarity matrix between different words in the categories of interest. We then give people similarity scores and create a similarity matrix for our participants. 

3. The third part of our algorithm is a graphing algorithm that actually matches people according to their similarities. 


