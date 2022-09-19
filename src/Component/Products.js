import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function Products(props) {
  const [product, setProduct] = useState([])
 
  useEffect(() => {
    let aa = JSON.parse(localStorage.getItem('Item'))
    setProduct(aa)
  }, [])

if(props.error === 'Network Error'){
  return(
    <React.Fragment>
        {/* <!-- product category --> */}
        <section id="aa-product-category">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-8 col-md-push-3">
                <div className="aa-product-catg-content">
                  <div className="aa-product-catg-head">
                    <div className="aa-product-catg-head-left">
                      <form action="" className="aa-sort-form">
                        <label htmlFor="">Sort by</label>
                        <select >
                          <option value="1" defaultValue="Default">Default</option>
                          <option value="2">Name</option>
                          <option value="3">Price</option>
                          <option value="4">Date</option>
                        </select>
                      </form>
                      <form action="" className="aa-show-form">
                        <label htmlFor="">Show</label>
                        <select >
                          <option value="1" defaultValue="12">12</option>
                          <option value="2">24</option>
                          <option value="3">36</option>
                        </select>
                      </form>
                    </div>
                    <div className="aa-product-catg-head-right">
                      <a id="grid-catg" href="#"><span className="fa fa-th"></span></a>
                      <a id="list-catg" href="#"><span className="fa fa-list"></span></a>
                    </div>
                  </div>

                  {/* Map Method Start */}
                  <div className="aa-product-catg-body" >
                    <h1>
                      Unable To Connect API
                    </h1>
                  </div>
                  {/* Map Method End */}
                </div>
              </div>

              {/* Sidebar component */}
              <Sidebar />

            </div>
          </div>
        </section>
        {/* <!-- / product category --> */}
      </React.Fragment>
  )
}
  else if (!props.isloading) {
    return (
      <React.Fragment>
        {/* <!-- product category --> */}
        <section id="aa-product-category">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-8 col-md-push-3">
                <div className="aa-product-catg-content">
                  <div className="aa-product-catg-head">
                    <div className="aa-product-catg-head-left">
                      <form action="" className="aa-sort-form">
                        <label htmlFor="">Sort by</label>
                        <select >
                          <option value="1" defaultValue="Default">Default</option>
                          <option value="2">Name</option>
                          <option value="3">Price</option>
                          <option value="4">Date</option>
                        </select>
                      </form>
                      <form action="" className="aa-show-form">
                        <label htmlFor="">Show</label>
                        <select >
                          <option value="1" defaultValue="12">12</option>
                          <option value="2">24</option>
                          <option value="3">36</option>
                        </select>
                      </form>
                    </div>
                    <div className="aa-product-catg-head-right">
                      <a id="grid-catg" href="#"><span className="fa fa-th"></span></a>
                      <a id="list-catg" href="#"><span className="fa fa-list"></span></a>
                    </div>
                  </div>

                  {/* Map Method Start */}
                  <div className="aa-product-catg-body" >
                    <h1>
                      Loading
                    </h1>
                  </div>
                  {/* Map Method End */}
                </div>
              </div>

              {/* Sidebar component */}
              <Sidebar />

            </div>
          </div>
        </section>
        {/* <!-- / product category --> */}
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        {/* <!-- product category --> */}
        <section id="aa-product-category">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-8 col-md-push-3">
                <div className="aa-product-catg-content">
                  <div className="aa-product-catg-head">
                    <div className="aa-product-catg-head-left">
                      <form action="" className="aa-sort-form">
                        <label htmlFor="">Sort by</label>
                        <select >
                          <option value="1" defaultValue="Default">Default</option>
                          <option value="2">Name</option>
                          <option value="3">Price</option>
                          <option value="4">Date</option>
                        </select>
                      </form>
                      <form action="" className="aa-show-form">
                        <label htmlFor="">Show</label>
                        <select >
                          <option value="1" defaultValue="12">12</option>
                          <option value="2">24</option>
                          <option value="3">36</option>
                        </select>
                      </form>
                    </div>
                    <div className="aa-product-catg-head-right">
                      <a id="grid-catg" href="#"><span className="fa fa-th"></span></a>
                      <a id="list-catg" href="#"><span className="fa fa-list"></span></a>
                    </div>
                  </div>

                  {/* Map Method Start */}
                  <div className="aa-product-catg-body" >
                    {
                      props.product.map(item =>
                        <>
                          <div id='abc' className='abc'>
                            <div key={item.product_id}>

                              <ul className="aa-product-catg " >
                                <li>
                                  <figure>

                                    <Link className="aa-product-img" to='/ProductDetails'><img src={item.product_image} style={{ height: '300px', width: '250px' }} alt="polo shirt img" /></Link>

                                    <a className="aa-add-card-btn" onClick={() => props.handleCart(item.product_id)} href='#'><span className="fa fa-shopping-cart"></span>Add To Cart</a>

                                    <figcaption>
                                      <h4 className="aa-product-title"><a href="#">{item.product_name}</a></h4>
                                      <span className="aa-product-price">₹{item.product_price}</span>
                                    </figcaption>
                                  </figure>

                                  <div className="aa-product-hvr-content">

                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>

                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>

                                    <Link to='/ProductDetails' data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></Link>

                                  </div>
                                  <span className="aa-badge aa-sale" href="#">SALE!</span>
                                </li>

                              </ul>

                              <div div className="modal fade" id="quick-view-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-body">
                                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                      <div className="row">
                                        {/* <!-- Modal view slider --> */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                          <div className="aa-product-view-slider">
                                            <div className="simpleLens-gallery-container" id="demo-1">
                                              <div className="simpleLens-container">
                                                <div className="simpleLens-big-image-container">
                                                  <a className="simpleLens-lens-image" data-lens-image="img/view-slider/large/polo-shirt-1.png">
                                                    <img src={props.image} className="simpleLens-big-image" />
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* <!-- Modal view content --> */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                          <div className="aa-product-view-content">
                                            <h3>{props.name}</h3>
                                            <div className="aa-price-block">
                                              <span className="aa-product-view-price">₹{props.price}</span>
                                              <p className="aa-product-avilability">Avilability: <span>In stock</span></p>
                                            </div>
                                            <p>{props.details}</p>
                                            <h4>Size</h4>
                                            <div className="aa-prod-view-size">
                                              <a href="#">S</a>
                                              <a href="#">M</a>
                                              <a href="#">L</a>
                                              <a href="#">XL</a>
                                            </div>
                                            <div className="aa-prod-quantity">
                                              <form action="">
                                                <select name="">
                                                  <option value="0" defaultValue="1">1</option>
                                                  <option value="1">2</option>
                                                  <option value="2">3</option>
                                                  <option value="3">4</option>
                                                  <option value="4">5</option>
                                                  <option value="5">6</option>
                                                </select>
                                              </form>
                                              <p className="aa-prod-category">
                                                Category: <a href="#">{props.category}</a>
                                              </p>
                                            </div>
                                            <div className="aa-prod-view-bottom">
                                              <a href="#" className="aa-add-to-cart-btn"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                              <a href="#" className="aa-add-to-cart-btn" >View Details</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <!-- /.modal-content --> */}
                                </div>
                                {/* <!-- /.modal-dialog --> */}
                              </div>
                              {/* <!-- / quick view modal -->    */}
                            </div>
                          </div>
                        </>
                      )
                    }
                  </div>
                  {/* Map Method End */}
                </div>
              </div>

              {/* Sidebar component */}
              <Sidebar />

            </div>
          </div>
        </section>
        {/* <!-- / product category --> */}
      </React.Fragment>
    );
  }
}

export default Products;