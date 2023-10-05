import React from "react"
import LinkCont from "./LinkCont"

import { v4 as uuid } from "uuid"
import SectionLayer from "../SectionLayer"

const index = () => {
	const buttonsInfo = [
		{
			name: "Whatsapp",
			icon: "/icons/media/whatsapp-blanco.svg",
			href: "https://wa.me/+5492615898592",
			colorBg: "green-500",
			colorTx: "white",
		},
		{
			name: "Telefono",
			icon: "/icons/media/phone-blanco.svg",
			href: "tel:261 430-7933",
			colorBg: "gray-600",
			colorTx: "white",
		},
		{
			name: "Correo",
			icon: "/icons/media/mail-blanco.svg",
			href: "mailto:osameclaboratorio@gmail.com",
			colorBg: "darkBlueCol",
			colorTx: "white",
		},
		{
			name: "Facebook",
			icon: "/icons/media/facebook-blanco.svg",
			href: "https://www.facebook.com/solucion.osamec",
			colorBg: "blue-600",
			colorTx: "white",
		},
		// {
		//   name: 'Instagram',
		//   icon: '/icons/media/instagram-blanco.svg',
		//   href: '/',
		//   colorBg: 'purple-700',
		//   colorTx: 'white',
		// },
	]

	return (
		<div
			className={" text-white"}
			id="contacto"
		>
			<ul
				className="
            flex
            gap-6
            flex-wrap
            justify-center
          "
			>
				{buttonsInfo.map(button => {
					return (
						<li key={uuid()}>
							<LinkCont
								icon={button.icon}
								colorBg={button.colorBg}
								colorTx={button.colorTx}
								name={button.name}
								href={button.href}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default index
