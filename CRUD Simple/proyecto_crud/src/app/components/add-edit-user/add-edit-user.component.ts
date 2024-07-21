import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      rut: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      cumple: ['', Validators.required],
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar ';
      this.getUser(this.id);
    }
  }

  getUser(id: number) {
    this.loading = true;
    this._userService.getUser(id).subscribe((data: User) => {
      console.log(data)
      this.loading = false;
      this.form.setValue({
        rut: data.rut,
        name: data.name,
        email: data.email,
        cumple: data.cumple,
      })
    });
  };

  addUsers() {
    console.log('this id', this.id)
    if (this.id) {
      // si viene el id como param en url es una edicion porque el usuario ya existe
      const user: User = {
        id: this.id,
        rut: this.form.value.rut,
        name: this.form.value.name,
        email: this.form.value.email,
        cumple: this.form.value.cumple,
      }
      this.loading = true;
      this._userService.updateUser(user).subscribe(() => {
        this.loading = false;
        this.router.navigate(['/']);
      })
    } else {
      const user: User = {
        id: this.form.value.id,
        rut: this.form.value.rut,
        name: this.form.value.name,
        email: this.form.value.email,
        cumple: this.form.value.cumple,
      }
      this.loading = true;
      this._userService.saveUser(user).subscribe(() => {
        this.loading = false;
        this.router.navigate(['/']);
      })

    }


  };

}


