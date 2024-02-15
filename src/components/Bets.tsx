import { useAccount, useContractWrite } from "@starknet-react/core";
import { useState, useMemo } from "react";

function Bets() {
  const { address } = useAccount();
  const [gameId, setGameId] = useState(0);
  const [choicesInput, setChoicesInput] = useState<number[]>([]);
  const [amountsInput, setAmountsInput] = useState<number[]>([]);

  const gameIdInputStyle = { color: 'black' };

  const numChoices = choicesInput.length;
  const numAmounts = amountsInput.length;

  const calls = useMemo(() => {
    const tx = {
      contractAddress: '0x2438fa1783f1e67b677e03ba92828bbbcebe0a6516f801d210d0a7c0a217986',
      entrypoint: 'move',
      calldata: [
        gameId || 0,
        numChoices || 0,
        ...choicesInput,
        numAmounts || 0,
        ...amountsInput
      ]
    };
    return [tx];
  }, [address, gameId, numChoices, choicesInput, numAmounts, amountsInput]);

  const { write } = useContractWrite({ calls });

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>
        </div>
        <div style={{ marginLeft: '10px' }}>
          <p>Game ID:</p>
          <input
            type="number"
            value={gameId}
            onChange={(e) => setGameId(Number(e.target.value))}
            style={gameIdInputStyle}
          />
        </div>
        <div style={{ marginLeft: '10px' }}>
          <p>Enter choices:</p>
          <input
            type="text"
            placeholder="Enter choices..."
            onChange={(e) => setChoicesInput(e.target.value.split(',').map(Number))}
            style={gameIdInputStyle}
          />
        </div>
        <div style={{ marginLeft: '10px' }}>
          <p>Enter amounts:</p>
          <input
            type="text"
            placeholder="Enter amounts..."
            onChange={(e) => setAmountsInput(e.target.value.split(',').map(Number))}
            style={gameIdInputStyle}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px', marginLeft: '10px' }}>
          <button style={{ border: '2px solid white', padding: '5px'  }} onClick={() => write()}>Bets USDm</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Bets;
