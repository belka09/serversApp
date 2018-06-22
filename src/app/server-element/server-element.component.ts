import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {

 // tslint:disable-next-line:no-input-rename
 @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck() {
    // tslint:disable-next-line:max-line-length
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy called');
  }

}
