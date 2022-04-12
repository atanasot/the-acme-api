const {expect} = require('chai')
const {syncAndSeed} = require('../db')

const app = require('supertest')(require('../app'))

describe('Routes', ()=> {
    before(() => syncAndSeed())  // no await here, we dont want a promise
    describe('GET /', ()=> {
        it('shows information about the api', async()=> {
            const response = await app.get('/')
            expect(response.status).to.equal(200)
            expect(response.text).to.include('The Acme API')
        })
    })
    describe('GET /api/products', ()=> {
        it('returns products', async()=> {
            const response = await app.get('/api/products')
            expect(response.status).to.equal(200)
            expect(response.body.length).to.equal(2)
        })
    })

})

