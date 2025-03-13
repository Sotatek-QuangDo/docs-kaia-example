import { RouteObject } from "react-router";

import { RoutePath } from "../types/route";

import HomePage from "../pages/Home";
import LandingPage from "../pages/Landing";

// AccountKey Web3jsExt
import Web3jsExtAccountKeyAccountKeyLegacyPage from "../pages/web3js-ext/AccountKey/AccountKeyLegacy";
import Web3jsExtAccountKeyAccountUpdateWithMultiSigPage from "../pages/web3js-ext/AccountKey/AccountUpdateWithMultiSig";
import Web3jsExtAccountKeyAccountUpdateWithPubKeyPage from "../pages/web3js-ext/AccountKey/AccountUpdateWithPubKey";
import Web3jsExtAccountKeyAccountUpdateWithRoleBasedPage from "../pages/web3js-ext/AccountKey/AccountUpdateWithRoleBased";

// SignMessage Web3jsExt
import Web3jsExtSignMessageAccountKeyLegacyPage from "../pages/web3js-ext/SignMessage/AccountKeyLegacy";
import Web3jsExtSignMessageAccountKeyWeightedMultiSigPage from "../pages/web3js-ext/SignMessage/AccountKeyWeightedMultiSig";
import Web3jsExtSignMessageAccountKeyPublicPage from "../pages/web3js-ext/SignMessage/AccountKeyPublic";
import Web3jsExtSignMessageAccountKeyRoleBasedPage from "../pages/web3js-ext/SignMessage/AccountKeyRoleBased";

// SignTransaction Web3jsExt
import Web3jsExtSignTransactionAccountKeyLegacyPage from "../pages/web3js-ext/SignTransaction/AccountKeyLegacy";
import Web3jsExtSignTransactionAccountKeyWeightedMultiSigPage from "../pages/web3js-ext/SignTransaction/AccountKeyWeightedMultiSig";
import Web3jsExtSignTransactionAccountKeyPublicPage from "../pages/web3js-ext/SignTransaction/AccountKeyPublic";
import Web3jsExtSignTransactionAccountKeyRoleBasedPage from "../pages/web3js-ext/SignTransaction/AccountKeyRoleBased";

// AccountKey EthersExt
import EthersExtAccountKeyLegacyPage from "../pages/ethers-ext-v6/AccountKey/AccountKeyLegacy";
import EthersExtAccountKeyWeightedMultiSigPage from "../pages/ethers-ext-v6/AccountKey/AccountKeyWeightedMultiSig";
import EthersExtAccountUpdateWithPubKeyPage from "../pages/ethers-ext-v6/AccountKey/AccountUpdateWithPubKey";
import EthersExtAccountUpdateWithRoleBasedPage from "../pages/ethers-ext-v6/AccountKey/AccountUpdateWithRoleBased";

// SignMessage EthersExt
import EthersExtSignMessageAccountKeyLegacyPage from "../pages/ethers-ext-v6/SignMessage/AccountKeyLegacy";
import EthersExtSignMessageAccountKeyWeightedMultiSigPage from "../pages/ethers-ext-v6/SignMessage/AccountKeyWeightedMultiSig";
import EthersExtSignMessageAccountKeyPublicPage from "../pages/ethers-ext-v6/SignMessage/AccountKeyPublic";
import EthersExtSignMessageAccountKeyRoleBasedPage from "../pages/ethers-ext-v6/SignMessage/AccountKeyRoleBased";

// SignTransaction EthersExt
import EthersExtSignTransactionAccountKeyLegacyPage from "../pages/ethers-ext-v6/SignTransaction/AccountKeyLegacy";
import EthersExtSignTransactionAccountKeyWeightedMultiSigPage from "../pages/ethers-ext-v6/SignTransaction/AccountKeyWeightedMultiSig";
import EthersExtSignTransactionAccountKeyPublicPage from "../pages/ethers-ext-v6/SignTransaction/AccountKeyPublic";
import EthersExtSignTransactionAccountKeyRoleBasedPage from "../pages/ethers-ext-v6/SignTransaction/AccountKeyRoleBased";

