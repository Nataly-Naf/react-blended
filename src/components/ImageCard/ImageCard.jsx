import { ImageModal } from "components/Modal/ImageModal";
import { CardItem } from "./ImageCard.styled"
import { useState } from "react";

export const ImageCard = ({ color, alt, large, medium }) => {
    const [showModal, setShowModal] = useState(false);
    return <CardItem color={color}>
        <img src={medium} alt={alt} onClick={() => setShowModal(true)} />
        {showModal && <ImageModal modalIsOpen={showModal} alt={alt} large={large} closeModal={() => setShowModal(false) } /> } 
    </CardItem>
}