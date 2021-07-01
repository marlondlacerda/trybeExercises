const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = dragon => {
  const minDmg = 15;
  const maxDmg = dragon.strength - minDmg;
  const dragonDmg = Math.floor((Math.random() * (maxDmg) + minDmg));
  return dragonDmg;
};

const warriorAttack = warrior => {
  const weaponDmg = warrior.weaponDmg;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
  return warriorDamage;
};

const mageAttack = (mage) => {
  let mana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = (minDmg * 2) - minDmg;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not Enough mana...',
  };

  if (mana > 15) {
    const mageDmg = Math.floor((Math.random() * (maxDmg) + minDmg));
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDmg;
    return turnStats;
  }
  return turnStats;
}

const gameActions = {
  warriorTurn: (callbackMage) => {
    const warriorDamage = callbackMage;
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (callbackMage) => {
    const mageTurnStats = callbackMage;
    const mageDamage = mageTurnStats.damageDealt;
    const { manaSpent} = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints = mageDamage;
  },
  dragonTurn: (callbackDragon) => {
    const dragonDamage = callbackDragon;
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,

};

// const gameActions = {

//   monsterTurn: (monsterAttack) => {
//     const dragonDamage = monsterAttack();
//     mage.healthPoints -= dragonDamage;
//     warrior.healthPoints -= dragonDamage;
//     dragon.damage = dragonDamage;
//   },
  // turnResults: () => battleMembers,
// };

gameActions.warriorTurn(warriorAttack(warrior));
gameActions.mageTurn(mageAttack(mage));
gameActions.dragonTurn(dragonAttack(dragon));
console.log(gameActions.turnResults());
