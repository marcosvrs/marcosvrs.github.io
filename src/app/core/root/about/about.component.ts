import { Component, HostBinding, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'app/services/google-analytics-events.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @HostBinding('class') class = 'container-fluid';

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
    const typer = document.getElementById('typewriter');
    const typewriter = this.setupTypewriter(typer);
    typewriter.type();
  }

  setupTypewriter(t) {
    const HTML = t.innerHTML,
      typeSpeed = 100;

    t.innerHTML = '';

    let cursorPosition = 0,
      tag,
      writingTag = false,
      tagOpen = false,
      tempTypeSpeed = 0;

    const type = function () {

      if (writingTag === true) {
        tag += HTML[cursorPosition];
      }

      if (HTML[cursorPosition] === '<') {
        tempTypeSpeed = 0;
        if (tagOpen) {
          tagOpen = false;
          writingTag = true;
        } else {
          tag = '';
          tagOpen = true;
          writingTag = true;
          tag += HTML[cursorPosition];
        }
      }
      if (!writingTag && tagOpen) {
        tag.innerHTML += HTML[cursorPosition];
      }
      if (!writingTag && !tagOpen) {
        if (HTML[cursorPosition] === ' ') {
          tempTypeSpeed = 0;
        } else {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50;
        }
        t.innerHTML += HTML[cursorPosition];
      }
      if (writingTag === true && HTML[cursorPosition] === '>') {
        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
        writingTag = false;
        if (tagOpen) {
          const newSpan = document.createElement('span');
          t.appendChild(newSpan);
          newSpan.innerHTML = tag;
          tag = newSpan.firstChild;
        }
      }

      cursorPosition++;
      if (cursorPosition < HTML.length - 1) {
        setTimeout(type, tempTypeSpeed);
      }

    };

    return {
      type: type
    };
  }

  onClick(category: string, action: string, label: string, value?: any) {
    this.googleAnalyticsService.emitEvent(category, action, label, value);
  }

}
