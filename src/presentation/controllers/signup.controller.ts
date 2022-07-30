import { HttpRequest, HttpResponse } from '../protocols/http.protocol';
import { MissingParamError } from '../errors/missing-param.error';

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
        body: new MissingParamError('name'),
      };
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      };
    }

    return {
      statusCode: 400,
      body: new MissingParamError('unknown'),
    };
  }
}
