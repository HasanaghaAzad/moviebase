import {PaginationProps} from "../types/types";

export default function Pagination({page, totalPages, onPageChange}: PaginationProps) {
  const handlePreviousPage = () => onPageChange(Math.max(page - 1, 1));
  const handleNextPage = () => onPageChange(Math.min(page + 1, totalPages));
  const handlePageClick = (pageNumber: number) => onPageChange(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;
    const halfMaxPageButtons = Math.floor(maxPageButtons / 2);
    let startPage = Math.max(page - halfMaxPageButtons, 1);
    const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

    if (endPage - startPage < maxPageButtons - 1) {
      startPage = Math.max(endPage - maxPageButtons + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageClick(i)} className={i === page ? "active" : ""}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination">
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Previous
      </button>
      {renderPageNumbers()}
      <button onClick={handleNextPage} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
}
