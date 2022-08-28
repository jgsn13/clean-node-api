import {
  AddAccountRepository,
} from '../../../../data/protocols/add-account-repository.protocol';
import {
  AddAccountModel,
} from '../../../../domain/usecases/add-account.usecase';
import { AccountModel } from '../../../../domain/models/account.model';
import { MongoHelper } from '../helpers/mongo.helper';

/**
 * MongoDB Account Repository class
 */
export class AccountMongoRepository implements AddAccountRepository {
  /**
   * Add a new account to MongoDB database
   * @param {AddAccountModel} account - account data to be added
   * @return {Promise<AccountModel>}
   */
  public async add(account: AddAccountModel): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts');
    const result = await accountCollection.insertOne(account);
    const insertedAccount = await accountCollection.findOne({
      _id: result.insertedId,
    });
    return MongoHelper.map<AccountModel>(insertedAccount);
  }
}
