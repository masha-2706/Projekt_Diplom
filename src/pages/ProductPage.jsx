import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../services/baseBackEnd";

export default function ProductPage() {

    const { categoryId, productId } = useParams();
    const [productInfo, setProductInfo] = useState({})

    useEffect(() => {
        async function loadProduct() {
            const product = await getProductById(Number(productId));
            setProductInfo(product[0]);
        }
        loadProduct();
    }, [productId])
    console.log(productInfo);

    return (
        <main>


        </main>
    )
}
