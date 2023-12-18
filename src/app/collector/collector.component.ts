import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig } from '@angular/material/legacy-dialog';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Subscription, combineLatest, pipe } from 'rxjs';
import { map, startWith } from "rxjs/operators";

// Services
import { CollectService } from '../services/collect.service';
import { LocationService } from '../services/location.service';
import { ScaleService } from '../services/scale_service';
import { ContainerService } from '../services/container.service';
import { UserService } from '../services/user.service';
import { WasteTypeService } from '../services/waste-type.service';
import { CollectorService } from '../services/collector.service';

// Components
import { CollectedComponent } from './collected/collected.component';
import { QueuedComponent } from './queued/queued.component';

// Models
import { CollectLocation } from '../models/location.model';
import { WasteType } from '../models/waste_type.model';
import { Collector } from '../models/collector.model';
import { Container } from '../models/container.model';
import { CollectInput } from '../models/collects.model';

@Component({
  selector: 'app-collector',
  templateUrl: './collector.component.html',
  styleUrls: ['./collector.component.scss']
})

export class CollectorComponent implements OnInit {

    @ViewChild('form', {static: false}) collectNgForm: NgForm;

    collectForm = new UntypedFormGroup({
      collect_location: new UntypedFormControl(null, [Validators.required]),
      waste_type: new UntypedFormControl('', [Validators.required]),
      collector: new UntypedFormControl(null, [Validators.required]),
      container: new UntypedFormControl(null, [Validators.required]),
      tare_weight: new UntypedFormControl('', [Validators.required, Validators.min(0)]),
      scale_weight: new UntypedFormControl(0, [Validators.required, Validators.min(0)]),
      net_weight: new UntypedFormControl(0, [Validators.required, Validators.min(0)])
    });

    // collects: any;

    scale_weight: number = 0;
    tare_weight: number = 0;
    net_weight: number = 0;
    container: number = 0;

    // Observables
    public scaleValue$: number;
    filteredCollectLocations$: Observable<CollectLocation[]>;
    filteredWaste_Types$: Observable<WasteType[]>;
    filteredCollectors$: Observable<Collector[]>;
    filteredContainers$: Observable<Container[]>;

    // Subscriptions
    scaleSubscription: Subscription = null;
    scaleWeightSubscription: Subscription = null;
    tareWeightSubscription: Subscription = null;
    tareSubscription: Subscription = null;

    // Form state
    //showForm: boolean = true;
    success: boolean = false;
    //isLoading: boolean = false;
    //isSubmitted: boolean = false;

    // Validators
    static locationIsValid(component: CollectorComponent){
      return (control: AbstractControl): ValidationErrors => {
        if (component && !component.ls.idFromLocationName(control.value)) {
          return { validSet: { value: control.value } };
        }
        return null;
      }
    }

    static waste_typeIsValid(component: CollectorComponent){
      return (control: AbstractControl): ValidationErrors => {
        if (component && !component.wts.idFromWaste_TypeName(control.value)) {
          return { validSet: { value: control.value } };
        }
        return null;
      }
    }

    static collectorIsValid(component: CollectorComponent){
      return (control: AbstractControl): ValidationErrors => {
        if (component && !component.collrs.idFromCollectorName(control.value)) {
          return { validSet: { value: control.value } };
        }
        return null;
      }
    }

    static containerIsValid(component: CollectorComponent){
      return (control: AbstractControl): ValidationErrors => {
        if (component && !component.conts.idFromContainerName(control.value)) {
          return { validSet: { value: control.value } };
        }
        return null;
      }
    }

  constructor(
      public ls: LocationService,
      public dialog: MatDialog,
      public ss: ScaleService,
      public conts: ContainerService,
      public us: UserService,
      public wts: WasteTypeService,
      public collrs: CollectorService,
      private cs: CollectService
  ) {}

  ngOnInit(): void {

    // Check authentication
    this.isLoggedIn();

    // Get the scale weight from the API and update the scale weight value
    this.updateScaleWeight();

    // Update the net weight based on the scale weight and current tare value
    this.updateNetWeight();

    this.filteredCollectLocations$ = combineLatest(
      this.collectForm.controls.collect_location.valueChanges.pipe(
        startWith('')),
        this.ls.collectLocations,
      )
      .pipe(
      map(([value, collectLocations]) => {
        const filtered = value ? this._filteredCollectLocations(value, collectLocations) : collectLocations;
        return filtered.sort((a, b) => (a.floor > b.floor) ? 1 : (a.floor === b.floor) ? ((a.name > b.name) ? 1 : -1) : -1 );
      })
    );

    this.filteredWaste_Types$ = combineLatest(
      this.collectForm.get('waste_type').valueChanges
      .pipe(
        startWith('')),
        this.wts.waste_types,
      )
      .pipe(
        map(([value, waste_types]) => {
          const filtered = value ? this._filteredWasteTypes(value, waste_types) : waste_types;
          return filtered;
      })
    );

    this.filteredCollectors$ = combineLatest(
      this.collectForm.controls.collector.valueChanges
      .pipe(
        startWith('')),
        this.collrs.collectors,
      )
      .pipe(
        map(([value, collectors]) => {
          const filtered = value ? this._filteredCollectors(value, collectors) : collectors;
          return filtered;
      })
    );

    this.filteredContainers$ = combineLatest(
      this.collectForm.controls.container.valueChanges
      .pipe(
        startWith('')),
        this.conts.containers,
      )
      .pipe(
        map(([value, containers]) => {
          const filtered = value ? this._filteredContainers(value, containers) : containers;
          return filtered;
      })
    );

    this.updateTare();
    this.getScaleUnit();

  }

