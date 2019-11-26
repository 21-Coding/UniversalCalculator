

export class Being {

  constructor (age){
    this.age = age;

  }

  ageCalculator(){
    let user = this.age * 365
    return this.age;
  }

  heyMercury(){
    const mer = .24;
    this.mercury = Math.round(this.age/ mer);
    return this.mercury;
  }
};
