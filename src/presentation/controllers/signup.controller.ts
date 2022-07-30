import { Controller } from '../protocols/controller.protocol';
import { HttpRequest, HttpResponse } from '../protocols/http.protocol';
import { MissingParamError } from '../errors/missing-param.error';
import { badRequest, serverError } from '../helpers/http.helper';
import { EmailValidator } from '../protocols/email-validator.protocol';
import { InvalidParamError } from '../errors/invalid-param.error';

/**
 * SignUp controller class
 */
export class SignUpController implements Controller {
  /**
   * SignUp controller
   * @param {EmailValidator} emailValidator - handle email validation
   */
  constructor(private readonly emailValidator: EmailValidator) {}

  /**
   * Handle the request body
   * @param {HttpRequest} httpRequest - http request
   * @return {HttpResponse}
   */
  public handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = [
        'name',
        'email',
        'password',
        'passwordConfirmation',
      ];

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }

      const isValid = this.emailValidator.isValid(httpRequest.body.email);
      if (!isValid) {
        return badRequest(new InvalidParamError('email'));
      }

      return {
        statusCode: 200,
        body: {
          message: 'Hello world',
        },
      };
    } catch (error) {
      return serverError();
    }
  }
}
