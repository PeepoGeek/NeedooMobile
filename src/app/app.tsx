import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './navigation';
import { ThemeProvider } from '../shared/styles/theme-provider';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}; 