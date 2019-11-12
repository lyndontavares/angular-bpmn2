import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  BpmnModeler, InjectionNames, ElementTemplates, 
          CamundaPropertiesProvider, OriginalPaletteProvider, 
          PropertiesPanelModule, CamundaModdleDescriptor } from '../bpmn-js/bpmn-js';
 
@Component({
  selector: 'app-alerts',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit{
 
  modeler;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.modeler = new BpmnModeler({
      container: '#canvas',
      width: '100%',  // 100/vw
      height: '70vh', // 100vh 
      additionalModules: [
        {[InjectionNames.elementTemplates]: ['type', ElementTemplates.elementTemplates[1]]},
        {[InjectionNames.propertiesProvider]: ['type', CamundaPropertiesProvider.propertiesProvider[1]]},

        {[InjectionNames.originalPaletteProvider]: ['type', OriginalPaletteProvider]},

        PropertiesPanelModule
      ],
      propertiesPanel: {
        parent: '#properties'
      },
      moddleExtensions: {
        camunda: CamundaModdleDescriptor
      }
    });
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  load(): void {
    const url = '../assets/bpmn/initial.bpmn';
    this.http.get(url, {
      headers: {observe: 'response'}, responseType: 'text'
    }).subscribe(
      (x: any) => {
        console.log('Fetched XML, now importing: ', x);
        this.modeler.importXML(x, this.handleError);
      },
      this.handleError
    );
  }

  save(): void {
    this.modeler.saveXML((err: any, xml: any) => console.log('Result of saving XML: ', err, xml));
  }

} 