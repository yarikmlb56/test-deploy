import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import { InputComponent } from './input.component';
import { sharedModuleImports } from '../../shared.module';

describe('InputComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputComponent,
      ],
      imports: sharedModuleImports,
    }).compileComponents();
  }));

  it('should create input', () => {
    const fixture: ComponentFixture<InputComponent> = TestBed.createComponent(InputComponent);
    const app: string = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  });
});
