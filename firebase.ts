import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAdv2R_Ey5xCF2NysgHlIorRB21B207dU4",
    authDomain: "dropbox-clone-1b452.firebaseapp.com",
    projectId: "dropbox-clone-1b452",
    storageBucket: "dropbox-clone-1b452.appspot.com",
    messagingSenderId: "1043239065778",
    appId: "1:1043239065778:web:91a9adcd3b4fdb579a51ab"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage };