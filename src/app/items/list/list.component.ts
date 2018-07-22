import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { HelpersService } from '../../shared/components/helpers.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ListComponent implements OnInit {

  msgs = [];
  products: any;

  constructor(private confirmationService: ConfirmationService, private helper: HelpersService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.products = JSON.parse(localStorage.getItem('products'));
  }

  remove(id) {
    this.confirmationService.confirm({
      message: 'Deseja excluir esse item?',
      header: 'Confirmação',
      icon: 'pi pi-info-circle',
      accept: () => {
        const Allproducts = JSON.parse(localStorage.getItem('products'));

        for (const i in Allproducts) {
          if (Allproducts[i].id === id) {
            Allproducts.splice(i, 1);
          }
        }

        localStorage.setItem('products', JSON.stringify(Allproducts));
        this.loadData();

        this.msgs = this.helper.deleteSuccess();
        setTimeout(() => {
          this.clearViaService();
        }, 2000);
      }
    });
  }

  clearViaService() {
    this.messageService.clear();
  }


}
