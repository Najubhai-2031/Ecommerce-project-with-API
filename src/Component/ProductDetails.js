import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductDetails(props) {


    const navigate = useNavigate();
    const [product, setProduct] = useState([])

    useEffect(() => {
        let aa = JSON.parse(localStorage.getItem('Item'))
        // console.log(aa)
        setProduct(aa)
    }, [])


    return (
        <React.Fragment>
            <div key={product.product_id}>
                <h1>{product.product_name}</h1>
                <p>{product.product_details}</p>
                <b>₹. {product.product_price}/-</b><br />
                <img src={product.product_image} style={{ height: '200px' }} alt={product.product_name} /><br />
                <button onClick={() => props.handleCart(product.product_id)}>Add To Cart</button><br />
                <button onClick={() => navigate('/Cart')}>View Cart</button><br />
                {props.message}
            </div>
        </React.Fragment>
    );
}

export default ProductDetails;