import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent implements OnInit {
  selectedTests: string[] = [];
  PatientForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}")]),
    sex: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(120)]),
    city: new FormControl(null, [Validators.required]),
    blood: new FormControl(null, [Validators.required]),
    weight: new FormControl(null, [Validators.required, Validators.min(1)]),
    height: new FormControl(null, [Validators.required, Validators.min(1)]),
    test: new FormGroup({
      LFT: new FormControl(false),
      KFT: new FormControl(false),
      Lipid: new FormControl(false),
      CBC: new FormControl(false),
      Sugar: new FormControl(false)
    }),
    file: new FormControl(null, []),
  });
  ngOnInit() {
    this.PatientForm.get('test')?.valueChanges.subscribe((testValues: any) => {
      this.selectedTests = Object.keys(testValues).filter(key => testValues[key]);
    });
  }
submit()
{
  console.log(this.PatientForm.value);
}
 
}
