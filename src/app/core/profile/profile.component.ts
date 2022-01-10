import {
  Component,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { CardList } from 'src/app/card-list';
import { UserDataService } from 'src/app/services/user-data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  private subscribeOnce!: Subscription;
  public cardList: CardList[] = [
    {
      id: 1,
      image:
        'https://image.shutterstock.com/image-photo/full-hd-image-ladybird-on-260nw-1952398060.jpg',
      title: 'Card title 1',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content 1.",
    },
    {
      id: 2,
      image: '../../../assets/camp.jpeg',
      title: 'Card title 2',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content 2.",
    },
    {
      id: 3,
      image: '../../../assets/cardphoto.jpeg',
      title: 'Card title 3',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content 3.",
    },
    {
      id: 4,
      image: '../../../assets/camp.jpeg',
      title: 'Card title 4',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content 4.",
    },
    {
      id: 5,
      image: '../../../assets/camp.jpeg',
      title: 'Card title 5',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content 5.",
    },
    {
      id: 6,
      image:
        'https://image.shutterstock.com/image-photo/full-hd-image-ladybird-on-260nw-1952398060.jpg',
      title: 'Card title 6',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content 6.",
    },
    {
      id: 7,
      image: 'assets/camp.jpeg',
      title: 'Card title 7',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content 7.",
    },
    {
      id: 8,
      image: '../../../assets/cardphoto.jpeg',
      title: 'Card title 8',
      text: "Some quick example text to build on the card title and make up the bulk of the card's content 8.",
    },
  ];
  public cardListDisplay: any = [];

  public profileId!: number;
  // public users; //Services
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //public userDetails:UserDataService //services
    // this.users=userDetails.userData(); //services
  }

  ngOnInit() {
    // this.router.navigate(['first/4'])
    // this.subscribeOnce = interval(1000).subscribe((count) => {
    //   console.log('hi', count);
    // });
    
    const customIntervalObservable = Observable.create((observer:any) => {
    let count: number = 0;
    setInterval(() => {
      observer.next(count);
      if(count===5){
        observer.complete();
      }
      if(count>3){
        observer.error(new Error('Counter is greater than 3'))
      }
      count++;
    }, 1000);
  });
    this.subscribeOnce= customIntervalObservable.subscribe((data: any)=>{
      console.log('data :>> ', data);
    },
      (error:any)=>{
      alert(error.message)
      console.log(error.messsage)}
    )

    this.activatedRoute.params.subscribe((parameter) => {
      this.profileId = parameter['id'];
    });
    if (this.profileId) {
      this.cardListDisplay = this.cardList.find((card) => {
        return card.id === Number(this.profileId);
      });

      if (this.cardListDisplay) {
        this.cardListDisplay = [this.cardListDisplay];
      }

      if (!this.cardListDisplay?.length) {
        this.cardListDisplay = this.cardList;
      }
    } else {
      this.cardListDisplay = this.cardList;
    }
  }
  navigateToSecond(vid: string | number) {
    console.log(vid, typeof vid);
    this.router.navigate(['blogs/', Number(vid)]);
  }

  ngOnDestroy(): void {
    this.subscribeOnce.unsubscribe();
    // this.customIntervalObservable
  }
}
