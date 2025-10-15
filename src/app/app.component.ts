import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, ApiResponse, EmailRequest } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Exception Handler';
  exceptionForm: FormGroup;
  apiResponse: ApiResponse | null = null;
  isLoading = false;
  showEmailForm = false;
  emailForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.exceptionForm = this.fb.group({
      exceptionMessage: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.emailForm = this.fb.group({
      to: ['', [Validators.required, Validators.email]],
      subject: ['Exception Report', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize any required data
  }

  onSubmitException(): void {
    if (this.exceptionForm.valid) {
      this.isLoading = true;
      const exceptionMessage = this.exceptionForm.get('exceptionMessage')?.value;

      this.apiService.processException(exceptionMessage).subscribe({
        next: (response) => {
          this.apiResponse = response;
          this.isLoading = false;
          this.showEmailForm = true;
          // Pre-populate email form with response
          this.emailForm.patchValue({
            body: `Exception Report:\n\n${exceptionMessage}\n\nAPI Response:\n${JSON.stringify(response, null, 2)}`
          });
        },
        error: (error) => {
          this.apiResponse = {
            success: false,
            message: 'Error processing exception',
            error: error.message
          };
          this.isLoading = false;
          this.showEmailForm = true;
        }
      });
    }
  }

  onSendEmail(): void {
    if (this.emailForm.valid && this.apiResponse) {
      this.isLoading = true;
      const emailRequest: EmailRequest = this.emailForm.value;

      this.apiService.sendEmail(emailRequest).subscribe({
        next: (response) => {
          alert('Email sent successfully!');
          this.isLoading = false;
          this.resetForms();
        },
        error: (error) => {
          alert('Error sending email: ' + error.message);
          this.isLoading = false;
        }
      });
    }
  }

  resetForms(): void {
    this.exceptionForm.reset();
    this.emailForm.reset();
    this.apiResponse = null;
    this.showEmailForm = false;
  }

  getErrorMessage(fieldName: string): string {
    const field = this.exceptionForm.get(fieldName);
    if (field?.hasError('required')) {
      return `${fieldName} is required`;
    }
    if (field?.hasError('minlength')) {
      return `${fieldName} must be at least 10 characters long`;
    }
    if (field?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    return '';
  }

  formatJson(obj: any): string {
    return JSON.stringify(obj, null, 2);
  }

  copyToClipboard(obj: any): void {
    const jsonString = this.formatJson(obj);
    navigator.clipboard.writeText(jsonString).then(() => {
      alert('JSON copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
      alert('Failed to copy to clipboard');
    });
  }
}
