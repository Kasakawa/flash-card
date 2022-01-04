import Link from "next/link"

const Header = () => {
    return (
        <Link href={'/'}>
            <h1 className="text-3xl p-2">
                Flash Cards
            </h1>
        </Link>
    )
}

export default Header