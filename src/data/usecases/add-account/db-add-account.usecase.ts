import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter,
  AddAccountRepository,
} from './db-add-account.protocols';

/**
 * Database add account class
 */
export class DbAddAccount implements AddAccount {
  /**
   * @param {Encrypter} encrypter - handles data encryption
   */
  constructor(
    private readonly encrypter: Encrypter,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  /**
   * Add an account to the database
   * @param {AddAccountModel} accountData - data of the account to be added
   * @return {Promise<AccountModel>}
   */
  public async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password);

    // NOTE: here Object.assign({}, accountData, { password: hashedPassword })
    // can be used instead of the destructuring.
    const account = await this.addAccountRepository.add({
      ...accountData,
      password: hashedPassword,
    });

    return account;
  }
}
