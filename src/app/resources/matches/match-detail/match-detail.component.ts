import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Match } from 'src/app/interfaces/match';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css'], 
  providers: [MatchService]
})
export class MatchDetailComponent implements OnInit {
  match: Match | undefined;

  constructor( private service : MatchService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.show(id).subscribe(res => this.match = res);
  }

}
