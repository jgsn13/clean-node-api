/**
 * HTTP response protocol
 */
export interface HttpResponse {
  statusCode: number;
  body: any;
}

/**
 * HTTP request protocol
 */
export interface HttpRequest {
  body?: any;
}
