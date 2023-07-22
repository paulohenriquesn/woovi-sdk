import { ChargeService } from '../../src/business/services/charge'
import { ok } from '../../src/helpers/http'
import { fakeGatewayConfigs, makeFakeGatewayStub } from '../stubs/makeFakeGateway'

const makeSut = () => {
    const fakeGatewayStub = makeFakeGatewayStub()
    return {
        service: new ChargeService(fakeGatewayConfigs.AUTHORIZATION, fakeGatewayConfigs.STAGE, fakeGatewayStub),
        fakeGatewayStub
    }
}

describe('Charge Context', () => {
    test('Should call create charge passing all input correctly', async () => {
        const { service, fakeGatewayStub } = makeSut()
        const spyOnGateway = jest.spyOn(fakeGatewayStub, 'execute')
        const bodyRequest = {
            correlationId: 'fakeCorrelationId',
            value: '0.00'
        }
        await service.create(bodyRequest)
        expect(spyOnGateway).toHaveBeenCalledWith(bodyRequest, fakeGatewayConfigs.AUTHORIZATION, fakeGatewayConfigs.STAGE)       
    })
    
    test('If create charge gateway throws service returns badRequest', async () => {
        const { service, fakeGatewayStub } = makeSut()
        jest.spyOn(fakeGatewayStub, 'execute').mockReturnValueOnce(Promise.reject(new Error()))
        
        const bodyRequest = {
            correlationId: 'fakeCorrelationId',
            value: '0.00'
        }

        const response = service.create(bodyRequest)
        await expect(response).rejects.toThrow()
    })

    test('If create charge gateway returns ok service has to return too', async () => {
        const { service, fakeGatewayStub } = makeSut()
        jest.spyOn(fakeGatewayStub, 'execute').mockReturnValueOnce(Promise.resolve(ok()))
        
        const bodyRequest = {
            correlationId: 'fakeCorrelationId',
            value: '0.00'
        }

        const response = await service.create(bodyRequest)
        expect(response.statusCode).toBe(200)
    })
})  