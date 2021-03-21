import { Container, Row } from 'react-bootstrap'
import './liveprojects.scss'
import OnlineProject from './../onlineprojects/onlineprojects.component'

function Liveproject() {
  return (
    <div className='live-project'>
      <Container>
        <div className='live_project_heading'>
          <h2 className='text-center'>Live Portfolio Projects</h2>
        </div>
        <br />
        <Row>
          <OnlineProject
            name='Url Shortner'
            description='This project is built using react as frontend , Node Js as Backend and Mysql as database'
            git='https://github.com/ijoshuadaniel/urlshortner'
            url='https://short.joshuadaniel.me/'
          />
          <OnlineProject
            name='Whatsapp Quick Message'
            description='This project is built using react as frontend , and using Whatsapp Api'
            git='https://github.com/ijoshuadaniel/urlshortner'
            url='https://whatsapp.joshuadaniel.me'
          />
          <OnlineProject
            name='Simple API'
            description='Simple Json API bult using php, mysql and frontend using Html and css'
            git='https://github.com/ijoshuadaniel/simple-api'
            url='https://api.joshuadaniel.me'
          />
          <OnlineProject
            name='IP Finder'
            description='This project is built using react as frontend , Used Ip API from ipapi.co'
            git='https://github.com/ijoshuadaniel/urlshortner'
            url='https://url.joshuadaniel.me'
          />
        </Row>
      </Container>
    </div>
  )
}

export default Liveproject
