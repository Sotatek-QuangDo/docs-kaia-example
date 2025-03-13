import { RunExample } from "../../../components/RunExample";
import { rpcUrl } from "../../../consts/tryout-data";

const { ethers } = require("ethers");
const { Wallet, TxType, AccountKeyType } = require("@kaiachain/ethers-ext/v6");

// Using legacy AccountKey to execute this example repeatedly.
// But you might want to register a different Accountkey.
const senderAddr = "0xecbf243ac167a3b5097fef758e07881582a89027";
const senderPriv =
  "0xc696ccd259792f2ffb87e0012e4a37ae3526a3224686225af679e3aaa2aeab0d";
const provider = new ethers.JsonRpcProvider(rpcUrl);
const wallet = new Wallet(senderPriv, provider);

async function main(): Promise<any[]> {
  const result = [];

  const tx = {
    type: TxType.AccountUpdate,
    from: senderAddr,
    key: {
      type: AccountKeyType.Legacy,
    },
  };
  console.log({
    tx,
    TxType,
    AccountKeyType,
    wallet,
  });

  const account = await provider.getAccount(senderAddr);
  console.log({
    account
  });

  const balance = await provider.getBalance(senderAddr);
  console.log(`Balance: ${ethers.formatEther(balance)} KLAY`);

  const sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx.hash);
  result.push({ signedTx: sentTx.hash });

  const receipt = await sentTx.wait();
  console.log("receipt", receipt);
  result.push({ receipt });

  return result;
}

export default function index() {
  return <RunExample title="AccountKeyLegacy" onRun={main} />;
}
