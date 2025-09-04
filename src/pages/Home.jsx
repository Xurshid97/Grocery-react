import slider1 from "../images/slide-1.jpg";
import clock from "../images/clock.svg";
import gift from "../images/gift.svg";
import package1 from "../images/package.svg";
import refresh from "../images/refresh-cw.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductItem from "../ProductList/ProductItem";
import { Zoom } from "react-awesome-reveal";
import { useEffect } from "react";
import FAQ from "./FooterElements/Faq";
import { useSelector } from 'react-redux';

const Home = () => {
  const { categories } = useSelector(
    state => state.products
  );

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

//   const settings1 = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 1,
//     responsive: [
//       {
//         breakpoint: 1600,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };
//   const settings2 = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 2,
//     initialSlide: 1,
//     responsive: [
//       {
//         breakpoint: 1600,
//         settings: {
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
      console.log(loaderStatus)
    }, 1500);
  }, [loaderStatus]);

  return (
    <div>
      <div>
        {<>
            <>
              <div className="scroll-to-top">
                <button
                  onClick={scrollToTop}
                  className={`scroll-to-top-button ${isVisible ? "show" : ""}`}
                >
                  ↑
                </button>
              </div>
              <section className="hero-section">
                <div className="container mt-8">
                  <div
                    id="carouselExampleFade"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div
                          style={{
                            background: `url(${slider1}) no-repeat`,
                            backgroundSize: "cover",
                            borderRadius: ".5rem",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="ps-lg-12 py-lg-16 col-xxl-5 col-md-7 py-14 px-8 text-xs-center">
                            <span className="badge text-bg-warning">
                              50% gacha Chegirmalar
                            </span>
                            <h2 className="text-dark display-5 fw-bold mt-4">
                              Kunlik xaridlar <br /> Fresh Grocery
                            </h2>
                            <p className="lead">
                                Fresh Grocery - bu sizning barcha oziq-ovqat
                                mahsulotlaringiz uchun yagona manzilingiz. Biz
                                sizga eng yaxshi narxlar va sifatli mahsulotlarni
                                taqdim etamiz.
                            </p>
                            <Link to="#!" className="btn btn-dark mt-3">
                                Hoziroq xarid qiling{" "}
                              <i className="feather-icon icon-arrow-right ms-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link
                      className="carousel-control-prev"
                      to="#carouselExampleFade"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </Link>
                    <Link
                      className="carousel-control-next"
                      to="#carouselExampleFade"
                      role="button"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </Link>
                  </div>
                </div>
              </section>
            </>
            <>
              {/* section category */}
              <section className="my-lg-4 my-8">
                <div className="container ">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-6">
                        {/* heading    */}
                        <div className="section-head text-center mt-8">
                          <h3
                            className="h3style"
                            data-title="Odatiy toifalar"
                          >
                            Odatiy toifalar
                          </h3>
                          <div className="wt-separator bg-primarys"></div>
                          <div className="wt-separator2 bg-primarys"></div>
                          {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      {categories.slice(0, 5).map((category) => (
                        <div
                          className="col-lg-2 col-md-4 col-6 fade-zoom"
                          key={category.id}
                        >
                          <Zoom>
                            <div className="text-center mb-10">
                              {/* img */}
                              <Link to="/Shop">
                                <img
                                  src={category.image}
                                  alt={category.name}
                                  className="card-image rounded-circle"
                                />
                              </Link>
                              {/* text */}
                              <div className="mt-4">
                                <h5 className="fs-6 mb-0">
                                  {" "}
                                  <Link to="/Shop" className="text-inherit">
                                    {category.name}
                                  </Link>
                                </h5>
                              </div>
                            </div>
                          </Zoom>
                        </div>
                      ))}
                    </div>
                    <div className="text-center mt-4">
                    <Link to="/Shop" className="btn btn-primary">
                        Boshqa bo'limlar
                    </Link>
                    </div>
                  </div>
                </div>
              </section>
              {/* section */}
            </>
            <>
              <ProductItem />
            </>
            <>
              <section className="my-lg-14 my-8">
                <div className="container" style={{ marginTop: 50 }}>
                  <div
                    className="row justify-content-center  g-4"
                    style={{ textAlign: "center" }}
                  >
                    <div className="col-md-3 col-sm-6 fade-zoom ">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={refresh} alt="refresh" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">Oson qaytarish</h3>
                              <p>
                                Mahsulotdan mamnun emassizmi? Uni eshik oldida
                                qaytarib, soat ichida pulingizni qaytarib oling.
                                Hech qanday savol berilmaydi
                                {/* <Link to="#!">siyosat</Link>. */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={package1} alt="package" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">Keng assortiment</h3>
                              <p>
                                Oziq-ovqat, shaxsiy parvarish, uy-ro'zg'or, non
                                mahsulotlari, sabzavotlar va go'shtli va
                                go'shtli bo'lmagan boshqa toifalar bo'yicha
                                5000+ mahsulotdan tanlang.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={gift} alt="gift" />
                              </div>
                            </div>
                            <div className="icon-content">
                              <h3 className="h5 mb-3">
                                Eng yaxshi narxlar va takliflar
                              </h3>
                              <p>
                                Mahalliy supermarketingizga qaraganda arzonroq
                                narxlar, ustiga ajoyib naqd pul takliflari.
                                Eng yaxshi narxlar va takliflardan foydalaning.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                    <div className="col-md-3 col-sm-12 fade-zoom">
                      <Zoom>
                        <div className="shadow-effect">
                          <div className="wt-icon-box-wraper center p-a25 p-b50 m-b30 bdr-1 bdr-gray bdr-solid corner-radius step-icon-box bg-white v-icon-effect">
                            <div className="icon-lg m-b20">
                              <div className="mb-6">
                                <img src={clock} alt="clock" />
                              </div>
                            </div>
                            <div className="icon-content">
                              {/* <h4 className="wt-tilte">Reports</h4> */}
                              <h3 className="h5 mb-3">10 daqiqada yetkazib berish</h3>
                              <p>
                                Buyurtmangizni 10 daqiqada yetkazib beramiz.
                                Bizning tezkor yetkazib berish xizmatimiz
                                yordamida oziq-ovqat mahsulotlarini tezda
                                oling. Sizning qulayligingiz biz uchun muhim.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Zoom>
                    </div>
                  </div>
                </div>
              </section>
            </>
            <>
              <FAQ />
            </>
          </>}
      </div>
    </div>
  );
};

export default Home;
