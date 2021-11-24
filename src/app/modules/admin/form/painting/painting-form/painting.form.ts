import {AbstractControl, FormControl, Validators} from "@angular/forms";

export const F_Painting: {[p: string]: AbstractControl} = {
  name: new FormControl(null, [Validators.required]),
  description: new FormControl(null, [Validators.required]),
  price: new FormControl(0, [Validators.required, Validators.min(0)]),
  paintingTypeId: new FormControl(null, [Validators.required]),
  isAvailable: new FormControl(true, [Validators.required])
}
