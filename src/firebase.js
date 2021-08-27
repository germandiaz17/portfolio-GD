import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDouio6Mbc6Vh7LN6SZQkMDwsioFhB6GqE",
    authDomain: "portfolio-gd.firebaseapp.com",
    projectId: "portfolio-gd",
    storageBucket: "portfolio-gd.appspot.com",
    messagingSenderId: "313404272095",
    appId: "1:313404272095:web:0ebe42490041caf3a9286a",
    measurementId: "G-0ETPFJYD10"
}

firebase.initializeApp(config)

let storage = firebase.storage()
let pathReference = storage.ref('../CV.pdf')

export default firebase