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
        if(target instanceof Unit){
            return console.log(this.name + " attacked "+ target.name + " for " + (this.res-target.power) );
        }else{
            return "Target must be a Unit!";
        }
    }


}


class Effect extends Card{
    constructor(name, cost,stat,magnitude, text){
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = text;

    }
    play(target){
        if(target instanceof Unit){
            if(this.stat="resilience"){
                target.res+=this.magnitude;
                return console.log(this.text);
            }else{
                target.power+=this.magnitude;
                return console.log(this.text);
            }
        }else{
            return "Target must be a Unit!";
        }
    }




}

const RedBeltNinja = new Unit("Red Belt Ninja", 3,3,4);
const BlackBeltNinja = new Unit("Black Belt Ninja", 4,5,4);

const HardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3, "increase target's resilience by 3");
const promise = new Effect("Unhandled Promise Rejection", 1, "resilience", -2, "reduce target's resilience by 2");
const pair = new Effect("Pair Programming", 3, "power", +2, "increase target's power by 2")

HardAlgorithm.play(RedBeltNinja);
promise.play(RedBeltNinja);
pair.play(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);





