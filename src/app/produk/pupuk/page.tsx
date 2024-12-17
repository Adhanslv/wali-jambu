import React from "react";
import Image from "next/image";
import Profile from "@/app/assets/profile/profile.jpg";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";

function Pupuk() {
	return (
		<>
			<Navbar />
			<div className="flex justify-center  px-[5vw]">
				<div className="grid grid-rows-3 gap-12 mt-14">
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
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Pupuk;
