// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
  this.attack = function(){
    return this.strength ;
  }
  this.receiveDamage = function(damage){
    this.health -= damage;
  }
}

// Viking
function Viking(name,health,strength) {
  this.name = name;
  Soldier.call(this, health, strength);
  this.receiveDamageParent = this.receiveDamage
  this.receiveDamage = function(damage){
    this.receiveDamageParent(damage)
    if(this.health > 0){
      return this.name + " has received " + damage +" points of damage";
    } else{
      return this.name + " has died in act of combat";
    }
  }
  this.battleCry = function(){
    return "Odin Owns You All!"
  }
}

Viking.prototype = Object.create(Soldier.prototype);


// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength);


}

Saxon.prototype = Object.create(Soldier.prototype);

// War
function War() {}