import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import { FooterComponent } from './footer.component';
import { coreModuleImports } from '../../core.module';
import { LogoStubComponent } from '../../../../../testing/logo-stub-component';

describe('FooterComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
        LogoStubComponent
      ],
      imports: coreModuleImports,
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();
  }));

  it('should create footer', () => {
    const fixture: ComponentFixture<FooterComponent> = TestBed.createComponent(FooterComponent);
    const app: string = fixture.debugElement.componentInstance;
    expect(app).toBeDefined();
  });
});
