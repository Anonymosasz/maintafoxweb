import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  const [error, setError] = useState(null);

  const handleLogin = async (data) => {
    const result = await signIn('credentials', {
      redirect: false,
      ...data,
    });

    if (result.error) {
      setError(result.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <LoginForm onSubmit={handleLogin} />
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link href="/auth/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}