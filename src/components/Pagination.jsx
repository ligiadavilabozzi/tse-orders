import React from 'react'

export const Pagination = ({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage
}) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  return (
    <>
      <div className="pagination">
        <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
          <div>First</div>
          <ion-icon name="play-back-outline"></ion-icon>
        </button>
        <button
          disabled={activePage === 1}
          onClick={() => setActivePage(activePage - 1)}
        >
          <div>Previous</div>
          <ion-icon name="caret-back-outline"></ion-icon>
        </button>
        <p className="number-page">
          Page {activePage} of {totalPages}
        </p>

        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(activePage + 1)}
        >
          <div>Next</div>
          <ion-icon name="caret-forward-outline"></ion-icon>
        </button>

        <button
          disabled={activePage === totalPages}
          onClick={() => setActivePage(totalPages)}
        >
          <div>Last</div>
          <ion-icon name="play-forward-outline"></ion-icon>{" "}
        </button>
      </div>
    </>
  );
};
