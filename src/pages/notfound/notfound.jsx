import './notfound.scss';
import Button from './../../components/button/button';
const  NotFound = () => (
    <div className="not-found text-center">
        <h3>oops!! Page Not Found</h3>
        <Button text="Back To Home" link="/"/>
    </div>
)

export default NotFound;