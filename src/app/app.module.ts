import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from '../components/index/index.component';
import { LegalMentionsComponent } from '../components/legal-mentions/legal-mentions.component';
import { AccessibilityComponent } from '../components/accessibility/accessibility.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { DataPolicyComponent } from '../components/data-policy/data-policy.component';
import { ConnectionFormComponent } from '../components/connection-form/connection-form.component';
import { DocumentManagementComponent } from '../components/document-management/document-management.component';
import { DragndropDirective } from './directives/dragndrop/dragndrop.directive';
import { ProfileComponent } from '../components/profile/profile.component';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { MessagingComponent } from '../components/messaging/messaging.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientListComponent } from '../components/client-list/client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LegalMentionsComponent,
    AccessibilityComponent,
    ContactFormComponent,
    DataPolicyComponent,
    ConnectionFormComponent,
    DocumentManagementComponent,
    DragndropDirective,
    ProfileComponent,
    CalendarComponent,
    MessagingComponent,
    ClientListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
