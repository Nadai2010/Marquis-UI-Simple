import { useAccount, useContractWrite } from "@starknet-react/core";
import { useState, useMemo } from "react";

function Approve() {
  const { address } = useAccount();
  const [count] = useState(1);
  const [recipient, setRecipient] = useState('0x365a607578bcb62edd3f950f4f9452b627027251a82ceff4611cb9ad4e93046');
  const [amount, setAmount] = useState('100000000000000000000');

  const recipientInputStyle = { color: 'black' };
  const amountInputStyle = { color: 'black' };

  const calls = useMemo(() => {
    const tx = {
      contractAddress: '0x5029eebf9ecbda709b6d295faaa5c0962403c9b3f564bdedda906d21d19c928',
      entrypoint: 'approve',
      calldata: [recipient, amount, 0]
    };
    return Array(count).fill(tx);
  }, [address, count, recipient, amount]);

  const { write } = useContractWrite({ calls });

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ marginRight: '10px' }}>
          <p>Spender:</p>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            style={recipientInputStyle}
          />
        </div>
        <div style={{ marginRight: '10px' }}>
          <p>Amount:</p>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={amountInputStyle}
          />
        </div>
        <div style={{ alignSelf: 'flex-end', marginLeft: '2px' }}>
          <button style={{ border: '2px solid white', padding: '5px' }} onClick={() => write()}>Approve USDm Tokens</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Approve;
