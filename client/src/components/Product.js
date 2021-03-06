import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
let seller_id = "";
  let seller_name = ""
  if( product && product.seller && product.seller._id){
     seller_id =  product.seller.seller_id
     seller_name =   product.seller.name                                                                                                                                     
  }
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">{product.price}</div>
          <div>
            <Link to={`/seller/${seller_id}`}>
              { seller_name }
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
