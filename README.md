# React Native Authentication App

A mobile authentication system built with React Native and TypeScript, featuring secure login and signup functionality with form validation.

## Features 🚀
- User Authentication (Login/Signup)
- Form Validation with Formik and Yup
- Remember Me Functionality
- Password Strength Validation
- Clean UI with Custom Components
- TypeScript Implementation
- Accessibility Support

## Technologies Used 🛠️
- React Native
- TypeScript
- Formik for Form Management
- Yup for Validation
- AsyncStorage for Local Storage
- React Navigation for Routing

## Project Structure
```
AuthApp/
├── src/
│   ├── components/
│   │   ├── CustomButton.tsx
│   │   └── CustomInput.tsx
│   ├── screens/
│   │   ├── LoginScreen.tsx
│   │   └── SignUpScreen.tsx
│   ├── types/
│   │   └── auth.types.ts
│   └── utils/
│       ├── validation.ts
│       └── storage.ts
├── App.tsx
├── package.json
└── tsconfig.json
```

## Setup and Installation

### Prerequisites
- Node.js (>=14.0.0)
- npm/yarn
- React Native CLI
- Android Studio or Physical Android Device

### Installation Steps
1. Clone the repository:
```bash
git clone https://github.com/surendran-V/AuthApp.git
cd AuthApp
```

2. Install dependencies:
```bash
npm install
```

3. Run the app:
```bash
# Start Metro bundler
npm start

# Run on Android
npm run android
```

### Physical Device Setup
1. Enable Developer Options:
   - Go to Settings → About Phone
   - Tap Build Number 7 times
   - Enable USB Debugging

2. Connect device via USB:
```bash
# Verify connection
adb devices
```

## Implementation Details

### Frontend Features
- Custom Form Components
- Input Validation
- Password Strength Indicators
- Remember Me Functionality
- Error Handling
- Loading States

### Security Features
- Password Masking
- Form Validation
- Secure Storage for Remembered Email

## Video Demonstration
https://drive.google.com/file/d/1IqqwMWuo4nlXwjA2cewsM7AXfPZz-0zV/view?usp=drive_link

## Challenges and Solutions 🧩
- Form Validation Implementation
- Secure Storage Management
- TypeScript Integration
- Cross-Platform Compatibility

## Future Improvements 🚀
- Biometric Authentication
- Password Recovery
- Email Verification
- OAuth Integration
- Offline Support
- Enhanced Security Features

## Checklist
- [x] User Authentication Flow
- [x] Form Validation
- [x] Remember Me Feature
- [x] Error Handling
- [x] TypeScript Implementation

## Development Notes
- For local development, ensure all dependencies are installed
- Test on both Android and iOS platforms
- Follow TypeScript best practices
- Maintain accessibility standards

