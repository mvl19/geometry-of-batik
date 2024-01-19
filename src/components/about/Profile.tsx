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
        height: "125px",
        width: "125px",
        objectFit: "cover",
        borderRadius: "50%",
    }

    return (
        <main className="pl-8 pr-8">
            <h3 className="text-4xl pl-8">About Me</h3>
            <section className="flex rounded-xl items-center justify-center pl-8 pr-8 pt-8 grow-1 gap-8">
                <figure className="flex flex-col items-center">
                    <Image src='/dog.jpg' alt="Profile Image"  width={125} height={125} style={profileStyle}
                    className="" />
                    <figcaption className="flex items-center">
                        <SocialCard src="./socials/github.svg" to='https://github.com/dimasicr' alt="Github Link" />
                        <SocialCard src="./socials/twitter.svg" to='' alt="Twitter Link" />
                        <SocialCard src="./socials/instagram.svg" to='' alt="Instagram Link" />
                        <SocialCard src="./socials/linkedin.svg" to='https://id.linkedin.com/in/dimasicr' alt="LinkedIn Link" />
                    </figcaption>
                </figure>
                <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-mono animate-type overflow-hidden whitespace-nowrap tracking-wide border-r-4">
                        Hi, I am Dimas Indra.
                    </h3>
                </div>
            </section>
        </main>
    )
}