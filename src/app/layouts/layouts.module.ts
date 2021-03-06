import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule, NgbTooltipModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { ClickOutsideModule } from 'ng-click-outside';

import { UIModule } from '../shared/ui/ui.module';

import { LayoutComponent } from './layout.component';
import { MenuComponent } from './shared/menu/menu.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LeftsidebarComponent } from './shared/leftsidebar/leftsidebar.component';
import { VerticalComponent } from './vertical/vertical.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [LayoutComponent, MenuComponent, TopbarComponent, FooterComponent, LeftsidebarComponent, FooterComponent, VerticalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCollapseModule,
    ClickOutsideModule,
    UIModule
  ],
  exports: [TopbarComponent, MenuComponent, LeftsidebarComponent, FooterComponent],
  providers: []
})
export class LayoutsModule { }
