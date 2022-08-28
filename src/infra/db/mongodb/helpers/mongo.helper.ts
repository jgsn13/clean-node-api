import { Collection, MongoClient } from 'mongodb';

export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = await MongoClient.connect(uri);
  },

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
    }
    this.client = null as unknown as MongoClient;
  },

  async getCollection(name: string): Promise<Collection> {
    // TODO: verify mongodb connection
    if (!this.client) {
      await this.connect(this.uri);
    }

    return this.client.db().collection(name);
  },

  map<T>(collection: any): T {
    const { _id, ...collectionWithoutId } = collection;
    return Object.assign({}, collectionWithoutId, {
      id: _id,
    }) as T;
  },
};
