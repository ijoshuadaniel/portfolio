import './header.scss';
import { Link } from 'react-router-dom';
import { HashLink as Links } from 'react-router-hash-link';

const Header = () => (
    <div className="header">
        <span><Link to="/">Daniel Paul Joshua</Link></span>
        <span><Links to="/#Contact">Contact</Links></span>
    </div>
)

export default Header;