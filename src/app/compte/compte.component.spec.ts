import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CompteComponent } from './compte.component';

describe('CompteComponent', () => {
  let component: CompteComponent;
  let fixture: ComponentFixture<CompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     imports: [
            RouterTestingModule
          ],
      declarations: [ CompteComponent ]
    })
    .compileComponents();
    });
      it('should create the compte', () => {
        const fixture = TestBed.createComponent(CompteComponent);
        const app = fixture.componentInstance;
        expect(compte).toBeTruthy();
      });

it(`should have as title 'projet-ensemble'`, () => {
 const fixture = TestBed.createComponent(CompteComponent);
    const compte = fixture.componentInstance;
     expect(compte.title).toEqual('projet-ensemble');
  });

      it('should render title', () => {
        const fixture = TestBed.createComponent(CompteComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent).toContain('projet-ensemble app is running!');
  });
});
