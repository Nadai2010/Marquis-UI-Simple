import { useAccount, useContractWrite } from "@starknet-react/core";
import { useState, useMemo } from "react";

function Spawn() {
  const { address } = useAccount();
  const [count] = useState(1);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('0');

  const calls = useMemo(() => {
    const tx = {
      contractAddress: '0x365a607578bcb62edd3f950f4f9452b627027251a82ceff4611cb9ad4e93046',
      entrypoint: 'spawn',
      calldata: []
    };
    return Array(count).fill(tx);
  }, [address, count, recipient, amount]);

  const { write } = useContractWrite({ calls });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '-40px' }}>
        <div style={{ marginRight: '10px' }}>
        </div>
        <p>Only Owner:</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', marginLeft: '50px' }}>
       
          <button style={{ border: '2px solid white', padding: '5px' }} onClick={() => write()}>Spawn</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Spawn;
