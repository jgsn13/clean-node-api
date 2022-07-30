import { HttpResponse } from '../protocols/http.protocol';
import { ServerError } from '../errors/server.error';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

/**
 * Creates an error as a HttpResponse
 * @return {HtpResponse}
 */
export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});
