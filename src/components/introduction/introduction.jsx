import './introduction.scss';
import {Container , Row , Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './../../assets/intro.svg';
import Button from './../button/button';



const Introduction = () => (
<div className="intro-top">
<Container>
    <Row>
        <Col md="6" className="text-center">
            <img width="300px" height="300px" src={Intro} alt="into" />
        </Col>
        <Col md="6" className="intro-pragraph">
            <h2>LET’S</h2>
            <h2>INTRODUCE </h2>
            <h2>ABOUT MYSELF</h2>
            <p>I am a classic blend of knowledge and experience with certifications, a Web developer with varied skills and visionary achievements. I have build high speed websites and applications with happy clients for employer and make leading differentiation for the projects worked.</p>
            <Button text="Download Resume" link="/resume"/>
        </Col>
    </Row>
</Container>
</div>
)

export default Introduction;