import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Función para agregar una orden a Firestore
const addOrder = async (buyer, items, total) => {
  const db = getFirestore();
  const ordersCollection = collection(db, 'ordenes');

  try {
    // Crea un documento de orden con los datos proporcionados
    const newOrderRef = await addDoc(ordersCollection, {
      buyer,
      items,
      total,
    });

    // Devuelve el ID de la orden generada
    return newOrderRef.id;
  } catch (error) {
    console.error('Error al agregar la orden a Firestore:', error);
    throw error;
  }
};

export default addOrder;
