import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { API_KEY } from '../../config';
import { DetailProductLoader } from '../../components/loaders/detailProductLoader/detailProductLoader';
import './index.css';


function DetailProduct() {
    const { id } = useParams();
    const location = useLocation();
    const productPrice = location.state?.product.price;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
                if (!res.ok) throw new Error('Error al obtener el detalle 👀');
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (loading) return <DetailProductLoader />;
    if (!product) return <p>No se encontró el producto.</p>;

    return (
        <section className="product-detail">
            <div className="product-detail-image-wrapper">
                <img src={product.image} alt={product.title} className="product-detail-image" />
                <p className="product-detail-price">${productPrice?.toFixed(2) || '—'}</p>
            </div>

            <div className="product-detail-info">
                <h1 className="product-detail-title">{product.title}</h1>
                <p className="product-detail-description"
                    dangerouslySetInnerHTML={{ __html: product.summary || 'Descripción no disponible.' }}>
                </p>
            </div>
        </section>
    );
}

export { DetailProduct };
