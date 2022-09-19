import React from 'react';
import women from '../women.png';
import men from '../men.png';
import kids from '../kids.png';
import shoes from '../shoes.png';
import bags from '../bags.png';

function Home(props) {
  return (
    <React.Fragment>

      <a className="scrollToTop" href="#"><i className="fa fa-chevron-up"></i></a>
      {/* <!-- END SCROLL TOP BUTTON --> */}
      {/* <!-- Start Promo section --> */}
      <section id="aa-promo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-promo-area">
                <div className="row">
                  {/* <!-- promo left --> */}
                  <div className="col-md-5 no-padding">
                    <div className="aa-promo-left">
                      <div className="aa-promo-banner">
                        <img src={women} alt="img" />
                        <div className="aa-prom-content">
                          <span>75% Off</span>
                          <h4><a href="#">For Women</a></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- promo right --> */}
                  <div className="col-md-7 no-padding">
                    <div className="aa-promo-right">
                      <div className="aa-single-promo-right">
                        <div className="aa-promo-banner">
                          <img src={men} alt="img" />
                          <div className="aa-prom-content">
                            <span>Exclusive Item</span>
                            <h4><a href="#">For Men</a></h4>
                          </div>
                        </div>
                      </div>
                      <div className="aa-single-promo-right">
                        <div className="aa-promo-banner">
                          <img src={shoes} alt="img" />
                          <div className="aa-prom-content">
                            <span>Sale Off</span>
                            <h4><a href="#">On Shoes</a></h4>
                          </div>
                        </div>
                      </div>
                      <div className="aa-single-promo-right">
                        <div className="aa-promo-banner">
                          <img src={kids} alt="img" />
                          <div className="aa-prom-content">
                            <span>New Arrivals</span>
                            <h4><a href="#">For Kids</a></h4>
                          </div>
                        </div>
                      </div>
                      <div className="aa-single-promo-right">
                        <div className="aa-promo-banner">
                          <img src={bags} alt="img" />
                          <div className="aa-prom-content">
                            <span>25% Off</span>
                            <h4><a href="#">For Bags</a></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- / Promo section --> */}
      {/* <!-- Products section --> */}
      <section id="aa-product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="aa-product-area">
                  <div className="aa-product-inner">
                    {/* <!-- start prduct navigation --> */}
                    <ul className="nav nav-tabs aa-products-tab">
                      <li className="active"><a href="#men" data-toggle="tab">Men</a></li>
                      <li><a href="#women" data-toggle="tab">Women</a></li>
                      <li><a href="#sports" data-toggle="tab">Sports</a></li>
                      <li><a href="#electronics" data-toggle="tab">Electronics</a></li>
                    </ul>
                    {/* <!-- Tab panes --> */}
                    <div className="tab-content">
                      {/* <!-- Start men product category --> */}
                      <div className="tab-pane fade in active" id="men">
                        <ul className="aa-product-catg">
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sale" href="#">SALE!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-1.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-4.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-hot" href="#">HOT!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-5.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-6.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/man/polo-shirt-2.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Polo T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sale" href="#">SALE!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/man/t-shirt-1.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">T-Shirt</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                          </li>
                        </ul>
                        <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                      </div>
                      {/* <!-- / men product category --> */}
                      {/* <!-- start women product category --> */}
                      <div className="tab-pane fade" id="women">
                        <ul className="aa-product-catg">
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/women/girl-1.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">This is Title</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sale" href="#">SALE!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/women/girl-2.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-hot" href="#">HOT!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/women/girl-3.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/women/girl-4.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/women/girl-5.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>

                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/women/girl-6.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/women/girl-7.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sale" href="#">SALE!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/women/girl-1.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                          </li>
                        </ul>
                        <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                      </div>
                      {/* <!-- / women product category --> */}
                      {/* <!-- start sports product category --> */}
                      <div className="tab-pane fade" id="sports">
                        <ul className="aa-product-catg">
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/sports/sport-1.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">This is Title</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sale" href="#">SALE!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/sports/sport-2.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/sports/sport-3.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/sports/sport-4.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-hot" href="#">HOT!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/sports/sport-5.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/sports/sport-6.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/sports/sport-7.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sale" href="#">SALE!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/sports/sport-8.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- / sports product category --> */}
                      {/* <!-- start electronic product category --> */}
                      <div className="tab-pane fade" id="electronics">
                        <ul className="aa-product-catg">
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/electronics/electronic-1.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">This is Title</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sale" href="#">SALE!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/electronics/electronic-2.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/electronics/electronic-3.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/electronics/electronic-4.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-hot" href="#">HOT!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/electronics/electronic-5.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/electronics/electronic-6.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/electronics/electronic-7.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span><span className="aa-product-price"><del>$65.50</del></span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sale" href="#">SALE!</span>
                          </li>
                          {/* <!-- start single product item --> */}
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#"><img src="img/electronics/electronic-8.png" alt="polo shirt img" /></a>
                              <a className="aa-add-card-btn" href="#"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                              <figcaption>
                                <h4 className="aa-product-title"><a href="#">Lorem ipsum doller</a></h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span className="fa fa-heart-o"></span></a>
                              <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span className="fa fa-exchange"></span></a>
                              <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span className="fa fa-search"></span></a>
                            </div>
                            {/* <!-- product badge --> */}
                            <span className="aa-badge aa-sold-out" href="#">Sold Out!</span>
                          </li>
                        </ul>
                        <a className="aa-browse-btn" href="#">Browse all Product <span className="fa fa-long-arrow-right"></span></a>
                      </div>
                      {/* <!-- / electronic product category --> */}
                    </div>
                    {/* <!-- quick view modal -->                   */}
                    <div className="modal fade" id="quick-view-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                                          <img src="img/view-slider/medium/polo-shirt-1.png" className="simpleLens-big-image" />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="simpleLens-thumbnails-container">
                                      <a href="#" className="simpleLens-thumbnail-wrapper"
                                        data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                        data-big-image="img/view-slider/medium/polo-shirt-1.png">
                                        <img src="img/view-slider/thumbnail/polo-shirt-1.png" />
                                      </a>
                                      <a href="#" className="simpleLens-thumbnail-wrapper"
                                        data-lens-image="img/view-slider/large/polo-shirt-3.png"
                                        data-big-image="img/view-slider/medium/polo-shirt-3.png">
                                        <img src="img/view-slider/thumbnail/polo-shirt-3.png" />
                                      </a>

                                      <a href="#" className="simpleLens-thumbnail-wrapper"
                                        data-lens-image="img/view-slider/large/polo-shirt-4.png"
                                        data-big-image="img/view-slider/medium/polo-shirt-4.png">
                                        <img src="img/view-slider/thumbnail/polo-shirt-4.png" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* <!-- Modal view content --> */}
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="aa-product-view-content">
                                  <h3>T-Shirt</h3>
                                  <div className="aa-price-block">
                                    <span className="aa-product-view-price">$34.99</span>
                                    <p className="aa-product-avilability">Avilability: <span>In stock</span></p>
                                  </div>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis animi, veritatis quae repudiandae quod nulla porro quidem, itaque quis quaerat!</p>
                                  <h4>Size</h4>
                                  <div className="aa-prod-view-size">
                                    <a href="#">S</a>
                                    <a href="#">M</a>
                                    <a href="#">L</a>
                                    <a href="#">XL</a>
                                  </div>
                                  <div className="aa-prod-quantity">
                                    <form action="">
                                      <select name="" id="">
                                        <option defaultValue="0" >1</option>
                                        <option defaultValue="1">2</option>
                                        <option defaultValue="2">3</option>
                                        <option defaultValue="3">4</option>
                                        <option defaultValue="4">5</option>
                                        <option defaultValue="5">6</option>
                                      </select>
                                    </form>
                                    <p className="aa-prod-category">
                                      Category: <a href="#">Polo T-Shirt</a>
                                    </p>
                                  </div>
                                  <div className="aa-prod-view-bottom">
                                    <a href="#" className="aa-add-to-cart-btn"><span className="fa fa-shopping-cart"></span>Add To Cart</a>
                                    <a href="#" className="aa-add-to-cart-btn">View Details</a>
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
                    {/* <!-- / quick view modal -->               */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- / Products section --> */}
      <section id="aa-support">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-support-area">
                {/* <!-- single support --> */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-truck"></span>
                    <h4>FREE SHIPPING</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
                  </div>
                </div>
                {/* <!-- single support --> */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-clock-o"></span>
                    <h4>30 DAYS MONEY BACK</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
                  </div>
                </div>
                {/* <!-- single support --> */}
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="aa-support-single">
                    <span className="fa fa-phone"></span>
                    <h4>SUPPORT 24/7</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, nobis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- / Support section --> */}


      {/* <!-- Latest Blog --> */}
      <section id="aa-latest-blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-latest-blog-area">
                <h2>LATEST BLOG</h2>
                <div className="row">
                  {/* <!-- single latest blog --> */}
                  <div className="col-md-4 col-sm-4">
                    <div className="aa-latest-blog-single">
                      <figure className="aa-blog-img">
                        <a href="#"><img src="img/promo-banner-1.jpg" alt="img" /></a>
                        <figcaption className="aa-blog-img-caption">
                          <span href="#"><i className="fa fa-eye"></i>5K</span>
                          <a href="#"><i className="fa fa-thumbs-o-up"></i>426</a>
                          <a href="#"><i className="fa fa-comment-o"></i>20</a>
                          <span href="#"><i className="fa fa-clock-o"></i>June 26, 2016</span>
                        </figcaption>
                      </figure>
                      <div className="aa-blog-info">
                        <h3 className="aa-blog-title"><a href="#">Lorem ipsum dolor sit amet</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis.</p>
                        <a href="#" className="aa-read-mor-btn">Read more <span className="fa fa-long-arrow-right"></span></a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- single latest blog --> */}
                  <div className="col-md-4 col-sm-4">
                    <div className="aa-latest-blog-single">
                      <figure className="aa-blog-img">
                        <a href="#"><img src="img/promo-banner-3.jpg" alt="img" /></a>
                        <figcaption className="aa-blog-img-caption">
                          <span href="#"><i className="fa fa-eye"></i>5K</span>
                          <a href="#"><i className="fa fa-thumbs-o-up"></i>426</a>
                          <a href="#"><i className="fa fa-comment-o"></i>20</a>
                          <span href="#"><i className="fa fa-clock-o"></i>June 26, 2016</span>
                        </figcaption>
                      </figure>
                      <div className="aa-blog-info">
                        <h3 className="aa-blog-title"><a href="#">Lorem ipsum dolor sit amet</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis.</p>
                        <a href="#" className="aa-read-mor-btn">Read more <span className="fa fa-long-arrow-right"></span></a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- single latest blog --> */}
                  <div className="col-md-4 col-sm-4">
                    <div className="aa-latest-blog-single">
                      <figure className="aa-blog-img">
                        <a href="#"><img src="img/promo-banner-1.jpg" alt="img" /></a>
                        <figcaption className="aa-blog-img-caption">
                          <span href="#"><i className="fa fa-eye"></i>5K</span>
                          <a href="#"><i className="fa fa-thumbs-o-up"></i>426</a>
                          <a href="#"><i className="fa fa-comment-o"></i>20</a>
                          <span href="#"><i className="fa fa-clock-o"></i>June 26, 2016</span>
                        </figcaption>
                      </figure>
                      <div className="aa-blog-info">
                        <h3 className="aa-blog-title"><a href="#">Lorem ipsum dolor sit amet</a></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, ad? Autem quos natus nisi aperiam, beatae, fugiat odit vel impedit dicta enim repellendus animi. Expedita quas reprehenderit incidunt, voluptates corporis.</p>
                        <a href="#" className="aa-read-mor-btn">Read more <span className="fa fa-long-arrow-right"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- / Latest Blog --> */}

      {/* <!-- Client Brand --> */}
      <section id="aa-client-brand">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="aa-client-brand-area">
                <ul className="aa-client-brand-slider">
                  <li><a href="#"><img src="img/client-brand-java.png" alt="java img" /></a></li>
                  <li><a href="#"><img src="img/client-brand-jquery.png" alt="jquery img" /></a></li>
                  <li><a href="#"><img src="img/client-brand-html5.png" alt="html5 img" /></a></li>
                  <li><a href="#"><img src="img/client-brand-css3.png" alt="css3 img" /></a></li>
                  <li><a href="#"><img src="img/client-brand-wordpress.png" alt="wordPress img" /></a></li>
                  <li><a href="#"><img src="img/client-brand-joomla.png" alt="joomla img" /></a></li>
                  <li><a href="#"><img src="img/client-brand-java.png" alt="java img" /></a></li>
                  <li><a href="#"><img src="img/client-brand-jquery.png" alt="jquery img" /></a></li>
                  <li><a href="#"><img src="img/client-brand-html5.png" alt="html5 img" /></a></li>
                  <li><a href="#"><img src="img/client-brand-css3.png" alt="css3 img" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- / Client Brand --> */}


    </React.Fragment>
  );
}

export default Home;