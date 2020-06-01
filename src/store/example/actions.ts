import { action } from 'typesafe-actions';
import { ExampleTypes, Example } from './types';

export const exampleLoading = () => action(ExampleTypes.EXAMPLE_LOADING);

export const exampleSuccess = (data: Example[]) => action(ExampleTypes.EXAMPLE_SUCCESS, data);

export const exampleError = () => action(ExampleTypes.EXAMPLE_ERROR);
