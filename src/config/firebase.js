// import { initializeApp } from "firebase/app";
// import { getFirestore , collection, addDoc , getDocs} from "firebase/firestore";
// import { fetchDataFromApi } from "./api";
// const firebaseConfig = {
//   apiKey: "AIzaSyDE4pdbec9IvIznwdieZ1a4exQQ4LmafcQ",
//   authDomain: "olx-react-9f473.firebaseapp.com",
//   projectId: "olx-react-9f473",
//   storageBucket: "olx-react-9f473.appspot.com",
//   messagingSenderId: "1097658056062",
//   appId: "1:1097658056062:web:41bcb5ac4b9cc0ac08872f",
//   measurementId: "G-RG3YBTY75X"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// export const addDataToFireStore = async () =>{
//   try {
//     const apiData = await fetchDataFromApi();
//     console.log(apiData)
//     const docRef = await addDoc(collection(db, "Products"), apiData);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
 

// }

// export const getDataFromFirestore = async () =>{

//   const querySnapshot = await getDocs(collection(db, "Produts"));
//     const products = []
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//         products.push({ id: doc.id, ...doc.data() })
//     })

//     return products

// }