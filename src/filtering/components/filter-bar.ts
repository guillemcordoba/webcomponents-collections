import { LitElement, html, customElement } from 'lit-element';
import { FilterGroup } from './filter-group';

@customElement('filter-bar')
class FilterBar extends FilterGroup {
  render() {
    return html`<p>template content</p>`;
  }
}
