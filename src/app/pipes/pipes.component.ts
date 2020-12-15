import { Component } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public dataToBeFlatten = [1, 2, [3], [4, [5, 6, [7]]]];

  public modifyFlattenData(): void {
    this.dataToBeFlatten.push(3, 5);
  }

  public reassignFlattenData(): void {
    this.dataToBeFlatten = [...this.dataToBeFlatten];
  }
}
