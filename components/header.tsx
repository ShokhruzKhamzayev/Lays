import Image from "next/image";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
    return (
        <header className="custom-container bg-red-500 flex justify-between items-center text-white">
            <Link href={'/'} className="flex gap-[8px] items-center">
                <Image src={'/logo.png'} alt="The logo of company" width={40} height={40} />
                <h1 className="text-3xl font-semibold">Potato</h1>
            </Link>
            <nav className="space-x-[40px]">
                <Link className="text-[16px] font-medium tracking-wide" href={'/'}>Home</Link>
                <Link className="text-[16px] font-medium tracking-wide" href={'/'}>Shop</Link>
                <Link className="text-[16px] font-medium tracking-wide" href={'/'}>Pricing</Link>
                <Link className="text-[16px] font-medium tracking-wide" href={'/'}>Services</Link>
            </nav>
            <div className="space-x-[20px]">
                <button className="bg-white p-[15px] rounded-[6px] text-text">
                    <FaMagnifyingGlass />
                </button>
                <button className="bg-white p-[15px] rounded-[6px] text-text">
                    <BiCart />
                </button>
            </div>
        </header>
    )
}
