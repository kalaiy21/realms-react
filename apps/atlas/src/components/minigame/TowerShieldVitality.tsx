import type BN from 'bn.js';
import classNames from 'classnames';
import React from 'react';
import { toBN } from 'starknet/dist/utils/number';
import { EFFECT_BASE_FACTOR } from '@/util/minigameApi';

type ShieldVitalityDisplayProps = {
  shield?: BN;
  health?: BN;
  className?: string;
};

export const ShieldVitalityDisplayClassnames =
  'p-6 text-lg text-gray-700 bg-white/30 rounded-xl';

export const ShieldVitalityDisplay = (props: ShieldVitalityDisplayProps) => {
  const zeroShield =
    (props.shield && props.shield.isZero()) || props.shield?.isNeg();

  const zeroVitality = props.health && props.health.lte(toBN(0));

  return (
    <>
      <p
        className={classNames(
          'text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l to-red-300 from-yellow-700 uppercase tracking-widest',
          props.className
        )}
      >
        Shield
      </p>
      <p className="text-4xl">
        {zeroShield && !zeroVitality ? (
          <p className="inline-block px-2 py-1 mb-2 text-sm bg-red-200 rounded-sm animate-pulse">
            Shield is down!
          </p>
        ) : props.shield ? (
          (props.shield.toNumber() / EFFECT_BASE_FACTOR).toFixed(2)
        ) : (
          '-'
        )}
      </p>
      <p>
        {zeroVitality ? (
          <p className="inline-block px-2 py-1 text-white bg-purple-900 rounded-sm">
            Dark Wins
          </p>
        ) : props.health ? (
          `Vitality: ${(props.health.toNumber() / EFFECT_BASE_FACTOR).toFixed(
            2
          )}`
        ) : (
          '-'
        )}
      </p>
    </>
  );
};
