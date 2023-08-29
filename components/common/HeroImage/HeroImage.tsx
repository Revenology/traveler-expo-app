import React from "react";
import { ImageContainer, ImageMain } from "./HeroImage.style";

const HeroImage = ({ sourceUrl }: { sourceUrl: string }) => {
    return (
        <ImageContainer>
            <ImageMain source={{ uri: sourceUrl }} />
        </ImageContainer>
    );
};

export default HeroImage;
