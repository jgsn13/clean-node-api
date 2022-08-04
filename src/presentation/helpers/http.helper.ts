import { HttpResponse } from '../protocols/http.protocol';
import { ServerError } from '../errors';

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

/**
 * Throws an error as a HttpResponse
 * @return {HtpResponse}
 */
export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});

/**
 * Creates a success HttpResponse
 * @param {any} data - data to be returned
 * @return {HtpResponse}
 */
export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
