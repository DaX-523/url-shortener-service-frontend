import { Component } from '@angular/core';
import { UrlServiceService } from 'src/app/services/url-service.service';
import { UrlData } from 'src/app/types/urldata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  inputurl!: string;
  urlData!: UrlData;
  filledUrlField: boolean = true;
  urlRegex: RegExp = /^(https?:\/\/)([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;


  constructor(private urlService: UrlServiceService) {

  }


  onSubmit() {
    console.log(this.filledUrlField);

    if (!this.inputurl || (this.inputurl && !this.urlRegex.test(this.inputurl))) {

      this.filledUrlField = false;
      return;
    }
    this.filledUrlField = true;

    this.urlService.postUrl({ url: this.inputurl })
      .subscribe((data: any) => {
        this.urlData = data.url;
      })
  }
}
