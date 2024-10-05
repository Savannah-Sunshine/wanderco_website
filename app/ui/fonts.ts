// Next.js automatically optimizes fonts in the application when you use the next/font module. 
// It downloads font files at build time and hosts them with your other static assets. 
// This means when a user visits your application, 
// there are no additional network requests for fonts which would impact performance.
import { Sen } from 'next/font/google'

export const sen = Sen({ subsets: ['latin'] })


import { Lusitana } from 'next/font/google'
export const lusitana = Lusitana({ weight: "700", subsets: ['latin'] })