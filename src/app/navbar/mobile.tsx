import React from "react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";

const NavbarMobile = () => {
	return (
		<Sheet>
			<SheetTrigger asChild className="block cursor-pointer lg:hidden md:hidden">
				<IconMenu2 size={22} />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Menu</SheetTitle>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="grid items-center grid-cols-4 gap-4 text-black">
						<ul className="flex flex-col gap-4 mt-4">
							<li className="transition duration-300 ease-in-out hover:translate-x-2">
								<a href="/produk">Produk</a>
							</li>
							<li className="transition duration-300 ease-in-out hover:translate-x-2">
								<Link href="/kontak">Kontak </Link>
							</li>
						</ul>
					</div>
					<div className="grid items-center grid-cols-4 gap-4"></div>
				</div>
				<SheetFooter>
					<SheetClose asChild></SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default NavbarMobile;
