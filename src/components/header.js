import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <h1>
                This is the header
            </h1>
                <ul className='nav'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/counter'>Counter</Link>
                    </li>
                    <li>
                        <Link to='/yoga'>Yoga</Link>
                    </li>
                </ul>
        </div>
    )
}

export default Header;