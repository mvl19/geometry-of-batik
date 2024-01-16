import { StlViewer } from "react-stl-viewer";

interface CardProps {
    description: string,
    width?: number,
    height?: number,
    url: string,
}

export default function Card({url, description="dummy"}: CardProps) {
    // TODO: CardProps
    return (
        <figure className="flex basis-96 grow shrink align-center justify-center overflow-hidden flex-col items-center">
            <StlViewer 
                orbitControls
                shadows
                url={url}
            />
            <figcaption>{description}</figcaption>
        </figure>
    )
}