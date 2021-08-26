import { collection, getDocs } from "firebase/firestore";
import { db } from '@/.firebase'

export function obtenerRopas() {
    getDocs(collection(db, 'Ropas')).then(querySnapshot =>
      querySnapshot.forEach(doc => {
        console.log(doc.data())
      })
    )
  }