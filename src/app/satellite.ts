export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;
	color: 'green'

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
   }
	
   isSpaceDebris(): boolean {
    return this.type === 'Space Debris';
  }

  zebraStripes(arr) : boolean{
	return arr.indexOf(this) %2 === 0 && this.type !== 'Space Debris'
	

  }
}

// TODO 3a: fix isSpaceDebris check