export default [
  {
    path: RoutePath.Home,
    Component: HomePage,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      // AccountKey Web3jsExt
      {
        path: RoutePath.Web3jsExt_Account_Legacy,
        Component: Web3jsExtAccountKeyAccountKeyLegacyPage,
      },
      {
        path: RoutePath.Web3jsExt_Account_MultiSig,
        Component: Web3jsExtAccountKeyAccountUpdateWithMultiSigPage,
      },
      {
        path: RoutePath.Web3jsExt_Account_Public,
        Component: Web3jsExtAccountKeyAccountUpdateWithPubKeyPage,
      },
      {
        path: RoutePath.Web3jsExt_Account_Role,
        Component: Web3jsExtAccountKeyAccountUpdateWithRoleBasedPage,
      },
      // SignMessage Web3jsExt
      {
        path: RoutePath.Web3jsExt_SignMsg_Legacy,
        Component: Web3jsExtSignMessageAccountKeyLegacyPage,
      },
      {
        path: RoutePath.Web3jsExt_SignMsg_MultiSig,
        Component: Web3jsExtSignMessageAccountKeyWeightedMultiSigPage,
      },
      {
        path: RoutePath.Web3jsExt_SignMsg_Public,
        Component: Web3jsExtSignMessageAccountKeyPublicPage,
      },
      {
        path: RoutePath.Web3jsExt_SignMsg_Role,
        Component: Web3jsExtSignMessageAccountKeyRoleBasedPage,
      },
      // SignTransaction Web3jsExt
      {
        path: RoutePath.Web3jsExt_SignTx_Legacy,
        Component: Web3jsExtSignTransactionAccountKeyLegacyPage,
      },
      {
        path: RoutePath.Web3jsExt_SignTx_MultiSig,
        Component: Web3jsExtSignTransactionAccountKeyWeightedMultiSigPage,
      },
      {
        path: RoutePath.Web3jsExt_SignTx_Public,
        Component: Web3jsExtSignTransactionAccountKeyPublicPage,
      },
      {
        path: RoutePath.Web3jsExt_SignTx_Role,
        Component: Web3jsExtSignTransactionAccountKeyRoleBasedPage,
      },

      // -------------------------- EthersExt ----------------

      // AccountKey EthersExt
      {
        path: RoutePath.EthersExt_Account_Legacy,
        Component: EthersExtAccountKeyLegacyPage,
      },
      {
        path: RoutePath.EthersExt_Account_MultiSig,
        Component: EthersExtAccountKeyWeightedMultiSigPage,
      },
      {
        path: RoutePath.EthersExt_Account_Public,
        Component: EthersExtAccountUpdateWithPubKeyPage,
      },
      {
        path: RoutePath.EthersExt_Account_Role,
        Component: EthersExtAccountUpdateWithRoleBasedPage,
      },

      // SignMessage EthersExt
      {
        path: RoutePath.EthersExt_SignMsg_Legacy,
        Component: EthersExtSignMessageAccountKeyLegacyPage,
      },
      {
        path: RoutePath.EthersExt_SignMsg_MultiSig,
        Component: EthersExtSignMessageAccountKeyWeightedMultiSigPage,
      },
      {
        path: RoutePath.EthersExt_SignMsg_Public,
        Component: EthersExtSignMessageAccountKeyPublicPage,
      },
      {
        path: RoutePath.EthersExt_SignMsg_Role,
        Component: EthersExtSignMessageAccountKeyRoleBasedPage,
      },

      // SignTransaction Web3jsExt
      {
        path: RoutePath.EthersExt_SignTx_Legacy,
        Component: EthersExtSignTransactionAccountKeyLegacyPage,
      },
      {
        path: RoutePath.EthersExt_SignTx_MultiSig,
        Component: EthersExtSignTransactionAccountKeyWeightedMultiSigPage,
      },
      {
        path: RoutePath.EthersExt_SignTx_Public,
        Component: EthersExtSignTransactionAccountKeyPublicPage,
      },
      {
        path: RoutePath.EthersExt_SignTx_Role,
        Component: EthersExtSignTransactionAccountKeyRoleBasedPage,
      },
    ],
  },
] as RouteObject[];
