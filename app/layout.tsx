import type { Metadata } from 'next'; import './globals.css';
export const metadata: Metadata={title:'AI-GOS — Government services, made simple',description:'A trusted AI interface for accessing government services.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
