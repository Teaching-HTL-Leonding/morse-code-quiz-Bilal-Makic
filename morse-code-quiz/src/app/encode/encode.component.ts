import { Component, OnInit } from '@angular/core';

class MorsePlainText {
  constructor(
    public inputText: string
  ){}
}

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.css']
})
export class EncodeComponent {

  public inputText: MorsePlainText;

  constructor() {
   this.inputText = new MorsePlainText("")
  }


}
