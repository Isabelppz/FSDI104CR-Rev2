alert("ATTACK!!");
window.onload=function(){
    document.getElementById("myaudio").play();
  }
class Character{
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;

    }
        display = function(){
        document.getElementById(this.id).innerHTML=`<br> Energy: ${this.energy}`;
    }
        attack = function(opponent,item){
            var newEnergy = opponent.energy - item.imagic;
            opponent.energy= newEnergy;
            opponent.display();

            document.getElementById('console').innerHTML=`${this.name} is attacking with ${item.iname} <br>${item.image}`;
            console.log(opponent.energy);

            if(opponent.energy==0){
            alert("GAME OVER "+this.name+" Wins");
            document.location.reload();
            }
        }   
}
const c1 =new Character("Raina",100,"c1");
const c2 =new Character("Etanie",100,"c2");

c1.display();
c2.display();
//c1.attack(c2);
class Item{
    constructor(iname,imagic,img,image){
        this.iname=iname;
        this.imagic=imagic;
        this.img=img;
        this.image=image;
    }
}
const item1=new Item("Flares",10,"img/flare.gif",`<img src="img/flare.gif" alt="">`);
const item2=new Item("Explotions",10,"img/explotion.gif",`<img src="img/explotion.gif" alt="">`);

var items = [item1,item2];

function select(){
    let selection = Math.floor(Math.random()*2);
    return items[selection];
}
