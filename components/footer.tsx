import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-text text-bg mt-[90px] py-[30px]">
            <div className="flex justify-between custom-container border-b-[2px] gap-[10px] border-[#d9d9d9] pb-[15px]">
                <div className="w-1/4">
                    <Link href={'/'} className="flex gap-[8px] items-center">
                        <Image src={'/logo.png'} alt="The logo of company" width={40} height={40} />
                        <h1 className="text-3xl font-semibold">Potato</h1>
                    </Link>
                    <span className="my-[15px] block font-medium text-[15px] tracking-wider">Clarity gives you the blocks and components you need to create a truly professional website.</span>
                    <div className="flex gap-[15px] items-center mt-[20px]">
                        <div className="border border-[#d9d9d9] p-[10px] rounded-full hover:border-secondary transition-all duration-300 hover:bg-secondary cursor-pointer"><BsTwitter /></div>
                        <div className="border border-[#d9d9d9] p-[10px] rounded-full hover:border-secondary transition-all duration-300 hover:bg-secondary cursor-pointer"><FaFacebook /></div>
                        <div className="border border-[#d9d9d9] p-[10px] rounded-full hover:border-secondary transition-all duration-300 hover:bg-secondary cursor-pointer"><BsInstagram /></div>
                        <div className="border border-[#d9d9d9] p-[10px] rounded-full hover:border-secondary transition-all duration-300 hover:bg-secondary cursor-pointer"><BsGithub /></div>
                    </div>
                </div>
                <div className="flex flex-col gap-[18px] w-1/4">
                    <h3>Company</h3>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Features</Link>
                    <Link href={'/'}>Works</Link>
                    <Link href={'/'}>Career</Link>
                </div>
                <div className="flex flex-col gap-[18px] w-1/4">
                    <h3>Help</h3>
                    <Link href={'/'}>Customer Support</Link>
                    <Link href={'/'}>Delivery Details</Link>
                    <Link href={'/'}>Privacy Policy</Link>
                    <Link href={'/'}>Privacy Policy</Link>
                </div>
                <div className="flex flex-col gap-[18px] w-1/4">
                    <h3>Resources</h3>
                    <Link href={'/'}>Free eBooks</Link>
                    <Link href={'/'}>Development Tutorial</Link>
                    <Link href={'/'}>How to - Blog</Link>
                    <Link href={'/'}>Youtube Playlist</Link>
                </div>
            </div>
            <div>
                <span className="text-center py-[20px] block">© Copyright 2022, All Rights Reserved by Falcon Thought</span>
            </div>
        </footer>
    )
}
