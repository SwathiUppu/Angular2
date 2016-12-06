import { Directive, ElementRef, Input, Renderer } from '@angular/core';


@Directive({ selector: 'testDirective',
             template: '<p>highlight</p>'

 })

export class TestDirective {
	constructor(el: ElementRef, renderer: Renderer){
		renderer.setElementStyle(el.nativeElement, 'background', 'yellow');
	}
	
}