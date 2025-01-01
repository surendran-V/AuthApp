// src/screens/LoginScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert, Switch, Text } from 'react-native';
import { Formik } from 'formik';
import { LoginSchema } from '../utils/validation';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { saveEmail, getRememberedEmail } from '../utils/storage';
import type { LoginFormValues } from '../types/auth.types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<any>;
}

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [rememberedEmail, setRememberedEmail] = useState('');

  useEffect(() => {
    loadRememberedEmail();
  }, []);

  const loadRememberedEmail = async () => {
    const email = await getRememberedEmail();
    if (email) {
      setRememberedEmail(email);
    }
  };

  const handleLogin = async (values: LoginFormValues) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (values.rememberMe) {
        await saveEmail(values.email);
      }

      Alert.alert('Success', 'Login successful!');
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
          email: rememberedEmail,
          password: '',
          rememberMe: false,
        }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
        enableReinitialize
      >
        {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
          <View style={styles.form}>
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
            <View style={styles.rememberMeContainer}>
              <Switch
                value={values.rememberMe}
                onValueChange={(value : boolean) => {setFieldValue('rememberMe', value)}}
                accessibilityRole="switch"
                accessibilityLabel="Remember me"
              />
              <Text style={styles.rememberMeText}>Remember me</Text>
            </View>
            <CustomButton
              title="Login"
              onPress={handleSubmit}
              isLoading={isLoading}
            />
            <CustomButton
              title="Create Account"
              onPress={() => navigation.navigate('SignUp')}
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
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  rememberMeText: {
    marginLeft: 8,
    fontSize: 16,
  },
});
