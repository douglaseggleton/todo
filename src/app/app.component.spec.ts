import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';

import { CardModule } from './card/card.module';
import { CardListModule } from './card-list/card-list.module';
import { AddNewDialogComponent } from './add-new-dialog/add-new-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CardModule,
        CardListModule
      ],
      declarations: [
        AppComponent,
        AddNewDialogComponent
      ],
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Todo');
  // });
});
