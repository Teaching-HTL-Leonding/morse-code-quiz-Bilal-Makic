import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css'],
})
export class DecodeComponent {
  public encodedText: string;
  public decodedText: string;
  constructor() {
    this.encodedText = '';
    this.decodedText = '';
  }


  public decode(): void {
    const morseCode = [
      /* A */ '.-',
      /* B */ '-...',
      /* C */ '-.-.',
      /* D */ '-..',
      /* E */ '.',
      /* F */ '..-.',
      /* G */ '--.',
      /* H */ '....',
      /* I */ '..',
      /* J */ '.---',
      /* K */ '-.-',
      /* L */ '.-..',
      /* M */ '--',
      /* N */ '-.',
      /* O */ '---',
      /* P */ '.--.',
      /* Q */ '--.-',
      /* R */ '.-.',
      /* S */ '...',
      /* T */ '-',
      /* U */ '..-',
      /* V */ '...-',
      /* W */ '.--',
      /* X */ '-..-',
      /* Y */ '-.--',
      /* Z */ '--..',
    ];
    let letter = ""
    this.decodedText = ""
    this.encodedText += " ";
    for (let ch of this.encodedText) {
      // HELLO WORLD
      //.... . .-.. .-.. --- / .-- --- .-. .-.. -..
      if (ch !== ' ') {
        if(ch === "/"){
          this.decodedText+= " ";
        }
        else{
        letter += ch;
        }

      }

      else if (letter !== ""){
       this.decodedText += String.fromCharCode(morseCode.indexOf(letter) + "A".charCodeAt(0));
       letter = "";
      }
    }
  }
}
