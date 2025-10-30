import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  const { user, login, logout, register } = context;

  return {
    user,
    login,
    logout,
    register,
  };
};

export default useAuth;