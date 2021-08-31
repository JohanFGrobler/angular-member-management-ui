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
  }

  handleBackClick = () => {
    this.router.navigateByUrl('')
  }
}
