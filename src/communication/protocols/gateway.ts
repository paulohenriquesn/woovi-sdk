import { STAGES } from '../../sdk';
import { httpResponse } from './http';

export interface Gateway<I> {
    execute: (i: I, authorization: string, stage: STAGES) => Promise<httpResponse>
}