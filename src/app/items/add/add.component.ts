import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { HelpersService } from '../../shared/components/helpers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  units = [];
  msgs = [];
  form: FormGroup;
  pt: any;
  product = 'false';
  unitType = null;
  statusPerishable: boolean;
  dateNow: Date = new Date();
  labelSave = 'Salvar';
  headerPainel = 'Novo';
  defaultDateValidate = null;
  id: number;

  constructor(private fb: FormBuilder, private helper: HelpersService, private route: ActivatedRoute, private router: Router) {
    this.units = [
      { name: 'Selecione', code: '' },
      { name: 'Litro', code: 'lt' },
      { name: 'Quilograma', code: 'Kg' },
      { name: 'Unidade', code: 'un' }
    ];
  }

  ngOnInit() {
    this.form = this.fb.group({
      'name': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(50)])),
      'unit': new FormControl('', Validators.required),
      'quantity': new FormControl('', null),
      'price': new FormControl('', Validators.compose([Validators.required, Validators.max(99999.99), Validators.min(0.50)])),
      'product': new FormControl('', Validators.required),
      'dateValidate': new FormControl('', Validators.required),
      'dateManufacture': new FormControl('', Validators.required)
    }, { validator: this.validatorPerishable });
    this.pt = this.helper.calendar_pt;
    this.form.patchValue({ product: this.product });

    this.route.params.subscribe(params => {
      const id = +params.id;
      this.id = id;

      if (id) {
        this.headerPainel = 'Editar';
        const getProducts = JSON.parse(localStorage.getItem('products'));
        const product = getProducts.filter(function (item) {
          return item.id === id;
        });

        const unitSelected = { 'name': product[0].quantity.name, 'code': product[0].quantity.unit };

        this.defaultDateValidate = new Date(product[0].date_validate);
        const dateValidate = (product[0].date_validate === '' ? '' : new Date(product[0].date_validate));
        const dateManufacture = (product[0].date_manufacture === '' ? '' : new Date(product[0].date_validate));

        this.perishable(product[0].perishable);
        this.form.patchValue({
          id: id,
          name: product[0].name,
          quantity: product[0].quantity.quantity,
          unit: unitSelected,
          price: product[0].price,
          product: product[0].perishable,
          dateValidate: dateValidate,
          dateManufacture: dateManufacture
        });
      }

    });
  }

  validatorPerishable(group: FormGroup) {
    const value = group.get(['product']).value;
    if (value === 'false') {
      group.controls['dateValidate'].setErrors(null);
      group.controls['dateManufacture'].setErrors(null);
    }
  }

  selectUnit() {
    const unitSelected = this.form.value.unit;
    this.unitType = unitSelected.code;
  }

  perishable(status) {
    if (!status) {
      this.form.patchValue({ dateValidate: '' });
      this.form.patchValue({ dateManufacture: '' });
    }
    this.statusPerishable = status;
  }

  commit(obj: Object) {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    products.push(obj);
    localStorage.setItem('products', JSON.stringify(products));
  }

  onSubmit(value) {
    this.msgs = [];
    const id = this.id;
    const obj = {
      id: null,
      name: this.form.value.name,
      quantity: {
        value: this.form.value.quantity,
        name: this.form.value.unit.name,
        unit: this.form.value.unit.code,
        quantity: this.form.value.quantity,
      },
      price: this.form.value.price,
      perishable: this.form.value.product,
      date_validate: this.form.value.dateValidate,
      date_manufacture: this.form.value.dateManufacture,
    };

    if (this.form.value.dateManufacture > this.form.value.dateValidate) {
      this.msgs = this.helper.customMsg('warn', 'Datas inválidas', 'Date de fabricação deve ser menor que Date de validade');
    } else {
      if (id) {
        const getProducts = JSON.parse(localStorage.getItem('products'));
        const product = getProducts.filter(function (item) {
          return item.id === id;
        });

        obj.id = product[0].id;

        //remove item
        for (const i in getProducts) {
          if (getProducts[i].id === id) {
            getProducts.splice(i, 1);
          }
        }

        localStorage.setItem('products', JSON.stringify(getProducts));
        this.commit(obj);
        this.msgs = this.helper.saveSuccess();
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      } else {
        obj.id = Math.floor(Math.random() * 1000000);

        this.commit(obj);
        this.msgs = this.helper.saveSuccess();
        this.form.reset();
        setTimeout(() => {
          this.router.navigate(['']);
        }, 2000);
      }
    }
  }

}
