import '@/styles/globals.css'
import localFont from 'next/font/local'

const Montreal = localFont({
  src: [
    {
      path: './fonts/NeueMontreal-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/NeueMontreal-Medium.woff2',
      weight: '500',
    },
  ],
  variable: '--font-montreal',
})

const BasementFont = localFont({
  src: './fonts/BasementGrotesqueDisplay-UltraBlackExtraExpanded.woff2',
  variable: '--font-basement',
})


export default function App({ Component, pageProps }) {
  return (
    <main  className={`${Montreal.variable} ${BasementFont.variable} montreal`}>
      <Component {...pageProps} />
    </main>
  )
}
