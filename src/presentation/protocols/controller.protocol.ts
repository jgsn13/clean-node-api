import { HttpRequest, HttpResponse } from './http.protocol';

/**
 * Controller protocol
 */
export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}
