import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  faInfoCircle = faInfoCircle;

}
