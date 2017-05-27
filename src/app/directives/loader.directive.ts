import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

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

  /** The class to be loaded and
   * the element to be created
   * while the media is loading */
  loadClass: string = 'fa fa-spinner fa-pulse fa-3x fa-fw';
  loadI: HTMLElement = document.createElement('i');

  /** If you don't want to show the error element, change this var to false */
  private error: boolean = true;

  /** The class to be loaded and
   * the element to be created
   * when the media get a error to load */
  errorClass: string = 'fa fa-times fa-3x fa-fw';
  errorI: HTMLElement = document.createElement('i');

  constructor(private el: ElementRef, private re: Renderer2) { }

  ngOnInit() {
    this.loadClass.split(' ').forEach((element) => this.re.addClass(this.loadI, element));
    this.errorClass.split(' ').forEach((element) => this.re.addClass(this.errorI, element));

    let el = this.el.nativeElement;

    /** Check if it's a HTML Element */
    if (el instanceof HTMLElement) {

      /** Check if it's a Image Element */
      if (el instanceof HTMLImageElement) {

        /** Add the loading element as a child */
        this.re.appendChild(el, this.loadI);

        /** Create another element to load the image in background */
        let img = new Image();

        /** Listen when the image is already loaded */
        img.addEventListener('load', () => {

          /**
           * Then remove the loading child element and
           * set the originals source path and alt attributtes again
           */
          this.re.removeChild(el, this.loadI);
          el.src = img.src;
          el.alt = img.alt;
        }, true);

        if (this.error) {

          /** Listen when the image failed to load */
          img.addEventListener('error', () => {

            /**
             * Then remove the loading class and
             * set the error class, the originals source path
             * and the alt attributte
             */
            this.re.removeChild(el, this.loadI);
            this.re.appendChild(el, this.errorI);
            el.src = img.src;
            el.alt = img.alt;
          }, true);
        }

        /** 
         * Then clear the source path and the alt attribute 
         * and include it in other element while it's loading
         */
        img.src = el.src;
        img.alt = el.alt;
        el.src = el.alt = '';

        /** Check if it's a Video element */
      } else if (el instanceof HTMLMediaElement) {

        /** Check if the parent element is a Div */
        if (el.parentElement instanceof HTMLDivElement) {

          /** Then add the loading element as a child of the parent element */
          this.re.appendChild(el.parentElement, this.loadI);
        }

        /** Check if the video element has a src attribute */
        if (el.src) {

          /** Create another element to load the video in background */
          let media: HTMLMediaElement = <HTMLMediaElement>document.createElement(el.tagName);

          /** Listen when the video is already loaded */
          media.addEventListener('loadeddata', () => {

            /**
             * Then remove the loading element and
             * set the original source path again
             */
            this.re.removeChild(el, this.loadI);
            if (el.parentElement instanceof HTMLDivElement) {
              this.re.removeChild(el.parentElement, this.loadI);
            }
            el.src = media.src;
          }, true);

          if (this.error) {

            /** Listen when the video failed to load */
            media.addEventListener('error', () => {

              /**
               * Then remove the loading element and
               * add the error element and
               * the original source path again
               */
              this.re.removeChild(el, this.loadI);
              //this.re.appendChild(el, this.errorClass);
              if (el.parentElement instanceof HTMLDivElement) {
                this.re.removeChild(el.parentElement, this.loadI);
                this.re.appendChild(el.parentElement, this.errorClass);
              }
              el.src = media.src;
            }, true);
          }

          /**
           * Then clear the source path and
           * include it in other element while it's loading
           */
          media.src = el.src;
          el.src = '';

          /**
           * Otherwise check if the video element has childrens element.
           * Because it can have the source element.
           */
        } else if (el.children) {

          /** Then iterate over the childrens elements of the video element */
          Array.from(el.children).forEach((item) => {

            /** Check if haves the source element */
            if (item instanceof HTMLSourceElement) {

              /** Create another element to load the video in background */
              let media = document.createElement(el.tagName);

              /** Listen when the video is already loaded */
              media.addEventListener('loadeddata', () => {

                /**
                 * Then remove the loading element and
                 * set the original source path again
                 */
                this.re.removeChild(el, this.loadI);
                if (el.parentElement instanceof HTMLDivElement) {
                  this.re.removeChild(el.parentElement, this.loadI);
                }
                item.src = media.src;
              }, true);

              if (this.error) {
                /** Listen when the video failed to load */
                media.addEventListener('error', () => {

                  /**
                   * Then remove the loading class and
                   * set the error class and
                   * the original source path again
                   */
                  //this.re.removeClass(el, this.loadClass);
                  this.re.removeChild(el, this.loadI);
                  //this.re.appendChild(el, this.errorI);
                  if (el.parentElement instanceof HTMLDivElement) {
                    this.re.removeChild(el.parentElement, this.loadI);
                    this.re.appendChild(el.parentElement, this.errorClass);
                  }
                  item.src = media.src;
                }, true);
              }
              /**
               * Then clear the source path and
               * include it in other element while it's loading
               */
              media.src = item.src;
            }
          });
        }

        /**
         * Otherwise check if it has a background image
         */
      } else if (window.getComputedStyle(el).backgroundImage) {

        /** Create another element to load the image in background */
        let img = new Image();

        /** Get the css style of the element */
        let cssStyle = window.getComputedStyle(el);

        /** @custom override min-height to 0 to hide the element */
        this.re.setStyle(el, 'min-height', '0');

        /** Listen when the image is already loaded */
        img.addEventListener('load', () => {

          /** @custom Then remove the loading class and clear style*/
          this.re.removeStyle(el, 'min-height');
          this.re.removeChild(el, this.loadI);
        }, true);

        if (this.error) {
          /** Listen when the image failed to load */
          img.addEventListener('error', () => {

            /**
             * Then remove the loading class and
             * set the error class
             */
            //this.re.removeClass(el, this.loadClass);
            this.re.removeChild(el, this.loadI);
            this.re.appendChild(el, this.errorI);
          }, true);
        }
        /** 
         * Get the path of the background image and
         * sets to the auxiliary image element
         */
        img.src = cssStyle.backgroundImage.slice(5, -2);
      }
    }
  }
}