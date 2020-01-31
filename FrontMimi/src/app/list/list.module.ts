import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {

  constructor(public user: UserService) {}

  getUser():any {
    this.user.getUser().subscribe( (resposta) => {
      console.log(resposta);
    })

  }
}
