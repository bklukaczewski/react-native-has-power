# Purpose

This is **opinionated** starter project for React Native.
Technology stack is based on opinions of multiple developers who worked with React Native in the last 3 years.
We believe this stack will help you to maximize the speed of development process.
You can use whatever backend and API client you want. Neither Apollo or Axios is included here,
although to develop basic features and screens, we integrated Firebase, which you can remove at any stage.

# What is included

This list contains most basic features, that we needed to develop in almost every app anyway.

- React Native
- TypeScript
- TSLint
- Jest
- Enzyme
- Prettier
- React Navigation
- Native launch screen and icons
- i18n support (English, Arabic, Polish)
- RTL support
- Firebase integration
- Push Notifications with custom icons for Android
- Google Analytics
- Basic components (inputs, buttons, screen template)
- Fastlane build automation
- Support multiple build types and schemes, including changing bundle id
- Handle screen notches

# What this app can do

- Sign in form (Firebase)
- Sign up form (Firebase)
- Reset password via email (Firebase)
- Basic navigation hierarchy
- Register for and receive Push Notifications

# What you need before start

Make sure to use `yarn` instead of `npm`. This project has only `yarn.lock` lockfile.

If you want to develop for iOS, Mac device will be needed. It is also advised for Android
developed thanks for better tooling.

# Modification

---

# Additional information

## Firebase

## Expo
This project was **not** initialized with Expo, since this technology is rather just
for playing with React Native and does not allow us to include custom native code.

## CocoaPods
This project is using [CocoaPods](https://cocoapods.org/). Make sure to install CocoaPods on your Mac.
After installing yarn dependencies, make sure to go to `ios` directory and run
`pod install` to get all native dependencies.
Because this project uses Pods, you need to use `ReactNativeStarterKit.xcworkspace` instead
of `ReactNativeStarterKit.xcodeproj` in XCode.

## Fastlane
To automate builds, app publishing process and switching environments we
use [Fastlane](https://fastlane.tools/) tool.
Fastlane documentation is auto generated for both platforms in `ios` and `android` directories.

# Guides

## Usage of components
Try not to use React Native / React Native Elements components directly in your screens.
Use custom wrapper components with initial styling already applied. You can find some components
already developed in the `src/components` directory.
Having this additional layer can help you later if for example you'd like to change fontFamily
of all texts - instead of refactoring every View, you can change only single Component.
This can also help with missing properties in TypeScript definition files - you can
extend definitions like it is done in Button component.

## Vector Icons
This project has already included [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
with only `MaterialCommunityIcons` enabled. You can always add more icon fontfaces, like FontAwesome or others.

## Styling
Make sure to adjust shared styles defined in `src/styles`, including color
palette file and typography to your needs. Try to avoid modifying ready components in
favor of modifying variable files.
