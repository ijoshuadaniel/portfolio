import { Col, Card } from 'react-bootstrap'
import './onlineprojects.scss'

const OnlineProject = ({ name, description, git, url }) => {
  return (
    <Col md='3'>
      <Card className='card-custom'>
        <div className='card-body'>
          <h4 className='text-center'>{name}</h4>
          <br />
          <p className='text-center'>{description}</p>
          <br />
          <div className='button-flex'>
            <a href={git} target='_blank' rel='noreferrer'>
              <button>View on Git</button>
            </a>
            <a href={url} target='_blank' rel='noreferrer'>
              <button>View Website</button>
            </a>
          </div>
        </div>
        <br />
      </Card>
      <br />
    </Col>
  )
}

export default OnlineProject
