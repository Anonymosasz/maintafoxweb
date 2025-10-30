import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import ModerationPanel from '@/components/admin/ModerationPanel';
import UserManagement from '@/components/admin/UserManagement';

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session || session.user.role !== 'admin') {
      router.push('/'); // Redirect to homepage if not authenticated or not an admin
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <div className="mt-6">
        <ModerationPanel />
        <UserManagement />
      </div>
    </div>
  );
}