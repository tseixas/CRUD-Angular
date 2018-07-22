import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { GrowlModule } from 'primeng/growl';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { KeyFilterModule } from 'primeng/keyfilter';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { HelpersService } from '../shared/components/helpers.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ItemsRoutingModule,
    TableModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    GrowlModule,
    InputMaskModule,
    CalendarModule,
    CheckboxModule,
    RadioButtonModule,
    ConfirmDialogModule,
    KeyFilterModule,

    CurrencyMaskModule
  ],
  declarations: [ListComponent, AddComponent],
  providers: [HelpersService]
})
export class ItemsModule { }
