import { CartData } from "@/types/cart";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

enum Arrow {
  RIGHT = "right",
  LEFT = "left",
}

const usePagination = (totalProducts: CartData[]) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<CartData[]>([]);
  const pageLimit = 10;
  const totalNumberOfPages = Math.ceil(totalProducts.length / pageLimit);

  const pages = Array.from({ length: totalNumberOfPages }, (_, index) => {
    return index + 1;
  });

  const router = useRouter();

  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber);
    setProductsPerPage(
      handleProductsPerPage(pageNumber - 1, pageLimit, totalProducts)
    );

    router.push(
      `${
        pageNumber < 2
          ? router.pathname
          : `${router.pathname}?page=${pageNumber}`
      }`
    );
  }

  function handleProductsPerPage(
    currentPageNumber: number,
    pageLimit: number,
    products: CartData[]
  ) {
    const start = currentPageNumber * pageLimit;
    const end = pageLimit + start;

    return products?.slice(start, end);
  }

  useEffect(() => {
    setProductsPerPage(
      handleProductsPerPage(currentPage - 1, pageLimit, totalProducts)
    );
  }, [totalProducts, currentPage]);

  const handleArrowChangePageNumber = (
    arrowName: string,
    pageNumber: number
  ) => {
    let nextPage;

    if (pageNumber === pages.length) {
      nextPage = pages[0];
    } else if (pageNumber <= 1) {
      nextPage = pages.length;
    } else {
      nextPage = Arrow.RIGHT === arrowName ? pageNumber + 1 : pageNumber - 1;
    }

    setCurrentPage(nextPage);
    handlePageChange(nextPage);
  };

  return {
    handlePageChange,
    handleArrowChangePageNumber,
    productsPerPage,
    currentPage,
    totalNumberOfPages,
    pages,
  };
};

export default usePagination;
