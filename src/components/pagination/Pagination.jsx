import React from "react";

import '../pagination/Pagination.css'
export const Pagination = ({page, setPage, pageMin, pageMax}) => {
	function prevPageFive(){
		if( page <= 3 ){
			setPage(pageMax)
		}else{
			setPage( page - 3 );
		}
	}
	function nextPageFive(){
		if (page >= (pageMax - 3)) {
      setPage(pageMin);
    } else {
      setPage(page + 3);
    }
	}
	function nextPage() {
    if (page == pageMax) {
      setPage(pageMin);
    } else {
      setPage(page + 1);
    }
  }
  function prevPage() {
    if (page == pageMin) {
      setPage(pageMax);
    } else {
      setPage(page - 1);
    }
  }
  return (
    <div className="containerPagination">
      <button className="buttonYw" onClick={prevPageFive}>
        <box-icon name="chevrons-left" color="#fff" size="xs"></box-icon>
      </button>
      <button className="buttonYw" onClick={prevPage}>anterior</button>
      <span className="numbersPage">Pagina {page}</span>
      <button className="buttonYw" onClick={nextPage}>siguiente</button>
      <button className="buttonYw" onClick={nextPageFive}>
        <box-icon name="chevrons-right" color="#fff" size="xs"></box-icon>
      </button>
    </div>
  );
};
