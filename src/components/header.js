const Header = () => {
    return(
        <div>
            <h1>
                This is the header
            </h1>
                <ul className='nav'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/counter'>Counter</a>
                    </li>
                    <li>
                        <a href='/yoga'>Yoga</a>
                    </li>
                </ul>
        </div>
    )
}

export default Header;