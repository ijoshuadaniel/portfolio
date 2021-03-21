import './projects.scss'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from './../button/button'

import tyho from './../../assets/projects/tyho.jpg'
import ebenezer from './../../assets/projects/ebenezer.jpg'
import frolik from './../../assets/projects/frolik.jpg'
import illusion from './../../assets/projects/illusion.jpg'
import kaira from './../../assets/projects/kaira.jpg'
import mayans from './../../assets/projects/mayans.jpg'
import onk from './../../assets/projects/onk.jpg'
import miracle from './../../assets/projects/miracle.jpg'
import yogimudra from './../../assets/projects/yogimudra.jpg'
import energy from './../../assets/projects/energy.jpg'
import bridalMakeup from './../../assets/projects/bridalmakeup.png'

const Projects = () => (
  <div className='project-top container'>
    <Container>
      <Row>
        <Col md='6' className='text-right padding'>
          <h1>
            4 +
            <h6>
              {' '}
              Years of <h6>experience</h6>
            </h6>
          </h1>
          <p>
            Practise makes man perfect, and experience has got me beyond
            perfection. With 4+ years of experience and 50+ commercial projects'
            accomplishment and high level of cognition in the projects I work, I
            have excelled in my passion. My knowledge on latest web technologies
            and advanced techniques and methods adds benefit to my experience in
            my profession.
          </p>
          <Button text='Contact' hash='#Contact' />
          <br />
          <br />
        </Col>
        <Col md='6' className='text-center'>
          <Row>
            <Col md='3' xs='6'>
              <a href='https://tyho.co'>
                <img src={tyho} className='project-images' alt='tyho' />
              </a>
            </Col>
            <Col md='3' xs='6'>
              <a href='https://illusionwebdevelopers.com'>
                <img src={illusion} className='project-images' alt='tyho' />
              </a>
            </Col>
            <Col md='3' xs='6'>
              <a href='https://miraclegases.co.in'>
                <img src={miracle} className='project-images' alt='tyho' />
              </a>
            </Col>
            <Col md='3' xs='6'>
              <a href='https://thefrolik.in'>
                <img src={frolik} className='project-images' alt='tyho' />
              </a>
            </Col>
            <Col md='3' xs='6'>
              <a href='https://onlynattukozhi.in'>
                <img src={onk} className='project-images' alt='tyho' />
              </a>
            </Col>
            <Col md='3' xs='6'>
              <a href='https://kairasalons.com'>
                <img src={kaira} className='project-images' alt='tyho' />
              </a>
            </Col>
            <Col md='3' xs='6'>
              <a href='https://mayans.in'>
                <img src={mayans} className='project-images' alt='tyho' />
              </a>
            </Col>
            <Col md='3' xs='6'>
              <a href='https://ebenezergases.in'>
                <img src={ebenezer} className='project-images' alt='tyho' />
              </a>
            </Col>
            <Col md='3' xs='6'>
              <a href='https://yogimudrastore.eu'>
                <img src={yogimudra} className='project-images' alt='tyho' />
              </a>
            </Col>
            <Col md='3' xs='6'>
              <a href='https://myenergyco.com.au/'>
                <img src={energy} className='project-images' alt='tyho' />
              </a>
            </Col>
            <Col md='3' xs='6'>
              <a href='https://bridalmakeup.ind.in/'>
                <img src={bridalMakeup} className='project-images' alt='tyho' />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Projects
