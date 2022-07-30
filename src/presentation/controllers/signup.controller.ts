import { HttpRequest, HttpResponse } from '../protocols/http.protocol';
import { MissingParamError } from '../errors/missing-param.error';
import { badRequest } from '../helpers/http.helper';

/**
 * SignUp controller class
 */
export class SignUpController {
  /**
   * Handle the request body
   * @param {HttpRequest} httpRequest - http request
   * @return {HttpResponse}
   */
  public handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email'];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }

    return {
      statusCode: 200,
      body: {
        message: 'Hello world',
      },
    };
  }
}
