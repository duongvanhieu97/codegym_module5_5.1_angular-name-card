import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit{
  // @ts-ignore
  @Input() cardName: string;
  // @ts-ignore
  @Input() email: string;
  // @ts-ignore
  //cái ts-ignore là do cái ide nó bắt lỗi lên mình dùng @ts-ignore để tắt cái bắt lỗi nó đi
  @Input() phone: string;

  constructor() {
  }
  ngOnInit() {
  }

}
