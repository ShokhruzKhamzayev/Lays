import Image from "next/image";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";

export default function WorldClass() {
    return (
        <div className="custom-container flex justify-between items-center">
            <h1 className="w-1/3 text-[60px] font-semibold tracking-wide capitalize">world class awesome Chips</h1>
            <Image className="w-1/3" src={'/newVersion.png'} alt="new spicy lays" width={361} height={425} />
            <div className="w-1/3">
                <h2 className="text-[24px] font-bold tracking-wider">Overview</h2>
                <p className="tracking-wide text-[17px] font-medium py-[20px]">the blossoms so much that she put them in her hair. Her husband, Louis XVI, put one in his buttonhole, inspiring a brief vogue in which the French.</p>
                <Link href={'/'} className="flex items-center gap-[7px] text-secondary border-[3px] border-secondary w-fit py-[13px] px-[25px] rounded-[12px]">Learn More <CgArrowLongRight /></Link>
            </div>
        </div>
    )
}
