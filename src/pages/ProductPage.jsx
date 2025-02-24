import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL, getProductById } from "../services/baseBackEnd";
import Breadcrumbs from "../components/ui/breadCrumbs/BreadCrumbs";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import { getDiscount } from "../utils/cardRenderLogic";
import { useInitializeData } from "../hooks/initializeData";

export default function ProductPage() {
    useInitializeData() //обновляем справочник категорий и продуктов (id: title)

    const { categoryId, productId } = useParams();
    const [productInfo, setProductInfo] = useState({})

    useEffect(() => {
        async function loadProduct() {
            const product = await getProductById(Number(productId));
            setProductInfo(product[0]);
        }
        loadProduct();
    }, [productId])

    const discont = getDiscount(productInfo.price, productInfo.discont_price)
    return (
        <main>
            <Breadcrumbs />
            <ProductInfo
                title={productInfo.title}
                price={productInfo.price}
                discont_price={productInfo.discont_price}
                discont={discont}
                description={productInfo.description}
                image={`${BASE_URL}${productInfo.image}`}
            />
        </main>
    )
}
