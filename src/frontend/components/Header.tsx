import Link from "next/link"

const Header = () => {
    return (
        <Link href={'/'}>
            <a>
                <h1 className="text-3xl p-3 pl-6">
                    Flash Cards
                </h1>
            </a>
        </Link>
    )
}

export default Header