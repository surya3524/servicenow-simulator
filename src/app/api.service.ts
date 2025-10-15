import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

export interface EmailRequest {
  to: string;
  subject: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Placeholder API

  constructor(private http: HttpClient) { }

  processException(exceptionMessage: string): Observable<ApiResponse> {
    // Simulate API call - replace with your actual API endpoint
    const requestBody = {
      exception: exceptionMessage,
      timestamp: new Date().toISOString()
    };

    return this.http.post<ApiResponse>(this.apiUrl, requestBody);
  }

  sendEmail(emailRequest: EmailRequest): Observable<ApiResponse> {
    // Simulate email API call - replace with your actual email service
    const requestBody = {
      ...emailRequest,
      timestamp: new Date().toISOString()
    };

    return this.http.post<ApiResponse>('https://jsonplaceholder.typicode.com/posts', requestBody);
  }
}
