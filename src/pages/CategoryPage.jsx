import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import { collection, getDocs, query, where, getFirestore } from 'firebase/firestore';

const CategoryPage = () => {
  const db = getFirestore();
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const q = query(collection(db, 'productos'), where('category', '==', category));
      const productData = [];

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const product = doc.data();
          productData.push(product);
        });

        setFilteredProducts(productData);
      } catch (error) {
        console.error('Error al obtener productos de Firestore:', error);
      }
    };

    fetchProducts();
  }, [db, category]);

  return (
    <div>
      <h2 className="text-center mb-4">{category}</h2>
      <ItemListContainer products={filteredProducts} />
    </div>
  );
};

export default CategoryPage;


