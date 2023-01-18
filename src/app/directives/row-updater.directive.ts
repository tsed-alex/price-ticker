import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {FxPrice} from "../types";
import {of, Subject, switchMap, takeUntil, timer} from "rxjs";
import {AppService} from "../app.service";

@Directive({
  selector: '[appRowUpdater]'
})
export class RowUpdaterDirective {

  @Input()
  public data!: FxPrice;
  @Output()
  public dataRowChanged = new EventEmitter<FxPrice>();

  private notifier = new Subject<void>()

  constructor(private appService: AppService) { }

  public ngOnInit(): void {
    this.initTimer();
  }

  private initTimer(): void {
    const delay = this.data.timestamp.valueOf() - Date.now();
    const timer$ = timer(delay);

    timer$.pipe(
      switchMap(() => of(this.appService.generateFakeDataRow(this.data.id, this.data.name))),
      takeUntil(this.notifier)
    ).subscribe((newData) => {
      this.data = newData;
      this.dataRowChanged.next(newData);
      this.initTimer();
    });
  }

  public ngOnDestroy(): void {
    this.notifier.next();
    this.notifier.complete();
  }
}
