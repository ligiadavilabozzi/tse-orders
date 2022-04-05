import React from 'react'
import { useState, useMemo } from "react";
import { sortRows, filterRows, paginateRows } from "../utils/helpers";
import { Pagination } from "./Pagination";

export const Table = ({ columns, rows, sellers }) => {
  const [activePage, setActivePage] = useState(1);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({ order: "asc", orderBy: "id" });
  const rowsPerPage = 5;
  let total1 = 0;
  let total2 = 0
  let total3 = 0

  const filteredRows = useMemo(() => filterRows(rows, filters), [
    rows,
    filters
  ]);
  const sortedRows = useMemo(() => sortRows(filteredRows, sort), [
    filteredRows,
    sort
  ]);
  const calculatedRows = paginateRows(sortedRows, activePage, rowsPerPage);

  const count = filteredRows.length;
  const totalPages = Math.ceil(count / rowsPerPage);

  const handleSearch = (value, accessor) => {
    setActivePage(1);

    if (value) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [accessor]: value
      }));
    } else {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[accessor];

        return updatedFilters;
      });
    }
  };

  const handleSort = (accessor) => {
    setActivePage(1);
    setSort((prevSort) => ({
      order:
        prevSort.order === "asc" && prevSort.orderBy === accessor
          ? "desc"
          : "asc",
      orderBy: accessor
    }));
  };

  return (
    <>
      {rows.map((row) => {
        if (row.seller == "1") {
          total1 += row.price;
        } else if (row.seller == "2") {
          total2 += row.price;
        } else if (row.seller == "3") {
          total3 += row.price;
        }
      })}
      <div className="totals">
        <div className="seller">
          Total of {sellers[0].name}:<div className="total">{total1}</div>
        </div>
        <div className="seller">
          Total of {sellers[1].name}:<div className="total">{total2}</div>
        </div>
        <div className="seller">
          Total of {sellers[2].name}:<div className="total">{total3}</div>
        </div>
      </div>

      <div className="filter">
        {columns.map((column) => {
          if (column.accessor == "country" || column.accessor == "seller") {
            return (
              <th className="filtering">
                <input
                  className="searcher"
                  key={`${column.accessor}-search`}
                  type="search"
                  placeholder={`Search ${column.label}`}
                  value={filters[column.accessor]}
                  onChange={(event) =>
                    handleSearch(event.target.value, column.accessor)
                  }
                />
              </th>
            );
          }
        })}
      </div>
      <div className="table-st">
        <table className="style-table">
          <thead>
            <tr>
              {columns.map((column) => {
                const sortIcon = () => {
                  if (column.accessor === sort.orderBy) {
                    if (sort.order === "asc") {
                      return <ion-icon name="arrow-up-outline"></ion-icon>;
                    }
                    return <ion-icon name="arrow-down-outline"></ion-icon>;
                  } else {
                    return <ion-icon name="filter-outline"></ion-icon>;
                  }
                };
                return (
                  <th key={column.accessor}>
                    <span>{column.label}</span>
                    <button onClick={() => handleSort(column.accessor)}>
                      {sortIcon()}
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {calculatedRows.map((row) => {
              return (
                <tr key={row.id}>
                  {columns.map((column) => {
                    if (column.format) {
                      return (
                        <td key={column.accessor}>
                          {column.format(row[column.accessor])}
                        </td>
                      );
                    }
                    return (
                      <td key={column.accessor}>{row[column.accessor]}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {count > 0 ? (
        <Pagination
          activePage={activePage}
          count={count}
          rowsPerPage={rowsPerPage}
          totalPages={totalPages}
          setActivePage={setActivePage}
        />
      ) : (
        <p>No data found</p>
      )}
    </>
  );
};
