import { STAGES, WooviSDK } from '../src/sdk'

const wooviSDK = new WooviSDK('fakeAuthorizationKey', STAGES.PRODUCTION)

wooviSDK.charge().create({
    correlationId: 'fakeCorrelationId',
    value: '0.00'
})