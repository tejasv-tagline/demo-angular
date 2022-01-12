import { Component, OnInit } from '@angular/core';
import { Servers } from 'src/app/card-list';

@Component({
  selector: 'app-show-server',
  templateUrl: './show-server.component.html',
  styleUrls: ['./show-server.component.scss'],
})
export class ShowServerComponent implements OnInit {
  public filteredStatus: string = 'all';
  public servers: Servers[] = [
    {
      serverId: 1,
      serverName: 'Production Server',
      serverStatus: 'online',
      serverCreated: Date(),
    },
    {
      serverId: 2,
      serverName: 'Database Server',
      serverStatus: 'online',
      serverCreated: Date(),
    },
    {
      serverId: 3,
      serverName: 'User-service Server',
      serverStatus: 'offline',
      serverCreated: Date(),
    },
    {
      serverId: 4,
      serverName: 'Clients Server',
      serverStatus: 'dead',
      serverCreated: Date(),
    },
    // {
    //   serverId: 5,
    //   serverName: 'Development Server',
    //   serverStatus: 'dead',
    //   serverCreated: Date(),
    // },
    // {
    //   serverId: 6,
    //   serverName: 'Center Server',
    //   serverStatus: 'offline',
    //   serverCreated: Date(),
    // },
    // {
    //   serverId: 7,
    //   serverName: 'Employee Server',
    //   serverStatus: 'offline',
    //   serverCreated: Date(),
    // },
    // {
    //   serverId: 8,
    //   serverName: 'Running Server',
    //   serverStatus: 'online',
    //   serverCreated: Date(),
    // },
    // {
    //   serverId: 9,
    //   serverName: 'Salary Server',
    //   serverStatus: 'dead',
    //   serverCreated: Date(),
    // },
  ];

  constructor() {}

  ngOnInit(): void {}

  public addServer(): void {
    let randomStatus = ['online', 'offline', 'dead'];
    let randomValue = randomStatus[(Math.random() * randomStatus.length) | 0];
    let randomName = ['Angular js', 'Node js', 'Ruby on Rails'];
    let randomValueFromName =
      randomName[(Math.random() * randomName.length) | 0];

    this.servers.push({
      serverId: this.servers.length + 1,
      serverName: randomValueFromName + ' Server',
      serverStatus: randomValue,
      serverCreated: Date(),
    });
  }
}
