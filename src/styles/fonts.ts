import {
  Inter,
  Montserrat,
  Poppins,
  Atkinson_Hyperlegible,
} from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font--atkinsonHyperlegible',
  weight: ['400', '700'],
});
