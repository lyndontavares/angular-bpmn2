import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-kude',
  templateUrl: './show-kude.component.html',
  styleUrls: ['./show-kude.component.scss']
})
export class ShowKudeComponent implements OnInit, OnDestroy {

  private cdc: any;
  private sub : any;

  constructor(
    private router: ActivatedRoute)
    {}

  ngOnInit() {
  // this.sub = this.router.params.subscribe(params => {
  //        this.openKude( params['cdc'])   
  //  });
  }

  //  openKude(cdc) { 
  //     console.log(cdc);
  //     downloadFile( `/apidfe/v1/kude?cdc=${cdc}` , function(blob) {  
  //         const url: any = URL.createObjectURL(blob);
  //         window.location = url;   
  //     });  
  //     function downloadFile(url, success) {  
  //       const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //       let xhr = new XMLHttpRequest();  
  //       xhr.open('GET', url, true);  
  //       xhr.setRequestHeader('Authorization', `Bearer ${currentUser.token}`);  
  //       xhr.responseType = 'blob'; 
  //       xhr.onreadystatechange = function() {  
  //         if (xhr.readyState == 4) {  
  //             if (success) success(xhr.response); 
  //         } 
  //       };
  //       xhr.send(null);
  //     };
  // }

  ngOnDestroy() {
//     this.sub.unsubscribe();
   }

}
