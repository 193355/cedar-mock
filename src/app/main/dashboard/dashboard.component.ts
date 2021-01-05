import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { DashboardService } from './dashboard.service';
import { FuseConfigService } from '@fuse/services/config.service';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
//import { DailogSessionSelectionComponent } from '../Profile/dailog-session-selection/dailog-session-selection.component';

//contact
//import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

//import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { takeUntil } from 'rxjs/internal/operators';
//import { FuseConfigService } from '@fuse/services/config.service';
//import { AvailableBooksService } from './available-books.service';
//import { MatDialog } from '@angular/material';
//import { BookDialogDeleteComponent } from '../book-dialog-delete/book-dialog-delete.component';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})

export class DashboardComponent {

    private _filterChange = new BehaviorSubject('');
    private _filteredDataChange = new BehaviorSubject('');
    selected: string;

    tiles = [
        { title: 'Activations', text: 'Today', no: '123', cols: 1, rows: 1, color: '#FFFFFF' },
        { title: 'Free Trials', text: 'Yesterday', no: '566', cols: 1, rows: 1, color: '#FFFFFF' }
    ];

    customers = [
        { title: 'live', lno: '122', cols: 1, rows: 1, color: '#FFFFFF' },
        { title: 'active', lno: '152', cols: 1, rows: 1, color: '#FFFFFF' },
        { title: 'Inactive', lno: '158', cols: 1, rows: 1, color: '#FFFFFF' },
        { title: 'Blocked', lno: '777', cols: 1, rows: 1, color: '#FFFFFF' },
    ];

    refunds = [
        { title: 'This Month', rno: 122, cols: 1, rows: 1, color: '#FFFFFF' },
        { title: 'Quarterly', rno: '152', cols: 1, rows: 1, color: '#FFFFFF' },
        { title: 'Half Yearly', rno: '158', cols: 1, rows: 1, color: '#FFFFFF' },
        { title: 'Yearly', rno: '777', cols: 1, rows: 1, color: '#FFFFFF' },
    ];

    newrevenue = [
        { title: 'This Month', rno: '222', cols: 1, rows: 1, color: '#FFFFFF' },
        { title: 'Prev Month', rno: '125', cols: 1, rows: 1, color: '#FFFFFF' },
        { title: 'This Quarter', rno: '555', cols: 1, rows: 1, color: '#FFFFFF' },
        { title: 'This Year', rno: '656', cols: 1, rows: 1, color: '#FFFFFF' },
    ];

    days = [
        { value: 'Today' },
        { value: 'This week' },
        { value: 'This Month' },
        { value: 'This Year' },
    ];


    barChartOptions: ChartOptions = {
        responsive: true,
      };
      barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'];
      barChartType: ChartType = 'bar';
      barChartLegend = true;
      barChartPlugins = [];
      barChartData: ChartDataSets[] = [
        { data: [45, 37, 60, 70, 46, 33], label: 'Months' }
      ];

    @ViewChild(MatPaginator, { static: true })
    paginator: MatPaginator;

    @ViewChild('filter', { static: true })
    filter: ElementRef;

    @ViewChild(MatSort, { static: true })
    sort: MatSort;

    private _unsubscribeAll: Subject<any>;
    /**
     * Constructor
     *
     * @param {DashboardService} _analyticsDashboardService
     */

    constructor(
        private _dashboardService: DashboardService,
        public dialog: MatDialog,
        private _fuseConfigService: FuseConfigService
    ) 
    {
        this._fuseConfigService.config = {
            layout: {
                footer: {
                    hidden: true
                }
            }
        };
    }

    ngOnInit(): void {
    }

    disconnect(): void {

    }
}
