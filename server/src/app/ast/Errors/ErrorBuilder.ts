

import { MapGenError } from "./ErrorTypers";
import { testing } from "../../util/constants";
import { Range } from '../../util/Range';

export default class ErrorBuilder {
  private _errors: MapGenError[] = [];

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

  buildError(msg: string, range: Range): void {
    this._errors.push({ msg: msg, range: range });
  }
}
