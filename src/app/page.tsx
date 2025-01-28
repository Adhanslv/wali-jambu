import Image from "next/image";
import Navbar from "../components/navbar";
import Profile from "@/app/assets/profile/muslih.jpg";
import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {
	return (
		<div className="">
			<Navbar />
			<div className="grid grid-cols-2 px-[5vw] mt-10 ">
				<div className="col-span-2 md:col-span-1">
					<h1 className="font-bold text-2xl mt-14 mb-3 ">Moh Muslih</h1>
					<p className="text-justify">
						Pak Muslih adalah seorang pengusaha sukses dan visioner di bidang agribisnis, khususnya sebagai pemilik
						brand Jambu. Dengan semangat inovasi dan dedikasi terhadap kualitas, ia berhasil mengembangkan Jambu menjadi
						produk unggulan yang diminati pasar. Komitmennya terhadap keberlanjutan dan pemberdayaan petani lokal
						menjadikan Jambu tak hanya produk, tetapi juga simbol dari kerja keras dan kepercayaan masyarakat.
					</p>
					<div className="flex gap-x-3 mt-5">
						<Link className="px-3 py-2.5 rounded-md bg-[#323232] text-white " href={"/tentang"}>
							Selengkapnya
						</Link>
					</div>
				</div>
				<div className="col-span-2 md:col-span-1">
					<Image
						src={Profile}
						alt="Picture of the author"
						className="h-[20rem] mx-auto object-cover rounded-full w-[20rem] md:h-[26rem] md:w-[26rem] md:mt-0 mt-12"
					/>
				</div>
			</div>
			<div className="menjual-apa-saja?">
				<h1 className="text-center mb-12 font-bold text-2xl mt-20">Menjual Apa Saja?</h1>
				<div className="grid grid-cols-4 px-[5vw] gap-5">
					<div className="col-span-4 md:col-span-1">
						<h1 className="text-center font-semibold text-xl mb-4 ">Jambu</h1>
						<p className="text-center">Menjual Buah, bibit, tanaman sudah jadi </p>
					</div>
					<div className="col-span-4 md:col-span-1">
						<h1 className="text-center font-semibold text-xl mb-4 ">Bibit</h1>
						<p className="text-center">Menjual bibit sudah jadi </p>
					</div>
					<div className="col-span-4 md:col-span-1">
						<h1 className="text-center font-semibold text-xl mb-4 ">Pupuk</h1>
						<p className="text-center">Menjual pupuk untuk penunjang pertembuhan jambu </p>
					</div>
					<div className="col-span-4 md:col-span-1">
						<h1 className="text-center font-semibold text-xl mb-4 ">Peralatan</h1>
						<p className="text-center">Menjual peralatan untuk merawat tanaman jambu</p>
					</div>
				</div>
				{/* <div className="flex justify-center">
					<Link href={"/produk"} className="px-3 py-2.5 rounded-md bg-[#323232] text-white mt-12">
						Selengkapnya
					</Link>
				</div> */}
			</div>
			{/* <div className="tata-cara px-[5vw]  mt-20">
				<div>
					<h1 className="font-semibold text-2xl">Pencapaian</h1>
				</div>
			</div> */}
			<div className="lokasi-pembelian mb-20 mt-20 px-[5vw]">
				<div className="grid grid-cols-2  ">
					<div className="md:col-span-1 col-span-2">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d555.6137382431855!2d117.23587722141033!3d-0.8171088295076192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNDknMDEuNSJTIDExN8KwMTQnMDkuMiJF!5e1!3m2!1sen!2sid!4v1738050342027!5m2!1sen!2sid"
							width={840}
							height={406}
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="content-center w-full   "
						/>
					</div>
					<div className="md:col-span-1 col-span-2">
						<div className="flex-col bg-[#3434eb] text-white w-full h-[407px] flex justify-center items-center px-12 ">
							<div>
								<p className="mb-6">
									Datang ke sini, temukan kesegaran yang tiada duanya! Jambu segar, manis, dan penuh nutrisi siap
									menemani harimu. Beli sekarang, rasakan nikmatnya langsung dari alam!
								</p>
								<Link href={"/tentang"} className="rounded-sm border border-white/45  px-3 py-2.5">
									Selengkapnya
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
