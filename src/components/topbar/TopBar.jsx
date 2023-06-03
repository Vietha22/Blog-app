import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            ABOUT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">
                            CONTACT
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    <li className="topListItem">{user && 'LOGOUT'}</li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img
                        className="topImg"
                        src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/174610317_2925910220978212_8042285855468780937_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KMqunUg2JvgAX-7zwM3&_nc_ht=scontent.fhan15-1.fna&oh=00_AfDoxztPtgVCDIp0e6G9h4K331jJQQ5v1or2uyviOTFWPw&oe=6492BAC7"
                        alt=""
                    />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
