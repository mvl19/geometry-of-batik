import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Layout({children}:{children: React.ReactNode}) {
    const [visible, setVisible] = useState(false);
    const sidebarHandler = () => {
        setVisible(!visible);
    }
    return (
        <>
        <Sidebar visible={visible} onClick={sidebarHandler}/>
        <Header onClick={sidebarHandler}/>
        {children}
        </>
    )
}