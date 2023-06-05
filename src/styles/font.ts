import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "600", "700"]
})

const font = poppins.className;

export default font;
