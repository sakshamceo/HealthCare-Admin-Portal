import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.scss']
})
export class AddReportComponent {

  testForm: FormGroup;
  availableTests: string[] = [
    'Lipid Panel',
    'Complete Blood Count (CBC)',
    'Diabetes Tests',
    'Kidney Function Tests',
    'Liver Function Tests',
    'CMP'
  ];

  pdfFile: File | null = null;
  profilePhoto: File | null = null;

  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
      selectedTests: this.fb.array([]),
      pdf: [null],
      photo: [null]
    });
  }

  onCheckboxChange(test: string, event: any) {
    const selectedTests = this.testForm.get('selectedTests') as FormArray;

    if (event.target.checked) {
      selectedTests.push(this.fb.control(test));
    } else {
      const index = selectedTests.controls.findIndex(x => x.value === test);
      selectedTests.removeAt(index);
    }
  }

  onPdfSelected(event: any) {
    this.pdfFile = event.target.files[0];
    this.testForm.patchValue({ pdf: this.pdfFile });
  }

  onPhotoSelected(event: any) {
    this.profilePhoto = event.target.files[0];
    this.testForm.patchValue({ photo: this.profilePhoto });
  }

  onSubmit() {
    console.log('Form Value:', this.testForm.value);
    console.log('Selected PDF:', this.pdfFile);
    console.log('Selected Photo:', this.profilePhoto);
  }
 
}
