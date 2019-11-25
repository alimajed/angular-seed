import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  exports: [
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    FormsModule,
  ]
})
export class SharedModule { }
