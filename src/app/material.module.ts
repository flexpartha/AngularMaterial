import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatProgressSpinnerModule,MatCardModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports:[MatButtonModule,MatToolbarModule,MatIconModule,MatInputModule,MatProgressSpinnerModule,MatCardModule],
  declarations: []
})
export class MaterialModule { }
