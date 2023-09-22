import ItemDetail from '../components/ItemDetail';

function ProductDetailPage({ addToCart }) {

  return (
    <div>
      <ItemDetail onAddToCart={addToCart} />
    </div>
  );
}

export default ProductDetailPage;
