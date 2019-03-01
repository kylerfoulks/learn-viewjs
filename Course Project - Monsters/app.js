new Vue({
    el: '#app',
    data: {
      playerHealth: 100,
      monsterHealth: 100,
      activeGame: false,
      log:[]
    },
    methods:{
        attack: function(){
            var playerDamage = Math.ceil(Math.random()*30);
            var monsterDamage = Math.ceil(Math.random()*40);

            this.log.unshift('You attacked the monster for ' + playerDamage  + ' damage');
            this.log.unshift('The Monster attacked you for ' + monsterDamage + ' damage');
            
            this.playerHealth = this.playerHealth - monsterDamage;
            this.monsterHealth = this.monsterHealth - playerDamage;
        },
        specialAttack: function(){
            var playerDamage = Math.ceil(Math.random()*60);
            var monsterDamage = Math.ceil(Math.random()*30);
            this.playerHealth = this.playerHealth - monsterDamage;
            this.monsterHealth = this.monsterHealth - playerDamage;

            this.log.unshift('You special attacked the monster for ' + playerDamage  + ' damage');
            this.log.unshift('The Monster attacked you for ' + monsterDamage + ' damage');
            
        },
        heal: function(){
            var healAmount = 20;
            var monsterDamage = Math.ceil(Math.random()*30);
            this.playerHealth = this.playerHealth + healAmount;
            this.playerHealth = this.playerHealth - monsterDamage;
        },
        newGame: function(){
            this.activeGame = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.log = [];
        },
        giveUp: function(){
            this.activeGame = false;
        }
    }
  });