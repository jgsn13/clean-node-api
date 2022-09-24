import {
  Controller,
  HttpRequest,
  HttpResponse,
} from '../../presentation/protocols';

/**
 * Log Decorator Class
 */
export class LogControllerDecorator implements Controller {
  /**
   * Log Decorator Class
   * @param {Controller} controller - controller implementation
   */
  constructor(private readonly controller: Controller) {}

  /**
   * Handle the request body
   * @param {HttpRequest} httpRequest - http request
   * @return {Promise<HttpResponse>}
   */
  public async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest);
    return httpResponse;
  }
}
