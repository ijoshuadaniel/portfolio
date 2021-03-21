import './backgroundvideo.scss';
import {Container,Row ,Col} from 'react-bootstrap'
import video from '../../assets/video.mp4';
import Button from './../../components/button/button';



const BackgroundVideo = () => (        
    <div className="my-hero">
        <video autoPlay="autoplay" loop="loop" muted className="background-video">
        <source src={video} type="video/mp4"/>
    </video>
    <div className="content">
        <Container className="container">
           <Row>
            <Col md="6" className="content-row">
            <div className="light">
                <h3 className="lightColor">Hello</h3>
                <h2 className="lightColor">I AM DANIEL PAUL JOSHUA S</h2>
                <p className="lightColor">DEVELOPER , LEARNER AND EXPLORER</p>
                <Button text="Contact"  link="/" hash="#Contact" />
                <Button text="Resume"  link="/resume"/>
            </div>   
            </Col>
            <Col md="6">
            <div className="light"></div>   
            </Col>
           </Row>
        </Container>
    </div>
    </div>
)

export default BackgroundVideo;