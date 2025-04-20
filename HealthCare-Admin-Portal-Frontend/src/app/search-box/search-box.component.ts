import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  searchBox = new FormGroup(
  {
    searchQuery: new FormControl('',Validators.required)
  });
  search()
  {
    console.log(this.searchBox.value);
    this.searchBox.reset;
  }
}
