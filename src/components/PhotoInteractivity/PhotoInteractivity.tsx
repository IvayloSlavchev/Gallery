import { useState } from 'react';
import { imagesArray } from "../PhotoList/PhotoList";
import "../Styles/PhotoInteractivity.scss";
import useScreenSize from '../../useScreenSize';
import LikeFunctionality from '../LikeFunctionality/LikeFunctionality';
import IndividualImage from '../IndividualImage/IndividualImage';

const PhotoInteractivity = () => {
    const [width] = useScreenSize();
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [hasUserClickedOnImage, setHasUserClickedOnImage] = useState<boolean>(false);

    return (
        <div className='photo-interactivity-root'>
            <div 
                className={width < 1000 ? 'images-class-mobile' : 'images-class'}>
                {
                    imagesArray.map((item: any, index: number) => {
                        return <div className='image-wrapper' key={index}>
                            <img 
                                className='images' 
                                src={item} 
                                alt="Images"
                                onClick={() => {
                                    setHasUserClickedOnImage(!hasUserClickedOnImage);
                                    setCurrentImageIndex(index);
                                }} 
                            /> 
                            <LikeFunctionality />
                        </div>
                    })
                }        
            </div>    

            <div className={width > 900 ? 'individual-image-class' : 'individual-image-mobile'}>
                <IndividualImage
                         trigger={hasUserClickedOnImage} 
                         setButtonTrigger={setHasUserClickedOnImage}
                         setImageIndex={setCurrentImageIndex}
                         currentImageIndex={currentImageIndex}
                         arrayLength={imagesArray.length}
                    >
                        <img 
                            src={imagesArray[currentImageIndex]} 
                            alt="Choosed image"
                            className='choosen-image'
                        />
                </IndividualImage>
            </div>    
        </div>
    )
}

export default PhotoInteractivity