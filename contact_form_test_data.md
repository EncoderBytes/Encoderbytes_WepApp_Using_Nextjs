# Contact Form Test Data

## Valid Test Cases (Should Submit Successfully)

### Test Case 1: Standard Valid Data
```
Name: John Smith
Email: john.smith@example.com
Phone: 1234567890
Message: I am interested in your web development services. Could you please provide more information about your pricing and timeline for a small business website project?
```

### Test Case 2: Valid with Longer Name
```
Name: Maria Elena Rodriguez
Email: maria.rodriguez@company.co.uk
Phone: 12345678901234
Message: Hello, I would like to discuss a potential collaboration for developing a mobile application. We have specific requirements and would appreciate a consultation meeting.
```

### Test Case 3: Valid with International Phone
```
Name: David Chen
Email: d.chen@techcorp.org
Phone: 447123456789
Message: We are looking for a development partner for our upcoming e-commerce platform. Please contact us to schedule a technical discussion about the project scope.
```

## Invalid Test Cases (Should Show Validation Errors)

### Name Validation Errors

#### Test Case 4: Empty Name
```
Name: [empty]
Email: test@example.com
Phone: 1234567890
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Name is required"
```

#### Test Case 5: Name Too Short
```
Name: A
Email: test@example.com
Phone: 1234567890
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Name must be at least 2 characters long"
```

#### Test Case 6: Name with Numbers
```
Name: John123
Email: test@example.com
Phone: 1234567890
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Enter a valid name (only letters and spaces allowed)"
```

#### Test Case 7: Name with Special Characters
```
Name: John@Smith
Email: test@example.com
Phone: 1234567890
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Enter a valid name (only letters and spaces allowed)"
```

#### Test Case 8: Name Too Long
```
Name: This is an extremely long name that exceeds fifty characters limit
Email: test@example.com
Phone: 1234567890
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Name must be less than 50 characters"
```

### Email Validation Errors

#### Test Case 9: Empty Email
```
Name: John Smith
Email: [empty]
Phone: 1234567890
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Email is required"
```

#### Test Case 10: Invalid Email Format (Missing @)
```
Name: John Smith
Email: johnsmithexample.com
Phone: 1234567890
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Invalid email format"
```

#### Test Case 11: Invalid Email Format (Missing Domain)
```
Name: John Smith
Email: john@
Phone: 1234567890
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Invalid email format"
```

#### Test Case 12: Invalid Email Format (Missing Extension)
```
Name: John Smith
Email: john@example
Phone: 1234567890
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Invalid email format"
```

### Phone Validation Errors

#### Test Case 13: Empty Phone
```
Name: John Smith
Email: test@example.com
Phone: [empty]
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Phone number is required"
```

#### Test Case 14: Phone with Letters
```
Name: John Smith
Email: test@example.com
Phone: 123abc4567
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Phone number must contain only digits"
```

#### Test Case 15: Phone with Special Characters
```
Name: John Smith
Email: test@example.com
Phone: 123-456-7890
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Phone number must contain only digits"
```

#### Test Case 16: Phone Too Short
```
Name: John Smith
Email: test@example.com
Phone: 12345
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Phone number must be between 10-15 digits"
```

#### Test Case 17: Phone Too Long
```
Name: John Smith
Email: test@example.com
Phone: 1234567890123456
Message: This is a test message with enough words to pass validation requirements for the message field.
Expected Error: "Phone number must be between 10-15 digits"
```

### Message Validation Errors

#### Test Case 18: Empty Message
```
Name: John Smith
Email: test@example.com
Phone: 1234567890
Message: [empty]
Expected Error: "Message is required"
```

#### Test Case 19: Message Too Short (Less than 5 words)
```
Name: John Smith
Email: test@example.com
Phone: 1234567890
Message: Too short message
Expected Error: "Message must be between 5 and 100 words"
```

#### Test Case 20: Message Too Long (More than 100 words)
```
Name: John Smith
Email: test@example.com
Phone: 1234567890
Message: This is an extremely long message that contains way more than one hundred words which should trigger the validation error for exceeding the maximum word limit that we have set for the message field in our contact form validation system. The purpose of this test is to ensure that users cannot submit messages that are too lengthy and potentially spam-like in nature. We want to encourage concise and meaningful communication through our contact form while preventing abuse of the system. This message should definitely exceed the one hundred word limit and trigger the appropriate validation error message that informs the user about the word count restriction.
Expected Error: "Message must be between 5 and 100 words"
```

## Test Instructions

1. **Start the application**: Run `npm run dev` to start the development server
2. **Navigate to a page with the contact form** (e.g., Home page, About page, Services page)
3. **Scroll to the contact form section**
4. **Test each case**:
   - Enter the test data from each case above
   - Verify that the expected validation errors appear
   - Confirm that the form submission is blocked when errors exist
   - Check that the submit button is disabled when there are validation errors
   - Verify that error messages clear when correcting the input
   - For valid cases, ensure the form submits successfully

## Expected Behavior

- **Real-time validation**: Errors should clear as soon as the user starts typing valid input
- **Visual feedback**: Input fields with errors should have red borders
- **Submit prevention**: The form should not submit when validation errors exist
- **Button state**: Submit button should be disabled when there are validation errors
- **Toast notifications**: Success message for valid submissions, error message for validation failures
- **Server-side validation**: Even if client-side validation is bypassed, server should validate and return errors