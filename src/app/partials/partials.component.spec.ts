import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PartialsComponent } from './partials.component';
import { PartialsModule } from './partials.module';

describe('PartialsComponent', () => {
  let component = PartialsComponent;
  let fixture = ComponentFixture<PartialsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          PartialsModule,
          RouterTestingModule
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
