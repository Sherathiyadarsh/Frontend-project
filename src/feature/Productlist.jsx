import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_BY_CATEGORY, FILTER_BY_SHORT, selectCategory, selectFilters, selectSearch, selectSort } from "../redux/filterSlice.js";
import Productitems from "./Productitems.jsx";
import { axiosfetchdata } from "./Admin/Api.jsx";
import { toast } from "react-toastify";

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("")

  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilters);
  const selectedCategory = useSelector(selectCategory)
  const selectedSearch = useSelector(selectSearch)
  const selectedsort = useSelector(selectSort)

  const fetchData = async () => {
    try {
      const res = await axiosfetchdata();
      setProducts(res.data);
    } catch (err) {
      toast.error("Error fetching data: " + (err.message || err));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(FILTER_BY_CATEGORY({ category, products }));
  }, [category, products]);

  const categories = ["Grocery", "Electronics", "Accessories", "Medical", "Clothes"];
  useEffect(() => {
    dispatch(FILTER_BY_SHORT({ sort, products }));
  }, [sort, products]);
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={3}>
          <div className="mb-3 row">
            <label htmlFor="category" className="form-label col-4">Category: </label>
            <div className="col-8">
              <select value={category} onChange={(e) => setCategory(e.target.value)}
                className="form-select"
                id="category" >
                <option value="" disabled> Choose Category </option> {categories.map((c, i) => (<option key={i} value={c}> {c} </option>))}
              </select>
            </div>
          </div>
        </Col>
        <Col xs={4}>
          <div className="mb-3 row">
            <label htmlFor="sort" className="form-label col-4">Sort-by-price: </label>
            <div className="col-8">
              <select
                className="form-select"
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="" disabled>Sort By</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        {
          filteredProducts.length === 0 && (selectedCategory || selectedSearch || sort) ? (
            <h1>No Products Found</h1>
          ) : (
            <Productitems products={selectedCategory || selectedSearch || sort ? filteredProducts : products} />
          )
        }
      </Row >
    </Container>
  );
};

export default Productlist;