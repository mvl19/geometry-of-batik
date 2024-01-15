import { CSSProperties, useEffect } from "react";
import { StlViewer } from "react-stl-viewer";

interface CardProps {
    description: string,
    width?: number,
    height?: number,
    url: string,
}

export default function Card({url, description}: CardProps) {
    // TODO: CardProps
    return (
    <figure className="flex basis-96 grow shrink align-center justify-center overflow-hidden">
        <StlViewer 
            orbitControls
            shadows
            url={url}
        />
    </figure>
    )
}