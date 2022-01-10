import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profiles } from 'src/app/card-list';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
  public footer = 'I am a footer';
  public profiles: Profiles[] = [
    { id: 1, title: 'Teajsh', text: 'I am A boy1', footer: 'i am a footer1' },
    { id: 2, title: 'Parth', text: 'I am A boy2', footer: 'i am a footer2' },
    { id: 3, title: 'Arvind', text: 'I am A boy3', footer: 'i am a footer3' },
  ];
  constructor(private router:Router) {}

  ngOnInit(): void {}
  public navigateToSecond(vid:string | number):void{
    console.log(vid,typeof vid);
    // Number(vid);
    this.router.navigate(['profile/', Number(vid)])
  }
  
}
