export function amountWonCalculator(amountBet:number, allWinnerBets:number, allBets:number){
	const HOUSE_TAX = 0.3;
	return (amountBet/allWinnerBets) * (allBets) * (1-HOUSE_TAX);
}