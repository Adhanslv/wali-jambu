"use client";
import Link from "next/link";
import React from "react";
import { IconMail } from "@tabler/icons-react";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { IconBrandMeta } from "@tabler/icons-react";

function Footer() {
	return (
		<div className="grid grid-cols-3 gap-10 bg-[#3434eb] text-white  px-[5vw] py-12">
			<div className="col-span-3 md:col-span-1">
				<h1 className="font-semibold text-xl mb-3">Wali Jambu</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptas nulla tenetur.</p>
			</div>
			{/* <div className="col-span-3 md:col-span-1">
				<h1 className="font-semibold text-xl mb-3">Panduan</h1>
				<div className="flex flex-col">
					<Link href={""}>Cara Pembelian</Link>
					<Link href={""}>Cara Pembelian</Link>
					<Link href={""}>Cara Pembelian</Link>
				</div>
			</div> */}
			<div className="col-span-3 md:col-span-1">
				<h1 className="font-semibold text-xl mb-3">Pembeli</h1>
				<Link href={""}>Cara Pembelian</Link>
			</div>
			<div className="col-span-3 md:col-span-1">
				<h1 className="font-semibold text-xl mb-3">Kontak</h1>
				<div className="flex flex-col gap-3">
					<Link href={""} className="flex gap-x-2 items-center">
						<IconMail />
						walijambu@gmail.com
					</Link>
					<Link href={"https://wa.me/+6281348111233"} className="flex gap-x-2 items-center">
						<IconBrandWhatsapp />
						+6281348111233
					</Link>
					<Link href={""} className="flex gap-x-2 items-center">
						<IconBrandMeta />
						MuslihKoperasi
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Footer;
