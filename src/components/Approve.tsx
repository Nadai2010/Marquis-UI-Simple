import { useAccount, useContractWrite } from "@starknet-react/core";
import { useState, useMemo } from "react";

function Approve() {
  const { address } = useAccount();
  const [count] = useState(1);
  const [recipient, setRecipient] = useState('0x21542c4f3ba51dbe3702e7d42064f73595196904ee32baa93cb871b2b1e11ea');
  const [amount, setAmount] = useState('100000000000000000000');

  const recipientInputStyle = { color: 'black' };
  const amountInputStyle = { color: 'black' };

  const calls = useMemo(() => {
    const tx = {
      contractAddress: '0x0116d30283b84b826382d0115a985f71cdefd0dc7411c72dad1c0bbc9a292f5e',
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
