export default function ProductInfo({ title, price, discont_price, description, image }) {

    return (
        <div>
            <div>
                <img src={image} alt={`Product ${title}`} />
            </div>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    )
}
