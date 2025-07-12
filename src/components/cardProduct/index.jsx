import { forwardRef } from "react";
import { Link } from 'react-router-dom'
import './index.css'

const Card = forwardRef(({ product }, ref) => {
    return (
        <Link to={`/detail-product/${product.id}`} className="product-card">
            <figure ref={ref}>
                <img src={product.image} alt={product.title} className="product-image" />
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
            </figure>

        </Link>
    )
});

export { Card }