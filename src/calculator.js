

export class Being {

  constructor (age){
    this.age = age;
    this.mercury = .24;
    this.jupiter = 11.86;
    this.mars = 1.88;
    this.venus = .62;
  }

  ageCalculator(){
    let user = this.age * 365
    return this.age;
  }

  heyMercury(){

    this.mercury = Math.round(this.age/ this.mercury);

  }

  heyJupiter(){

    this.jupiter = Math.round(this.age/ this.jupiter);

  }

  heyMars(){

    this.mars = Math.round(this.age/ this.mars);

  }

  heyVenus(){

    this.venus = Math.round(this.age/ this.venus);

  }
};
