import Image from "next/image";

interface HeaderProps {
    onClick: ()=>void,
}

export default function Header({onClick}: HeaderProps) {

    return (
        <header className="flex items-center justify-between h-16 w-screen font-mono text-black">
            <div className="flex pl-4 items-center gap-4">
                <div className="cursor-pointer hover:bg-gray-400 rounded-full p-1">
                    <Image src='/menu.svg' alt="" width={24} height={24} onClick={onClick} />
                </div>
                <div>Geometry Of Batik</div>
            </div>
            <div className="pr-4">
                By Dimas Indra
            </div>
        </header>
    )
}