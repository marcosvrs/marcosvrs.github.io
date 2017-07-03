import { Directive, ElementRef, Renderer2, OnInit, isDevMode } from '@angular/core';

@Directive({
  selector: '[loader]'
})
export class LoaderDirective implements OnInit {
  /**
   * Directive for change the element when the media is loading.
   * If it has a media to be loaded then put the loading class
   * while the media is loading. Then listen to when the media
   * is already loaded, clear the loading class from the element.
   * 
   * Example to use:
   *   `<img src="path" loader>
   *    <div>
   *      <video src="path" loader>
   *    </div>
   *    <div>
   *      <video loader>
   *        <source src="path">
   *      </video>
   *    </div>`
   * 
   *   Or any tag with a background image (style or css):
   *   `<div style="background-image: url('path');" loader>`
   */

  /** The class to be loaded and while the media is loading */
  loadClass: string = 'fa fa-spinner fa-pulse fa-3x fa-fw';

  /** The class to be loaded when the media get a error to load */
  errorClass: string = 'fa fa-times fa-3x';

  /** If you don't want to show the error element, change this var to false */
  private error: boolean = true;

  constructor(private el: ElementRef, private re: Renderer2) { }

  ngOnInit() {
    let elem = this.el.nativeElement;

    /** Check if it's a HTML Element */
    if (elem instanceof HTMLElement) {

      /** Check if it's a Image Element */
      if (elem instanceof HTMLImageElement) {

        /** Add the loading element as a child */
        this.re.appendChild(elem, this.createElement('i', this.loadClass));

        /** Create another element to load the image in background */
        let img = new Image();

        /** Listen when the image is already loaded */
        img.addEventListener('load', () => {

          if (isDevMode()) {
            console.log(elem.lastChild);
          }
          /**
           * Then remove the loading child element and
           * set the originals source path and alt attributtes again
           */
          this.re.removeChild(elem, elem.lastChild);
          elem.src = img.src;
          elem.alt = img.alt;
        }, true);

        if (this.error) {

          /** Listen when the image failed to load */
          img.addEventListener('error', () => {

            /**
             * Then remove the loading class and
             * set the error class, the originals source path
             * and the alt attributte
             */
            this.re.removeChild(elem, elem.lastChild);
            this.re.appendChild(elem, this.createElement('i', this.errorClass));
            elem.src = img.src;
            elem.alt = img.alt;
          }, true);
        }

        /** 
         * Then clear the source path and the alt attribute 
         * and include it in other element while it's loading
         */
        img.src = elem.src;
        img.alt = elem.alt;
        elem.src = elem.alt = '';

        /** Check if it's a Video element */
        // } else if (elem instanceof HTMLMediaElement) {

        //   /** Check if the parent element is a Div */
        //   if (elem.parentElement instanceof HTMLDivElement) {

        //     /** Then add the loading element as a child of the parent element */
        //     this.re.appendChild(elem.parentElement, this.createElement('i', this.loadClass));
        //   }

        //   /** Check if the video element has a src attribute */
        //   if (elem.src) {

        //     /** Create another element to load the video in background */
        //     let media: HTMLMediaElement = <HTMLMediaElement>document.createElement(elem.tagName);

        //     /** Listen when the video is already loaded */
        //     media.addEventListener('loadeddata', () => {

        //       /**
        //        * Then remove the loading element and
        //        * set the original source path again
        //        */
        //       this.re.removeChild(elem, elem.lastChild);
        //       if (elem.parentElement instanceof HTMLDivElement) {
        //         this.re.removeChild(elem.parentElement, elem.parentElement.lastChild);
        //       }
        //       elem.src = media.src;
        //     }, true);

        //     if (this.error) {

        //       /** Listen when the video failed to load */
        //       media.addEventListener('error', () => {

        //         /**
        //          * Then remove the loading element and
        //          * add the error element and
        //          * the original source path again
        //          */
        //         this.re.removeChild(elem, elem.lastChild);
        //         if (elem.parentElement instanceof HTMLDivElement) {
        //           this.re.removeChild(elem.parentElement, elem.parentElement.lastChild);
        //           this.re.appendChild(elem.parentElement, this.createElement('i', this.errorClass));
        //         }
        //         elem.src = media.src;
        //       }, true);
        //     }

        //     /**
        //      * Then clear the source path and
        //      * include it in other element while it's loading
        //      */
        //     media.src = elem.src;
        //     elem.src = '';

        //     /**
        //      * Otherwise check if the video element has childrens element.
        //      * Because it can have the source element.
        //      */
        //   } else if (elem.children) {

        //     /** Then iterate over the childrens elements of the video element */
        //     Array.from(elem.children).forEach((item) => {

        //       /** Check if haves the source element */
        //       if (item instanceof HTMLSourceElement) {

        //         /** Create another element to load the video in background */
        //         let media = this.createElement(elem.tagName);

        //         /** Listen when the video is already loaded */
        //         media.addEventListener('loadeddata', () => {

        //           /**
        //            * Then remove the loading element and
        //            * set the original source path again
        //            */
        //           this.re.removeChild(elem, elem.lastChild);
        //           if (elem.parentElement instanceof HTMLDivElement) {
        //             this.re.removeChild(elem.parentElement, elem.parentElement.lastChild);
        //           }
        //           item.src = media.src;
        //         }, true);

        //         if (this.error) {
        //           /** Listen when the video failed to load */
        //           media.addEventListener('error', () => {

        //             /**
        //              * Then remove the loading class and
        //              * set the error class and
        //              * the original source path again
        //              */
        //             this.re.removeChild(elem, elem.lastChild);
        //             if (elem.parentElement instanceof HTMLDivElement) {
        //               this.re.removeChild(elem.parentElement, elem.parentElement.lastChild);
        //               this.re.appendChild(elem.parentElement, this.createElement('i', this.errorClass));
        //             }
        //             item.src = media.src;
        //           }, true);
        //         }
        //         /**
        //          * Then clear the source path and
        //          * include it in other element while it's loading
        //          */
        //         media.src = item.src;
        //       }
        //     });
        //   }

        /**
         * Otherwise check if it has a background image
         */
      } else if (window.getComputedStyle(elem).backgroundImage) {

        /** Create another element to load the image in background */
        let img = new Image();

        /** Get the css style of the element */
        let cssStyle = window.getComputedStyle(elem);

        /** 
         * override min-height to 0 to hide the element
         * @custom 
         */
        this.re.setStyle(elem, 'min-height', '0');

        /** Set text-align center */
        this.re.setStyle(elem, 'text-align', 'center');

        /** Add the loading element as a child */
        this.re.appendChild(elem, this.createElement('i', this.loadClass));

        /** Listen when the image is already loaded */
        img.addEventListener('load', () => {

          /**
           * Then remove the loading class and clear style
           * @custom
           */
          this.re.removeStyle(elem, 'min-height');
          this.re.removeStyle(elem, 'text-align');
          this.re.removeChild(elem, elem.lastChild);
        }, true);

        if (this.error) {
          /** Listen when the image failed to load */
          img.addEventListener('error', () => {

            /**
             * Then remove the loading class and
             * set the error class
             */
            this.re.removeChild(elem, elem.lastChild);
            this.re.appendChild(elem, this.createElement('i', this.errorClass));
          }, true);
        }
        /** 
         * Get the path of the background image and
         * sets to the auxiliary image element
         */
        if (isDevMode()) {
          console.log(cssStyle.backgroundImage);
        }
        img.src = cssStyle.backgroundImage.replace('url(', '').replace(/["'()]/g, "");
      }
    }
  }

  private createElement(tagName: string, classes?: string): any {
    var element = document.createElement('i');
    classes.split(' ').forEach((str) => this.re.addClass(element, str));
    return element;
  }
}