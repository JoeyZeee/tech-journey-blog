import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google';
import NavBarContainer from "@/components/NavBarContainer";
import Footer from "@/components/Footer";

/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Inter({ weight: 'variable', subsets: ['latin']})
const title = 'Joey\'s Site';
const description = 'This my personal site, not Luke\'s';

const SocialLinks = {
  github: 'https://github.com/JoeyZeee',
  instagram: 'https://www.instagram.com/joeyzeeeeeee/',
  email: 'mailto:jzambreno@gmail.com'
}

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={'h-full'}>
      <body className={`${font.className} flex flex-col min-h-screen`}>
      <Footer socialLinks={SocialLinks}/>
      </body>
      </html>
  )
}
