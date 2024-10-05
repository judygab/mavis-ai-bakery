import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Mavis<span className="text-blue-500">AI</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/about"
                className="hover:text-blue-500 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/team"
                className="hover:text-blue-500 transition-colors"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
