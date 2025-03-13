import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

const { ethers } = require("ethers");

const { Wallet, TxType, AccountKeyType } = require("@kaiachain/ethers-ext/v6");

// Using senderPriv == senderNewPriv to execute this example repeatedly.
// But you should use AccountKeyPublic to register a different private key.
const senderAddr = "0xe15cd70a41dfb05e7214004d7d054801b2a2f06b";
const senderPriv =
  "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";
const senderNewPriv =
  "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

const provider = new ethers.JsonRpcProvider(rpcUrl);
const wallet = new Wallet(senderAddr, senderPriv, provider);

async function main(): Promise<any[]> {
  const result = [];
  const senderNewPub = ethers.SigningKey.computePublicKey(senderNewPriv, true);

  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Public,
      key: senderNewPub,
    },
  };

  const sentTx = await wallet.sendTransaction(tx);
  // console.log("sentTx", sentTx.hash);
  result.push({ sentTx: sentTx.hash });

  const receipt = await sentTx.wait();
  // console.log("receipt", receipt);
  result.push({ receipt });
  
  return result;
}
export default function index() {
  return <RunExample title="AccountUpdateWithPubKey" onRun={main} />;
}
