export interface CardList {
  id: number;
  image: string;
  title: string;
  text: string;
}
export interface Items {
  id: number;
  title: string;
  text: string;
}
export interface Profiles {
  id: number;
  title: string;
  text: string;
  footer: string;
}
export interface Cards{
  photo:string;
  title:string;
  text:string;
  button:string;
}
export interface UserData{
  userId:string;
  email:string;
  password:string;
}
export interface Servers{
  serverId:number,
  serverName:string,
  serverStatus:string,
  serverCreated:string
}