import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import NumberTicker from "./numberTicker";

export default function Info() {
    return (
        <div>
            <div className="flex justify-between items-center mt-[70px]">
                <div className="bg-[#FFF0DE] w-1/2 flex justify-between items-center py-[30px] px-[10px]">
                    <div>
                        <h1 className="text-[52px] font-bold tracking-widest">
                            <NumberTicker value={20} />
                            K
                        </h1>
                        <span className="text-bold font-[17px] tracking-wide">Product</span>
                    </div>
                    <div>
                        <h1 className="text-[52px] font-bold tracking-widest">
                            <NumberTicker value={40} />
                            K
                        </h1>
                        <span className="text-bold font-[17px] tracking-wide">Upcoming Product</span>
                    </div>
                    <div>
                        <h1 className="text-[52px] font-bold tracking-widest">
                            <NumberTicker value={25} />
                            K
                        </h1>
                        <span className="text-bold font-[17px] tracking-wide">Awesome Product</span>
                    </div>
                </div>
                <div className="w-[47%]">
                    <h1 className="text-[35px] font-semibold italic border-b border-[#D9D9D9] py-[10px]">See Our Review</h1>
                    <p className="text-[16px] tracking-wide font-[500] mt-[10px]">Potatoes were introduced to Europe from the Americas by the Spanish in the second half of the 16th century. Today they are a staple food in many parts of the world and an integral part of much of the world's food supply. As of 2014, potatoes were the world's fourth-largest food crop.</p>
                </div>
            </div>
            <div className="flex justify-between items-center mt-[50px]">
                <h1 className="text-[70px] font-bold text-balance">Our product awesome overview</h1>
                <Image src={'/info-content.png'} alt="photo of review card" width={493} height={489} />
            </div>
            <div className="flex justify-between gap-[30px] mt-[50px]">
                <Image src={'/info-content-two.png'} alt="preview of photo lays" width={295} height={318} />
                <div className="max-w-[70%]">
                    <Link href={'/'} className="flex items-center gap-[7px] border-[3px] border-secondary w-fit py-[13px] px-[25px] rounded-[12px] text-secondary font-bold">Let’s Start <BsArrowRight /></Link>
                    <h1 className="text-[28px] font-semibold border-b-[2px] py-[15px] mt-[40px] border-[#D9D9D9]">Let’s grow your health with our product</h1>
                    <p className="font-medium tracking-wider text-[20px] mt-[13px]">When potato plants bloom, they send up five-lobed flowers that spangle fields like fat purple stars. By some accounts, Marie Antoinette liked the blossoms so much that she put them in her hair. Her husband, Louis XVI, put one in his buttonhole, inspiring a brief vogue in which the French aristocracy swanned around with potato plants on their clothes.</p>
                </div>
            </div>
        </div>
    )
}
