import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        // href="/" means goes back to the home page
        <header>
            <Link href="/">
                <Image
                    src="https://links.papareact.com/a943ae"
                    width={120}
                    height={100}
                    className="cursor-pointer"
                    alt="Disney Logo" />
            </Link>
        </header>
    )
}

export default Header