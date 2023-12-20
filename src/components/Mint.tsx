import { useAccount, useContractWrite } from "@starknet-react/core";
import { useState, useMemo } from "react";

function Mint() {
  const { address } = useAccount();
  const [count] = useState(1);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('0');

  const recipientInputStyle = { color: 'black' };
  const amountInputStyle = { color: 'black' };

  const calls = useMemo(() => {
    const tx = {
      contractAddress: '0x0116d30283b84b826382d0115a985f71cdefd0dc7411c72dad1c0bbc9a292f5e',
      entrypoint: 'mint_',
      calldata: [recipient, amount, 0]
    };
    return Array(count).fill(tx);
  }, [address, count, recipient, amount]);

  const { write } = useContractWrite({ calls });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ marginRight: '10px' }}>
          <p>Recipient:</p>
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
          <button style={{ border: '2px solid white', padding: '5px' }} onClick={() => write()}>Mint USDm Tokens</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Mint;
