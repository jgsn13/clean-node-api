import bcrypt from 'bcrypt';
import { Encrypter } from '../../data/protocols/encrypter.protocol';

/**
 * Bcrypt adapter class
 */
export class BcryptAdapter implements Encrypter {
  /**
   * Bcrypt adapter class
   * @param {number} salt - the salt to be used in bcrypt encryption
   */
  constructor(private readonly salt: number) {}

  /**
   * Encrypts a string
   * @param {string} value - the string to be encrypted
   * @return {Promise<string>}
   */
  async encrypt(value: string): Promise<string> {
    await bcrypt.hash(value, this.salt);
    return '';
  }
}
