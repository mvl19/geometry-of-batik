import Image from "next/image"
import Link from "next/link"
import { CSSProperties } from "react"

interface SocialCardProps {
    src: string
    to: string,
    alt: string,
    width?: number,
    height?: number,
}

const SocialCard = ({
    src,
    alt,
    to,
    width=32,
    height=32,
    }:SocialCardProps) => {
    return <Link href={to}><Image width={width} height={height} alt={alt} src={src} /></Link>
}

export default function Profile() {
    const profileStyle : CSSProperties = {
        minHeight: "125px",
        minWidth: "125px",
        height: "125px",
        width: "125px",
        objectFit: "cover",
        borderRadius: "50%",
        display: "block",
    }

    return (
        <main className="pl-8 pr-8 pb-8 bg-[#eae7dc] text-black">
            <h3 className="text-2xl lg:text-4xl md:text-3xl pt-8 border-black border-b-2">About Me</h3>
            <section className="flex rounded-xl items-center justify-center pl-8 pr-8 pt-8 grow-1 gap-8 flex-wrap border-black">
                <figure className="flex flex-col items-center">
                    <Image src='/nextjs-github-pages/dog.jpg' alt="Profile Image"  width={125} height={125} style={profileStyle}
                    className="" />
                    <figcaption className="flex items-center">
                        <SocialCard src="/nextjs-github-pages/socials/github.svg" to='https://github.com/dimasicr' alt="Github Link" />
                        <SocialCard src="/nextjs-github-pages/socials/twitter.svg" to='' alt="Twitter Link" />
                        <SocialCard src="/nextjs-github-pages/socials/instagram.svg" to='' alt="Instagram Link" />
                        <SocialCard src="/nextjs-github-pages/socials/linkedin.svg" to='https://id.linkedin.com/in/dimasicr' alt="LinkedIn Link" />
                    </figcaption>
                </figure>
                <div className="flex flex-wrap">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-mono animate-type overflow-hidden whitespace-nowrap tracking-wide border-r-4">
                        Hi there, I am Dimas Indra.
                    </h3>
                </div>
            </section>
        </main>
    )
}