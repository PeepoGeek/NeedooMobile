import { useState, useCallback } from 'react';
import { APP_CONSTANTS } from '../../config/constants';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(async (credentials: { 
    email: string; 
    password: string 
  }) => {
    // Implementar lógica de login
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(async () => {
    // Implementar lógica de logout
    setIsAuthenticated(false);
  }, []);

  return {
    isAuthenticated,
    login,
    logout,
  };
}; 