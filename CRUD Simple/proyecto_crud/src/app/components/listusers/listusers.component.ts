import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  listUsers: User[] = []
  loading: boolean = false;
  constructor(private _userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListUsers();
  }
  getListUsers() {
    this.loading = true;
    this._userService.getListUsers().subscribe((data) => {
      this.listUsers = data;
      this.loading = false;
    })
  }

  deleteUser(id: number) {
    this.loading = true;
    this._userService.deleteUser(id).subscribe(() => {
      this.getListUsers();
      this.toastr.warning('El Usuario fue eliminado con exito', 'Usuario Eliminado');
    })
  }

}