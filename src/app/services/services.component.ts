import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  cards = [
    {
      
      img: './../../assets/image/angular.jpg'
    },
    {
      
      img: './../../assets/image/react.jpg'
    },
    {
      
      img: './../../assets/image/node.jpg'
    },
    {
      
      img: './../../assets/image/mongodb.jpg'
    },
    {
      
      img: './../../assets/image/java.jpg'
    },
    {
      
      img: './../../assets/image/laravel.jpg'
    },
    {
      
      img: './../../assets/image/mysql.jpg'
    },
    {
      
      img: './../../assets/image/android.jpg'
    },
    {
      
      img: './../../assets/image/mac.jpg'
    },
    {
      
      img: './../../assets/image/dotnet.jpg'
    },
    {
      
      img: './../../assets/image/python.jpg'
    },
    {
      
      img: './../../assets/image/wordpress.jpg'
    },
    {
      
      img: './../../assets/image/html.jpg'
    },
    {
      
      img: './../../assets/image/jquery.jpg'
    },
    {
      
      img: './../../assets/image/bootstrap.jpg'
    },
    
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 5);
     
  }

}
