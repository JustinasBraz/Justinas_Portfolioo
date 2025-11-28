import './globals.css'

export const metadata = {
  title: 'Justinas Portfolio',
  description: 'Junior Full Stack Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}

