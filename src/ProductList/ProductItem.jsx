import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const ProductItem = () => {
  const products = useSelector(state => state.products.list);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleAddClick = (productName) => {
    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: `${productName} has been added to your cart!`,
      showConfirmButton: true,
      timer: 2000,
    });
  };

  return (
    <div>
      {/* Popular Products Start*/}
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-6">
              <div className="section-head text-center mt-8">
                <h3 className="h3style" data-title="Popular Products">
                  Mahsulotlar
                </h3>
                <div className="wt-separator bg-primarys"></div>
                <div className="wt-separator2 bg-primarys"></div>
              </div>
            </div>
          </div>

          <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
            {products.map((product) => (
              <div className="col fade-zoom" key={product.id}>
                <div className="card card-product">
                  <div className="card-body">
                    <div className="text-center position-relative">
                      <Link href="#!">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="mb-3 img-fluid"

                          style={{
                                minHeight: "150px",
                                maxHeight: "150px",
                                width: "100%",
                                objectFit: "cover",
                              }}
                        />
                      </Link>
                      <div className="card-product-action">
                        <button
                          className="btn-action"
                          onClick={() => setSelectedProduct(product)}
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i
                            className="bi bi-eye"
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Quick View"
                          />
                        </button>
                      </div>
                    </div>

                    <div className="text-small mb-1">
                      <small className="text-muted">
                        {/* {product.category.name} */}
                      </small>
                    </div>
                    <h2 className="fs-6">{product.name}</h2>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark">
                          {product.cost -
                            product.cost * (product.discount / 100) } so'm
                        </span>{" "}
                        <br />
                        <span className="text-decoration-line-through text-muted">
                          {product.cost} so'm
                        </span>
                      </div>
                      <div>
                         <Link to="#!" className="btn btn-primary btn-sm"
                            onClick={() => handleAddClick(product.name)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus"
                            >
                                <line x1={12} y1={5} x2={12} y2={19} />
                                <line x1={5} y1={12} x2={19} y2={12} />
                            </svg>{" "}
                            Savat
                            </Link>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Popular Products End*/}

      {/* Quick View Modal */}
      <div
        className="modal fade"
        id="quickViewModal"
        tabIndex="-1"
        aria-labelledby="quickViewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {selectedProduct && (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="quickViewModalLabel">
                    {selectedProduct.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body row">
                  <div className="col-md-6">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6">
                    <p>
                      {/* <strong>Bo'lim:</strong> {selectedProduct.category.name} */}
                    </p>
                    <p>
                      <strong>Tavsif:</strong>{" "}
                      {selectedProduct.description ||
                        "No description available."}
                    </p>
                    <p>
                      <strong>Narx:</strong>{" "}
                      {selectedProduct.cost -
                        selectedProduct.cost *
                          (selectedProduct.discount / 100)} so'm{" "}
                      <span className="text-muted text-decoration-line-through">
                        {selectedProduct.cost} so'm
                      </span>
                    </p>
                    <p>
                      <strong>Chegirma:</strong> {selectedProduct.discount}%
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddClick(selectedProduct.name)}
                    >
                      Savatchaga qo'shish
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
