import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanStackCrudComponent } from './mean-stack-crud.component';

describe('MeanStackCrudComponent', () => {
  let component: MeanStackCrudComponent;
  let fixture: ComponentFixture<MeanStackCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeanStackCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanStackCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
