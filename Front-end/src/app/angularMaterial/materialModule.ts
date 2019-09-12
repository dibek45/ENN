import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import * as Material from '@angular/material';
import { MatTabsModule } from '@angular/material';




@NgModule({
  imports: [
    Material. MatGridListModule,
    BrowserAnimationsModule,
    Material.MatSelectModule,
    CommonModule,
    Material.MatButtonModule,
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatIconModule,
    Material.MatToolbarModule,
    Material.MatButtonModule,
    Material.MatSidenavModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatCardModule,
    Material.MatTooltipModule,
    Material.MatDialogModule,
    Material.MatTabsModule,
    Material.MatChipsModule,
    Material.MatBadgeModule,
    Material.MatMenuModule,
    Material.MatCardModule
  ],

  exports: [
    Material.MatGridListModule ,
    BrowserAnimationsModule,
    Material.MatSelectModule,
    Material.MatButtonModule, 
    Material.MatToolbarModule,
    MatFormFieldModule,
    Material.MatInputModule,
    Material.MatIconModule,
    Material.MatToolbarModule,
    Material.MatButtonModule,
    Material.MatSidenavModule,
    Material.MatIconModule,
    Material.MatListModule,
    Material.MatTableModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatCardModule,
    Material.MatTooltipModule,
    Material.MatDialogModule,
    MatTabsModule,
    Material.MatChipsModule,
    Material.MatBadgeModule,
    Material.MatMenuModule,
    Material.MatCardModule
    ],
})
export class MaterialModule { }