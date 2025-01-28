import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Metadata } from "next";
import Sertifikat from "@/app/assets/sertifikat/sertifikat.jpg";
import Image from "next/image";
import { ListJambuTentang, ListTentangMetode } from "../utils/listTentangData";
export const metadata: Metadata = {
	title: "Tentang",
};

function Tentang() {
	return (
		<div>
			<Navbar />
			<div className="px-[5vw] mt-20 mb-10">
				<h1 className="font-bold text-xl mb-4">Kilas Balik</h1>
				<p className="text-justify">
					Aku bangga jadi petani semoga bertani menjadikan saya sejahtra dengan menjual buah, bibit, dan turunannya.
					Saya owner wali jambu pekerjaan saya menjadi petani hari-hari ku banyak saya habiskan di kebun, karena saya
					harus memberikan makan tanam tanamanku. Saya menanam atau membudidaya jambu air bermacam-macam jenis jambu
					unggulan jambu indonesia, jambu daerah bahkan jambu penamaan luar negeri. Saya memulai budidaya jambu
					bertepatan di kutai kartanegara salah satunya muara jawa sejak tahun 2012 dengan metode cangkok, stek, sambung
					sisit, sambung pucuk, dan okulasi ada bermacam-macam jenis jambu yang saya kembangkan di kebun wali Jambu
				</p>
				<ul className="mt-5 grid grid-cols-4 gap-3 mb-10 ">
					{ListJambuTentang.map((data, index) => {
						return (
							<li key={index} className="col-span-4 md:col-span-1">
								{data.title}
							</li>
						);
					})}
				</ul>
				<div className="Metode">
					<h1 className="font-bold text-xl mb-4">Metode Penanaman</h1>
					<p className="text-justify">
						Wali Jambu melayanni penjualan buah yang dihasilkan kebun wali jambu bibit yang di produksi wali jambu
						dengan spesifikasi yang disediakan oleh wali jambu di antaranya:
					</p>
					<ul className="mt-5 grid grid-cols-4 gap-3 mb-3 ">
						{ListTentangMetode.map((data, index) => {
							return (
								<li key={index} className="col-span-4 md:col-span-1">
									{data.title}
								</li>
							);
						})}
					</ul>
					<p>
						Sebagai sarana peendukung penjualan bibitnya legalitasnya wali jambu dengan ini sudah mendapatkan
						sertifikasi kompetensi produsen benih, holtikultura, no. 166/perorangan/ktm/09.2024. Yang diberikan
						pemerintah provinsi kalimantan timur, dinas pangan, tanaman pangan, dan holtikultura. UPTD pengawasan dan
						sertifikasi benih tanaman pangan dan holtikultura.
					</p>
					<Image src={Sertifikat} alt="gambaran" className="rounded-md w-96 object-cover mt-4 " />
				</div>
				<div>
					<h1 className="font-bold text-xl mt-4 mb-4">Realita & Potensi Dunia Perjambuan versi Wali Jambu</h1>
					<div className="grid grid-cols-2 gap-4">
						<div className="col-span-2 md:col-span-1">
							<h1 className="mb-2 font-semibold">Buah Jambu Terlaris Wali Jambu</h1>
							<ul className="flex flex-col gap-3 mb-4">
								<li>Citra</li>
								<li>MDH</li>
								<li>King Rose Apple</li>
								<li></li>
							</ul>
						</div>
						<div className="col-span-2 md:col-span-1">
							<h1 className="mb-2 font-semibold">
								Buah Jambu Termasi Versi Wali Jambu Di Tes Dengan Menggunakan Alat reflactometer
							</h1>
							<ul className="flex flex-col gap-3 mb-4">
								<li>MDH mencapai 18 brix</li>
								<li>Citra mencapai 14 brix</li>
								<li>King Rose Apple mencapai 12 brix</li>
							</ul>
						</div>
						<div className="col-span-2 md:col-span-1">
							<h1 className="mb-2 font-semibold">Buah Jambu Terbesar Versi Wali Jambu</h1>
							<ul className="flex flex-col gap-3 mb-4">
								<li>King Rose Apple</li>
								<li>Citra</li>
								<li>MDH</li>
							</ul>
						</div>
						<div className="col-span-2 md:col-span-1">
							<h1 className="mb-2 font-semibold">Tekstur Wali Jambu</h1>
							<ul className="flex flex-col gap-3 mb-4">
								<li>MDH ait banyak, crispy, dan manis</li>
								<li>Citra air banyak, padat, non biji, dan manis</li>
								<li>King Rose Apple air banyak, lembut, dan manis</li>
							</ul>
						</div>
						<div className="col-span-2 md:col-span-1">
							<h1 className="mb-2 font-semibold">Buah Jambu Tergenjah / Mudah Berbuah Versi Wali Jambu</h1>
							<ul className="flex flex-col gap-3 mb-4">
								<li>MDH</li>
								<li>King Rose Apple</li>
								<li>Mutiara Hitam</li>
								<li>Grand Giant</li>
								<li>Sugar Barbie</li>
							</ul>
						</div>
						<div className="col-span-2 md:col-span-1">
							<h1 className="mb-2 font-semibold">Penjualan Jambu Termahal Veri Wali Jambu</h1>
							<ul className="flex flex-col gap-3 mb-4">
								<li>King Rose Apple - Rp 50.000 (kualitas super)</li>
								<li>Mutiara Hitam - Rp 60.000 (kualitas super)</li>
								<li>Barbie Sugar - Rp 55.000 (kualitas super)</li>
								<li>Black Red - Rp 60.000 (kualitas super)</li>
								<li></li>
							</ul>
						</div>
						<div className="col-span-2 md:col-span-1">
							<h1 className="mb-2 font-semibold">Penjualan Bbit Termahal Versi Wali Jambu</h1>
							<ul className="flex flex-col gap-3 mb-4">
								<li>Black Red</li>
								<li>RHS</li>
								<li>Barbie Sugar</li>
								<li>King Rose Apple</li>
								<li>Mutiara Hitam</li>
							</ul>
						</div>
						<div className="col-span-2 md:col-span-1">
							<h1 className="mb-2 font-semibold">Spesifikasi Standar Penjualan Buah Wali Jambu</h1>
							<ul className="flex flex-col gap-3 mb-4">
								<li>Buah Standar Perkilo isi 10-13 biji untuk Jambu MDH, Citra, King Rose Apple Harga 30.000</li>
								<li>Untuk Buah Kualitas Super perKG isi 6-9 biji untuk buah Jambu MDH, Citra harga Rp 45.000</li>
								<li>Untuk King Rose Apple perKG isi 4-9 biji harga Rp 50.000</li>
							</ul>
						</div>
					</div>
					<p className="text-justify mt-12">
						MARI MENANAM POHON UNTUK MASA DEPAN KITA DAN ANAK CUCU KITA. SETIDAKNYA KITA BERPARTISIPASI MENYUMBANG &
						SEDEKAH OKSIGEN, MENJAGA KESEIMBANGAN ALAM, DAN MEMBANGUN BUMI YANG LEBIH HIJAU UNTUK GENERASI BERIKUTNYA.
						KARENA SATU POHON YANG KITA TANAM, ADALAH NAFAS UNTUK JUTAAN KEHIDUPAN. 🌱
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Tentang;
