import Link from "next/link";

interface ButtonProps {
    text: string,
    href: string,
    route?: boolean,

}
export default function Button({text, href, route}:ButtonProps) {
    const classCollections = `p-2 text-[#0000ff] border border-[#0000ff] hover:bg-[#0000ff] hover:text-[#eae7dc]
    border-solid text-base bg-transparent rounded-lg `
    if (route) {
        return (
            <Link href={href} >
                <button className={classCollections}>{text}</button>
            </Link>
        )
    }
    return (
        <a href={href}>
            <button className={classCollections}>{text}</button>
        </a>
    )
}