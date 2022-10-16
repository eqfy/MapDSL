

import { MapGenError } from "./ErrorTypers";
import { testing } from "../../util/constants";
import { Range } from '../../util/Range';

export default class ErrorBuilder {
  private _errors: MapGenError[] = [];
  private _stackFrame: string[] = ['main']; // A simple stack frame that only records function names

  get errors(): MapGenError[] {
    if (testing) {
      return [];
    } else {
      return this._errors;
    }
  }

  set errors(value: MapGenError[]) {
    this._errors = value;
  }

  get stackFrame(): string[] {
    return this._stackFrame;
  }

  buildError(msg: string, range: Range): void {
    console.error("Stack trace:", this._stackFrame);
    this._errors.push({ msg: msg, range: range });
  }
}
