import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasListComponent } from './recetas-list.component';

describe('RecetasListComponent', () => {
  let component: RecetasListComponent;
  let fixture: ComponentFixture<RecetasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetasListComponent]
    });
    fixture = TestBed.createComponent(RecetasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
