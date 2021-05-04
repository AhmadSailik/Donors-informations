function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function Donor(_name,_Amount){
    this.name='name';
    this.Amount='Amount';
    this.age =getRndInteger(18, 30);
    total=[];
    Donor.sum.push(this)
    save()
}
Donor.sum=[];
console.log(Donor.sum)

let form=document.getElementById('donor')
form.addEventListener('submit',addInformation)
function addInformation(event){
    event.preventDefault()
    let nameOf=event.target.donrName.value;
    console.log(nameOf);
    let amountOf=event.target.amountDoner.value;
    console.log(amountOf);
    let newDoner=new Donor(nameOf,amountOf)
    newDoner.rander()
}
let cont=document.getElementById("right")
let table=document.createElement('table')
cont.appendChild(table)
function headerRow(){
   let tr1=document.createElement('tr') 
   table.appendChild(tr1)
   let th1=document.createElement('th')
   tr1.appendChild(th1)
   th1.textContent='Doner Name'
   let th2=document.createElement('th')
   tr1.appendChild(th2)
   th2.textContent='Doner Age'
   let th3=document.createElement('th')
   tr1.appendChild(th3)
   th3.textContent='Amount'
}
headerRow()

Donor.prototype.rander=function(){
    let tr2=document.createElement('tr') 
   table.appendChild(tr2)
   let td1=document.createElement('td')
   tr2.appendChild(td1)
   td1.textContent=this.name
   let td2=document.createElement('td')
   tr2.appendChild(td2)
   td2.textContent=this.age
   let td3=document.createElement('td')
   tr2.appendChild(td3)
   td3.textContent=this.Amount
}
function save(){
let arrstr=JSON.stringify(Donor.sum)
localStorage.setItem('DonarSave',arrstr)  
}
function gitting(){
    let data=localStorage.getItem('DonarSave')
    let order=JSON.parse(data)
    if (order){
        for(i=0;i<order.length;i++){
            let reInst=new Donor(order[i].name,order[i].Amount)
            reInst.rander()
        }
    }
}
for(i=0;i<Donor.sum.length;i++){
Donor.sum[i].rander();
}
gitting()