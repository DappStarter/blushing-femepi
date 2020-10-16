require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remain smile hope clog bottom gate'; 
let testAccounts = [
"0xe075f11357b2e68511384f8a8b5c088fd6cba3dd7a8fedda62abc897a6425273",
"0xd8e7f5aa7158298cf64e94fceba162799636099fe13cecec5993aee022694fdc",
"0x066ffcf94c4187f1a99d7b9c08af32bf9ecb007a5b85b8380b22ac2724b6918b",
"0x924ed1d233f180cc0f1db11e07bc56074acd74fd1813f2dd33b149578050b0f2",
"0xe49b0c3fc6e5a48099b868e176a80253cf2da847686402f24763d63f3e2a7cc9",
"0x23ac6d8149205b2cf86c5e79fae7a6f2e11a62fa35c90d86e48b632fffa64641",
"0xa854a3858f3b3042aa1620eb7554d3c81d2865d206d5ca0e0d0ef302039a0991",
"0xe600e0e4a79628f28404965601cd6e753b21e22d4dc73eeda324fbc05d1d9462",
"0x1353387868fd4237cb6648968ab82f28e1f96f52d011372e610b9426af0d4b70",
"0xa11a9ea93ec9d57a3836c6af7ebf2ae06b8713f5341c27b686cd63ddf56fb01e"
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
            version: '^0.5.11'
        }
    }
};
