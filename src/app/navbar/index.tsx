"use client";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import NavbarMobile from "./mobile";

function Navbar() {
	return (
		<div className="flex py-6 gap-x-5 px-[5vw] bg-[#3434eb] text-white items-center justify-between ">
			<div className="flex gap-5 items-center">
				<Link className="text-[18px] font-semibold" href={"/"}>
					Home
				</Link>
				<Link className="text-[18px] font-semibold" href={"/tentang"}>
					Tentang
				</Link>
				<NavigationMenu className="hidden md:block">
					<NavigationMenuList className="">
						<NavigationMenuItem>
							<NavigationMenuTrigger>Produk</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="p-5">
									<li className="flex flex-col gap-4">
										<Link href="/produk/jambu">Jambu</Link>
										<Link href="/produk/bibit">Bibit</Link>
										<Link href="/produk/pupuk">Pupuk</Link>
										<Link href="/produk/peralatan">Peralatan</Link>
									</li>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<Link className=" hidden md:block text-[18px] font-semibold" href={""}>
					Kontak
				</Link>
			</div>
			<div>
				<NavbarMobile />
			</div>
		</div>
	);
}

export default Navbar;
