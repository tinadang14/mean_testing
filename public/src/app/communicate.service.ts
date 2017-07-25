import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CommunicateService {
  observedUser = new BehaviorSubject(null);
  updateUser(user:Object) {
    this.observedUser.next(user);
  }

  constructor() { }

}
