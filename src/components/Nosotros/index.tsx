import Image from "next/image"
import React from "react"
import UnderlineText from "../UnderlineText"
import fontstyles from "../../styles/fonts.module.css"

const index = () => {
	return (
		<div
			className="flex "
			id="nosotros"
		>
			<div
				className="
          inline-block
          px-5
          py-14
          lg:px-10
          xl:flex 
          xl:flex-col
          xl:justify-center
      "
			>
				<div className="pt-5">
					<UnderlineText
						underlineColor={"orangeCol"}
						imageSrc={"/icons/media/star-orange.svg"}
						className={fontstyles.boldFont}
						textBig
					>
						Taller integral con más de 50 años de
						experiencia en el rubro.
					</UnderlineText>

					<div className="text-gray-700 text-xl ">
						Nuestro concepto de reparación "patente a
						patente", capacitación constante, reparaciones
						rápidas, certeras y garantizadas, hacen de
						nuestra empresa un lugar de confianza, cómodo y
						seguro para nuestros clientes.
						<div
							className={`underline text-xl py-3 xl:py-5 ${fontstyles.lightFont_Serpentine}`}
						>
							‘‘Somos el taller de las cosas bien hechas‘‘.
						</div>
						<div className="inline font-bold text-base xl:text-xl pr-1">
							OSA
							<span className={fontstyles.italicFont}>
								MEC
							</span>
							.
						</div>
						<div className="inline italic text-xs xl:text-sm">
							Organización al servicio del automotor.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
