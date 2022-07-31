/**
 * Invalid param error class
 */
export class InvalidParamError extends Error {
  /**
   * @param {any} paramName - invalid param name
   */
  constructor(paramName: string) {
    super(`Invalid param: ${paramName}`);
    this.name = 'InvalidParamError';
  }
}
