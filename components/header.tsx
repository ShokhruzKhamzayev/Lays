import Image from "next/image";
import Link from "next/link";
import { BiCart } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


export default function Header() {
    return (
        <header className="custom-container flex justify-between items-center max-h-[12vh] text-white py-[25px]">
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
                <Dialog>
                    <DialogTrigger className="bg-white p-[15px] rounded-[6px] text-text"><FaMagnifyingGlass /></DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
                <Drawer>
                    <DrawerTrigger className="bg-white p-[15px] rounded-[6px] text-text"><BiCart /></DrawerTrigger>
                    <DrawerContent className="min-h-[80vh]">
                        <DrawerHeader>
                            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                            <DrawerDescription>This action cannot be undone.</DrawerDescription>
                        </DrawerHeader>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    )
}
