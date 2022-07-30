/**
 * Missing param error class
 */
export class MissingParamError extends Error {
  /**
   * Handle the request body
   * @param {any} paramName - missing param name
   */
  constructor(paramName: string) {
    super(`Missing param: ${paramName}`);
    this.name = 'MissingParamError';
  }
}
