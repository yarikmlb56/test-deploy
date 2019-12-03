import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { coreModuleImports } from '../../core.module';

describe('HeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: coreModuleImports,
    }).compileComponents();
  }));

  it('should create header', () => {
    const fixture: ComponentFixture<HeaderComponent> = TestBed.createComponent(HeaderComponent);
    const app: string = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  });
});
