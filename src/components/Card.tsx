import { CSSProperties } from "react";
import { StlViewer } from "react-stl-viewer";

interface CardProps {
    description?: string,
    width?: number,
    height?: number,
    url: string,
}
const defaultStyles: CSSProperties = {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    flexBasis: "24rem",
    flexGrow: "1",
    flexShrink: "0"
}

export default function Card({url}: CardProps) {
    // TODO: CardProps
    return (
        <StlViewer 
            style={defaultStyles}
            orbitControls
            shadows
            url={url}
        />
    )
}