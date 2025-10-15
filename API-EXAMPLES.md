# API Examples & Integration Guide

## API Request/Response Examples

### 1. Process Exception Endpoint

#### Request
```http
POST /api/exceptions
Content-Type: application/json

{
  "exception": "java.lang.NullPointerException: Cannot invoke 'String.length()' because 'str' is null\n    at com.example.MyClass.myMethod(MyClass.java:42)\n    at com.example.Main.main(Main.java:10)",
  "timestamp": "2025-10-15T10:30:00.000Z"
}
```

#### Success Response
```json
{
  "success": true,
  "message": "Exception processed successfully",
  "data": {
    "id": "exc_123456789",
    "type": "NullPointerException",
    "severity": "HIGH",
    "rootCause": "Variable 'str' was not initialized before use",
    "suggestedFix": "Add null check before calling String.length()",
    "affectedFile": "MyClass.java",
    "lineNumber": 42,
    "stackTrace": [
      {
        "className": "com.example.MyClass",
        "methodName": "myMethod",
        "fileName": "MyClass.java",
        "lineNumber": 42
      },
      {
        "className": "com.example.Main",
        "methodName": "main",
        "fileName": "Main.java",
        "lineNumber": 10
      }
    ],
    "similarIssues": 5,
    "processedAt": "2025-10-15T10:30:01.234Z"
  }
}
```

#### Error Response
```json
{
  "success": false,
  "message": "Failed to process exception",
  "error": "Invalid exception format",
  "data": null
}
```

---

### 2. Send Email Endpoint

#### Request
```http
POST /api/email/send
Content-Type: application/json

{
  "to": "developer@example.com",
  "subject": "Exception Report - NullPointerException",
  "body": "Exception Report:\n\njava.lang.NullPointerException...\n\nAPI Response:\n{\n  \"success\": true,\n  ...\n}",
  "timestamp": "2025-10-15T10:31:00.000Z"
}
```

#### Success Response
```json
{
  "success": true,
  "message": "Email sent successfully",
  "data": {
    "emailId": "email_987654321",
    "sentTo": "developer@example.com",
    "sentAt": "2025-10-15T10:31:02.456Z",
    "deliveryStatus": "SENT"
  }
}
```

#### Error Response
```json
{
  "success": false,
  "message": "Failed to send email",
  "error": "Invalid recipient email address",
  "data": null
}
```

---

## Integration Examples

### Backend Implementation (Node.js/Express)

```javascript
// Exception Processing Endpoint
app.post('/api/exceptions', async (req, res) => {
  try {
    const { exception, timestamp } = req.body;
    
    // Process the exception (AI analysis, parsing, etc.)
    const analysis = await analyzeException(exception);
    
    res.json({
      success: true,
      message: "Exception processed successfully",
      data: analysis
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to process exception",
      error: error.message
    });
  }
});

// Email Sending Endpoint
app.post('/api/email/send', async (req, res) => {
  try {
    const { to, subject, body, timestamp } = req.body;
    
    // Send email using your email service (SendGrid, AWS SES, etc.)
    const result = await emailService.send({
      to,
      subject,
      body
    });
    
    res.json({
      success: true,
      message: "Email sent successfully",
      data: {
        emailId: result.id,
        sentTo: to,
        sentAt: new Date().toISOString(),
        deliveryStatus: "SENT"
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error.message
    });
  }
});
```

---

### Backend Implementation (Python/Flask)

```python
from flask import Flask, request, jsonify
from datetime import datetime
import json

app = Flask(__name__)

@app.route('/api/exceptions', methods=['POST'])
def process_exception():
    try:
        data = request.get_json()
        exception = data.get('exception')
        timestamp = data.get('timestamp')
        
        # Process the exception
        analysis = analyze_exception(exception)
        
        return jsonify({
            'success': True,
            'message': 'Exception processed successfully',
            'data': analysis
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Failed to process exception',
            'error': str(e)
        }), 500

@app.route('/api/email/send', methods=['POST'])
def send_email():
    try:
        data = request.get_json()
        to = data.get('to')
        subject = data.get('subject')
        body = data.get('body')
        
        # Send email
        result = email_service.send(to, subject, body)
        
        return jsonify({
            'success': True,
            'message': 'Email sent successfully',
            'data': {
                'emailId': result.id,
                'sentTo': to,
                'sentAt': datetime.now().isoformat(),
                'deliveryStatus': 'SENT'
            }
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Failed to send email',
            'error': str(e)
        }), 500
```

