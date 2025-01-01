// src/screens/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import { SignUpSchema } from '../utils/validation';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import type { SignUpFormValues } from '../types/auth.types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<any>;
}

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (_values: SignUpFormValues) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      Alert.alert('Success', 'Sign up successful!', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          fullName: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            <CustomInput
              label="Full Name"
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              error={touched.fullName ? errors.fullName : undefined}
              placeholder="Enter your full name"
            />
            <CustomInput
              label="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              error={touched.email ? errors.email : undefined}
              placeholder="Enter your email"
            />
            <CustomInput
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              error={touched.password ? errors.password : undefined}
              secureTextEntry
              placeholder="Enter your password"
            />
            <CustomInput
              label="Confirm Password"
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              error={touched.confirmPassword ? errors.confirmPassword : undefined}
              secureTextEntry
              placeholder="Confirm your password"
            />
            <CustomButton
              title="Sign Up"
              onPress={handleSubmit}
              isLoading={isLoading}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
});
