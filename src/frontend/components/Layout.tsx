import Header from "./Header"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
          <main >
            <Header />
            {children}
          </main>
        </div>
    )
  }

export default Layout