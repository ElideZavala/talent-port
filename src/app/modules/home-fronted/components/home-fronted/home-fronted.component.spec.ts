import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFrontedComponent } from './home-fronted.component';

describe('HomeFrontedComponent', () => {
  let component: HomeFrontedComponent;
  let fixture: ComponentFixture<HomeFrontedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFrontedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFrontedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
