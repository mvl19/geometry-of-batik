interface StatisticProps {
    value: number | string, 
    title: string,
    prefix?: string, 
    suffix?: string,
}

export default function Statistic({value, title, prefix="", suffix=""} : StatisticProps) {
    return (
        <div className="p-5">
            <div className="font-mono text-[#f08080] text-xl">{prefix}{value}{suffix}</div>
            <div className="font-mono text-base">{title}</div>
        </div>
    )
}