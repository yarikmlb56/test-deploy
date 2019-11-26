import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app: string = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });

  it('title should have correct value', () => {
    const component: AppComponent = new AppComponent();

    expect(component.title).toBe('title');
  });
});
