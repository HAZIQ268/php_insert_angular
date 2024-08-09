import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpAddComponent } from './php-add.component';

describe('PhpAddComponent', () => {
  let component: PhpAddComponent;
  let fixture: ComponentFixture<PhpAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhpAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
