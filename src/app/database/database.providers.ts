import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<mongoose.Connection> => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://admin:OzQTmBX8dPVN0p6C@elogin-shard-00-00-nfhzf.mongodb.net:27017,elogin-shard-00-01-nfhzf.mongodb.net:27017,elogin-shard-00-02-nfhzf.mongodb.net:27017/elogin?ssl=true&replicaSet=elogin-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useMongoClient: true
      });
    }
  }
];

