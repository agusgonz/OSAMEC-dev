import Image from "next/image"
import React from "react"

const index = () => {
	return (
		<footer
			className="
        w-full
        bg-black
        p-3
        text-white
        text-sm
        flex
        flex-col
        md:flex-row
        md:gap-5
        items-center
        gap-3
        justify-center
      "
		>
			<Image
				src="/icons/logo-blanco.svg"
				width={70}
				height={100}
				alt="logo"
			/>
			<div className="text-center">
				OSAMEC - Bosch Diesel Service - Bosch Car Service
				<br />
				Ramírez 2664, M5500 Mendoza, Argentina
			</div>
		</footer>
	)
}

export default index
