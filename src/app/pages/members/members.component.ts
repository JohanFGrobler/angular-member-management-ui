import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

// Interfaces
interface Member {
  _id: string,
  firstName: string,
  lastName: string,
  photo?: string
  sports: Array<string>
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  // State
  members: Member[] = []
  newMember: Member = {
    _id: '',
    firstName: '',
    lastName: '',
    photo: 'https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif',
    sports: []
  }
  modalOpen: boolean = false
  sportsAvailable: Array<string> = [
    '',
    'Football',
    'Squash',
    'Tennis'
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.initialize()
  }

  // Handlers
  initialize = (): void => {
    const tempMembers: Member[] = JSON.parse(localStorage.getItem("members") || "[]");

    if (tempMembers.length > 0) {
      this.members = tempMembers
      return;
    }

    const tempMembersList = [
      {
        _id: "612c98fe26f14cf9bb94c46c",
        firstName: "Susanna",
        lastName: "Nunez",
        photo: "https://images.unsplash.com/photo-1588453383063-37ea0b78f30f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        sports: [
          "tennis",
          "football"
        ]
      },
      {
        _id: "612c98fe068d2dd1e4dc1870",
        firstName: "Maura",
        lastName: "Phelps",
        photo: "https://images.unsplash.com/photo-1428931996691-a5108d4cdbf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        sports: [
          "football"
        ]
      },
      {
        _id: "612c98fe9c7ade42a5923942",
        firstName: "Maryellen",
        lastName: "Cooley",
        photo: "https://images.unsplash.com/photo-1542343633-ce3256f2183e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80",
        sports: [
          "football",
          "squash"
        ]
      },
      {
        _id: "612c98fe4399dd294a1f59f3",
        firstName: "Burnett",
        lastName: "Hicks",
        photo: "https://images.unsplash.com/photo-1574108233269-86d1199d28de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        sports: [
          "tennis"
        ]
      },
      {
        _id: "612c98fec7caedd49ffb1548",
        firstName: "Amalia",
        lastName: "Barton",
        photo: "https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        sports: [
          "football",
          "squash",
          "tennis"
        ]
      },
      {
        _id: "612c98fe105e9cd3e23e2162",
        firstName: "Jeri",
        lastName: "Robles",
        photo: "https://images.unsplash.com/photo-1608791952180-79294109d843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        sports: [
          "tennis"
        ]
      },
      {
        _id: "612c98fe048ecea01ddbc10c",
        firstName: "Gill",
        lastName: "Vincent",
        photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        sports: [
          "tennis"
        ]
      },
      {
        _id: "612c98fe610f4eaaf3bc82ea",
        firstName: "Nettie",
        lastName: "Schroeder",
        photo: "https://images.unsplash.com/photo-1599842057874-37393e9342df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        sports: [
          "tennis"
        ]
      },
      {
        _id: "612c98feaf5ebf630128fd71",
        firstName: "Marlene",
        lastName: "Schultz",
        photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        sports: [
          "squash",
          "tennis",
          "football"
        ]
      },
      {
        _id: "612c98fe2bb5c04b399891fb",
        firstName: "Chandler",
        lastName: "Mccarthy",
        photo: "https://images.unsplash.com/photo-1548536904-f6660b76e77a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        sports: [
          "football",
          "squash"
        ]
      }
    ]

    localStorage.setItem("members", JSON.stringify(tempMembersList));
    this.members = tempMembersList
  }

  handleCardClick = (id: string): void => {
    this.router.navigateByUrl(`/member/${id}`)
  }

  handleMemberAdd = (): void => {
    let tempMember = {...this.newMember, _id: Date.parse(new Date().toString()).toString()};
    let tempMembers = this.members;

    tempMembers?.push(tempMember as unknown as Member);
    this.members = tempMembers

    localStorage.setItem("members", JSON.stringify(tempMembers));
    this.modalOpen = false
    this.newMember = {
      _id: '',
      firstName: '',
      lastName: '',
      photo: 'https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif',
      sports: []
    }
  }

  handleMemberRemove = (index: number): void => {
    let tempMembers = this.members;

    tempMembers?.splice(index, 1);

    localStorage.setItem("members", JSON.stringify(tempMembers));
    this.members = [...tempMembers as unknown as Array<Member>];
  }

  handleSportSelect = (value: string): void => {
    let tempNewMember = this.newMember;
    let tempSports = this.newMember.sports;

    tempSports.push(value);
    tempNewMember = {...tempNewMember, sports: tempSports} as unknown as Member;

    this.newMember = tempNewMember
  }

  handleSportDeSelect = (value: string): void => {
    let tempNewMember = this.newMember;
    let tempNewMemberSports = this.newMember.sports;

    const index = tempNewMemberSports.indexOf(value);

    if (index >= 0) {
      tempNewMemberSports.splice(index, 1);
    }

    tempNewMember = {...tempNewMember, sports: tempNewMemberSports} as unknown as Member;

    this.newMember = tempNewMember
  }
}
