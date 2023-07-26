import './globals.css'
import { Libre_Franklin } from 'next/font/google';

const libre = Libre_Franklin({ subsets: ['latin'] });

export const metadata = {
  title: 'Caju & Somente - Psicologia e Psiquiatria',
  description: 'Saúde Mental para todos!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
          <link rel='icon' href='./favicon.png' />
      </head>
      <body className={libre.className}>{children}</body>
    </html>
  )
}
