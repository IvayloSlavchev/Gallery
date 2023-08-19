import { useState } from 'react';
import { imagesArray } from "../PhotoList/PhotoList";
import "../Styles/PhotoInteractivity.scss";
import useScreenSize from '../../useScreenSize';
import LikeFunctionality from '../LikeFunctionality/LikeFunctionality';

const PhotoInteractivity = () => {
    const [previousImageIndex, setPreviousImageIndex] = useState<number>(0);
    const [nextImageIndex, setNextImageIndex] = useState<number>(0);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [width] = useScreenSize();

    function nextImageFunction() {
        if(nextImageIndex == imagesArray.length - 1) return setNextImageIndex(0);

        return setNextImageIndex(currentImageIndex => currentImageIndex + 1);
    }

    return (
        <div className='photo-interactivity-root'>
            <div className={width < 700 ? 'images-class-mobile' : 'images-class'}>
                {
                    imagesArray.map((item: any, index: number) => {
                        return <div className='image-wrapper'>
                            <img className='images' src={item} key={index} alt="Random Pictures" /> 
                            <LikeFunctionality />
                        </div>
                    })
                }        
            </div>        
        </div>
    )
}

export default PhotoInteractivity