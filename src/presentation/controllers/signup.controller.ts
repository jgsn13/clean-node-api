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
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'));
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'));
    }

    return badRequest(new MissingParamError('unknown'));
  }
}
