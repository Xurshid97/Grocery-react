import React, { useEffect, useState } from "react";
import member1 from "../../images/01.jpg";
import member3 from "../../images/03.jpg";
import idea from "../../images/idea.gif";
import team from "../../images/team.gif";
import award from "../../images/award.gif";


import { Swiper, SwiperSlide } from "swiper/react";
import SocialNetworksCarousel from "./SocialNetworksCarousel";
import CaseStudySlider from "./CaseStudySlider";
import { MagnifyingGlass } from "react-loader-spinner";
import { Slide, Zoom } from "react-awesome-reveal";
import ScrollToTop from "../ScrollToTop";

const AboutUs = () => {
  // loading
  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 0);
  }, []);

  return (
    <div>
      <div>
        {loaderStatus ? (
          <div className="loader-container">
            {/* <PulseLoader loading={loaderStatus} size={50} color="#0aad0a" /> */}
            <MagnifyingGlass
              visible={true}
              height="100"
              width="100"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperclassName="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#0aad0a"
            />
          </div>
        ) : (
          <>
          <>
          <ScrollToTop/>
          </>
            <>
              {/* Hero */}
              <section className="position-relative pt-5">
                {/* Background */}
                <div
                  className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0"
                  style={{
                    backgroundImage: "url(assets/img/about/hero-bg.svg)",
                  }}
                >
                  <div className="d-lg-none" style={{ height: 960 }} />
                  <div className="d-none d-lg-block" style={{ height: 768 }} />
                </div>
                {/* Content */}
                <div className="container position-relative zindex-5 pt-5">
                  <div className="row">
                    <div className="col-lg-6">
                      {/* Breadcrumb */}

                      {/* Text */}
                      <Slide direction="down">
                      <h1 className="pb-2 pb-md-3">Biz haqimizda</h1>
                      <h3 className="pb-2 pb-md-3">Oziq-ovqat yetkazib berish kelajagi:</h3>
                      <p
                        className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3"
                        style={{ maxWidth: 526 }}
                      >
                        Bizning missiyamiz - har bir mijozimizga eng yaxshi
                        oziq-ovqat yetkazib berish xizmatini taqdim etish. Biz
                        sifat, tezlik va ishonchlilikka sodiqmiz, bu esa biz
                        bilan har bir buyurtmani ishonch bilan bajarishingizni
                        anglatadi.
                      </p>
                      {/* <img
                        src={clutch}
                        className=" d-dark-mode-none"
                        width={175}
                        alt="Clutch"
                      />
                      <img
                        src="assets/img/about/clutch-light.png"
                        className="d-none d-dark-mode-block"
                        width={175}
                        alt="Clutch"
                      />
                      <div className="row row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
                        <div className="col">
                          <h3 className="h2 mb-2">2,480</h3>
                          <p className="mb-0">
                            <strong>Remote</strong> Sales Experts
                          </p>
                        </div>
                        <div className="col">
                          <h3 className="h2 mb-2">760</h3>
                          <p className="mb-0">
                            <strong>New Clients</strong> per Month
                          </p>
                        </div>
                        <div className="col">
                          <h3 className="h2 mb-2">1,200</h3>
                          <p className="mb-0">
                            <strong>Requests</strong> per Week
                          </p>
                        </div>
                      </div> */}
                      </Slide>
                    </div>
                    {/* Images */}
                    <div className="col-lg-6 mt-xl-3 pt-5 pt-lg-4">
                      <div className="row row-cols-2 gx-3 gx-lg-4">
                        <div className="col pt-lg-5 mt-lg-1">
                          <Zoom>
                          <img
                            src={member1}
                            className="d-block rounded-3 mb-3 mb-lg-4"
                            alt="member"
                          />
                          </Zoom>
                          {/* <img
                      src={member2}
                      className="d-block rounded-3"
                     alt="member"
                    /> */}
                        </div>
                        <div className="col">
                          <Zoom>
                          <img
                            src={member3}
                            className="d-block rounded-3 mb-3 mb-lg-4"
                            alt="member"
                          />
                          </Zoom>
                          {/* <img
                      src={member4}
                      className="d-block rounded-3"
                     alt="member"
                    /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>

            <>
              <section className="container mt-8 mb-5 pt-lg-5" id="benefits">
                <Swiper
                  className="swiper pt-3"
                  modules={[]} // Use the modules prop to include the Pagination module
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    500: { slidesPerView: 2 },
                    991: { slidesPerView: 3 },
                  }}
                >
                  <div className="swiper-wrapper pt-4">
                    <SwiperSlide className="swiper-slide border-end-lg px-2">
                      <div className="text-center">
                        <Zoom>
                        <img
                          src={idea}
                          width="100"
                          alt="Bulb icon"
                          className="d-block mb-4 mx-auto"
                        />
                        </Zoom>
                        <Slide direction="up">
                        <h4 className="mb-2 pb-1">Kreativ yechimlar</h4>
                        <p className="mx-auto" style={{ maxWidth: "336px" }}>
                            Biz bilan siz har doim yangi va innovatsion
                            yechimlarni topasiz.
                        </p>
                        </Slide>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-end-lg px-2">
                      <div className="text-center">
                        <Zoom>
                        <img
                          src={award}
                          width="100"
                          alt="Award icon"
                          className="d-block mb-4 mx-auto"
                        />
                        </Zoom>
                        <Slide direction="up">
                        <h4 className="mb-2 pb-1">O'z vaqtida yetkazish</h4>
                        <p className="mx-auto" style={{ maxWidth: "336px" }}>
                          Sizning buyurtmangiz har doim o'z vaqtida va
                          mukammal holatda yetkaziladi.
                        </p>
                        </Slide>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide px-2">
                      <div className="text-center">
                        <Zoom>
                        <img
                          src={team}
                          width="100"
                          alt="Team icon"
                          className="d-block mb-4 mx-auto"
                        />
                        </Zoom>
                        <Slide direction="up">
                        <h4 className="mb-2 pb-1">Professional jamoa</h4>
                        <p className="mx-auto" style={{ maxWidth: "336px" }}>
                            Bizning jamoamiz sizga eng yaxshi xizmatni taqdim etishga
                            tayyor.
                        </p>
                        </Slide>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
                </Swiper>
              </section>
            </>


            <>
              <CaseStudySlider />
            </>
            <>
              {/* Contact form */}
              {/* <section className="container pb-5 mb-2 mt-8 mb-md-4 mb-lg-5">
                <div className="position-relative bg-secondaryy rounded-3 py-5 mb-2">
                  <div className="row pb-2 py-md-3 py-lg-5 px-4 px-lg-0 position-relative zindex-3">
                    <div className="col-xl-3 col-lg-4 col-md-5 offset-lg-1">
                      <Slide direction="down" delay={0.5}>
                      <p className="lead mb-2 mb-md-3">Ready to get started?</p>
                      <h2 className="h1 pb-3">Don’t Hesitate to Contact Us</h2>
                      </Slide>
                    </div>
                    <form
                      className="col-lg-6 col-md-7 offset-xl-1 zindex-3 needs-validation"
                      noValidate
                    >
                      <div className="row">
                        <div className="col-sm-6 mb-4">
                          <label htmlFor="name" className="form-label fs-base">
                            Full name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="form-control form-control-lg"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your name!
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4 zindex-3">
                          <label htmlFor="email" className="form-label fs-base">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            required
                          />
                          <div className="invalid-feedback">
                            Please provide a valid email address!
                          </div>
                        </div>
                        <div className="col-12 pb-2 mb-4">
                          <label
                            htmlFor="message"
                            className="form-label fs-base"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            className="form-control form-control-lg"
                            rows={4}
                            required
                            defaultValue={""}
                          />
                          <div className="invalid-feedback">
                            Please enter your message!
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary shadow-primary btn-lg"
                      >
                        Send request
                      </button>

                    </form>
                  </div>
                  {/* <div className="position-absolute end-0 bottom-0 text-primary">
              <svg
                width={416}
                height={444}
                viewBox="0 0 416 444"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.08"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M240.875 615.746C389.471 695.311 562.783 640.474 631.69 504.818C700.597 369.163 645.201 191.864 496.604 112.299C348.007 32.7335 174.696 87.5709 105.789 223.227C36.8815 358.882 92.278 536.18 240.875 615.746ZM208.043 680.381C388.035 776.757 605.894 713.247 694.644 538.527C783.394 363.807 709.428 144.04 529.436 47.6636C349.443 -48.7125 131.584 14.7978 42.8343 189.518C-45.916 364.238 28.0504 584.005 208.043 680.381Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.08"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M262.68 572.818C382.909 637.194 526.686 594.13 584.805 479.713C642.924 365.295 595.028 219.601 474.799 155.224C354.57 90.8479 210.793 133.912 152.674 248.33C94.5545 362.747 142.45 508.442 262.68 572.818ZM253.924 590.054C382.526 658.913 538.182 613.536 601.593 488.702C665.004 363.867 612.156 206.847 483.554 137.988C354.953 69.129 199.296 114.506 135.886 239.341C72.4752 364.175 125.323 521.195 253.924 590.054Z"
                  fill="currentColor"
                />
              </svg>
            </div>
                </div>
              </section> */}
            </>

            <>
              <SocialNetworksCarousel />
            </>
          </>
        )}
      </div>
    </div>
  );
};
export default AboutUs;
