import React from "react";
import Navbar from "../navbar";
import Image from "next/image";
import Profile from "@/app/assets/profile/profile.jpg";
import Footer from "../footer";

function Produk() {
	return (
		<>
			<Navbar />
			<div className="flex justify-center  px-[5vw]">
				<div className="grid grid-rows-3 gap-12 mt-14">
					<div>
						<h1 className="font-semibold text-xl text-center">Jambu</h1>
						<div className="konten-produk grid grid-cols-4 gap-4 mt-4">
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
						</div>
					</div>
					<div>
						<h1 className="font-semibold text-xl text-center">Bibit</h1>
						<div className="konten-produk grid grid-cols-4 gap-4 mt-4">
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
						</div>
					</div>
					<div>
						<h1 className="font-semibold text-xl text-center">Pupuk</h1>
						<div className="konten-produk grid grid-cols-4 gap-4 mt-4">
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
						</div>
					</div>
					<div>
						<h1 className="font-semibold text-xl text-center">Peralatan</h1>
						<div className="konten-produk grid grid-cols-4 gap-4 mt-4">
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
							<Image src={Profile} className="rounded-md col-span-2 md:col-span-1" alt="produk"></Image>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Produk;
