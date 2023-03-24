import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadimgComponent } from './downloadimg.component';

describe('DownloadimgComponent', () => {
  let component: DownloadimgComponent;
  let fixture: ComponentFixture<DownloadimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
