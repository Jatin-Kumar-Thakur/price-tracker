import Image from "next/image";
import Link from "next/link";
import '@/style/navbar.css'

const navIcon=[
    {src:'/assets/icons/search.svg',alt:'search'},
    {src:'/assets/icons/black-heart.svg',alt:'heart'},
    {src:'/assets/icons/user.svg',alt:'user'},
]
export default function Navbar() {
    return (
        <header className="nav-header">
            <nav className="nav">
                <Link href='/' className="nav-link">
                    <Image
                        src="/assets/icons/logo.svg"
                        width={27}
                        height={27}
                        alt="logo"
                    />

                    <p className="nav-title">
                        Price<span className="nav-title-span">Tracker</span>
                    </p>
                </Link>
                <div className="nav-logos">
                    {
                        navIcon.map((icon)=>(
                            <Image 
                                key={icon.alt}
                                src={icon.src}
                                alt={icon.alt}
                                width={28}
                                height={28}
                                className="nav-images"
                            />
                        ))
                    }
                </div>
            </nav>
        </header>
    )
}
