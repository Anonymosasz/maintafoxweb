import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') {
      return; // Do nothing while loading
    }
    if (!session) {
      // Redirect to login if not authenticated
      window.location.href = '/auth/login';
    }
  }, [session, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">User Profile</h1>
      {session && (
        <div className="mt-4">
          <p><strong>Name:</strong> {session.user.name}</p>
          <p><strong>Email:</strong> {session.user.email}</p>
          {/* Add more user details as needed */}
        </div>
      )}
    </div>
  );
}