import { HttpRequest, HttpResponse } from '../protocols/http.protocol';

/**
 * SignUp controller class
 */
export class SignUpController {
  /**
   * Handle the request body
   * @param {any} httpRequest - http signup request
   * @return {any}
   */
  public handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name'),
      };
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email'),
      };
    }

    return {
      statusCode: 400,
      body: new Error('Internal Server Error'),
    };
  }
}
