require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth mushroom protect idea enter outer gas'; 
let testAccounts = [
"0xffb11fdbc68ccc21d7280daa1aaa74c8b7ede96e3122eda874659fba119cec7a",
"0xcd6409602b53345cc165831ef95a814229a89998039fa94db59baf23f90212dd",
"0x34dce3644e7f3b580d4f4691297f78e255ca2face77db73a71cb1ab092f21822",
"0x9cf9578d95070ecbb8c82259c8d1be8615c0ad6a2d9c3e0de4de4f513a75233a",
"0xceef076c4f45fda666069c5f3c6ee273141ffd33c96ca165b764566e2e56ae90",
"0x890c1d3ce770ccd54383cfa800f75652dac0c9c71961a34ddb4c04283728e4aa",
"0xc5f2409c2d5682e38c210b854db2b3a81b6f30d0ff145c9d15ea3e1485e9a463",
"0x6a4c6b7d14f8d4e9e2984e90edb54d3fea5487dbe2c2988d349b9359b66394a9",
"0xb9991c15e3ba548485b0d15aab7bdb6a56c2848d955120eb583ba276c78f9513",
"0x4e6ef6d35277ef1020f2524b86083ff05c6453e24b70dde63da27c73a0aa879d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

