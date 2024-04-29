import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { CountryNameByCodePipe } from '../country-name-by-code.pipe';
import { RoundPipe } from '../round.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    CountryNameByCodePipe,
    TitleCasePipe,
    RoundPipe,
  ],
  declarations: [Tab2Page],
})
export class Tab2PageModule {}
