import { useAccount, useContractWrite } from "@starknet-react/core";
import { useState, useMemo } from "react";

function SetWinner() {
  const { address } = useAccount();
  const [gameId, setGameId] = useState(0);
  const [winner, setWinner] = useState(0);

  const calls = useMemo(() => {
    const tx = {
      contractAddress: '0x2438fa1783f1e67b677e03ba92828bbbcebe0a6516f801d210d0a7c0a217986',
      entrypoint: 'set_winner',
      calldata: [gameId, winner]
    };

    return [tx];
  }, [address, gameId, winner]);

  const { write } = useContractWrite({ calls });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ marginRight: '10px' }}>
          <p>Game ID:</p>
          <input
            type="number"
            value={gameId}
            onChange={(e) => setGameId(Number(e.target.value))}
            style={{ color: 'black' }}
          />
        </div>
        <div style={{ marginRight: '10px' }}>
          <p>Set Winner:</p>
          <input
            type="number"
            value={winner}
            onChange={(e) => setWinner(Number(e.target.value))}
            style={{ color: 'black' }}
          />
        </div>
        <div style={{ alignSelf: 'flex-end', marginLeft: '2px' }}>
          <button style={{ border: '2px solid white', padding: '5px' }} onClick={() => write()}>Set Winner</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default SetWinner;
