import { HostListener, Inject, Input } from '@angular/core';
import { Directive } from '@angular/core';
import { SnackbarService } from '../services/snackbar.service';


@Directive({
  selector: '[copy]',
})
export class CopyDirective {
  @Input() public appCopy = '';

  @HostListener('click') 
  public async copy(): Promise<void> {
    try {
      await this.navigator.clipboard.writeText(this.appCopy);
      this.document.execCommand('copy');
      this.snackbarService.callSnackbar('copied successfuly.');
    } catch {
      this.snackbarService.callSnackbar('copy failed');
    }
  };

  constructor(
    @Inject('Navigator') public navigator: Navigator,
    @Inject('Document') public document: Document,
    public snackbarService: SnackbarService ) {}
}
