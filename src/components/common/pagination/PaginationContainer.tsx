import "./paginationContainer.scss";
import { CartData } from "@/types/cart";
import { Fragment } from "react";
import { CardView } from "@/components/screens/home/card/cardView";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import usePagination from "@/hooks/usePagination";

const PaginationContainer = (props: { totalProducts: CartData[] }) => {
  const { totalProducts } = props;
  const {
    productsPerPage,
    currentPage,
    totalNumberOfPages,
    handleArrowChangePageNumber,
    handlePageChange,
    pages,
  } = usePagination(totalProducts);

  return (
    <Fragment>
      <CardView
        totalProducts={productsPerPage.length}
        products={productsPerPage}
      />

      {totalNumberOfPages < 2 ? null : (
        <div className="pagination-container">
          <button
            onClick={() => handleArrowChangePageNumber("left", currentPage)}
          >
            <ArrowLeft fontSize={"inherit"} />
          </button>
          {pages.map((pageNumber: number) => (
            <button
              key={pageNumber}
              className={`${pageNumber === currentPage ? "active" : ""}`}
              onClick={() => handlePageChange(pageNumber)}
            >
              <p> {pageNumber}</p>
            </button>
          ))}
          <button
            onClick={() => handleArrowChangePageNumber("right", currentPage)}
          >
            <ArrowRight fontSize={"inherit"} />
          </button>
        </div>
      )}
    </Fragment>
  );
};
export default PaginationContainer;
