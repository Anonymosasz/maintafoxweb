import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4">
        <h2 className="text-lg font-bold">Dashboard</h2>
        <nav className="mt-4">
          <ul>
            <li>
              <Link href="/dashboard/admin/posts" className="block py-2 hover:bg-gray-700">
                Manage Posts
              </Link>
            </li>
            <li>
              <Link href="/dashboard/admin/users" className="block py-2 hover:bg-gray-700">
                Manage Users
              </Link>
            </li>
            <li>
              <Link href="/dashboard/profile" className="block py-2 hover:bg-gray-700">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;