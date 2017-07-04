import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'; //https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http

@Component({
 	selector: 'page-home',
  	templateUrl: 'home.html'
})

export class HomePage {
    data:any = {};
    botones: any[];

    constructor(public navCtrl: NavController, public http: Http) {
        this.data.username = '';
        this.data.response = '';

        this.botones = [
          {nombre:"boton 1", estado:0, checked:false},
           {nombre:"boton 2", estado:0, checked:false},
            {nombre:"boton 3", estado:0, checked:false},
             {nombre:"boton 4", estado:0, checked:false},
              {nombre:"boton 5", estado:0, checked:false},
               {nombre:"boton 6", estado:0, checked:false},
                {nombre:"boton 7", estado:0, checked:false},
                 {nombre:"boton 8", estado:0, checked:false}
        ]

       
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

    this.http.post("http://192.168.100.11/status1=1", postParams)
    .subscribe(data=>{
      if(data.status==0){
        console.log("Apagado");
        return true
      }if(data.status==1){
        console.log("Prendido");
        return false
      }else{
        console.log(data); 
      }
      
    }, error =>{
      console.log(error);
    });
  }

  /*
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
*/

    apagarled1(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status1=1";

    this.http.post("http://192.168.100.11/status1=0", postParams)
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

    this.http.post("http://192.168.100.11/status2=1", postParams)
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

    this.http.post("http://192.168.100.11/status2=0", postParams)
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

    this.http.post("http://192.168.100.11/status3=1", postParams)
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

    this.http.post("http://192.168.100.11/status3=0", postParams)
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

    this.http.post("http://192.168.100.11/status4=1", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
    }

    apagarled5(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status5=0";

    this.http.post("http://192.168.100.11/status5=0", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
}
    prenderled5(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status5=1";

    this.http.post("http://192.168.100.11/status5=1", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
    }

    apagarled6(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status6=0";

    this.http.post("http://192.168.100.11/status6=0", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
}
    prenderled6(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status6=1";

    this.http.post("http://192.168.100.11/status6=1", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
    }

    apagarled7(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status7=0";

    this.http.post("http://192.168.100.11/status7=0", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
}
    prenderled7(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status7=1";

    this.http.post("http://192.168.100.11/status7=1", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
    }

    apagarled8(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status8=0";

    this.http.post("http://192.168.100.11/status8=0", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
}
    prenderled8(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status8=1";

    this.http.post("http://192.168.100.11/status8=1", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
    }

    apagarled9(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status9=0";

    this.http.post("http://192.168.100.11/status9=0", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
}
    prenderled9(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status9=1";

    this.http.post("http://192.168.100.11/status9=1", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
    }

    apagarled10(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status10=0";

    this.http.post("http://192.168.100.11/status10=0", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
}
    prenderled10(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    let postParams = "/status10=1";

    this.http.post("http://192.168.100.11/status10=1", postParams)
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

    this.http.post("http://192.168.100.11/status4=0", postParams)
    .subscribe(data=>{
      console.log(data); 
    }, error =>{
      console.log(error);
    });
}
}
