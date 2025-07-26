import "./styles.css"
const ProductCard = ({ image, title }) => {

    return (
        <div className="card-container">
            <div id="image" className="card">
                <img
                    className="imae-style"
                    alt="productImage"
                    src={image}>
                </img>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default ProductCard;