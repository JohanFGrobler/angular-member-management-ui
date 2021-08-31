import {Component, OnInit} from '@angular/core';

// Interfaces
interface Sport {
  name: string,
  photo: string
}

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  sports: Sport[] = [
    {
      name: 'Football',
      photo: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
    },
    {
      name: 'Squash',
      photo: 'https://images.unsplash.com/photo-1554290813-ec6a2a72e5c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      name: 'Tennis',
      photo: 'https://images.unsplash.com/photo-1600701707248-f491d5ac5056?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }
}
