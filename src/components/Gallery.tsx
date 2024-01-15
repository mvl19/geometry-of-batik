interface GalleryProps {
    children: React.ReactNode
}

export default function Gallery({children}:GalleryProps) {
    return (
        <div className="flex flex-wrap">
            {children}
        </div>
    )
}