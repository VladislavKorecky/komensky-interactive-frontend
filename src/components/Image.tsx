import { FC } from "react"
import NextImage, { StaticImageData } from "next/image"

/**
 * Props for Image.
 * 
 * @field {string} src - Source/Path of the image.
 * @field {string} alt - Alternate text.
 * @field {string} className - CSS class.
 */
 interface ImageProps {
    src: string | StaticImageData,
    alt: string,
    className?: string
}

/**
 * Replacement for the NextJs Image component.
 * 
 * @type {FC}
 */
const Image: FC<ImageProps> = ({ src, alt, className }) => {
    return (
        <div style={ {position: "relative"} } className={className}>

            <NextImage
                src={src}
                alt={alt}
                fill
            />
            
        </div>
    )
}

export default Image;