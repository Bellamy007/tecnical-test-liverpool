import { useEffect, useState, useRef, useCallback, useContext, useMemo } from "react";
import { SearchContext } from "../../context";
import { Card } from "../cardProduct";
import { CardLoader } from "../loaders/cardLoader/cardLoader";
import { API_KEY } from '../../config'
import './index.css'


function InfiniteProducts() {
    const { query } = useContext(SearchContext)
    const [products, setProducts] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const observerRef = useRef();
    const numberPerPage = 10;

    useEffect(() => {
        setProducts([]);
        setOffset(0);
        setHasMore(true);
    }, [query]);

    const fetchProducts = async () => {
        setLoading(true);
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${numberPerPage}&offset=${offset}&apiKey=${API_KEY}`
        ).then((response) => {
            if (!response.ok) {
                throw new Error('Error en la respuesta ☠️');
            }
            return response.json();
        }).then(data => {
            const results = data.results.map(item => {
                //random price, the api doesn't have a property price
                return { ...item, price: Math.floor(Math.random() * 2000) };
            });
            return { ...data, results }
        });

        setProducts((prev) => [...prev, ...data.results]);
        setHasMore(data.results.length === numberPerPage);
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts();
    }, [offset, query]);

    const lastProductRef = useCallback(
        (node) => {
            if (loading) return;
            if (observerRef.current) observerRef.current.disconnect();

            observerRef.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setOffset((prev) => prev + numberPerPage);
                }
            });

            if (node) observerRef.current.observe(node);
        },
        [loading, hasMore]
    );
    const skeletonLoadingCards = useMemo(
        () => new Array(10).fill().map((_, index) => <CardLoader key={index} />), []);
    return (
        <div className="products-list">
            {products.map((product, i) => (
                <Card
                    key={i}
                    product={product}
                    ref={i === products.length - 1 ? lastProductRef : null}
                />
            ))}
            {loading ? skeletonLoadingCards : (!products.length && <p>No se encontraron coincidencias</p>)}
        </div>
    );
}

export { InfiniteProducts };
