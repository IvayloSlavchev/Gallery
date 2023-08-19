import { useState } from 'react';
import "../Styles/LikeButton.scss";

const LikeFunctionality = () => {
    const [likes, setLikes] = useState<number>(0);
    const [hasUserLikedImage, setHasUserLikedImage] = useState<boolean>(false);

    function likeImageFunction() {
        if(hasUserLikedImage === false) return setLikes(oldCountOfLikes => oldCountOfLikes + 1);
        
        return setLikes(oldCountOfLikes => oldCountOfLikes - 1);
    }

    return (
        <div className='like-button-root'>
            <button
                style={{ backgroundColor: hasUserLikedImage ? 'lightblue' : 'white' }}
                onClick={() => {
                    likeImageFunction();
                    setHasUserLikedImage(!hasUserLikedImage);
                }}
                className="like-button"
            >Likes: {likes}</button>
        </div>
    )
}

export default LikeFunctionality