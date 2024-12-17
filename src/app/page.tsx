import Image from "next/image";
import Navbar from "./navbar";
import Profile from "@/app/assets/profile/profile.jpg";
import Link from "next/link";
import Footer from "./footer";

export default function Home() {
	return (
		<div className="">
			<Navbar />
			<div className="grid grid-cols-2 px-[5vw] mt-14 ">
				<div className="col-span-2 md:col-span-1">
					<h1 className="font-bold text-2xl mt-14 mb-3 ">Pak Muslih Jambu Citra</h1>
					<p className="text-justify">
						Pak Muslih adalah seorang pengusaha sukses dan visioner di bidang agribisnis, khususnya sebagai pemilik
						brand Jambu. Dengan semangat inovasi dan dedikasi terhadap kualitas, ia berhasil mengembangkan Jambu menjadi
						produk unggulan yang diminati pasar. Komitmennya terhadap keberlanjutan dan pemberdayaan petani lokal
						menjadikan Jambu tak hanya produk, tetapi juga simbol dari kerja keras dan kepercayaan masyarakat.
					</p>
					<div className="flex gap-x-3 mt-10 mb-20">
						<Link className="px-3 py-2.5 rounded-md bg-[#323232] text-white " href={""}>
							Hubungi Kami
						</Link>
					</div>
				</div>
				<div className="col-span-2 md:col-span-1">
					<Image
						src={Profile}
						alt="Picture of the author"
						className="h-[20rem] mx-auto object-cover rounded-full w-[20rem] md:h-[26rem] md:w-[26rem]"
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
				<div className="flex justify-center">
					<Link href={"/produk"} className="px-3 py-2.5 rounded-md bg-[#323232] text-white mt-12">
						Selengkapnya
					</Link>
				</div>
			</div>
			<div className="tata-cara px-[5vw]  mt-20">
				<div>
					<h1 className="font-semibold text-2xl">Pencapaian</h1>
				</div>
			</div>
			<div className="lokasi-pembelian mb-20 mt-20 px-[5vw]">
				<div className="grid grid-cols-2  ">
					<div className="md:col-span-1 col-span-2">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d727.2794314568731!2d117.23151381727614!3d-0.8142623532568252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df41feec475b5cb%3A0x129a5e5292c8bfc6!2sJual%20pembungkus%20buah%20heigrow%20fruit%20cover%20dan%20buah%20jambu%20CITRA%2C%20MDH%20dan%20KING%20ROSE%20APLE!5e1!3m2!1sen!2sid!4v1734191045372!5m2!1sen!2sid"
							width={840}
							height={406}
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="content-center w-full "
						/>
					</div>
					<div className="md:col-span-1 col-span-2">
						<div className="flex-col bg-[#11856c] text-white w-full h-[407px] flex justify-center items-center px-12">
							<div>
								<p className="mb-6">
									Datang ke sini, temukan kesegaran yang tiada duanya! Jambu segar, manis, dan penuh nutrisi siap
									menemani harimu. Beli sekarang, rasakan nikmatnya langsung dari alam!
								</p>
								<Link href={"/about"} className=" rounded-sm border border-white/45  px-3 py-2.5">
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
