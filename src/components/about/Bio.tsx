import Statistic from "@/components/Statistic";
import Gallery from "@/components/Gallery";

export default function Bio() {
    return (
        <section className="pl-8 pr-8 pb-8 pt-10 bg-[#eae7dc] text-black">
            <h3 className="text-xl pt-8 lg:text-3xl md:text-2xl border-b-2 border-black">Biography</h3>
            <p className="serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Gallery>
                <div className="flex flex-wrap items-center justify-between grow shrink">
                    <Statistic value="5" title="Years of Experience" />
                    <Statistic value="200" suffix="+" title="Completed Projects" />
                    <Statistic value="100" suffix="PB" title="Average Dataset Size Worked On" />
                    <Statistic value="1,128" title="Positive Reviews" />
                </div>
            </Gallery>
            <h3 className="text-xl pt-8 lg:text-3xl md:text-2xl border-b-2 border-black">Why I Wrote This Book</h3>
            <p className="serif">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </section>
    )
}