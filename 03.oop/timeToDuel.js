class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name,cost);
        this.power = power;
        this.res = res;

        
    }

    attack(target){
        return this.res-target.power;
    }


}


class Effect extends Card{
    constructor(name, cost){
        super(name, cost);

    }
    raiseRes(target){
        return target.res += 3;
    }
    lowerRes(target){
        return target.res -= 3;
    }
    raisePower(target){
        return target.power +=3;
    }
    lowerPower(target){
        return target.power -=3;
    }

}



