

export class Being {

  constructor (age){
    this.age = age;

  }

  ageCalculator(){
    let user = this.age * 365
    return this.age;
  }

  heyMercury(){
    const mercury = .24;
    let mercAge = Math.floor(this.age / mercury)
    return mercAge;
    console.log(mercAge);
  }
};
