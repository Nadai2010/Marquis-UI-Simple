'use client';
import { sepolia, goerli, mainnet } from '@starknet-react/chains';
import { argent, braavos, publicProvider, StarknetConfig, starkscan, useInjectedConnectors } from '@starknet-react/core';
import { ArgentMobileConnector } from 'starknetkit/argentMobile';
import { WebWalletConnector } from 'starknetkit/webwallet';

const networkChains = {
  sepolia,
  goerli,
  mainnet,
};

const networks = Object.keys(networkChains);

// STARKNET

interface StarknetProviderProps {
  children: React.ReactNode;
}

export function StarknetProvider({ children }: StarknetProviderProps) {
  const { connectors: injected } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: 'always',
  });

  const connectors = [
    ...injected,
    new WebWalletConnector({ url: 'https://web.argent.xyz' }),
    new ArgentMobileConnector(),
  ];

  return (
<StarknetConfig
  connectors={connectors}
  chains={networks.map((net) => networkChains[net as keyof typeof networkChains])}
  provider={publicProvider()}
  explorer={starkscan}
  autoConnect
>
  {children}
</StarknetConfig>

  );
}
