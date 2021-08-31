import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";

@Component({
  selector: 'NavigationPanel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {
  // State
  open: boolean = false
  active: number = 0
  menuItems: Array<Record<string, string>> = [
    {
      name: 'Members',
      icon: 'member',
    },
    {
      name: 'Sports',
      icon: 'sport',
    }
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  handleRouteChange = (): void => {
    const selectedMenuItem = this.menuItems[this.active];

    switch (selectedMenuItem.name) {
      case 'Members':
        this.router.navigateByUrl('/')
        break;
      case 'Sports':
        this.router.navigateByUrl('/sports')
        break;
      default:
    }
  }
}
