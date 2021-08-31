import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

// Interfaces
interface Member {
  _id: string,
  firstName: string,
  lastName: string,
  photo?: string
  sports: Array<string>
}

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  id: string | null = ''
  selectedMember: Member = {
    _id: '',
    firstName: '',
    lastName: '',
    photo: '',
    sports: []
  }
  tempSelectedMember: Member = {
    _id: '',
    firstName: '',
    lastName: '',
    photo: '',
    sports: []
  }
  modalOpen: boolean = false
  sportsAvailable: Array<string> = [
    '',
    'Football',
    'Squash',
    'Tennis'
  ]

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.handleSelectedMember(paramMap.get('id'))
    })
  }

  handleSelectedMember = (id: string | null) => {
    if (!id) return

    const tempMembers: Member[] = JSON.parse(localStorage.getItem("members") || "[]");
    const tempIndex = tempMembers.findIndex(member => member._id === id);

    this.selectedMember = tempMembers[tempIndex] as unknown as Member
    this.tempSelectedMember = tempMembers[tempIndex] as unknown as Member
  }

  handleMemberUpdate = () => {
    let tempSelectedMember = this.selectedMember;
    const tempMembers: Member[] = JSON.parse(localStorage.getItem("members") || "[]");
    const tempIndex = tempMembers.findIndex(member => member._id === tempSelectedMember?._id);

    if (tempSelectedMember) {
      tempMembers[tempIndex] = tempSelectedMember;
    }

    localStorage.setItem("members", JSON.stringify(tempMembers));
    this.selectedMember = tempSelectedMember
    this.modalOpen = false
  }

  handleBackClick = () => {
    this.router.navigateByUrl('')
  }

  handleSportSelect = (value: string): void => {
    if (!value || value === '') return

    let tempNewMember = this.selectedMember;
    let tempSports = this.selectedMember.sports;

    tempSports.push(value);
    tempNewMember = {...tempNewMember, sports: tempSports} as unknown as Member;

    this.selectedMember = tempNewMember
  }

  handleSportDeSelect = (value: string): void => {
    let tempNewMember = this.selectedMember;
    let tempNewMemberSports = this.selectedMember.sports;

    const index = tempNewMemberSports.indexOf(value);

    if (index >= 0) {
      tempNewMemberSports.splice(index, 1);
    }

    tempNewMember = {...tempNewMember, sports: tempNewMemberSports} as unknown as Member;

    this.selectedMember = tempNewMember
  }
}
