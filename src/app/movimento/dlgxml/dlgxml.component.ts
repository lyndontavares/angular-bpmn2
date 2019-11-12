import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dlgxml',
  templateUrl: './dlgxml.component.html',
  styleUrls: ['./dlgxml.component.scss']
})
export class DlgxmlComponent implements OnInit, AfterViewInit {
  
  mostrar=false;
  @ViewChild('texto')
  public texto: ElementRef;

  constructor(
    public thisDialogRef: MatDialogRef<DlgxmlComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.mostrar=true
      //this.toTop()
    }, 800 );
  }

  toTop(){
    this.texto.nativeElement.scrollTop=0
  }

  onClose() {
    this.thisDialogRef.close();
  }
} 