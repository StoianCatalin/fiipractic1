import { Component, OnInit } from '@angular/core';
import {MyServiceService} from "../my-service.service";
import {MateService} from "../services/mate.service";

@Component({
  selector: 'fii-meniu',
  template: `
<h2>
  Meniu
</h2>
`,
  styleUrls: ['./meniu.component.scss']
})
export class MeniuComponent implements OnInit {

  title: string = "test";

  constructor(private myService: MyServiceService, private mateService: MateService) {}

  ngOnInit() {
    console.log(this.myService.description);
    this.title = this.mateService.toUp(this.title);
  }

}
