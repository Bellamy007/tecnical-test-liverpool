import "./cardLoader.css";

function CardLoader() {
    return (
        <figure className="skeleton-card">
            <div className="skeleton-avatar" />
            <div className="skeleton-line" />
            <div className="skeleton-line short" />
        </figure>
    );
}

export { CardLoader };
