import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  result!: string;
  initialString: string = '';

  connectToWorker(): void {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(
        new URL('./app-worker.worker', import.meta.url)
      );
      worker.postMessage(this.initialString);
      worker.onmessage = ({ data }) => {
        this.result = data;
      };
    } else {
      alert('Web Workers are not supported in this environment.');
    }
  }
}
