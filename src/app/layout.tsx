import '@/app/globals.css'
import NavigationMenu from './components/NavigationMenu'
import SearchBar from './components/SearchBar'

export const metadata = {
  title: 'Garments Site',
  description: 'Handloom Garments Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavigationMenu />
        <div className="main-container">
          <SearchBar />
          {children}
        </div>
      </body>
    </html>
  )
}
