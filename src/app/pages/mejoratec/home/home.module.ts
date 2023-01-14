import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer/footer.component';
import { ContentsComponent } from './contents/contents.component';
import {DockModule} from "primeng/dock";
import {ImageModule} from "primeng/image";
import {SidebarModule} from "primeng/sidebar";
import {InplaceModule} from "primeng/inplace";
import {DialogModule} from "primeng/dialog";
import {RippleModule} from "primeng/ripple";


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContentsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DockModule,
    ImageModule,
    SidebarModule,
    InplaceModule,
    DialogModule,
    RippleModule
  ]
})
export class HomeModule { }
