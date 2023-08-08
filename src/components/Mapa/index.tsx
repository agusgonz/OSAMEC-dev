import React from "react"
import MyMap from "./MyMap"
import SectionLayer from "../SectionLayer"
import useWindowSize from "@/hooks/useWindowSize"
import DayRow from "./DayRow"
import UnderlineText from "../UnderlineText"

import fontstyles from "../../styles/fonts.module.css"
import { MoveUpRight } from "lucide-react"
import Link from "next/link"

const index = () => {
	const windowSize = useWindowSize()

	const smallMapSize = {
		width: `${windowSize.width <= 450 ? "300px" : "400px"}`,
		height: `${
			windowSize.width <= 450 ? "500px" : "400px"
		}`,
	}
	const MapSize = {
		width: `${
			windowSize.width >= 1300 ? "700px" : "500px"
		}`,
		height: `400px`,
	}

	return (
		<div
			className={` py-10 ${fontstyles.regularFont}`}
			id="mapa"
		>
			<div
				className="
          flex
          flex-col
          md:flex-row
          justify-evenly
          items-center
          p-3
          
        "
			>
				<MyMap
					size={
						windowSize.width >= 1000
							? MapSize
							: smallMapSize
					}
				/>
				<div className="pl-3 pt-5 md:pt-0">
					<UnderlineText
						imageSrc={"/icons/media/mark-orange.svg"}
						className="md:whitespace-nowrap"
					>
						Dirección: Ramírez 2664, Cuarta Sección, Mendoza
						Capital
					</UnderlineText>
					<UnderlineText
						imageSrc={"/icons/media/tick-orange.svg"}
					>
						Lunes a Viernes
					</UnderlineText>
					<UnderlineText
						imageSrc={"/icons/media/cross-orange.svg"}
					>
						<strong>Cerrado:</strong> Sabados y Domingo
					</UnderlineText>
					<UnderlineText
						imageSrc={"/icons/media/clock-orange.svg"}
					>
						Horarios: 8:30-12:30, 13:30-17:30
					</UnderlineText>
					<UnderlineText
						imageSrc={"/icons/media/questionmark-gray.svg"}
						className={"text-gray-500 text-md xl:text-md"}
						nonUnderline
						underlineColor={"gray-500"}
					>
						Consultar horarios feriados
					</UnderlineText>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href={
							"https://www.google.com/maps/place/OSAMEC+-+Bosch+Diesel+Service+-+Bosch+Car+Service/@-32.8726915,-68.8235023,15z/data=!4m2!3m1!1s0x0:0x1853d60257876b1b?sa=X&ved=2ahUKEwjDpfeVlM2AAxX2rJUCHWgfAHMQ_BJ6BAg_EAA&ved=2ahUKEwjDpfeVlM2AAxX2rJUCHWgfAHMQ_BJ6BAhIEAg"
						}
						className="p-3 px-5 bg-blue-400 text-lg xl:text-xl"
					>
						Abrir en maps
						<MoveUpRight className="inline-block w-4 h-4 pl-1 pb-1" />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default index
