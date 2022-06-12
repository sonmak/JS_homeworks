let minutes = 20;
let hours = 14;
let add = 45356655;

if (add >= 60) {
    if( add <= 1440) {
    hours+=(add-add%60)/60;  //ile godzin miesci się w dodanuch minutach
    minutes+=add%60;   // reszta modulu dodanych minutes od czasu
        if(minutes >=60) {  //jeśli reszta + minutes jest większa od 60
            hours+=1;
            minutes-=60;
        }
    } else if( add >= 1440 ) {  // jeśli dodana ilość minutes jest większa od 24 godzin
        hours+=((add-add%60)/60)%24;
        minutes+=add%60;
            if(minutes >=60) {
                hours+=1;
                minutes-=60;
            } 
            if ( hours > 24) {
                hours-=24;
            }
    }

} else if (add>=0 && add < 60) {
    minutes+=add%60; 
    if(minutes >=60) {  //jeśli reszta + minutes jest większa od 60
        hours+=1;
        minutes-=60;
    } 
} else {
    console.log ("You cannot add negatives minutes")
}



console.log("It is "+hours+":"+minutes);