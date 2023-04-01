import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import field from '../assets/field.mp4'

const Banner = () => {
    console.log("hi");

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    return (
        <section className="banner" id="home">
            <div className='main'>
        <div className="overlay"></div>
        <video src={field} autoPlay loop muted />
        <div className="content">
        </div>
        </div>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <h1>
                                        {`Anrta `}
                                        <br></br>
                                    </h1>
                                    <h1 class="styling-head">
                                        {`Grow with us`}
                                    </h1>
                                    <p>
                                    We come from a country that takes pride in Agriculture Sector. Farmers in India are no less than Gods and hence it becomes more of our duty to protect and nourish them This is an initiative to reduce farmer's exploitation in the field of agriculture and increase their awareness of about various schemes by government in order to protect them. Another section helps in listing all the benefits of unknown plants that farmers might encounter
                                    </p>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                >
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
        </section>
    );
};

export default Banner;
