import Header from "./Header"
import Meta from "./Meta"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
      <>
        <Meta />
        <div>
          <main >
            <Header />
            {children}
          </main>
        </div>
      </>
    )
  }

export default Layout