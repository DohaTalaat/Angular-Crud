import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletestdComponent } from './deletestd.component';

describe('DeletestdComponent', () => {
  let component: DeletestdComponent;
  let fixture: ComponentFixture<DeletestdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletestdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletestdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
