import Image from "next/image";

export default function AboutProduct() {
    return (
        <div className="bg-[#FFF0DE] mt-[100px] py-[30px]">
            <div className="custom-container flex justify-between items-center gap-[40px]">
                <Image src={'/potato.png'} width={467} height={463} alt="image of art" />
                <div>
                    <div className="max-w-[80%]">
                        <h1 className="text-[60px] font-bold border-b-[2px] border-[#D9D9D9] py-[10px] tracking-wider">The Potato</h1>
                        <p className="text-[17px] font-medium tracking-wide py-[15px]">When potato plants bloom, they send up five-lobed flowers that spangle fields like fat purple stars. By some accounts, Marie Antoinette liked the blossoms so much that she put .</p>
                    </div>
                    <div className="w-full bg-secondary flex justify-center items-center py-[30px]">
                        <Image src={'/allLays.png'} alt="All products" width={456} height={169} />
                    </div>
                </div>
            </div>
        </div>
    )
}
