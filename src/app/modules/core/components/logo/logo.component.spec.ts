import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LogoComponent
      ],
    }).compileComponents();
  }));

  it('should create logo', () => {
    const fixture: ComponentFixture<LogoComponent> = TestBed.createComponent(LogoComponent);
    const app: string = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  });
});
