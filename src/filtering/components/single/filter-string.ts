import { LitElement, html, customElement } from 'lit-element';
import { Formfield } from '@material/mwc-formfield';

@customElement('filter-string')
export class FilterString extends LitElement {
  render() {
    return html`
    Hi
      <mwc-formfield></mwc-formfield>
    `;
  }
}
