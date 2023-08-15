import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, SearchBoxComponent, SidebarComponent],
  exports: [LoadingSpinnerComponent, SearchBoxComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
