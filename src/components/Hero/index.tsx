import Image from "next/image"
import React from "react"
import ContactoButton from "../ContactoButton"
import MainLink from "./MainLink"
import SecondaryLink from "./SecondaryLink"

import fontstyles from "../../styles/fonts.module.css"

const index = () => {
	return (
		<div
			className={`min-h-[100vh] flex flex-col justify-evenly ${fontstyles.regularFont_Serpentine}`}
		>
			<div
				className="
          flex
          flex-col
          justify-center
          content-center
          bg-white
          px-7
          py-28
        "
			>
				<Image
					className="self-center"
					src="/icons/isotipo-logotipo.png"
					width="400"
					height="300"
					alt="logo"
				/>
			</div>
			<div className="overflow-hidden relative bg-white">
				<MainLink />
				<SecondaryLink />
			</div>
		</div>
	)
}

export default index
