import Image from "next/image";
import { CSSProperties } from "react";
import Link from "next/link";

export default function Header({onClick, lightMode=false}: {onClick: ()=> void, lightMode?:boolean}) {
    const LogoStyle : CSSProperties = {
        width: "auto",
        height: 24,
    }
    return (
        <header className="flex items-center justify-between h-16 w-screen font-mono text-black">
            <div className="flex pl-4 items-center gap-4">
                <div className="cursor-pointer hover:bg-gray-400 rounded-full p-1">
                    <Image src='/menu.svg' alt="" width={24} height={24} onClick={onClick} />
                </div>
                <div className="flex gap-4 items-center">
                    <Link href="/"><Image src='/nextjs-github-pages/geobatik.svg' alt="Geometry Of Batik Logo" width={0} height={0} style={LogoStyle}/> </Link>
                    <span className="text-sm lg:text-base">Geometry Of Batik</span>
                </div>
            </div>
            <div className="pr-4 text-sm md:text-base w-[22ch] overflow-hidden whitespace-normal border-r-4">
                By Dimas Indra
            </div>
        </header>
    )
}