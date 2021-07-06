import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ProfileComponent } from 'src/components/profile/profile.component';

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
    ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
