"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: () => __awaiter(this, void 0, void 0, function* () {
            mongoose.Promise = global.Promise;
            return yield mongoose.connect('mongodb://admin:OzQTmBX8dPVN0p6C@elogin-shard-00-00-nfhzf.mongodb.net:27017,elogin-shard-00-01-nfhzf.mongodb.net:27017,elogin-shard-00-02-nfhzf.mongodb.net:27017/elogin?ssl=true&replicaSet=elogin-shard-0&authSource=admin&retryWrites=true&w=majority', {
                useMongoClient: true
            });
        })
    }
];
//# sourceMappingURL=database.providers.js.map