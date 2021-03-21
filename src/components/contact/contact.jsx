import './contact.scss';
import {Container} from 'react-bootstrap';
import Button from './../../components/button/button';
import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = () => (
    <div className="contact-top" id="Contact">
      <Container className="text-center">
          <h2>Contact Me</h2>
          <br/>
          <p>Looking for a knowledgeable and experienced Web developer for your company or need to work on projects? Kindly contact me</p>
          <br/>
          <a href="mailto:danielpauljoshuas@gmail.com">danielpauljoshuas@gmail.com</a>
          <br/>
          <br/>
          <Button text="Download Resume" link="/resume"/>
      </Container>
    </div>
)

export default Contact;