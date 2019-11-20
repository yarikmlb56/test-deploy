import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { appModuleImports } from './app.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        appModuleImports
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: string = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  });

  it('should have other components', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: HTMLElement = fixture.debugElement.nativeElement;
    expect(app.querySelector('app-header')).toBeTruthy();
    expect(app.querySelector('app-navigation')).toBeTruthy();
    expect(app.querySelector('app-footer')).toBeTruthy();
  });
});
