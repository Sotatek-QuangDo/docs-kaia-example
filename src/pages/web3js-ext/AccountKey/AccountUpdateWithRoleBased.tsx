import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

const {
  Web3,
  TxType,
  AccountKeyType,
  getPublicKeyFromPrivate,
} = require("@kaiachain/web3js-ext");

const senderAddr = "0x334b4d3c775c45c59de54e9f0408cba25a1aece7";
const senderRoleTransactionPriv =
  "0xc9668ccd35fc20587aa37a48838b48ccc13cf14dd74c8999dd6a480212d5f7ac";
const senderRoleAccountUpdatePriv =
  "0x9ba8cb8f60044058a9e6f815c5c42d3a216f47044c61a1750b6d29ddc7f34bda";
const senderRoleFeePayerPriv =
  "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

const provider = new Web3.providers.HttpProvider(rpcUrl);
const web3 = new Web3(provider);
const updaterAccount = web3.eth.accounts.privateKeyToAccount(
  senderRoleAccountUpdatePriv
);

async function main() {
  const result = [];
  const pub1 = getPublicKeyFromPrivate(senderRoleTransactionPriv);
  const pub2 = getPublicKeyFromPrivate(senderRoleAccountUpdatePriv);
  const pub3 = getPublicKeyFromPrivate(senderRoleFeePayerPriv);

  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    gasLimit: 100_000,
    key: {
      type: AccountKeyType.RoleBased,
      keys: [
        { type: AccountKeyType.Public, key: pub1 },
        { type: AccountKeyType.Public, key: pub2 },
        { type: AccountKeyType.Public, key: pub3 },
      ],
    },
  };

  const signResult = await updaterAccount.signTransaction(tx);
  result.push({ signedTx: signResult.transactionHash });

  const receipt = await web3.eth.sendSignedTransaction(
    signResult.rawTransaction
  );
  result.push({ receipt });

  return result;
}

export default function index() {
  return <RunExample title="AccountUpdateWithRoleBased" onRun={main} />;
}
