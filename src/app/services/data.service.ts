import {Injectable, EventEmitter} from "@angular/core";
import {LogService} from "./log.service";

@Injectable()
export class DataService {
  public pushDataEvent = new EventEmitter<string>();
  private data: string[] = [];

  constructor(private logService: LogService) {
    this.logService.writeToLog('Creating Data Service.');
  }

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog('Saved Item: ' + input);
  }

  getData() {
    return this.data
  }

  pushData(value: string) {
    this.pushDataEvent.emit(value);
  }
}
