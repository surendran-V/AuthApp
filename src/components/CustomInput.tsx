// src/components/CustomInput.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  placeholder?: string;
  accessibilityLabel?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  onChangeText,
  error,
  secureTextEntry,
  placeholder,
  accessibilityLabel,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        accessibilityLabel={accessibilityLabel || label}
        accessibilityRole="text"
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ff0000',
  },
  errorText: {
    color: '#ff0000',
    fontSize: 12,
    marginTop: 5,
  },
});
