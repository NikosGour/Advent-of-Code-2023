import * as fs from "fs";
const data = fs.readFileSync(`input.txt`, `utf-8`).split(`\n`);

const part1 = ():number => {
	let acc = 0;
	for (const line of data) {
		// console.log(line);
		const numbers = line.split(``)
			.filter((c) => { return !isNaN(+c); });
		acc += +(numbers[ 0 ]! + numbers[ numbers.length - 1 ]);
	}
	return acc;
};
const part2 = ():number => {
	function findAllOverlappingMatches(pattern:RegExp, text:string) {
		const regex = new RegExp(pattern, `g`);
		const matches = [];
		let match;
		while ((match = regex.exec(text)) !== null) {
			matches.push(match[ 0 ]);
			regex.lastIndex = match.index + 1;
		}
		return matches;
	}

	let res = 0;
	const number_string = {
		one   : 1,
		two   : 2,
		three : 3,
		four  : 4,
		five  : 5,
		six   : 6,
		seven : 7,
		eight : 8,
		nine  : 9,
	};

	for (const i in data){
		const line = data[ i ]!;
		const regex = /one|two|three|four|five|six|seven|eight|nine|\d/g;
		const matches = findAllOverlappingMatches(regex, line);
		// console.log(matches);
		if (matches){
			const first = matches[ 0 ]!;
			const last = matches[ matches.length - 1 ]!;
			// console.log(i);
			// console.log(`Found first: ${first}`);
			// console.log(`Found last: ${last}`);
			// console.log(`in line: ${line}`);
			let first_num:number;
			let last_num:number;
			if (isNaN(+first)) {
				first_num = number_string[ first as keyof typeof number_string ];
			}
			else {
				first_num = +first;
			}
			if (isNaN(+last)) {
				last_num = number_string[ last as keyof typeof number_string ];
			}
			else {
				last_num = +last;
			}
			const final = +(first_num.toString()+last_num.toString());
			// console.log(final);
			const res_bef = res;
			res += final;
			// console.log(`${res}=${res_bef}+${final}`);
		}
	}
	return res;
};

// console.log(part1());
//54390
console.log(part2());
//54277