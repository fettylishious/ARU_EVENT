'use client'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import Image from "next/image"
import NavItems from "./NavItems"
  
const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
            <SheetTrigger className="align-middle">
                <Image src='/assets/icons/menu-1.svg'
                alt="menu logo"
                className="cursor-pointer"
                width={24}
                height={24}
                />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-6 md:hidden bg-white">
                <Image src='/assets/images/logo-1.svg' 
                    alt="logo"
                    width={60}
                    height={38}
                /> 
                <Separator className="border border-gray-50"/>
                <NavItems />
            </SheetContent>
        </Sheet>

    </nav>
  )
}

export default MobileNav