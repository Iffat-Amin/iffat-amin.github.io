import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch.model';
@Component({
  selector: 'app-missiondetails',
  standalone: false,
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent implements OnInit {
  mission?: Launch;

  constructor(private route: ActivatedRoute, private spaceXService: SpacexService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spaceXService.getLaunchByFlightNumber(id).subscribe(data => this.mission = data);
  }
}