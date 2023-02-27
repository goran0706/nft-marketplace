import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { useEffect } from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ConfigProvider, theme } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import Layout from "./Layout";
import { blue } from "../styles/colors";

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [goerli] : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: "E-s50vJDRB47fOroc2YPQn8OFWaoB44j",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const { defaultAlgorithm, darkAlgorithm } = theme;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }
  }, []);

  return (
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          algorithm: true ? darkAlgorithm : defaultAlgorithm,
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColor: blue,
              accentColorForeground: "white",
              fontStack: "system",
            })}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RainbowKitProvider>
        </WagmiConfig>
      </StyleProvider>
    </ConfigProvider>
  );
}

export default MyApp;
