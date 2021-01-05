import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthGuard } from '../authentication/auth.guard';
import { TranslateModule } from '@ngx-translate/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PlansComponent } from '../plans/plans.component';
//import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';


const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'plans',
        component: PlansComponent

    },

];

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatDialogModule,
        ChartsModule,
        NgxChartsModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatStepperModule,
        MatCheckboxModule,
        FuseSharedModule,
        MatTabsModule,
        MatRadioModule,
        MatCardModule,
        TranslateModule,
        MatGridListModule,
        MatDividerModule,
        MatDatepickerModule
        
    ],
    providers: [DashboardService]
})
export class DashboardModule {
}