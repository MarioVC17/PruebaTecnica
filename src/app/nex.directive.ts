import { Directive , ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appNex]'
})
export class NexDirective {

  constructor(private element:ElementRef) { }

  @HostListener('click')
   nextFunc(){
    var elm = this.element.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName("item");
    elm.append(item[0]);
   }

}
