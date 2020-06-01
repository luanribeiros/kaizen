export enum ExampleTypes {
  EXAMPLE_LOADING = 'EXAMPLE_LOADING',
  EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS',
  EXAMPLE_ERROR = 'EXAMPLE_ERROR',
}

export interface Example {
  id: number;
  name: string;
}

export interface ExampleState {
  readonly data: Example[];
  readonly loading: boolean;
  readonly error: boolean;
}
