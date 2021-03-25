import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { UserValidationComponent } from './user-validation/user-validation.component';

const components = [UserValidationComponent, UserAvatarComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  exports: [...components, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class ComponentsModule {}