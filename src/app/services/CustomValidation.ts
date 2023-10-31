import { FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class CustomValidation{
    
    static passwordMatchValidator(group:FormGroup){
        const password = group.get('password')?.value;
        const confirmPassword=group.get('Cpassword')?.value;

        if(password===confirmPassword){
            return null;
        }else{
            return {PasswordError:true};
        }
    }
    static contentValidator(control: FormControl): ValidationErrors | null {
        const content = control.value;
        if (content) {
            const wordCount = content.trim().split(/\s+/).length;
            if (wordCount > 20) {
            return { maxWordCountExceeded: true };
            }
        }
        return null;
        }
        static titleValidator(control: FormControl): ValidationErrors | null {
            const title = control.value;
            if (title && title.length > 20) {
              return { maxLengthExceeded: true };
            }
            return null;
          }
}