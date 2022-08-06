import { DbAddAccount } from './db-add-account.usecase';

describe('DbAddAccount Usecase', () => {
  test('Should call Encrypter with correct password', async () => {
    /**
     * Encrypter class
     */
    class EncrypterStub {
      /**
       * Generates a hashed value from a string
       * @param {string} value - string to be hashed
       * @return {Promise<string>}
       */
      public async encrypt(value: string): Promise<string> {
        return new Promise((resolve) => resolve('hashed_password'));
      }
    }
    const encrypterStub = new EncrypterStub();
    const sut = new DbAddAccount(encrypterStub);
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt');
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password',
    };
    await sut.add(accountData);
    expect(encryptSpy).toHaveBeenCalledWith('valid_password');
  });
});
