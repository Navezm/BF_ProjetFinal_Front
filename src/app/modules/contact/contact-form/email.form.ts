import {AbstractControl, FormControl, Validators} from "@angular/forms";

export const F_Email: {[p: string]: AbstractControl} = {
  name: new FormControl(null, [Validators.required]),
  email: new FormControl(null, [Validators.required]),
  message: new FormControl(null, [Validators.required])
}
