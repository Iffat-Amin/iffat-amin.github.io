import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-missionlist',
  standalone: false,
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']

})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];

  constructor(private spaceXService: SpacexService, private router: Router) {}

  ngOnInit(): void {
    this.spaceXService.getAllLaunches().subscribe(data => this.launches = data);
  }

  goToDetails(flight_number: number) {
    this.router.navigate(['/details', flight_number]);
  }
}
