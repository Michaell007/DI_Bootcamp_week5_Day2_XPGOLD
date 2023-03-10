import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Exercise_2';

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit(): void {
    
    if (this.swUpdate.isEnabled) {

        this.swUpdate.available.subscribe(() => {
            if(confirm("Nouvelle mise a jour est disponible. Charger une nouvelle version?")) {
                window.location.reload();
            }
        });
    }     


  }


}
