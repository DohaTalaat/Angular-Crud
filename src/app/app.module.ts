import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactPipe } from './fact.pipe';
import { StdlistComponent } from './student/stdlist/stdlist.component';
import { AddstdComponent } from './student/addstd/addstd.component';
import { FormsModule } from '@angular/forms';
import { DeletestdComponent } from './student/deletestd/deletestd.component';
import { StdeditComponent } from './student/stdedit/stdedit.component';

@NgModule({
  declarations: [
    AppComponent,
    FactPipe,
    StdlistComponent,
    AddstdComponent,
    DeletestdComponent,
    StdeditComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
