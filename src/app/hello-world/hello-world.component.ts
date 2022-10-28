import { Component, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  myText:string = "Manii";

  serverName:string = "Apache";

  isDisabled:boolean = true;

  @Input() country = "";

  ngOnInit() {
    setTimeout(()=>{
      console.log('@@@@',this.myactiveRoute.snapshot.params['id']);
    },1500);
  }

  constructor(private myactiveRoute: ActivatedRoute) {

   }

  onTextUpdate(event: any): void {
    this.myText = event.target.value;
    this.isDisabled = false;
  }

  resetText() {
    this.myText = "";
    this.isDisabled = true;
  }

  resetServerText() {
    this.serverName = "Apache";
  }
}
