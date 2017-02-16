import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public feeds: Array<string>;
  private url: string = "https://www.reddit.com/new.json";  

  constructor(public navCtrl: NavController, public http: Http, public loadingController:LoadingController) {
    
    this.fetchContent();

  }

 fetchContent ():void {
    let loading = this.loadingController.create({
      content: 'Carregando a bagaça!...'
    });
 
    loading.present();
 
      this.http.get(this.url).map(res => res.json())
      .subscribe(data => {
        this.feeds = data.data.children;
        loading.dismiss();
        //console.log(this.feeds);
      }); 
 }

   itemSelected (url: string):void {
    // let browser = new InAppBrowser(url, '_system');
  }

}
