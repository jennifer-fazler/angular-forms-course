import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'onlyOneError',
  // default is true.  only recompute if it's input changes.
  // if false, that would be considered an impure pipe and would recompute on each change detection run
  // pure: true

})
export class OnlyOneErrorPipe implements PipeTransform {

  transform(allErrors: any, errorsPriority: string[]) {

    if (!allErrors) {
      return null;
    }

    const onlyOneError: any = {};

    for (let error of errorsPriority) {
      if (allErrors[error]) {
        onlyOneError[error] = allErrors[error];
        break;
      }
    }

    return onlyOneError;
  }

}
