import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  ngOnInit(): void {
    const scrollers =  document.querySelectorAll(".scroller");
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  addAnimation()
}

function addAnimation(){
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true.toString());
    const scrollerInner = scroller.querySelector('.scroller-inner');
    const scrollerContent = Array.from(scrollerInner!.children)
    scrollerContent.forEach(
      item =>{
        const duplicatedItem = item.cloneNode(true) as Element;
        
        duplicatedItem.setAttribute("aria-hidden", "true")
        scrollerInner?.appendChild(duplicatedItem)
      }
    )
  })
}
  }

}
