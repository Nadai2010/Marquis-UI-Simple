import { useAccount, useContractWrite } from "@starknet-react/core";
import { useState, useMemo } from "react";

function Spawn() {
  const { address } = useAccount();
  const [count] = useState(1);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('0');

  const calls = useMemo(() => {
    const tx = {
      contractAddress: '0x21542c4f3ba51dbe3702e7d42064f73595196904ee32baa93cb871b2b1e11ea',
      entrypoint: 'spawn',
      calldata: []
    };
    return Array(count).fill(tx);
  }, [address, count, recipient, amount]);

  const { write } = useContractWrite({ calls });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '-50px' }}>
        <div style={{ marginRight: '10px' }}>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', marginLeft: '2px' }}>
          <button style={{ border: '2px solid white', padding: '5px' }} onClick={() => write()}>Spawn</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Spawn;
