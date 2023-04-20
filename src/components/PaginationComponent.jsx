import React from "react";
import {
    NextButton,
    PageButton,
    Pagination,
    PrevButton,
  } from "react-headless-pagination";
  
function PaginationComponent({ data, setPage, page, setIsLoading }) {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handlePageChange = (page) => {
    scroll();
    setPage(page);
    setIsLoading(prevState => !prevState)
    window.localStorage.setItem("page", page);
  };

  return (
    <Pagination
      className="mx-auto flex h-10 w-full max-w-screen-2xl select-none items-center justify-center py-10 px-5 text-sm"
      currentPage={page}
      edgePageCount={3}
      middlePagesSiblingCount={2}
      setCurrentPage={handlePageChange}
      totalPages={Math.ceil(data.count / 20)}
      truncableClassName="w-10 px-0.5 text-center text-black text-white transition-colors"
    >
      {data.previous && (
        <PrevButton className="mr-2 flex cursor-pointer items-center rounded-lg px-3 py-2 transition-colors hover:bg-pokeRed   focus:outline-none bg-gray-600 text-gray-100  hover:text-gray-200">
          Previous
        </PrevButton>
      )}

      <ul className="hidden flex-grow items-center justify-center gap-1 sm:flex list-none">
        <PageButton
        
          activeClassName="bg-pokeRed text-white bg-pokeRed text-white transition-colors"
          className="flex  h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-600 transition-colors hover:bg-pokeRed hover:text-white text-gray-100"
        />
      </ul>

      {data.next && (
        <NextButton className="mr-2 flex cursor-pointer items-center rounded-lg px-3 py-2 transition-colors hover:bg-pokeRed focus:outline-none bg-gray-600 text-gray-100 hover:text-gray-200">
          Next
        </NextButton>
      )}
    </Pagination>
  );
}

export { PaginationComponent };
