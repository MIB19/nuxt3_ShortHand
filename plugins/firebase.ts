import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, getDocs, collection } from "firebase/firestore";

export default defineNuxtPlugin(async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBGKvBbvhwQL4F6hjLavbnEuNKhSoEX5j8",
    authDomain: "nuxt3-project.firebaseapp.com",
    projectId: "nuxt3-project",
    storageBucket: "nuxt3-project.appspot.com",
    messagingSenderId: "989395740787",
    appId: "1:989395740787:web:870932ca83da5a08cee206",
    measurementId: "G-3TRHEBWFZL",
  };
  const app = await initializeApp(firebaseConfig);
  const db = await getFirestore(app);
  return {
    provide: {
      db,
      addDoc,
      getDocs,
      collection,
    },
  };
});
