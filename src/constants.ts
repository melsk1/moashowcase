const {
  REACT_APP_ALCHEMY_API = "https://eth-mainnet.alchemyapi.io/v2/BDVa7LAfJZLftNoctYU0CJP1IaK8OQKt",
  REACT_APP_CHAIN_ID = "1",
  REACT_APP_ETHERSCAN_URL,
  REACT_APP_SITE_URL = "moashowcase.vercel.app",
  REACT_APP_PROXY_URL
} = process.env;

export const alchemyApi: string = `${REACT_APP_ALCHEMY_API}`;
export const configChainId: number = REACT_APP_CHAIN_ID
  ? parseInt(REACT_APP_CHAIN_ID)
  : 0;
export const etherScanUrl: string = `${REACT_APP_ETHERSCAN_URL}`;
export const siteUrl: string = `${REACT_APP_SITE_URL}`;
export const proxyUrl: string = `${REACT_APP_PROXY_URL}`;
