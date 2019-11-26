

export class Being {

  constructor (age){
    this.age = age;
    this.mercury = .24;
    // this.jupiter = 11.86;
  }

  ageCalculator(){
    let user = this.age * 365
    return this.age;
  }

  heyMercury(){

    this.mercury = Math.round(this.age/ this.mercury);

  }

  // heyJupiter(){
  //
  //   this.mercury = Math.round(this.age/ this.mercury);
  //
  // }
};
