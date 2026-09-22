import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = async (credentials) => {
    const nextUser = {
      id: 'demo-user',
      name: credentials?.name || 'Cliente Tech Saturno',
      email: credentials?.email || 'cliente@techsaturno.com'
    };

    setUser(nextUser);
    return nextUser;
  };

  const signOut = async () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      signIn,
      signOut,
      isAuthenticated: Boolean(user)
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}
