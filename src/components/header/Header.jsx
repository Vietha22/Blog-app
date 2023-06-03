import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://marketplace.canva.com/EAFHm4JWsu8/1/0/1600w/canva-pink-landscape-desktop-wallpaper-HGxdJA_xIx0.jpg"
                alt=""
            />
        </div>
    );
}
