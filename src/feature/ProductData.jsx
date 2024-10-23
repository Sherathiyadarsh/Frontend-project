import React, { useContext } from 'react'
import { DataContaxt } from './ContaxtData'

const ProductData = ({ product }) => {
    const data = useContext(DataContaxt)
    let handleCart = () => {
        data.addtocart(product)
    }
    return (
        <div className='col-3'>
            <div className="card">
                <img className="card-img-top" src={product.image} alt={product.name} />
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.price}</p>
                    <p className="card-text">{product.stock}</p>
                    <button type="button" class="btn btn-primary" onClick={handleCart}>Add to cart</button>
                </div>
            </div>

        </div>
    )
}

export default ProductData
