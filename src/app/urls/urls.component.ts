import { Component } from '@angular/core';
import { UrlServiceService } from '../services/url-service.service';
import { UrlData } from '../types/urldata';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.scss']
})
export class UrlsComponent {
  allUrls: UrlData[] = [];

  constructor(private urlSerive: UrlServiceService) {
    urlSerive.getAllUrls().subscribe((data: any) => {
      this.allUrls = data.urls;
    })
  }
}
