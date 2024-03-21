import { gsap } from 'gsap'
import SplitType from 'split-type'

export default class Explode{

    modes = ['lines', 'words', 'chars'];

    constructor(types){
        this.types = types || ['lines', 'words', 'chars'];
        this.typesText = "";
        this.typesChars = [];

        this.types.forEach(a => {
            this.modes.some( b => {
                if(b.toLowerCase() == a.toLowerCase()){
                    this.typesChars.push(b);
                    return true
                } else {
                    return false
                }
            } )
        });

        console.log(this.typesText.charAt(this.typesText.length-2));
        
        // this.text = new SplitType('.crazy.crazy-explode', { types: this.types})

        // if(this.className == ".animation.animation-bounce-letter"){
        //     this.explodeWord()
        // }

    }

    // getRandomArbitrary(min, max) {
    //     return Math.random() * (max - min) + min;
    // }

    // explodeLine(){
        
    //     ourText.lines
    //     ourText.words
 
    //     const chars = ourText.chars
    // }
}


