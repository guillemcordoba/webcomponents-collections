import { LitElement, property } from 'lit-element';
import { FilterState, FilterChanged } from '../types';

export class FilterGroup extends LitElement {
  @property() filterKey: string;

  filterState: FilterState = {};

  connectedCallback() {
    this.addEventListener('filter-changed', this.filterChanged);
  }

  disconnectedCallback() {
    this.removeEventListener('filter-changed', this.filterChanged);
  }

  filterChanged(event: CustomEvent<FilterChanged>) {
    event.stopPropagation();

    this.filterState[event.detail.key] = event.detail.state;

    this.dispatchEvent(
      new CustomEvent('filter-changed', {
        detail: { key: this.filterKey, state: this.filterState },
        composed: true,
        bubbles: true
      })
    );
  }
}
