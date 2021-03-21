import './resume.scss';
import {Container,Row ,Col} from 'react-bootstrap'
import Linkedin from './../../assets/coding/linkedin.svg';


const Resume = () => (
    <div className="resume-top">
        <Container>
            <Row>
                <Col md="6" className="border_right">
                <h3>DANIEL PAUL JOSHUA S</h3>
                <h6 className="persianGreen">DEVELOPER , LEARNER AND EXPLORER</h6>
                <br/>
                <p>
                An ambitious web developer with 4+ years of experience in development and design of user centric websites and applications. A creative thinker and enthusiast with passion in learning new things.
                </p>
                <ul>
                    <li>Ability to work under pressure and deadlines</li>
                    <li>Self-Motivated and Hardworking</li>
                    <li>Quick Learner</li>
                </ul>
                
                <br/>
                <h4 className="heading persianGreen">Contact</h4>
                <br/>

                <a href="mailto:danielpauljoshuas@gmail.com"><p>Email : danielpauljoshuas@gmail.com</p></a>
                
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/daniel-paul-joshua-s-3157b21aa/"><img src={Linkedin} alt="linkedin" width="50px" height="50px"/></a>
                
                <br/>
                <br/>
                <br/>
                <h4 className="heading persianGreen">Licenses & certifications</h4>
                <br/>

                <ul>
                    <li>PHP Fullstack Developer Diploma Certificate</li>
                    <li>PHP:Basic and Advance</li>
                    <li>SEO Training Course by Moz</li>
                    <li>Web Hosting</li>
                </ul>

                </Col>
                
                
                <Col md="6">
                <h4 className="heading persianGreen">Education</h4>
                <br/>
                <h5>GRADUATION</h5>
                <p>Seshadripuram First Grade College, Bangalore</p>
                <br/>
                <h5>PRE-UNIVERSITY</h5>
                <p>St.Josep Indian PU COllege, Bangalore</p>
                <br/>
                <h5>SCHOOLING</h5>
                <p>South East Asian Education Trust, Bangalore</p>

                <br/>
                <h4 className="heading persianGreen">Experience</h4>
                <br/>
                <h5>Job : Developer</h5>
                <p>Company : Circle IT</p>
                <br/>
                <h5>Job : Developer</h5>
                <p>Company : Kiara Salons</p>
                <br/>
                <h5>Job : Developer</h5>
                <p>Company : Illusion Web Developer</p>
                </Col>


            </Row>
        </Container>
    </div>
)

export default Resume;