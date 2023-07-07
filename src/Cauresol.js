import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './img/images2.jpg';
import image2 from './img/images.jpg';
import image3 from './img/images3.jpg';
function NoTransitionExample() {
    return (
        <Carousel slide={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src=
                    {image3}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-auto"
                    src={image2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={image1}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default NoTransitionExample;