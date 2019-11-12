import { NgModule } from '@angular/core';

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentScatterEchartsModule } from '@covalent/echarts/scatter';
import { CovalentTreeEchartsModule } from '@covalent/echarts/tree';
import { CovalentSankeyEchartsModule } from '@covalent/echarts/sankey';
import { CovalentGraphEchartsModule } from '@covalent/echarts/graph';
import { CovalentTreemapEchartsModule } from '@covalent/echarts/treemap';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';
import { CovalentToolboxEchartsModule } from '@covalent/echarts/toolbox';

@NgModule({
  imports: [
    CovalentBaseEchartsModule,
    CovalentLineEchartsModule,
    CovalentBarEchartsModule,
    CovalentScatterEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentTreeEchartsModule,
    CovalentGraphEchartsModule,
    CovalentSankeyEchartsModule,
    CovalentTreemapEchartsModule,
    CovalentToolboxEchartsModule,
  ] ,
  exports: [
    CovalentBaseEchartsModule,
    CovalentLineEchartsModule,
    CovalentBarEchartsModule,
    CovalentScatterEchartsModule,
    CovalentTooltipEchartsModule,
    CovalentTreeEchartsModule,
    CovalentGraphEchartsModule,
    CovalentSankeyEchartsModule,
    CovalentTreemapEchartsModule,
    CovalentToolboxEchartsModule,
  ] 
})
export class ChartModule {}