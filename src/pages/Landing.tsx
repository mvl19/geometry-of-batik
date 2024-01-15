import Card from "@/components/Card";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import Gallery from "@/components/Gallery";

export default function LandingPage() {
    const [visible, setVisible] = useState(false);
    const sidebarHandler = () => {
        setVisible(!visible);
    }
    const urls = [
        "https://storage.googleapis.com/ucloud-v3/2272dfa00d58a59dae26a399.stl",
        "https://storage.googleapis.com/ucloud-v3/61575ca49d8a1777fa431395.stl",
    ]
    return (
        <>
            <Sidebar visible={visible} onClick={sidebarHandler}/>
            <Header onClick={sidebarHandler}/>
            <Gallery>
                {urls.map((url, index) => <Card key={index} url={url} />)}
            </Gallery>
        </>
    )
}