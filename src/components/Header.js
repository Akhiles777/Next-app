import Link from 'next/link';
import { FaHome, FaList, FaPhone } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="bg-amber-800 text-white shadow-md rounded-b-2xl">
            <div className="container mx-auto px-4 py-4 flex items-center flex-col md:justify-between">
                <Link href="/" className="text-2xl font-bold transition-colors">
                    Покупка ненужных вещей времен СССР
                </Link>

                <nav>
                    <ul className="flex space-x-6">
                        {[
                            { href: "/", icon: FaHome, label: "Главная" },
                            { href: "/categories", icon: FaList, label: "Категории" },
                        ].map(({ href, icon: Icon, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="
                    flex items-center relative
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:bg-white
                    after:w-0
                    hover:after:w-full
                    after:transition-[width] after:duration-300
                    "
                                >
                                    <Icon className="mr-1" /> {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
