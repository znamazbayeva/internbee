import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDerzU2YXZ8guhGbEgUf498kdmMoH8oZoQ",
  authDomain: "internbee-db.firebaseapp.com",
  databaseURL: "https://internbee-db-default-rtdb.firebaseio.com",
  projectId: "internbee-db",
  storageBucket: "internbee-db.appspot.com",
  messagingSenderId: "183552167694",
  appId: "1:183552167694:web:7834567f1295c6d068515f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
