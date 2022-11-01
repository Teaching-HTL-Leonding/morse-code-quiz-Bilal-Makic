import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent {

  public encodedText: string;
  public inputText: string;

  constructor() {
    this.inputText = "";
    this.encodedText = "";
  }

  public encode(): void{
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

    this.encodedText = "";
    this.inputText = this.inputText.trim();

    for(let ch of this.inputText){
      if(ch.match(/[A-Z]/)){
       let alphabetIndex = ch.charCodeAt(0) - "A".charCodeAt(0)
       this.encodedText += morseCode[alphabetIndex];
       this.encodedText+= " ";
      }
      else if(ch === " " && this.encodedText[this.encodedText.length - 2] !== "/"){
        this.encodedText += "/ ";
      }
      else if (ch !== " "){
        this.encodedText += ch;
      }
    }
    this.encodedText = this.encodedText.trim();
  }

}
