import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibilityComponent } from 'src/components/accessibility/accessibility.component';
import { CalendarComponent } from 'src/components/calendar/calendar.component';
import { ContactFormComponent } from 'src/components/contact-form/contact-form.component';
import { DataPolicyComponent } from 'src/components/data-policy/data-policy.component';
import { DocumentManagementComponent } from 'src/components/document-management/document-management.component';
import { IndexComponent } from 'src/components/index/index.component';
import { LegalMentionsComponent } from 'src/components/legal-mentions/legal-mentions.component';
import { MessagingComponent } from 'src/components/messaging/messaging.component';
import { ProfileComponent } from 'src/components/profile/profile.component';
import { ConnectionFormComponent } from 'src/components/connection-form/connection-form.component';
const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'accessbility', component: AccessibilityComponent},
  { path: 'contact-form', component: ContactFormComponent},
  { path: 'data-policy', component: DataPolicyComponent},
  { path: 'legal-mentions', component: LegalMentionsComponent},
  { path: 'connection-form', component: ConnectionFormComponent},
  { path: 'document-management', component: DocumentManagementComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'messaging', component: MessagingComponent},
  { path: 'calendar', component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
