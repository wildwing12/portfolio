import React from "react";
import cabin from "../../common/assets/img/portfolio/cabin.png";
import cake from "../../common/assets/img/portfolio/cake.png";
import circus from "../../common/assets/img/portfolio/circus.png";
import game from "../../common/assets/img/portfolio/game.png";
import safe from "../../common/assets/img/portfolio/safe.png";
import submarine from "../../common/assets/img/portfolio/submarine.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";

const FirstPage = () => {
  return (
    <section className="page-section portfolio" id="home">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal1"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon={faPlus} size="3x" />
                </div>
              </div>
              <img className="img-fluid" src={cabin} alt="..." />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal2"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon={faPlus} size="3x" />
                </div>
              </div>
              <img className="img-fluid" src={cake} alt="..." />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal3"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon={faPlus} size="3x" />
                </div>
              </div>
              <img className="img-fluid" src={circus} alt="..." />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal4"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon={faPlus} size="3x" />
                </div>
              </div>
              <img className="img-fluid" src={game} alt="..." />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal5"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon={faPlus} size="3x" />
                </div>
              </div>
              <img className="img-fluid" src={safe} alt="..." />
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal6"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <FontAwesomeIcon icon={faPlus} size="3x" />
                </div>
              </div>
              <img className="img-fluid" src={submarine} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstPage;
