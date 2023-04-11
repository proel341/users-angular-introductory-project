import { Component, Input } from '@angular/core';
import { Recource } from './Recource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent {

  recource? : Recource;
  defaultRes : Recource = {
    id: 0,
    name: '',
    year: 0,
    color: '',
    pantone_value: ''
  }

  resource: Recource = this.defaultRes;

  ngOnInit(){
    this.recource = (!this.recource) ? this.defaultRes : this.recource
  }

  @Input() set setRes(res : Recource | null){
    if (res) this.recource = res; 
  }

  resView(res: Recource) : void{
    console.log(res);
  }
}
