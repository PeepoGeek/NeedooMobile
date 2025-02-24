import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../../../shared/styles/theme-provider';
import { Button } from '../../../shared/components/buttons/Button';
import type { RootStackParamList } from '../../../app/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: theme.colors.text }]}>
        Profile Screen
      </Text>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Go to Home" 
          onPress={() => navigation.navigate('Home')}
          variant="primary"
        />
        
        <View style={styles.buttonSpacing} />
        
        <Button 
          title="Go Back" 
          onPress={() => navigation.goBack()}
          variant="secondary"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 32,
  },
  buttonContainer: {
    width: '80%',
  },
  buttonSpacing: {
    height: 16,
  },
}); 