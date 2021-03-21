import './button.scss';
import {Link} from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';
const Button = (props) => (
    props.hash == null ? 
    <Link to={props.link}>
  <button className="button-css" style={props.css}>
      {props.text}
  </button>
 </Link> : 
    <Links  to={props.hash}>
    <button className="button-css" style={props.css}>
      {props.text}
    </button>
    </Links>


)

export default Button;