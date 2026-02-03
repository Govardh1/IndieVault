"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"


import { Chicle, Poppins } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavbarSidebar } from "./navbar-sidebar"
import { useState } from "react"


const poppins=Poppins({
	subsets:["latin"],
	weight:["700"]
})

interface NavBarItemProps{
href:string,
children:React.ReactNode,
isActive?:boolean
}

const NavBarItem = ({href,children,isActive}:NavBarItemProps)=>{
	return(
		<Button asChild
		variant="outline" className={cn("bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",isActive && "bg-black text-white hover:bg-black hover:text-white")}>
			<Link href={href}>
			{children}
			</Link>
		</Button>
	)
}
const navbaritems=[
	{href:"/", Children:"Home"},
	{href:"/about", Children:"About"},
	{href:"/features", Children:"Features"},
	{href:"/pricing", Children:"Pricing"},
	{href:"/contact", Children:"Contact"}
]
export const NavBar = ()=>{
	const pathname=usePathname()
  const [isSideBarOpen,setisSideBarOpen]=useState(false)
	return (
	<nav className="h-20 flex border-b justify-between font-medium bg-white">
		<Link href="/" className="pl-6 flex items-center">
		<span className={cn("text-5xl font-semibold",poppins.className)}>
			IndieVault
		</span>
		</Link>

		<div className="items-center gap-4 hidden lg:flex">
			{navbaritems.map((item) =>(
				<NavBarItem key={item.href} href={item.href} isActive={pathname===item.href}>
					{item.Children}
				</NavBarItem>
			))}
		</div>

		<NavbarSidebar 
			items={navbaritems} 
			open={isSideBarOpen} 
			onOpenChange={setisSideBarOpen}
		 />
			
	

		<div className="hidden lg:flex">
			<Button  asChild variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-500 transition-colors text-lg ">
			<Link href="/sign-in">Login</Link>
			</Button>
			<Button asChild variant="secondary" className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-500 hover:text-black transition-colors text-lg ">
				<Link href="/sign-up">Start Selling</Link>
			</Button>
		</div>
	</nav>
  )
}