    updateScaleWeight(): void {
        this.scaleSubscription = this.ss.getScaleWeight()
          .subscribe((scale)=>{
          this.scaleValue$ = scale;
          console.log(scale + ' -> log of scale');
          console.log(this.scaleValue$ + ' -> log of scaleValue$');
          this.collectForm.controls['scale_weight'].setValue(Math.round((this.scaleValue$)*100)/100);
        });
    }

    isLoggedIn() {
      return this.us.currentUser.toPromise();
    }

    getScaleUnit() {
      let scale_unit = "lbs";
      return scale_unit;
    }

    updateNetWeight(): void {
      this.scaleWeightSubscription = this.collectForm.get('scale_weight').valueChanges
        .subscribe((scale: number) => {
          this.scale_weight = scale;
          this.collectForm.controls['net_weight'].setValue(Math.round((this.scale_weight - this.tare_weight)*100)/100);
        });
      this.tareWeightSubscription = this.collectForm.get('tare_weight').valueChanges
        .subscribe((container: number) => {
          this.tare_weight = container;
          this.collectForm.controls['net_weight'].setValue(Math.round((this.scale_weight - this.tare_weight)*100)/100);
        });
    }

    updateTare() {
      this.tareSubscription = this.collectForm.controls['container'].valueChanges
        .subscribe(containerNameChange => {
          const container = this.conts.getContainerByName(containerNameChange);
          if (container) {
            this.collectForm.controls['tare_weight'].setValue(container.tare_weight);
          }
        });
    }

    // Autocomplete Filters

    private _filteredCollectLocations(value: string, collectLocations: CollectLocation[]): CollectLocation[] {
      const filterValue = value.toLowerCase();
      return collectLocations.filter(collectLocation => collectLocation.name.toLowerCase().indexOf(filterValue) === 0);
    }

    private _filteredWasteTypes(value: string, waste_types: WasteType[]): WasteType[] {
      const filterValue = value.toLowerCase();
      return waste_types.filter(waste_type => waste_type.waste_type_name.toLowerCase().indexOf(filterValue) === 0);
    }

    private _filteredCollectors(value: string, collectors: Collector[]): Collector[] {
      const filterValue = value.toLowerCase();
      return collectors.filter(collector => collector.name.toLowerCase().indexOf(filterValue) === 0);
    }

    private _filteredContainers(value: string, containers: Container[]): Container[] {
      const filterValue = value.toLowerCase();
      return containers.filter(container => container.name.toLowerCase().indexOf(filterValue) === 0);
    }

    getCollectFromForm(form: UntypedFormGroup) {
      const values = form.value;

      const collect: CollectInput = {
        container_id: this.conts.idFromContainerName(values.container),
        location_id: this.ls.idFromLocationName(values.collect_location),
        waste_type: values.waste_type,
        net_weight: values.net_weight,
        collector_id: this.collrs.idFromCollectorName(values.collector),
        scale_weight: values.scale_weight,
        tare_weight: values.tare_weight,
        weighed_at: Date.now() / 1000, // Server is expecting unix seconds, not milliseconds
      }

      return collect;
    }

    collectFormReset() {
        this.collectNgForm.resetForm();
    }

    async onSubmit() {
      const collect = this.getCollectFromForm(this.collectForm);
      if (!this.cs.collectIsValid(collect)) {
        console.error("Tried to submit an invalid collect. Not sending to the server.", collect);
        return;
      } else {
        if (this.cs.isOnline) {
          try {
            await this.cs.submitCollect(collect).toPromise();
            this.openCollectedDialog()
            this.success = true;
          } catch(err) {
            console.error(err);
          }
        } else {
          this.cs.addToQueue(collect);
          this.openQueuedDialog();
        }
      }

      //Reset the form
      this.collectForm.reset();
    }

    openCollectedDialog() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.hasBackdrop = true;
      dialogConfig.width = "16rem";
      dialogConfig.height = "20rem";
      dialogConfig.closeOnNavigation = true;
      const dialogRef = this.dialog.open(CollectedComponent, dialogConfig);
      setTimeout(function(){
        dialogRef.close();
      }, 8000); // stay open for 8 seconds
    }

    openQueuedDialog() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.hasBackdrop = true;
      dialogConfig.width = "16rem";
      dialogConfig.height = "20rem";
      dialogConfig.closeOnNavigation = true;
      const dialogRef = this.dialog.open(QueuedComponent, dialogConfig);
      setTimeout(function(){
        dialogRef.close();
      }, 8000); // stay open for 8 seconds
    }

    ngOnDestroy(){
      this.scaleSubscription?.unsubscribe();
      this.scaleWeightSubscription?.unsubscribe();
      this.tareWeightSubscription?.unsubscribe();
      this.tareSubscription?.unsubscribe();
    }
}