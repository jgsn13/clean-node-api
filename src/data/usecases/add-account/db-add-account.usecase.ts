import {
  AddAccount,
  AddAccountModel,
} from '../../../domain/usecases/add-account.usecase';
import { AccountModel } from '../../../domain/models/account.model';
import { Encrypter } from '../../protocols/encrypter.protocol';

/**
 * Database add account class
 */
export class DbAddAccount implements AddAccount {
  /**
   * @param {Encrypter} encrypter - handles data encryption
   */
  constructor(private readonly encrypter: Encrypter) {}

  /**
   * Add an account to the database
   * @param {AddAccountModel} account - data of the account to be added
   * @return {Promise<AccountModel>}
   */
  public async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password);
    return new Promise((resolve) => resolve({ id: 'valid_id', ...account }));
  }
}
