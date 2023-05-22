import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='scroll-smooth'>
      <Head>
        <link rel="shortcut icon" href="/icons/logo-azul-nuevo.ico" />
        <meta 
          name='description'
          content='
            OSAMEC Organización al servicio del automotor. Taller Integral con más de 50 años de experiencia en el rubro - Nuestro concepto de reparación "patente a patente", capacitación constante , reparaciones rápidas , certeras y garantizadas , hacen de nuestra empresa un lugar de confianza, cómodo y seguro para nuestros clientes - Somos el taller de las cosas bien hechas
          '
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
