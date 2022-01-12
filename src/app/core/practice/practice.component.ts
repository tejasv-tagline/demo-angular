import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profiles } from 'src/app/card-list';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
  public inputtedName:string ='all';
  public footer = 'I am a footer';
  public profiles: Profiles[] = [
    {
      id: 1,
      title: 'Title-1',
      text: 'This is a text from profile-1',
      footer: 'i am a footer-1',
    },
    {
      id: 2,
      title: 'Title-2',
      text: 'This is a text from profile-2',
      footer: 'i am a footer-2',
    },
    {
      id: 3,
      title: 'Title-3',
      text: 'This is a text from profile-3',
      footer: 'i am a footer-3',
    }
  ];
  randomNum:any=Math.random()*10
  randomNum2:any=this.randomNum.toFixed(0);

  constructor(private router: Router) {
  console.log('randomNum :>> ', this.randomNum2);

  }

  ngOnInit(): void {
  }
  public navigateToSecond(vid: string | number): void {
    console.log(vid, typeof vid);
    // Number(vid);
    this.router.navigate(['profile/', Number(vid)]);
  }
  public addProfile():void{
    var len=this.profiles.length+1
    this.profiles.push({
      id: len,
      title: 'Title '+len,
      text: 'This is a text from profile-'+len,
      footer: 'i am a footer-'+len,
    })
  }
}
