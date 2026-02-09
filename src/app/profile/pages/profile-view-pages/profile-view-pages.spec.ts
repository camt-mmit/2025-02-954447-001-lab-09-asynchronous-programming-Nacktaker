import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewPages } from './profile-view-pages';

describe('ProfileViewPages', () => {
  let component: ProfileViewPages;
  let fixture: ComponentFixture<ProfileViewPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileViewPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileViewPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
