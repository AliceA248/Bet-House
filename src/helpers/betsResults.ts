import { Bet } from '@prisma/client';
import { GameUpdate } from '../protocols';

export function betsResultsCalculator(bets: Bet[], data: GameUpdate) {
  const totals = { allBets: 0, allWinnerBets: 0 };

  for (const bet of bets) {
    const isWinnerBet =
      data.awayTeamScore === bet.awayTeamScore && data.homeTeamScore === bet.homeTeamScore;

    totals.allBets += bet.amountBet;
    totals.allWinnerBets += isWinnerBet ? bet.amountBet : 0;
  }

  return totals;
}
