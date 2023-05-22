import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(): void {
    if(this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm)
    }
  }

}
