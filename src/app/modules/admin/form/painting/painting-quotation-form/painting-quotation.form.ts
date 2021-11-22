import {AbstractControl, FormControl, Validators} from "@angular/forms";

export const F_Painting_Quotation: {[p: string]: AbstractControl} = {
  status: new FormControl(null, [Validators.required]),
  user: new FormControl(null, [Validators.required]),
  format: new FormControl(null, [Validators.required]),
  colorChoice: new FormControl(null, [Validators.required]),
  message: new FormControl(null, [Validators.required]),
  paintingTypeId: new FormControl(null, [Validators.required])
}
