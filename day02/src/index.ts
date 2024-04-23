import * as fs from "fs";
const data:string[] = fs.readFileSync(`input.txt`, `utf-8`).split(`\n`);

const part1 = ():number => {
	let res:number = 0;
	const red:number = 12; const green:number = 13; const blue:number = 14;

	const valid_games: number[] = [];
	for (const i in data){
		const line:string = data[ i ]!;
		// console.log(i, line);
		const game_id:number = +(/Game (\d+):/).exec(line)![ 1 ]!;
		// console.log(game_id);
		const match_reds:number[] = [ ...line.matchAll(/\d+(?= red)/g) ]
			.map((match) => { return +match[ 0 ]; });

		const match_blues:number[] = [ ...line.matchAll(/\d+(?= blue)/g) ]
			.map((match) => { return +match[ 0 ]; });

		const match_greens:number[] = [ ...line.matchAll(/\d+(?= green)/g) ]
			.map((match) => { return +match[ 0 ]; });

		// console.log(`Game ${game_id};Red: ${match_reds}, Green: ${match_greens}, Blue: ${match_blues}`);
		if (match_reds.some((num) => { return num > red; }) ||
			match_greens.some((num) => { return num > green; }) ||
			match_blues.some((num) => { return num > blue; })){
			// console.log(`Skipped Game: ${game_id}`);
		}
		else {
			valid_games.push(game_id);
			// console.log(`!!Added Game ${game_id}`);
		}
	}
	res = valid_games.reduce((acc, cur) => { return acc + cur; }, 0);
	return res;
};
const part2 = ():number => { return 0; };

console.log(part1());
// 2105
// part2();