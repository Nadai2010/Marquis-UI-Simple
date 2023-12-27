import { useAccount, useContractRead } from "@starknet-react/core";
import erc20ABI from '../assets/erc20.json';

function Balance() {
  const { address } = useAccount();
  const args = address ? [address] : [];
  const { data, isLoading, error, refetch } = useContractRead({
    address: '0x5029eebf9ecbda709b6d295faaa5c0962403c9b3f564bdedda906d21d19c928',
    abi: erc20ABI,
    functionName: 'balanceOf',
    args,
    watch: false
  });

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {JSON.stringify(error)}</span>;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <div>
        <p>Balance:</p>
        <p>{data ? data.toString() : 0}</p>
      </div>
      <div style={{ alignSelf: 'flex-end', marginLeft: '20px' }}>
        <button style={{ border: '2px solid white', padding: '5px' }} onClick={() => refetch()}>Refresh Balance</button>
      </div>
      <hr />
    </div>
  );
}

export default Balance;
