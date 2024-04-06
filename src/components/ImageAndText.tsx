import { FC, ReactNode } from "react";

interface ImageAndTextProps {
    heading: string,
    children: ReactNode
}

const ImageAndText: FC<ImageAndTextProps> = ({heading, children}) => {
    return (
        <section>
            {/* TODO: Add image */}
            <div>
                <h2>{heading}</h2>
                {children}
            </div>
        </section>
    );
}

export default ImageAndText;