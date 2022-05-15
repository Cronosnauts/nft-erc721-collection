import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.cronosTestnet,
  mainnet: Networks.cronosMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'NautsDogsClub',
  tokenName: 'NautsDogs Club',
  tokenSymbol: 'NDC',
  hiddenMetadataUri: 'ipfs://QmchMkCt74XFtZ2CYrjpLCCSy1nPoJqBkF7PaGg6raFwr4/hidden.json',
  maxSupply: 555,
  whitelistSale: {
    price: 220,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 270,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 300,
    maxMintAmountPerTx: 3,
  },
  contractAddress: "0x7D193735f6bbf3ac9D2b7C452520d856B9ac6C36",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
