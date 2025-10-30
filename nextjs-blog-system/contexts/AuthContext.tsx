import { createContext, useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (status === 'authenticated') {
      setUser(session.user);
    } else {
      setUser(null);
    }
  }, [session, status]);

  return (
    <AuthContext.Provider value={{ user, loading: status === 'loading' }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};