import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import { NavigationComponent } from './navigation.component';
import { coreModuleImports } from '../../core.module';
import { LogoStubComponent } from '../../../../../testing/logo-stub-component';

describe('NavigationComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationComponent,
        LogoStubComponent
      ],
      imports: coreModuleImports,
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create navigation', () => {
    const fixture: ComponentFixture<NavigationComponent> = TestBed.createComponent(NavigationComponent);
    const app: string = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  });
});
