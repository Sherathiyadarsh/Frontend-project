import React, { useEffect, useState } from 'react';
import ProductData from './ProductData';
import Loader from './Loader';
import ReactPaginate from 'react-paginate';

const Productitems = ({ products }) => {
    // Pagination state
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

     useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, products]);

     const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    return (
        <>
             {products.length === 0 && <Loader />}
            {products.length > 0 && (
                <div className="row">
                    {currentItems.map((product) => (
                        <ProductData key={product.id} product={product} />
                    ))}
                </div>
            )}
             <div className="pagination-container">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageClassName="page-item"
                    activeClassName="active"
                    previousClassName="page-item"
                    nextClassName="page-item"
                    pageLinkClassName="page-link"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                />
            </div>
        </>
    );
};

export default Productitems;
