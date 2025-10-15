# Exception Handler - UI Guide

## Visual Overview

The application features a modern, professional design with the following layout:

## 🎨 Layout Structure

### 1. Header Section
```
┌─────────────────────────────────────────────────┐
│  🛡️ Exception Handler                           │
│  Process and analyze exception messages         │
│  with AI-powered insights                       │
└─────────────────────────────────────────────────┘
```
- **Background**: White with subtle transparency
- **Title**: Large, bold, indigo color with icon
- **Subtitle**: Gray, descriptive text

### 2. Main Content Area
```
┌─────────────────────────────────────────────────┐
│  Exception Message                              │
│  ┌───────────────────────────────────────────┐ │
│  │ Enter your exception message or stack     │ │
│  │ trace                                     │ │
│  │                                           │ │
│  │ [Large text area for input]              │ │
│  │                                           │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  [✓ Process Exception]  [Clear All]            │
└─────────────────────────────────────────────────┘
```

### 3. Response Card (appears after submission)
```
┌─────────────────────────────────────────────────┐
│  API Response                      ✓ Success    │
│  ┌───────────────────────────────────────────┐ │
│  │ JSON Output              [📋 Copy]       │ │
│  ├───────────────────────────────────────────┤ │
│  │ {                                        │ │
│  │   "success": true,                       │ │
│  │   "message": "...",                      │ │
│  │   "data": {...}                          │ │
│  │ }                                        │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  ───────────────────────────────────────────── │
│                                                 │
│  📧 Send via Email                             │
│  ┌───────────────────────────────────────────┐ │
│  │ Recipient Email: [________________]      │ │
│  │ Subject: [________________________]      │ │
│  │ Body: [____________________________]     │ │
│  │       [____________________________]     │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  [✉️ Send Email]                               │
└─────────────────────────────────────────────────┘
```

### 4. Footer
```
┌─────────────────────────────────────────────────┐
│  © 2025 Exception Handler. Built with Angular. │
└─────────────────────────────────────────────────┘
```

## 🎨 Color Palette

### Primary Colors
- **Indigo**: `#4f46e5` - Primary buttons, title
- **Purple**: `#764ba2` - Gradient accent
- **Blue**: `#667eea` - Gradient start

### Status Colors
- **Success**: `#10b981` - Success badges, send button
- **Error**: `#ef4444` - Error messages, error badges
- **Warning**: `#f59e0b` - (Reserved for warnings)

### Neutral Colors
- **Dark Text**: `#111827` - Main text
- **Gray Text**: `#6b7280` - Secondary text
- **Light Gray**: `#e5e7eb` - Borders
- **Background**: `#f9fafb` - Card backgrounds
- **White**: `#ffffff` - Card surfaces

## 📱 Responsive Breakpoints

### Desktop (>768px)
- Two-column email form
- Full-width cards with hover effects
- Horizontal button groups

### Mobile (<768px)
- Single-column layout
- Stacked buttons (full width)
- Optimized text sizes
- Touch-friendly spacing

## 🎭 Interactive Elements

### Buttons
```
Primary:    [✓ Process Exception]  - Indigo background
Secondary:  [Clear All]            - Gray background
Success:    [✉️ Send Email]        - Green background
Copy:       [📋 Copy]              - White with border
```

### Hover Effects
- **Cards**: Slight lift (translateY -2px) + enhanced shadow
- **Buttons**: Lift + darker color
- **Copy button**: Background change to light gray

### Loading States
- **Spinner icon**: Rotating animation
- **Button text**: Changes to "Processing..." / "Sending..."
- **Disabled state**: Reduced opacity

## 🎯 Form States

### Input Fields
```
Default:  ┌────────────────────┐
          │ [gray border]      │
          └────────────────────┘

Focused:  ┌────────────────────┐
          │ [indigo border]    │ + blue glow
          └────────────────────┘

Error:    ┌────────────────────┐
          │ [input]            │
          └────────────────────┘
          ⚠️ Error message here
```

### Status Badges
```
Success:  [ ✓ SUCCESS ]  - Green background
Error:    [ ✗ ERROR   ]  - Red background
```

## 💫 Animations

### Fade In (0.3s)
- Response card appearance
- Email form appearance

### Hover Effects (0.2s)
- Button transforms
- Card lifts
- Color transitions

### Spinner Rotation (1s loop)
- Loading indicator
- Infinite rotation

## 🎨 JSON Viewer

### Dark Theme Code Block
```
┌─────────────────────────────────┐
│ JSON Output       [📋 Copy]    │
├─────────────────────────────────┤
│ Background: #1e1e1e            │
│ Text: #d4d4d4                  │
│ Font: Monaco, monospace        │
│ Scrollbar: Dark theme          │
└─────────────────────────────────┘
```

### Features
- Syntax highlighting (white text on dark)
- Line height: 1.6 for readability
- Horizontal scroll for long lines
- Vertical scroll (max 500px)
- Custom scrollbar styling

## 📐 Spacing & Sizing

### Padding
- Cards: `2rem` (32px)
- Inputs: `0.75rem 1rem` (12px 16px)
- Buttons: `0.75rem 1.5rem` (12px 24px)

### Margins
- Section gaps: `2rem` (32px)
- Form elements: `1.5rem` (24px)
- Button groups: `1rem` (16px)

### Border Radius
- Cards: `1rem` (16px)
- Inputs: `0.5rem` (8px)
- Buttons: `0.5rem` (8px)
- Badges: `9999px` (full round)

## 🎬 User Interaction Flow

1. **Initial View**
   - Purple gradient background
   - White header with title
   - Single exception input card
   - Clean, minimal interface

2. **Typing State**
   - Border turns indigo on focus
   - Blue glow around textarea
   - Character validation in real-time

3. **Submission**
   - Button shows spinner
   - Text changes to "Processing..."
   - Button disabled during loading

4. **Response Display**
   - Card fades in from bottom
   - Success/Error badge appears
   - JSON formatted in dark code block
   - Copy button available

5. **Email Section**
   - Slides in below response
   - Form pre-filled with data
   - Validation on email field

## 🎨 Typography

### Font Family
- **Sans-serif**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
- **Monospace**: Monaco, Menlo, Ubuntu Mono (for JSON)

### Font Sizes
- **Title**: `2.5rem` (40px)
- **Section Title**: `1.5rem` (24px)
- **Body**: `1rem` (16px)
- **Small**: `0.875rem` (14px)

### Font Weights
- **Bold**: 700 (titles)
- **Semi-bold**: 600 (labels, buttons)
- **Regular**: 400 (body text)

## 🌟 Special Features

### Shadow Layers
```
Small:  0 1px 2px rgba(0,0,0,0.05)
Medium: 0 4px 6px rgba(0,0,0,0.1)
Large:  0 10px 15px rgba(0,0,0,0.1)
XL:     0 20px 25px rgba(0,0,0,0.1)
```

### Backdrop Effects
- Header: Blur(10px) + 95% opacity
- Creates frosted glass effect

This design provides a modern, professional appearance while maintaining excellent usability and accessibility.