---

### Backend Implementation (Java/Spring Boot)

```java
@RestController
@RequestMapping("/api")
public class ExceptionController {
    
    @PostMapping("/exceptions")
    public ResponseEntity<ApiResponse> processException(@RequestBody ExceptionRequest request) {
        try {
            // Process the exception
            ExceptionAnalysis analysis = exceptionService.analyze(request.getException());
            
            return ResponseEntity.ok(new ApiResponse(
                true,
                "Exception processed successfully",
                analysis,
                null
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ApiResponse(
                    false,
                    "Failed to process exception",
                    null,
                    e.getMessage()
                ));
        }
    }
    
    @PostMapping("/email/send")
    public ResponseEntity<ApiResponse> sendEmail(@RequestBody EmailRequest request) {
        try {
            // Send email
            EmailResult result = emailService.send(
                request.getTo(),
                request.getSubject(),
                request.getBody()
            );
            
            Map<String, Object> data = new HashMap<>();
            data.put("emailId", result.getId());
            data.put("sentTo", request.getTo());
            data.put("sentAt", LocalDateTime.now().toString());
            data.put("deliveryStatus", "SENT");
            
            return ResponseEntity.ok(new ApiResponse(
                true,
                "Email sent successfully",
                data,
                null
            ));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ApiResponse(
                    false,
                    "Failed to send email",
                    null,
                    e.getMessage()
                ));
        }
    }
}
```

---

## Testing with Mock API

### Using JSONPlaceholder (Current Default)

The app currently uses JSONPlaceholder for testing. Responses look like:

```json
{
  "id": 101,
  "title": "...",
  "body": "...",
  "userId": 1
}
```

To see real functionality, replace with your actual API endpoints.

---

## CORS Configuration

### Node.js/Express
```javascript
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

### Python/Flask
```python
from flask_cors import CORS
CORS(app, origins=['http://localhost:4200'])
```

### Java/Spring Boot
```java
@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                    .allowedOrigins("http://localhost:4200")
                    .allowedMethods("GET", "POST");
            }
        };
    }
}
```

---

## Email Service Integration Examples

### SendGrid
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: email.to,
  from: 'noreply@yourdomain.com',
  subject: email.subject,
  text: email.body,
};

await sgMail.send(msg);
```

### AWS SES
```javascript
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' });

const params = {
  Source: 'noreply@yourdomain.com',
  Destination: {
    ToAddresses: [email.to]
  },
  Message: {
    Subject: { Data: email.subject },
    Body: { Text: { Data: email.body } }
  }
};

await ses.sendEmail(params).promise();
```

### Nodemailer
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

await transporter.sendMail({
  from: 'noreply@yourdomain.com',
  to: email.to,
  subject: email.subject,
  text: email.body
});
```

---

## Environment Variables

Create a `.env` file in your backend:

```env
# API Configuration
API_PORT=3000
API_HOST=localhost

# Email Service
EMAIL_SERVICE=sendgrid
SENDGRID_API_KEY=your_key_here

# Or for SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_password

# CORS
ALLOWED_ORIGINS=http://localhost:4200

# Database (optional)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=exception_handler
DB_USER=postgres
DB_PASS=password
```

---

## Testing API with Postman

### Collection Example

1. **Process Exception**
   - Method: POST
   - URL: `http://localhost:3000/api/exceptions`
   - Body (JSON):
   ```json
   {
     "exception": "Error: Test exception",
     "timestamp": "2025-10-15T10:00:00.000Z"
   }
   ```

2. **Send Email**
   - Method: POST
   - URL: `http://localhost:3000/api/email/send`
   - Body (JSON):
   ```json
   {
     "to": "test@example.com",
     "subject": "Test Email",
     "body": "Test body",
     "timestamp": "2025-10-15T10:00:00.000Z"
   }
   ```

---

## Rate Limiting (Recommended)

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

This guide should help you integrate the Angular frontend with any backend service!

