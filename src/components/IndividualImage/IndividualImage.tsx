import { imagesArray } from "../PhotoList/PhotoList";
import "../Styles/IndividualImage.scss";

const IndividualImage = (props: any) => {
    function previousImageIndex() {
        if(props.currentImageIndex === 0)
             return props.setImageIndex(imagesArray.length - 1);

        props.setImageIndex((imageIndex: number) => imageIndex - 1);
    }

    function nextImageIndex() {
        if(props.currentImageIndex === props.arrayLength - 1) 
            return props.setImageIndex(0);
        props.setImageIndex((imageIndex: number) => imageIndex + 1);
    }

    return (props.trigger) ? (
        <div className='image-popup'>
            <div className='choosen-image-class'>
                {props.children}
                
                <div className='previous-next-image-button'>
                    <button onClick={() => previousImageIndex()} className='previous-image'>{"<"}</button>
                    <button onClick={() => nextImageIndex()} className='next-image'>{">"}</button>
                </div>

                <button onClick={() => props.setButtonTrigger(false)} className='close-popup'>X</button>
            </div>
        </div>
    ) : "";
}

export default IndividualImage