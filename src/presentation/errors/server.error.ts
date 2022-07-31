/**
 * Server error class
 */
export class ServerError extends Error {
  /**
   * Server error
   */
  constructor() {
    super('Internal server error');
    this.name = 'ServerError';
  }
}
