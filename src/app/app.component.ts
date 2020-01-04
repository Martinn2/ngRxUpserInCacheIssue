import {
  Component
} from '@angular/core';
import {
  User
} from './user.model';
import {
  UserEntityService
} from './user.entity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  user: User = new User("tim", "taylor", 1);

  constructor(private userEntityService: UserEntityService) {

  }

  loadFromServer() {
    this.userEntityService.getByKey(1).subscribe(user=> {
      this.user = user;
    });
  }

  upsertToCache() {
    this.userEntityService.upsertOneInCache({...this.user});
  }
}
