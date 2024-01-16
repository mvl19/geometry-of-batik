import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState, lazy, Suspense } from "react";
import Gallery from "@/components/Gallery";

const LazyCard = lazy(()=>  import('@/components/Card'));

export default function LandingPage() {
    const [visible, setVisible] = useState(false);
    const sidebarHandler = () => {
        setVisible(!visible);
    }
    const urls = [
        "https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl",
        "https://storage.googleapis.com/ucloud-v3/61575ca49d8a1777fa431395.stl",
        "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl",
        "https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl",
        "https://storage.googleapis.com/ucloud-v3/61575ca49d8a1777fa431395.stl",
        "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl",
        "https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl",
        "https://storage.googleapis.com/ucloud-v3/61575ca49d8a1777fa431395.stl",
        "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl",
        "https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl",
        "https://storage.googleapis.com/ucloud-v3/61575ca49d8a1777fa431395.stl",
        "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl",
    ]
    return (
        <>
            <Sidebar visible={visible} onClick={sidebarHandler}/>
            <Header onClick={sidebarHandler}/>
            <Gallery>
                {urls.map((url, index) => <LazyCard key={index} url={url} description={"CAPTION"} />)}
            </Gallery>
        </>
    )
}