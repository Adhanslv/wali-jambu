import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ListJambu } from "@/app/utils/jambuData";

export const metadata: Metadata = {
	title: "Jambu",
};

function Jambu() {
	return (
		<div>
			<Navbar />
			<div className="px-[5vw] mt-20">
				<div>
					<h1 className="font-semibold text-xl text-center">Jambu</h1>
					<div className="konten-produk grid grid-cols-3 gap-10 mt-4  mb-20">
						{ListJambu.map((data, index) => {
							return (
								<div key={index} className="col-span-3 md:col-span-1">
									<Image src={data.image} className="rounded-md w-full  object-cover" alt="produk"></Image>
									{/* <h1 className="text-center mt-2 font-semibold">{data.title}</h1> */}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Jambu;
