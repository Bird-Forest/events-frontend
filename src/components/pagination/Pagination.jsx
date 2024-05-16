import React from 'react';
import classNames from 'classnames';

export default function Pagination({
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);

  const setPage = newPage => {
    onPageChange(newPage);
  };

  return (
    <div className="pagination">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ←
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={classNames('page', { active: currentPage === index + 1 })}
          onClick={() => setPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        →
      </button>
    </div>
  );
}

// export default Pagination;
