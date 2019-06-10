
export interface FilterState {
  [key: string]: FilterState | any;
}

export interface FilterChanged {
  key: string;
  state: FilterState;
}