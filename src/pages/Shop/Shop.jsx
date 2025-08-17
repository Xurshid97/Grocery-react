import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import ScrollToTop from "../ScrollToTop";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

function Dropdown() {
  const categories = useSelector((state) => state.products.categories);
  const subcategories = useSelector((state) => state.products.subcategories);
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();

    // add to cart of redux
  const addToCart = (product) => {
        dispatch({
            type: 'shop_cart/addToCart',
            payload: product
        });
    };

    const handleAddClick = (productName) => {
        Swal.fire({
          icon: "success",
          title: "Added to Cart",
          text: `${productName} has been added to your cart!`,
          showConfirmButton: true,
          timer: 2000,
        });
      };

  function generateDropdownData(categories, subcategories) {
    return categories.map(category => {
      const items = subcategories
        .filter(subcat => subcat.category.id === category.id)
        .map(subcat => subcat.name);
      return {
        title: category.name,
        items: items.length > 0 ? items : ["No subcategories available"]
      };
    });
  }
  const dropdownData = generateDropdownData(categories, subcategories);

  const [openDropdowns, setOpenDropdowns] = useState([]);
  const toggleDropdown = (index) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns(openDropdowns.filter(item => item !== index));
    } else {
      setOpenDropdowns([...openDropdowns, index]);
    }
  };

  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 1500);
  }, []);
  console.log(loaderStatus)
  // Search, filtering, sorting, pagination states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [sortOrder, setSortOrder] = useState("Featured");
  const [pageSize, setPageSize] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  // State for quick view modal product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filtering logic:
  // If searchTerm is set, filter by name only
  // Else if selectedSubcategory is set, filter by subcategory
  // Else show all products
  let filteredProducts = [];

  if (searchTerm.trim()) {
    filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else if (selectedSubcategory) {
    filteredProducts = products.filter(product =>
      product.subcategory.name === selectedSubcategory
    );
  } else {
    filteredProducts = products;
  }

  // Copy before sorting to avoid mutation errors
  let sortedProducts = [...filteredProducts];

  if (sortOrder === "Low to High") {
    sortedProducts.sort((a, b) =>
      (a.cost * (1 - a.discount / 100)) - (b.cost * (1 - b.discount / 100))
    );
  } else if (sortOrder === "High to Low") {
    sortedProducts.sort((a, b) =>
      (b.cost * (1 - b.discount / 100)) - (a.cost * (1 - a.discount / 100))
    );
  }

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / pageSize);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );


  return (
    <div>
      <ScrollToTop />
      <div className="container">
        <div className="row">
          <h5 className="mb-3 mt-8">{" "}</h5>

          {/* Sidebar */}
          <div className="col-md-3">
            <div className="py-4">
              <div className="my-4">
                {/* Search input */}
                <input
                  type="search"
                  className="form-control"
                  placeholder="Mahsulotlarni qidirish"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setSelectedSubcategory(null); // clear subcategory when searching
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <h5 className="mb-3">Bo'limlar</h5>
            {dropdownData.map((dropdown, index) => (
              <ul className="nav flex-column" key={index}>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#"
                    onClick={() => toggleDropdown(index)}
                    aria-expanded={openDropdowns.includes(index) ? "true" : "false"}
                    aria-controls={`categoryFlush${index + 1}`}
                  >
                    {dropdown.title} <i className="fa fa-chevron-down" />
                  </Link>

                  <div
                    className={`collapse ${openDropdowns.includes(index) ? "show" : ""}`}
                    id={`categoryFlush${index + 1}`}
                  >
                    <div>
                      <ul className="nav flex-column ms-3">
                        {dropdown.items.map((item, itemIndex) => (
                          <li className="nav-item" key={itemIndex}>
                            <Link
                              className={`nav-link ${selectedSubcategory === item ? "fw-bold text-primary" : ""}`}
                              to="#"
                              onClick={() => {
                                if (item !== "No subcategories available") {
                                  setSelectedSubcategory(item);
                                  setSearchTerm(""); // clear search when selecting subcategory
                                  setCurrentPage(1);
                                }
                              }}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>

          {/* Main content */}
          <div className="col-lg-9 col-md-8">
            {/* Title card */}
            <div className="card mb-4 bg-light border-0">
              <div className="card-body p-9">
                <h1 className="mb-0">{selectedSubcategory ?? "Barcha Mahsulotlar"}</h1>
              </div>
            </div>

            {/* Controls */}
            <div className="d-md-flex justify-content-between align-items-center mb-3">
              <div>
                <p className="mb-0">
                  <span className="text-dark">{filteredProducts.length}</span> Products found
                </p>
              </div>

              <div className="d-flex align-items-center gap-3">
                <select
                  className="form-select"
                  aria-label="Page size"
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value={50}>Show: 50</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </select>

                <select
                  className="form-select"
                  aria-label="Sort by price"
                  value={sortOrder}
                  onChange={(e) => {
                    setSortOrder(e.target.value);
                    setCurrentPage(1);
                  }}
                >
                  <option value="Featured">Sort by: Featured</option>
                  <option value="Low to High">Price: Low to High</option>
                  <option value="High to Low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products grid */}
            <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-2">
              {paginatedProducts.map((product, index) => (
                <div className="col" key={index}>
                  <div className="card card-product">
                    <div className="card-body">
                      <div className="text-center position-relative">
                        <div className="position-absolute top-0 start-0">
                          <span className="badge bg-success">{product.discount}%</span>
                        </div>
                        <Link
                          to="#!"
                          onClick={() => setSelectedProduct(product)}
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
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
                          <Link
                            to="#!"
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
                          </Link>
                        </div>
                      </div>

                      <div className="text-small mb-1">
                        <Link to="#!" className="text-decoration-none text-muted">
                          <small>{product.category}</small>
                        </Link>
                      </div>
                      <h2 className="fs-6">
                        <Link to="#!" className="text-inherit text-decoration-none">
                          {product.name}
                        </Link>
                      </h2>

                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                          <span className="text-dark">
                            {(product.cost - (product.cost * (product.discount / 100))).toFixed(2)} so'm
                          </span>
                          <br />
                          <span className="text-decoration-line-through text-muted">
                            {product.cost} so'm
                          </span>
                        </div>

                        <div>
                          <Link to="#!" className="btn btn-primary btn-sm" onClick={() => {
                            addToCart(product);
                            handleAddClick(product.name);
                          }}>
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

            {/* Pagination */}
            <div className="row mt-4">
              <div className="col">
                <nav>
                  <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                      <Link
                        className="page-link mx-1 rounded-3"
                        to="#"
                        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                        aria-label="Previous"
                      >
                        <i className="fa fa-chevron-left" />
                      </Link>
                    </li>

                    {[...Array(totalPages).keys()].map(page => (
                      <li
                        key={page}
                        className={`page-item ${currentPage === page + 1 ? "active" : ""}`}
                      >
                        <Link
                          className="page-link mx-1 rounded-3"
                          to="#"
                          onClick={() => setCurrentPage(page + 1)}
                        >
                          {page + 1}
                        </Link>
                      </li>
                    ))}

                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                      <Link
                        className="page-link mx-1 rounded-3"
                        to="#"
                        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                        aria-label="Next"
                      >
                        <i className="fa fa-chevron-right" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    onClick={() => setSelectedProduct(null)}
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
                      {/* Uncomment if category object available */}
                      {/* <strong>Bo'lim:</strong> {selectedProduct.category.name} */}
                    </p>
                    <p>
                      <strong>Tavsif:</strong>{" "}
                      {selectedProduct.description || "No description available."}
                    </p>
                    <p>
                      <strong>Narx:</strong>{" "}
                      {(selectedProduct.cost - selectedProduct.cost * (selectedProduct.discount / 100)).toFixed(2)} so'm{" "}
                      <span className="text-muted text-decoration-line-through">
                        {selectedProduct.cost} so'm
                      </span>
                    </p>
                    <p>
                      <strong>Chegirma:</strong> {selectedProduct.discount}%
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        addToCart(selectedProduct);
                      }}
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
}

export default Dropdown;
