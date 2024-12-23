import Link from "next/link";

const SecondaryNavbar = () => {
  return (
    <nav className="text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold text-[#252B42]">Bandage</h1>

        {/* Hamburger Menu for Small Screens */}
        <div className="flex items-center md:hidden">
          <button
            className="text-[#252B42] flex items-center space-x-2 focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <span className="text-sm font-medium">Menu</span>
          </button>
        </div>

        {/* Links for Larger Screens */}
        <ul className="hidden md:flex space-x-4 text-[#737373]">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/product" className="hover:text-gray-300">
              Product
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-gray-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <ul
          id="mobile-menu"
          className="absolute top-16 left-0 w-full  hidden flex-col md:hidden space-y-4 p-4"
        >
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/product" className="hover:text-gray-300">
              Product
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-gray-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
