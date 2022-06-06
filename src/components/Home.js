import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/1ae72dae-ffbd-465d-81e2-4751fd06fbbe1654012895525-EORS-Desktop-Banner.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Link to="/products">
              <Button>
                <h5>Explore more</h5>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/ad85684f-9dda-47e2-bdfe-c6d2ea3bb7271654007028955-Handbags-Wallets_DK.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <Link to="/products">
              <Button>
                <h5>Explore more</h5>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/1/16e52ae5-d21b-4f1f-9c4a-8392c3a9592d1654099056613-Workwear_Desk.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Link to="/products">
              <Button>
                <h5>Explore more</h5>
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title className="mt-4 fs-1">Welcome to our Site</Card.Title>
          <Card.Text className="fs-3">
            The best destination for all your needs....!!
          </Card.Text>
          <Link to="/products">
            <Button variant="light btn-outline-dark" className="mb-5 mt-4">
              Explore products
            </Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted  mt-4">
          {" "}
          &copy; 2022 &nbsp; &nbsp; &nbsp; Designed by Shiva Karka
        </Card.Footer>
      </Card>
    </>
  );
}

export default Home;
