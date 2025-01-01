// src/utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveEmail = async (email: string) => {
  try {
    await AsyncStorage.setItem('rememberedEmail', email);
  } catch (error) {
    console.error('Error saving email:', error);
  }
};

export const getRememberedEmail = async () => {
  try {
    return await AsyncStorage.getItem('rememberedEmail');
  } catch (error) {
    console.error('Error getting email:', error);
    return null;
  }
};
