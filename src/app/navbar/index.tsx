import Link from "next/link";
import React from "react";
import NavbarMobile from "./mobile";

function Navbar() {
	return (
		<div className="flex py-6 gap-x-5 px-[5vw] bg-[#11856c] text-white items-center justify-between ">
			<div className="flex gap-5">
				<Link className="text-[18px] font-semibold" href={"/"}>
					Home
				</Link>
				<Link className="text-[18px] font-semibold" href={"/tentang"}>
					Tentang
				</Link>
				<Link className=" hidden md:block text-[18px] font-semibold" href={"/produk"}>
					Produk
				</Link>
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
