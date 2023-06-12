import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  function addJsonLd() {
    return {
      __html:`{
        "@context": "https://schema.org",
        "@type": "AutomotiveBusiness",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mendoza, Argentina",
          "postalCode": "M5500",
          "streetAddress": "Ramírez 2664"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.4",
          "reviewCount": "143"
        },
        "name": "OSAMEC - Bosch Diesel Service - Bosch Car Service",
        "openingHours": "Mo,Tu,We,Th,Fr 8:30-12:30 13:30-17:30",
        "telephone": "261 430-7933",
        "url": "https://www.osamec.com.ar"
      }`
    }
  }

  return (
    <Html lang="en" className='scroll-smooth'>
      <Head>
        <link rel="shortcut icon" href="/icons/icono-cuadrado.ico" />
        <meta 
          name='description'
          content='
            OSAMEC Organización al servicio del automotor. Taller Integral con más de 50 años de experiencia en el rubro - Nuestro concepto de reparación "patente a patente", capacitación constante , reparaciones rápidas , certeras y garantizadas , hacen de nuestra empresa un lugar de confianza, cómodo y seguro para nuestros clientes - Somos el taller de las cosas bien hechas
          '
          />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
        >
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}
