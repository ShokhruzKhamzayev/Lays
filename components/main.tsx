import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import GradualSpacing from "./gradualSpacing";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Main() {
    return (
        <main className="text-white max-h-[88vh] flex flex-col justify-between overflow-hidden relative">
            <div className="starter">
                <GradualSpacing text="Testy Chips" className="text-[72px] font-bold tracking-wide text-center" />
            </div>
            <div className="flex justify-between mt-[50px]">
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
                <Carousel className="max-w-[33%]">
                    <CarouselContent>
                        <CarouselItem>
                            <Image src={'/main-content.png'} width={480} height={671} alt="picture of lays" />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={'/main-content.png'} width={480} height={671} alt="picture of lays" />
                        </CarouselItem>
                        <CarouselItem>
                            <Image src={'/main-content.png'} width={480} height={671} alt="picture of lays" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="text-text" />
                    <CarouselNext className="text-text" />
                </Carousel>
                <div className="max-w-[33%] relative">
                    <div className="btns flex gap-[30px] -rotate-90 absolute top-0 right-0 translate-x-[40%]">
                        <button>Low</button>
                        <button>Medium</button>
                        <button>Best</button>
                    </div>
                    <Link href={'/'} className="mt-[170px] flex items-center gap-[8px] text-bg">
                        <div className="border-2 border-bg text-bg py-[6px] px-[10px] rounded-[7px]">
                            <FaLongArrowAltRight size={40} />
                        </div>
                        <span className="font-semibold text-2xl">Explore</span>
                    </Link>
                </div>
            </div>
            <div className="bg-white rounded-full w-full h-[1220px] absolute left-0 bottom-0 translate-y-[70%] -z-10 overflow-hidden xl:block hidden"></div>
        </main>
    )
}
