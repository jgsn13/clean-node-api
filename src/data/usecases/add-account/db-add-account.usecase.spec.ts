import { DbAddAccount } from './db-add-account.usecase';
import { Encrypter } from '../../protocols/encrypter.protocol';

interface SutTypes {
  sut: DbAddAccount;
  encrypterStub: Encrypter
}

const makeEncrypter = (): Encrypter => {
  /**
   * Encrypter class
   */
  class EncrypterStub implements Encrypter {
    /**
     * Generates a hashed value from a string
     * @param {string} value - string to be hashed
     * @return {Promise<string>}
     */
    public async encrypt(value: string): Promise<string> {
      return new Promise((resolve) => resolve('hashed_password'));
    }
  }

  return new EncrypterStub();
};

const makeSut = (): SutTypes => {
  const encrypterStub = makeEncrypter();

  const sut = new DbAddAccount(encrypterStub);

  return { sut, encrypterStub };
};

describe('DbAddAccount Usecase', () => {
  test('Should call Encrypter with correct password', async () => {
    const { sut, encrypterStub } = makeSut();
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
