import { Component, Output, EventEmitter } from '@angular/core';
import { ColorPicker } from './color-picker';

@Component({
  selector: 'note-creator',
  directives: [ColorPicker],
  styles: [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
  `],
  template: `
    <div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">

      <form class="row" (submit)="onCreateNote()">
        <input
          type="text"
          [(ngModel)]="newNote.title"
          name="newNoteTitle"
          placeholder="Title"
          class="col-xs-10 title"
          *ngIf="fullForm"
        >
        <input
          type="text"
          (focus)="toggle(true)"
          [(ngModel)]="newNote.value"
          name="newNoteValue"
          placeholder="Take a note..."
          class="col-xs-10"
        >
        <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
          <div className="col-xs-3">
            <color-picker

              (selected)="onColorSelect($event)"
              [colors]="colors"

            ></color-picker>
          </div>
          <button
            type="submit"
            class="btn-light"
           >
            Done
          </button>
        </div>
      </form>
    </div>
  `

})

export class NoteCreator {
  @Output() createNote = new EventEmitter();
  colors: Array<string> = ['#9dacb9', '#3B7E87', '#9EA97F', '#D1AA7F', '#F8BC86', 'rgb(251, 198, 244)'];
  newNote = {
    title: '',
    value: '',
    color: 'white'
  }
  fullForm: boolean = false;

  onColorSelect(color: string) {
    this.newNote.color = color;
  };

  onCreateNote() {
    const { title, value, color } = this.newNote;

    if (title && value) {
      this.createNote.next({title, value, color});
    }
    this.reset();
  }

  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: 'white'
    };
  }

  toggle(value: boolean) {
    this.fullForm = value;
  }


};
