import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-brand">
          Next.js Blog
        </Link>
        <nav className="flex space-x-4">
          <Link href="/blog" className="text-gray-700 hover:text-brand">
            Blog
          </Link>
          {session ? (
            <>
              <Link href="/dashboard" className="text-gray-700 hover:text-brand">
                Dashboard
              </Link>
              <Link href="/api/auth/signout" className="text-gray-700 hover:text-brand">
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="text-gray-700 hover:text-brand">
                Login
              </Link>
              <Link href="/auth/register" className="text-gray-700 hover:text-brand">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;