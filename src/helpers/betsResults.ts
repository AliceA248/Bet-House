import { Bet } from '@prisma/client';
import { GameUpdate } from '../protocols';

export function betsResultsCalculator(bets:Bet[], data:GameUpdate){
	return bets.reduce(
		(totals, bet) => {
			const won = (data.awayTeamScore === bet.awayTeamScore ) && (data.homeTeamScore === bet.homeTeamScore);
			return {
				allBets: totals.allBets + bet.amountBet,
				allWinnerBets: totals.allWinnerBets + (won ? bet.amountBet : 0),
			};
		},
		{ allBets: 0, allWinnerBets: 0 }
	);

}