import {Component, OnInit} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {SearchService} from "./search.service";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  monsters: any[] = [];

  constructor(private apollo: Apollo, private searchService: SearchService) {
  }

  ngOnInit(): void {
    this.getMonsters();

  }

    getMonsters(): void {
    const GET_MONSTERS = gql`
        {
            monster {
                index
                name
                url
            }
        }
    `;

    this.apollo
        .watchQuery({
          query: GET_MONSTERS,
        })
        .valueChanges.subscribe((result: any) => {
      this.monsters = result?.data?.monsters;
    });
    }

}
