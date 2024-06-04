'use client'

import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function Contact() {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data: any) => {
        const template = `Alert. New email for newslatter from Lays website. Here is his email: ${data.email}`
        const postMeth = axios.post(`https://api.telegram.org/bot7279821404:AAGM14QyJ_3JUcj8qwIZyIG9cuPe0WmmD9o/sendMessage?chat_id=1116747803&text=${template}`)
        toast.promise(postMeth, {
            loading: 'Sending...',
            success: "Message is sent",
            error: "Something went wrong"
        })
        reset()
    }
    return (
        <div className="bg-secondary max-w-[1000px] mx-auto text-white text-center px-[10%] py-[50px] rounded-[8px]">
            <h1 className="text-[40px] font-medium tracking-wide">Join our newsletter</h1>
            <span className="text-[17px] font-medium tracking-wide py-[30px] block">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                from 45 BC, making.</span>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-full flex justify-between items-center text-secondary p-[15px] rounded-[12px]">
                <input {...register('email')} type="text" className="w-[70%] outline-none" placeholder="Enter your email" />
                <button className="w-[20%] bg-secondary text-white py-[13px] px-[20px] rounded-[9px]">Subscribe</button>
            </form>
        </div>
    )
}
