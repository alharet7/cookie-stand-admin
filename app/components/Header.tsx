import Link from "next/link";

const links = ["About"];

export default function Header() {
    return <nav className="bg-gray-800 flex justify-between items-center h-14 p-4">
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor"
            className="w-6 h-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
        <Link href="/" className="text-white font-semibold ml-4 mr-auto">Cookie Stand Admin</Link>
        <ul className="flex gap-6 list-none text-white">
            {links.map((link) => (
                <li key={link}>
                    <Link
                        href={link.toLocaleLowerCase()}
                        className="p-2 hover:bg-cyan-600 hover:rounded-md active:bg-violet-500 focus:ring focus:rounded-md focus:outline-none focus:ring-offset-blue-500">
                        {link}
                    </Link>
                </li>
            ))
            }
        </ul>
    </nav>;
}