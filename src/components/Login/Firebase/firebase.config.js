const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
};
// const firebaseConfig = {
//     apiKey: "AIzaSyCwtkrQ4LTmdDRymmE5RD4yKAS1EpRV3MY",
//     authDomain: "travel-agency-247d7.firebaseapp.com",
//     projectId: "travel-agency-247d7",
//     storageBucket: "travel-agency-247d7.appspot.com",
//     messagingSenderId: "585169983508",
//     appId: "1:585169983508:web:e9528c4c312b2314b4af01"
// };
export default firebaseConfig;