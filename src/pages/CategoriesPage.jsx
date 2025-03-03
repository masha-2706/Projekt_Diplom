import React, { useEffect } from "react";
import Breadcrumbs from "../components/ui/breadCrumbs/BreadCrumbs";
import CategoriesContainer from "../components/CategoriesContainer/CategoriesContainer";
import { useCategories } from "../hooks/useCategories";
import BlockTitle from "../components/BlockTitle/BlockTitle";

export default function CategoriesPage() {

  const { categories, fetchCategories } = useCategories();

  // обновляю слайса категорий
  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  return (
    <main>
      {/* хлебные крошки */}
      <Breadcrumbs />
      <BlockTitle title="Categories" />
      <CategoriesContainer array={categories} />
    </main>
  );
}
