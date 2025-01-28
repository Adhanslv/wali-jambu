import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ListBibit } from "@/app/utils/bibitData";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bibit",
};

function Bibit() {
	return (
		<div>
			<Navbar />
			<div className="px-[5vw] mt-20">
				<div>
					<h1 className="font-semibold text-xl text-center">Bibit</h1>
					<div className="konten-produk grid grid-cols-3 gap-4 mt-4  mb-20">
						{ListBibit.map((data, index) => {
							return (
								<div key={index} className="col-span-3 md:col-span-1">
									<Image src={data.image} className="rounded-md " alt="produk"></Image>
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

export default Bibit;
