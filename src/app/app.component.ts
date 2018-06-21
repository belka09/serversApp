import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serversElements = [{type: 'server', name: 'Testserver', content: 'Just a test'}];

   onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serversElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serversElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
