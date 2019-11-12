import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { MatIconRegistry, MatSnackBar } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

class Resumo {
  aprovados:number;
  cancelados:number;
  pendientes:number;
}

class Serie {
    name: string;
    value: Resumo;
}

@Component({
  selector: 'types-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
})
export class BarComponent implements OnInit{
  
  maximo:any;
  dadosHoje:any;
  dadosOntem:any;
  series: Array<Serie>=null;
  dataSinc: Date;
  triggerState: boolean = false;
  title='';

  ngOnInit(): void {
    this.graficoHoje();
  }

  // Chart config
  config: any = {
    toolbox: {
      showTitle: true,
      top: 0,
      right: '30px',
      show: true,
      feature: {
        dataView: {
          title: 'View Data',
          lang: ['Data View', 'Turn Off', 'Refresh'],
        },
        dataZoom: { title: { zoom: 'Zoom', back: 'Back' } },
        magicType: {
          //type: ['line', 'bar', 'stack', 'tiled'],
          type: ['line', 'bar', 'stack', 'tiled'],
          title: { line: 'Line', bar: 'Bar', stack: 'Stack', tiled: 'Tiled' },
        },
        restore: {title: 'Restore'},
      },
    },
    xAxis: [
      {
        data: [
          'Pendientes',
          'Aprobados',
          'Cancelados'
        ],
      },
      {
        show: true,
        type: 'time',
        boundaryGap: false,
      },
    ],
    yAxis: [
      {
        show: true,
        type: 'value',
        axisLabel: { inside: false },
        max: 300,
      },
    ],
    series: [
      {
        type: 'bar',
        itemStyle: {
          opacity: 0.95,
          color: '#007373',
        },
        markPoint: {
          data: [{ name: 'test', value: 130, xAxis: 1, yAxis: 130 }],
        },
        name: 'Ontem',
        data: [150, 130, 150],
      },
      {
        type: 'bar',
        itemStyle: {
          opacity: 0.95,
          color: '#1B98C6',
        },
        markPoint: {
          data: [{ name: 'Target', value: 80, xAxis: 1, yAxis: 121 }],
        },
        markLine: {
          data: [{ name: 'Average', value: 30, xAxis: 1, yAxis: 30 }],
          symbol: 'circle',
        },
        name: 'Hoy',
        data: [80, 122, 80],
      },
    ],
    tooltip: {
      show: true,
      trigger: 'item',
      showContent: true,
    },
  };


  constructor(
    public media: TdMediaService,
    private http: HttpClient, 
    private snackBarService: MatSnackBar,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer) {
  }

  graficoHoje() {
    this.title='Movimientos de Hoy';
    this.triggerState = !this.triggerState;
    this.http.get<Array<Serie>>('/apidfe/documentos/info/hoy')
      .pipe(
      )
      .subscribe(
      data => {
        //console.log(data);
        this.series = data as Array<Serie>;
        this.dataSinc = new Date();
        this.getDadosHoje();
        this.getDadosOntem();
      },
      _ => {
        this.snackBarService.open('No fue posible accesar informaciones del movimiento de documentos.');
      }
    );
  }

  graficoMes() {
    this.title='Movimientos del mes actual';
    this.triggerState = !this.triggerState;
    this.http.get<Array<Serie>>('/apidfe/documentos/info/mes')
      .pipe(
      )
      .subscribe(
      data => {
        //console.log(data);
        this.series = data as Array<Serie>;
        this.dataSinc = new Date();
        this.getDadosHoje();
        this.getDadosOntem();
      },
      response => {
        this.snackBarService.open('No fue posible accesar informaciones del movimiento de documentos.');
      }
    );
  }

  graficoAno() {
    this.title='Movimientos del año actual';
    this.triggerState = !this.triggerState;
    this.http.get<Array<Serie>>('/apidfe/documentos/info/ano')
      .pipe(
      )
      .subscribe(
      data => {
        //console.log(data);
        this.series = data as Array<Serie>;
        this.dataSinc = new Date();
        this.getDadosHoje();
        this.getDadosOntem();
      },
      response => {
        this.snackBarService.open('No fue posible accesar informaciones del movimiento de documentos.');
      }
    );
  }
 
  getDadosHoje()
  {
    const a = this.series.filter(s=>s.name=='hoy').map( s=> s.value.aprovados)[0]; 
    const p = this.series.filter(s=>s.name=='hoy').map( s=> s.value.pendientes)[0]; 
    const c = this.series.filter(s=>s.name=='hoy').map( s=> s.value.cancelados)[0]; 
    this.dadosHoje = [a , p ,c];
    //console.log(this.dadosHoje);
  }
  getDadosOntem()
  {
    const a = this.series.filter(s=>s.name=='ayer').map( s=> s.value.aprovados)[0]; 
    const p = this.series.filter(s=>s.name=='ayer').map( s=> s.value.pendientes)[0]; 
    const c = this.series.filter(s=>s.name=='ayer').map( s=> s.value.cancelados)[0]; 
    this.dadosOntem = [a , p ,c];
    //console.log(this.dadosOntem);
  }

}
