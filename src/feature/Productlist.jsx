import React, { useEffect, useState } from 'react'
import products from './Products.js'
import Productitems from './Productitems.jsx'
import { Container } from 'react-bootstrap'
import { axiosfetchdata } from './Admin/Api.jsx'

const Productlist = () => {
let [product,setProduct]=useState([])
  let getData = async () => {
    try {
      let res = await axiosfetchdata
      setProduct(res.data)
    } catch (err) {
      toast.error(err);
    }
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <>
      <Container>
        <Productitems products={product} />
      </Container>
    </>
  )
}

export default Productlist
