import {AbstractControl, FormControl, Validators} from "@angular/forms";

export const F_Painting_Purchase: {[p: string]: AbstractControl} = {
  status: new FormControl(null, [Validators.required]),
  user: new FormControl(null, [Validators.required]),
  paintings: new FormControl(null, [Validators.required]),
  address: new FormControl(null, [Validators.required])
}
