import { DecodeComponent } from './decode/decode.component';
import { EncodeComponent } from './encode/encode.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "encode"},
  {path: "encode", component: EncodeComponent},
  {path: "decode", component: DecodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
