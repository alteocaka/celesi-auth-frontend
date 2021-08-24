import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaysCheckinComponent } from './containers/days-checkin/days-checkin.component';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [DaysCheckinComponent],
  imports: [
    CommonModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
  ],
  exports: [],
})
export class DaysCheckinModule {}
