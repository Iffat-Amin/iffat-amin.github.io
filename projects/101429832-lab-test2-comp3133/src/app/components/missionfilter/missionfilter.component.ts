import { Component } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch.model';

@Component({
  selector: 'app-missionfilter',
  standalone: false,
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  year: string = '';
  launches: Launch[] = [];

  constructor(private spaceXService: SpacexService) {}

  filterMissions() {
    if (this.year) {
      this.spaceXService.getLaunchesByYear(this.year).subscribe(data => this.launches = data);
    }
  }
}
