export default function Contact() {
    return (
        <div className="bg-secondary max-w-[1000px] mx-auto text-white text-center px-[10%] py-[50px] rounded-[8px]">
            <h1 className="text-[40px] font-medium tracking-wide">Join our newsletter</h1>
            <span className="text-[17px] font-medium tracking-wide py-[30px] block">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                from 45 BC, making.</span>
            <label htmlFor="email" className="bg-white w-full flex justify-between items-center text-secondary p-[15px] rounded-[12px]">
                <input type="email" className="w-[70%] outline-none" placeholder="Enter your email" />
                <button className="w-[20%] bg-secondary text-white py-[13px] px-[20px] rounded-[9px]">Subscribe</button>
            </label>
        </div>
    )
}
