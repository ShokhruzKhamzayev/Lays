import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Main() {
    return (
        <main className="bg-red-500 text-white">
            <div className="starter">
                <h1 className="text-[72px] font-bold tracking-wider text-center">Testy Chips</h1>
            </div>
            <div className="flex justify-between">
                <div className="left-main max-w-[33%]">
                    <div className="flex items-center gap-[7px]">
                        <Image src={'/users.png'} width={110} height={44} alt="image of users" />
                        <span className="font-semibold tracking-wide">5K+ Review</span>
                    </div>
                    <Link href={'/'} className="flex items-center gap-[4px] border border-white rounded-[8px] py-[8px] px-[33px] w-fit mt-[45px]">
                        See all item
                        <FaLongArrowAltRight />
                    </Link>
                </div>
                <Image className="max-w-[33%]" src={'/main-content.png'} width={480} height={671} alt="picture of lays" />
                <div className="max-w-[33%]">
                    <div className="btns">
                        <button>Low</button>
                        <button>Medium</button>
                        <button>Best</button>
                        <Link href={'/'}>
                            <div>
                                <FaLongArrowAltRight />

                            </div>
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
