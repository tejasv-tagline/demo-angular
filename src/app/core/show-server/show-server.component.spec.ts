import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowServerComponent } from './show-server.component';

describe('ShowServerComponent', () => {
  let component: ShowServerComponent;
  let fixture: ComponentFixture<ShowServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
