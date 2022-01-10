import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from 'src/app/card-list';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogsComponent implements OnInit {
  @Input() vid!:number;
  
    public items: Items[] = [
    { id: 1, title: 'Tejash', text: 'This is a content of card1' },
    { id: 2, title: 'Arvind', text: 'This is a content of card2' },
    { id: 3, title: 'Professor', text: 'This is a content of card3' },
    { id: 4, title: 'title-4', text: 'This is a content of card4' },
    { id: 5, title: 'title-5', text: 'This is a content of card5' },
    { id: 6, title: 'title-6', text: 'This is a content of card6' },
    { id: 7, title: 'title-7', text: 'This is a content of card7' },
    { id: 8, title: 'title-8', text: 'This is a content of card8' },
    { id: 9, title: 'title-9', text: 'This is a content of card9' },
    { id: 10, title: 'title-10', text: 'This is a content of card10' },
    { id: 11, title: 'title-11', text: 'This is a content of card11' },
    { id: 12, title: 'title-12', text: 'This is a content of card12' },
    { id: 13, title: 'title-13', text: 'This is a content of card13' },
    { id: 14, title: 'title-14', text: 'This is a content of card14' },
    { id: 15, title: 'title-15', text: 'This is a content of card15' },
    { id: 16, title: 'title-16', text: 'This is a content of card16' },
    { id: 17, title: 'title-17', text: 'This is a content of card17' },
    { id: 18, title: 'title-18', text: 'This is a content of card18' },
    { id: 19, title: 'title-19', text: 'This is a content of card19' },
    { id: 20, title: 'title-20', text: 'This is a content of card20' },
    { id: 21, title: 'title-21', text: 'This is a content of card21' },
    { id: 22, title: 'title-22', text: 'This is a content of card22' },
    { id: 23, title: 'title-23', text: 'This is a content of card23' },
    { id: 24, title: 'title-24', text: 'This is a content of card24' },
    { id: 25, title: 'title-25', text: 'This is a content of card25' },
  ];

  public itemsDisplay: any = [];
  public profileId!: number;
  public cardListDisplay: any = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parameter) => {
      // console.log('parameter :>> ', parameter);

      this.profileId = Number(parameter['id']);
      // console.log('id-->', this.profileId, typeof this.profileId); //Extra
    });
    if (this.profileId) {
      this.itemsDisplay = this.items.find((item) => item.id === this.profileId);
      if (this.itemsDisplay) {
        this.itemsDisplay = [this.itemsDisplay];
      } else if (!this.itemsDisplay?.length) {
        this.itemsDisplay = this.items;
      }
    } else {
      this.itemsDisplay = this.items;
      // console.log("I am unable to find anything");
    }
  }
  public navigateToSecond(vid:string | number):void{
    console.log(vid,typeof vid);
    this.router.navigate(['practice/',Number(vid)]);
  }
  //   this.activatedRoute.params.subscribe((parameter) => {
  //     this.profileId = parameter['id'];
  //   });
  //   if (this.profileId) {
  //     this.cardListDisplay = this.items.find((item) => {
  //       return item.id === Number(this.profileId);
  //     });

  //     if (this.cardListDisplay) {
  //       this.cardListDisplay = [this.cardListDisplay];
  //     }

  //     if (!this.cardListDisplay?.length) {
  //       this.cardListDisplay = this.items;
  //     }
  //   } else {
  //     this.cardListDisplay = this.items;
  //   }
  // }
}
