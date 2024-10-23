import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchbyid, fetchpostdata, fetchputdata } from './Api';

const Addproduct = () => {
  let initialvalue = { category: '', name: '', brand: '', price: '', stock: '', image: '', desc: '' }
  let categories = ["Grocery", "Electronics", "accessories", "medical", "cloths"];
  const [product, setProduct] = useState({ ...initialvalue });

  // edit
  let { id } = useParams()
  useEffect(() => {
    if (id) {
      fetchbyid(id).then((res) => {
        return res.json().then(data => setProduct(data))

      })
    }
    else setProduct({ ...initialvalue })

  }, [id])



  const redirect = useNavigate()
  let handleImage = (e) => {
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      // console.log(reader);
      setProduct({ ...product, image: reader.result })
    }
  }

  const handleSubmit = async (event) => {
    // alert(JSON.stringify(event));
    event.preventDefault()
    if (!id) {
      try {
        await fetchpostdata(product)
        toast.success("Product added")
        redirect('/admin/view')
      }
      catch (err) { toast.error(err) }
    }
    else {
      try {
        await fetchputdata(id, product)
        toast.success("Product updated")
        redirect('/admin/view')
      }
      catch (err) { toast.error(err) }
    }

  }

  return (
    <>
      <Container className='shadow mt-2'>
        <h1>{id ? "Edit" : "Add"} product</h1><hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Category :</Form.Label>
            <Form.Select name='category' onChange={(e) => setProduct({ ...product, category: e.target.value })}>
              <option value='' disabled>Choose Category</option>
              {categories.map((c, i) => <option key={i}>{c}</option>)}
            </Form.Select>
          </Form.Group>
          <Row>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Name : </Form.Label>
                <Form.Control name='name' onChange={(e) => setProduct({ ...product, name: e.target.value })} value={product.name} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Brand : </Form.Label>
                <Form.Control name='brand' onChange={(e) => setProduct({ ...product, brand: e.target.value })} value={product.brand} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Price : </Form.Label>
                <Form.Control name='Price' type='number' onChange={(e) => setProduct({ ...product, price: e.target.value })} value={product.price} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Label>Stock : </Form.Label>
                <Form.Control name='stock' type='number' onChange={(e) => setProduct({ ...product, stock: e.target.value })} value={product.stock} />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className='mb-3'>
            <Form.Label>Choose file : </Form.Label>
            <Form.Control name='image' type='file' onChange={handleImage} />
            {id && <Image src={product.image} width={50} height={50} />}
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Description : </Form.Label>
            <Form.Control as='textarea' name='desc' onChange={(e) => setProduct({ ...product, desc: e.target.value })} value={product.desc} />
          </Form.Group>
          <Button className='mb-3' type='submit'>{id ? "Update Product" : "Add Product"}</Button>
        </Form>
      </Container>
    </>
  );
};

export default Addproduct;
