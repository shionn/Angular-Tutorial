import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/interfaces/match';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css'], 
  providers: [MatchService]
})
export class MatchListComponent implements OnInit {
  matches: Match[] | undefined;

  constructor(private service: MatchService ) {}

  ngOnInit(): void {
    this.service.list().subscribe((res: Match[])=> {
      this.matches = res
    })
  }

}
