import {Local} from "./local.model";
import {Redevable} from "./redevable.model";

export class NotificationLocal {
  public id!:number;
  public local=new Local();
  public redevable =new Redevable();
  public notification = new Notification();

}
