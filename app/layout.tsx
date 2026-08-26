import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Swaad Vadodara | Food Delivery',description:'Discover and order delicious food from Vadodara.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
