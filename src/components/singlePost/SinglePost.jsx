import './singlePost.css';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="https://e0.pxfuel.com/wallpapers/532/572/desktop-wallpaper-nature-minimalist-style.jpg"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Viet</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla deleniti quisquam nam quaerat
                    laudantium perferendis optio ab, doloremque tempora hic esse ullam quam aliquam debitis porro
                    consequuntur distinctio magnam commodi! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nulla deleniti quisquam nam quaerat laudantium perferendis optio ab, doloremque tempora hic esse
                    ullam quam aliquam debitis porro consequuntur distinctio magnam commodi! Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Nulla deleniti quisquam nam quaerat laudantium perferendis optio ab,
                    doloremque tempora hic esse ullam quam aliquam debitis porro consequuntur distinctio magnam commodi!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla deleniti quisquam nam quaerat
                    laudantium perferendis optio ab, doloremque tempora hic esse ullam quam aliquam debitis porro
                    consequuntur distinctio magnam commodi!
                </p>
            </div>
        </div>
    );
}
