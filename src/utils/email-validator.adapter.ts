import {
  EmailValidator,
} from '../presentation/protocols/email-validator.protocol';

/**
 * Email validator adapter class
 */
export class EmailValidatorAdapter implements EmailValidator {
  /**
   * Validates an email
   * @param {string} email - email to be validated
   * @return {boolean}
   */
  public isValid(email: string): boolean {
    return false;
  }
}
