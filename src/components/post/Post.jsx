import './post.css';

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum in ullam et ratione corrupti,
                repellendus impedit nobis illo nesciunt molestiae, recusandae sit tempora nemo id mollitia. Asperiores
                maiores debitis accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum in ullam et
                ratione corrupti, repellendus impedit nobis illo nesciunt molestiae, recusandae sit tempora nemo id
                mollitia. Asperiores maiores debitis accusamus? Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Illum in ullam et ratione corrupti, repellendus impedit nobis illo nesciunt molestiae, recusandae
                sit tempora nemo id mollitia. Asperiores maiores debitis accusamus?
            </p>
        </div>
    );
}
