import { Link } from 'react-router-dom';

const ItemListContainer = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-4">
              <Link to={`/item/${product.id}`}>
                <img
                  src={product.imageUrl}
                  className="card-img-top"
                  alt={product.name}
                  height={400}
                  width={400}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{product.name}</h5>
                </div>
                <div className="mb-5 d-flex justify-content-around">
                  <p className="text-xl">Precio: ${product.price.toFixed(2)}</p>
                  <button className="btn btn-primary">Añadir al carrito</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;


