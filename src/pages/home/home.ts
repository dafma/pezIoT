import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'; //https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http

@Component({
 	selector: 'page-home',
  	templateUrl: 'home.html'
})

export class HomePage {
    data:any = {};

    constructor(public navCtrl: NavController, public http: Http) {
        this.data.username = '';
        this.data.response = '';

       
 	}

	 submit() {
        var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
        var myData = JSON.stringify({username: this.data.username});
        
        this.http.post(link, myData)
        .subscribe(data => {
        	this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        }, error => {
            console.log("Oooops!");
        });
  }

    prenderled1(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status1=1";

    this.http.post("http://192.168.100.9/status1=1", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
    }

    apagarled1(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status1=1";

    this.http.post("http://192.168.100.9/status1=0", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
}
    prenderled2(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status2=1";

    this.http.post("http://192.168.100.9/status2=1", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
    }

    apagarled2(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status2=0";

    this.http.post("http://192.168.100.9/status2=0", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
}
    prenderled3(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status3=1";

    this.http.post("http://192.168.100.9/status3=1", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
    }

    apagarled3(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status3=1";

    this.http.post("http://192.168.100.9/status3=0", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
}
    prenderled4(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status4=1";

    this.http.post("http://192.168.100.9/status4=1", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
    }

    apagarled4(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status4=0";

    this.http.post("http://192.168.100.9/status4=0", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
}
}
