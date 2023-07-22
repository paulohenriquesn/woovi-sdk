import { STAGES } from '../../common/stages';
import { httpResponse } from './http';

export interface Gateway<I> {
    execute: (i: I, authorization: string, stage: STAGES) => Promise<httpResponse>
}