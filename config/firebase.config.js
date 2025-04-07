const admin = require('firebase-admin');
require('dotenv').config();
const firebaseConfig = require(process.env.FIREBASE_SERVICE_KEY);

console.log("Firebase Connected..")
admin.initializeApp({
    credential : admin.credential.cert(firebaseConfig)
});
