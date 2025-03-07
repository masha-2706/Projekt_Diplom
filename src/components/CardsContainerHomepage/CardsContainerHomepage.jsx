import BlockTitle from "../BlockTitle/BlockTitle";
import CategoryCard from "../CategoryCard/CategoryCard";
import ProductCard from "../ProductCard/ProductCard";
import s from "./CardsContainerHomepage.module.css";

export default function CardsContainerHomepage({ title, array }) {
    return (
        <section className={s.cardsContainer_homePage_wrapper}>
            <BlockTitle title={title} navButton={true} />
            <div className={s.CardsContainer_container}>

                {title === 'Categories' && array.map((el) => (
                    <CategoryCard
                        key={el.id}
                        title={el.title}
                        image={el.image}
                        id={el.id}
                    />))}

                {title === 'Sale' && array.map((el) => (
                    <ProductCard key={el.id} {...el}
                    />))}
            </div>
        </section>
    )
}
