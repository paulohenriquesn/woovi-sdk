import { STAGES, WooviSDK } from '../src/sdk'

const wooviSDK = new WooviSDK('fakeAuthorizationKey', STAGES.PRODUCTION)

wooviSDK.charge().create({
    correlationId: 'fakeCorrelationId',
    value: '0.00',
})

// Another way to import SDK directly

import { Charge } from '../src/sdk'

const chargeService = Charge("fakeAuthorizationKey", STAGES.DEVELOPMENT)

chargeService.create({
    correlationId: 'fakeCorrelationId',
    value: '0.00',
})

