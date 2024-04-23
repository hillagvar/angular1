import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skaiciuokle',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './skaiciuokle.component.html',
  styleUrl: './skaiciuokle.component.css'
})
export class SkaiciuokleComponent {
  public x: number | null = null;
  public y: number | null = null;

  //kintamasis suma yra arba skaicius arba null reiksme
  public suma: number | null = null;

  public skaiciuok() {
    if (this.x != null && this.y != null) {
      this.suma = this.x+this.y;
      this.x = null;
      this.y = null;
    }
  }
  // public pridek() {
  //   this.x++;
  //   console.log(this.x);
  // }


}
