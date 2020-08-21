import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRotateText]'
})
export class RotateTextDirective implements OnInit {

  words: string[];
  counter: number;
  direction: number;
  characterIndex: number;

  constructor(private elem: ElementRef) {
    this.words = ["passion.  ", "fun.  ", "a journey.  ", "LIFE.  "];
    this.counter = 0;
    // direction must only be 1 or -1
    this.direction = 1;
    this.characterIndex = 0;
  }

  ngOnInit() {
    setInterval(() => {
      if (this.direction === -1 && this.characterIndex <= 0) {
        this.counter = this.counter === this.words.length - 1 ? 0 : this.counter + 1;
        this.direction = 1;
      }
      const currentWord = this.words[this.counter];
      this.elem.nativeElement.innerText = currentWord.slice(0, this.characterIndex);
      this.characterIndex += this.direction;
      if (this.direction === 1 && this.characterIndex > currentWord.length - 1) {
        this.direction = -1;
      }
    }, 200);
  }

}
