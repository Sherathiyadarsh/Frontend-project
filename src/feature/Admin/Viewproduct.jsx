import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FaPenAlt, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosdeletedata, axiosfetchdata } from './Api';

const Viewproduct = () => {
    let [product, setProduct] = useState([]);

    let getData = async () => {
        try {
            let res = await axiosfetchdata()
            setProduct(res.data)
        } catch (err) {
            toast.error(err);
        }
    }

    let handleDelet = async (id) => {
        if (window.confirm("Are you sure to delete this ? ")) {
            try {
                await axiosdeletedata(id)
                toast.success("Product deleted")
                getData()
            }
            catch (err) { toast.error(err) }
        }
    }


    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <div>
                <h3 className='mt-4'>View All Products</h3>
                <Table striped bordered hover className='mt-3'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Stock</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.length === 0 ? (
                            <tr>
                                <td colSpan={8} className='text-center'>No product found</td>
                            </tr>
                        ) : (
                            product.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td><img src={product.image} width={50} height={50} alt={product.name} /></td>
                                    <td>{product.category}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <Link type="button" class="btn btn-success me-2" to={`/admin/edit/${product.id}`}><FaPenAlt /></Link>
                                        <button type="button" class="btn btn-danger" onClick={() => handleDelet(product.id)} ><FaTrash /></button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Viewproduct;
