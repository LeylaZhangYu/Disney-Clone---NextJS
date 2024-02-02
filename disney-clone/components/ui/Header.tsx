import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header>
            <Link href="/"> {/* href="/" means goes back to the home page */}
                <Image
                    src="https://links.papareact.com/a943ae"
                    width={120}
                    height={100}
                    className="cursor-pointer"
                    alt="Disney Logo" 
                    />
            </Link>
            <div className="flex space-x-2">
                {/* GenreDropdown */}
                {/* SearchInput */}
                {/* Themetoggler */}
            </div>
        </header>
    )
}

export default Header