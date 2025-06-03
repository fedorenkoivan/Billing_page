# Billing Page

## Overview

This project is a responsive, interactive billing form designed for handling payment information in a modern web application. It provides a streamlined checkout experience with client-side validation, real-time formatting of user inputs, and visual feedback.

## Features

- **Card Information Collection**: Secure input fields for card number, expiration date, and CVC
- **Real-time Input Formatting**: Automatic spacing for card numbers and date formatting
- **Form Validation**: Client-side validation with helpful error messages
- **Interactive UI Components**: Loading states, responsive buttons, and tooltips
- **Alternative Payment Methods**: Apple Pay integration
- **Responsive Design**: Mobile-friendly interface with clean layout

## Technologies Used

### Frontend Framework
- **React 19**: Component-based architecture using the latest React features
- **Vite 6**: Modern build tool for faster development experience

### Styling
- **SCSS/Sass**: Advanced styling with nested rules and variables
- **CSS Animations**: Smooth transitions and loading indicators

### Form Handling
- **Formik**: Form state management, validation, and submission handling
- **Yup**: Schema-based form validation with custom rules

### Date & Time
- **Luxon**: Modern date manipulation library for expiration date validation

### UI Components
- **Material UI**: Icon components from Material Design
- **Inter Font**: Clean, modern typography

### Development Tools
- **ESLint**: Code quality and consistency enforcement
- **npm**: Package management

## Project Structure

The project follows a component-based architecture:
- `/src/Partial/` - UI components organized by feature
- `/src/Validation/` - Form validation schemas
- `/public/` - Static assets and icons

## Setup and Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`