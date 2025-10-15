# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd my-angular-app
npm install
```

### Step 2: Start Development Server
```bash
ng serve
```

### Step 3: Open Browser
Navigate to: `http://localhost:4200`

---

## 📝 How to Use

### Processing an Exception

1. **Paste Exception Message**
   - Copy your exception/error message
   - Paste into the large text area
   - Must be at least 10 characters

2. **Submit**
   - Click the blue "Process Exception" button
   - Wait for the API response

3. **View JSON Response**
   - Formatted JSON appears in dark theme viewer
   - Success/Error badge shows status
   - Click "Copy" to copy JSON to clipboard

### Sending Email Report

1. **After API Response**
   - Email form automatically appears
   - Body is pre-filled with exception + response

2. **Fill Email Details**
   - Enter recipient email address
   - Modify subject if needed
   - Edit body content as desired

3. **Send**
   - Click green "Send Email" button
   - Success message appears when sent

---

## 🔧 Configuration

### Update API Endpoints

Edit `src/app/api.service.ts`:

```typescript
export class ApiService {
  // Replace with your actual API endpoint
  private apiUrl = 'https://your-api.com/api/exceptions';

  processException(exceptionMessage: string): Observable<ApiResponse> {
    // Your API logic here
  }

  sendEmail(emailRequest: EmailRequest): Observable<ApiResponse> {
    // Your email API logic here
  }
}
```

### Expected API Response Format

```json
{
  "success": true,
  "message": "Exception processed successfully",
  "data": {
    // Your response data
  },
  "error": null
}
```

---

## 🎨 Customization

### Change Colors

Edit `src/app/app.component.scss`:

```scss
// Variables section at the top
$primary-color: #4f46e5;  // Change primary button color
$success-color: #10b981;  // Change success button color
$error-color: #ef4444;    // Change error color
```

### Change Background Gradient

```scss
.exception-handler-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  // Change colors above
}
```

---

## 📦 Build for Production

```bash
# Build the application
ng build --prod

# Output will be in dist/ folder
# Deploy the dist/my-angular-app folder to your server
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
ng serve --port 4300
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Compilation Errors
```bash
# Clear cache
npm cache clean --force
ng serve --aot=false
```

---

## 📱 Testing on Mobile

### Local Network Access
```bash
# Serve with network access
ng serve --host 0.0.0.0

# Access from mobile using your computer's IP
# Example: http://192.168.1.100:4200
```

---

## 🌟 Features at a Glance

✅ Exception message input with validation  
✅ API integration for processing  
✅ Beautiful JSON formatter  
✅ Copy to clipboard  
✅ Email report functionality  
✅ Responsive mobile design  
✅ Loading states & animations  
✅ Form validation  
✅ Error handling  

---

## 📚 Useful Commands

```bash
# Start development server
ng serve

# Build for production
ng build --prod

# Run unit tests
ng test

# Run end-to-end tests
ng e2e

# Generate new component
ng generate component component-name

# Check Angular version
ng version
```

---

## 🔗 Resources

- [Angular Documentation](https://angular.io/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)
- [Angular CLI](https://cli.angular.io/)

---

## 💡 Tips

1. **Use Real API**: Replace JSONPlaceholder with your actual API
2. **Add Authentication**: Implement auth guards if needed
3. **Error Handling**: Customize error messages for your use case
4. **Logging**: Add logging service for production debugging
5. **Analytics**: Consider adding analytics tracking

---

## 📞 Support

For issues or questions:
1. Check the README.md
2. Review FEATURES.md for detailed features
3. See UI-GUIDE.md for design information

---

**Ready to start!** 🎉

Just run `ng serve` and open `http://localhost:4200`

