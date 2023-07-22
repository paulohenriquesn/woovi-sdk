import axios from 'axios';
import { CreateChargeCommand } from '../../../business/contexts/charge/commands/create';
import { STAGES } from '../../../common/stages';
import { badRequest, ok } from '../../../helpers/http';
import { Gateway } from '../../protocols/gateway';
import { httpResponse } from '../../protocols/http';

export class CreateChargeGateway implements Gateway<CreateChargeCommand.Input> {
  async execute(
    body: CreateChargeCommand.Input,
    authorization: string,
    stage: STAGES
  ): Promise<httpResponse> {
    try {
      await axios.post(`${stage}/api/v1/charge`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorization,
        },
      });
      return ok();
    } catch (error) {
      return badRequest(error);
    }
  }
}
