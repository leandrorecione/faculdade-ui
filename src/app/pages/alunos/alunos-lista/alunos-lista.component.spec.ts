import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlunosListaComponent } from './alunos-lista.component';

describe('AlunosListaComponent', () => {
let component: AlunosListaComponent;
let fixture: ComponentFixture<AlunosListaComponent>;

beforeEach(async(() => {
TestBed.configureTestingModule({
declarations: [ AlunosListaComponent ]
})
.compileComponents();
}));

beforeEach(() => {
fixture = TestBed.createComponent(AlunosListaComponent);
component = fixture.componentInstance;
fixture.detectChanges();
});

it('should create', () => {
expect(component).toBeTruthy();
});
});
