import { LightningElement } from 'lwc';

export default class Setter extends LightningElement {
    
    name = "Cat";
    age = 2; //yeni yas girildiginde bu variable'a atanacak
    newAge = 0;

    updateAge(event) {
        this.newAge = event.target.value; //input'tan girilen yas hemen age'e atanmayacak. Butona tiklaninca atanacak
    }
    updateOriginalAge() {
        this.age1 = this.newAge;
    }
    //----------------------------------------
    //1-get kullanalim. Get araya sigorta gibi giriyo..If-else gibi seyleri buradan yaparler. 
    get age1(){  //ParseInt yapmazsaniz concatinate yapabilir.
        return parseInt(this.age)+1;

    }
    set age1(value){ //set methodlar parametre alir.
       this.age=value;
    }
}