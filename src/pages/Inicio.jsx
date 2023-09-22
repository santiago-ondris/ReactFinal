import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/ItemListContainer';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Inicio = () => {
  const [products, setProducts] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productCollection = collection(db, 'productos');
        const querySnapshot = await getDocs(productCollection);

        const productData = [];
        querySnapshot.forEach((doc) => {
          const product = doc.data();
          productData.push(product);
        });

        setProducts(productData);
      } catch (error) {
        console.error('Error al obtener productos de Firestore:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ItemListContainer products={products} />
    </div>
  );
};

export default Inicio;
