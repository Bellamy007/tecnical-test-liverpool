import './detailProductLoader.css'
function DetailProductLoader() {
    return (
        <section className="product-detail">
            <div className="product-detail-image-wrapper">
                <div className="skeleton skeleton-image" />
                <div className="skeleton skeleton-price" />
            </div>

            <div className="product-detail-info">
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-text" />
                <div className="skeleton skeleton-text" />
                <div className="skeleton skeleton-text short" />
            </div>
        </section>
    );
}

export { DetailProductLoader };
