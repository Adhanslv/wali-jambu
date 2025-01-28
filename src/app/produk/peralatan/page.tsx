import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ListAlat } from "@/app/utils/alatData";

function Peralatan() {
	return (
		<div>
			<Navbar />
			<div className="px-[5vw] mt-20">
				<div>
					<h1 className="font-semibold text-xl text-center">Peralatan</h1>
					<div className="konten-produk grid grid-cols-3 gap-10 mt-4  mb-20">
						{ListAlat.map((data, index) => {
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

export default Peralatan;
