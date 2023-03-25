import { Injectable } from '@angular/core';
import {NotificationLocal} from "../model/notification-local.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotificationLocalService {
  private _notification={} as NotificationLocal;
  private _notifications=[] as Array<NotificationLocal>;

  constructor(private http: HttpClient) { }

  get notification(): NotificationLocal {
    if (this._notification == null) {
      this._notification == new NotificationLocal();
    }
    return this._notification;
  }

  set notification(value: NotificationLocal) {
    this._notification = value;
  }

  get notifications(): Array<NotificationLocal> {
    return this._notifications;
  }

  set notifications(value: Array<NotificationLocal>) {
    this._notifications = value;
  }
}
