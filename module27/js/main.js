function showMessage () {
    alert("This message is inside the funcition")
}

showMessage();

function sum(number1, number2){
    return number1+number2
}

console.log(sum(25,5))

function toCelsius(f) {
    return (5/9) * (f-32);
}

console.log("54 farenehit is equal to"+ toCelsius(54)+ " celsius" );

var result = toCelsius(54);

console.log("54 farenehit is equal to"+ result + " celsius" );

function dsfuncition(){
    var localVar = "Digjital School";
    alert(localVar)
}   

dsfuncition();

//alert(localVar)

function minutes(m){
    return (m * 60);
}

console.log("5 minutes is equal to" + minutes(5)+"seconds");

//objektet

var car = {
    name="mercedes",
    color="black",
   year=2012
  kilometers= 140000,
    startengenien : function{
        alert("VROMMMM!!!");
    },
   get getKilometers() {
    return this kilometers;
   },

   set setkilometers(km){
    this.kilometers = km;
   },

   get getColors() {
    return this.color;
   },

   set setcolor(newColor) {
      this.color = newColor
   }

}


console.log(car.getKilometers)

car.setkilometers = 150000;

console.log(car.getKilometers)
