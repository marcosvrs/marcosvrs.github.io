import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'app/services/google-analytics-events.service';

@Component({
  selector: 'app-about',
  host: {
    class: 'container-fluid'
  },
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
    var typer = document.getElementById('typewriter');
    var typewriter = this.setupTypewriter(typer);
    typewriter.type();
  }

  setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition: number = 0,
      tag: any = "",
      writingTag: boolean = false,
      tagOpen: boolean = false,
      typeSpeed: number = 100,
      tempTypeSpeed: number = 0;

    var type = function () {

      if (writingTag === true) {
        tag += HTML[cursorPosition];
      }

      if (HTML[cursorPosition] === "<") {
        tempTypeSpeed = 0;
        if (tagOpen) {
          tagOpen = false;
          writingTag = true;
        } else {
          tag = "";
          tagOpen = true;
          writingTag = true;
          tag += HTML[cursorPosition];
        }
      }
      if (!writingTag && tagOpen) {
        tag.innerHTML += HTML[cursorPosition];
      }
      if (!writingTag && !tagOpen) {
        if (HTML[cursorPosition] === " ") {
          tempTypeSpeed = 0;
        }
        else {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50;
        }
        t.innerHTML += HTML[cursorPosition];
      }
      if (writingTag === true && HTML[cursorPosition] === ">") {
        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
        writingTag = false;
        if (tagOpen) {
          var newSpan = document.createElement("span");
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
