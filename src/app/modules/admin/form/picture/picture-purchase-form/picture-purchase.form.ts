import {AbstractControl, FormControl, Validators} from "@angular/forms";

export const F_Picture_Purchase: {[p: string]: AbstractControl} = {
  status: new FormControl(null, [Validators.required]),
  user: new FormControl(null, [Validators.required]),
  pictures: new FormControl(null, [Validators.required])
}
