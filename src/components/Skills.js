import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import meter6 from "../assets/img/meter6.png";
import meter7 from "../assets/img/meter7.png";
import meter8 from "../assets/img/meter8.png";
import meter9 from "../assets/img/meter9.png";
import meter10 from "../assets/img/meter10.png";
import meter11 from "../assets/img/meter11.png";
import meter12 from "../assets/img/meter12.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I worked closely with software development in full stack application.<br></br> I have a good programming background in Python, Java, and Java Script development.<br></br> I am interested in algorithms, artificial intelligence, and data structures.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>AngularJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Mobile Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>Data Analysis</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Interpersonal Skill</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>Communication Skill</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Leadership Skill</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
