import { useState, Suspense } from "react";
import { StlViewer } from "react-stl-viewer";

interface CardProps {
    description: string,
    width?: number,
    height?: number,
    url: string,
}

export default function Card({url, description="dummy"}: CardProps) {
    const [load, setLoad] = useState(true);
    // TODO: CardProps
    return (
        <figure className="flex basis-96 grow shrink align-center justify-center overflow-hidden flex-col items-center">
            <StlViewer 
                orbitControls
                shadows
                showAxes
                onFinishLoading={()=>{setLoad(false); console.log(load)}}
                url={url}
            />
            {load && <p>Loading</p>}
            
            <figcaption>{description}</figcaption>
        </figure>
    )
}