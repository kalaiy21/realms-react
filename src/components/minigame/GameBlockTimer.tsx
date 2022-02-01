import classNames from "classnames";
import { GameContext } from "~/util/minigameApi";

type Prop = {
  gameCtx: GameContext;
};

const GameBlockTimer: React.FC<Prop> = (props) => {
  const { gameStartBlock, currentBlock, hoursPerGame, blocksPerMinute } =
    props.gameCtx;

  const startToNum = gameStartBlock.toNumber();

  const endBlock = startToNum + blocksPerMinute * hoursPerGame;
  const currentHour =
    Math.floor(
      (currentBlock.toNumber() - startToNum) / (blocksPerMinute * 60)
    ) + 1; // to match loop index

  // Game "ticks" are displayed in hour intervals to fit on one screen
  const blockTicks = [];
  for (var i = 1; i <= hoursPerGame; i++) {
    const pastBg = "bg-cyan-600";
    const currentBg = "bg-gradient-to-r from-cyan-600 to-gray-700";
    const futureBg = "bg-gray-700";

    const isCurrentHour = i == currentHour;

    blockTicks.push(
      <span
        key={i}
        className={classNames(
          "flex-1 inline-block py-1 text-xs text-center hover:text-white align-baseline",
          isCurrentHour ? currentBg : i < currentHour ? pastBg : futureBg,
          isCurrentHour ? "text-gray-100" : "text-transparent"
        )}
      >
        {/* 
        Show boost at hour interval
        using same formula as used in contract.
        Need to clip substring to 4 to handle rounding correctly 
        to match precision in contract 
        */}
        {(((i / hoursPerGame) * 100) / 2).toFixed(3).toString().substring(0, 4)}
      </span>
    );
  }

  return (
    <>
      <div className="flex gap-1 my-2">{blockTicks}</div>
      <div className="flex justify-between text-xs">
        <span>Started at L2 block {startToNum}</span>
        <span>Ends at L2 block {endBlock}</span>
      </div>
    </>
  );
};

export default GameBlockTimer;