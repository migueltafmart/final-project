describe('GET a /', () => {
    it('GET to / with an valid API Key on the database', () => {
        cy.request('GET', '/?apiKey=6028547b87a9a4282d03875b')
        .then(res => {
            expect(res.status).equal(200)
            expect(res.body.status).true
        })
    })
    it("GET to / with a valid API Key that's not on the database", () => {
        cy.request({url: '/?apiKey=6028304cb7123b358b09a067',failOnStatusCode: false})
        .then(res => {
            expect(res.status).equal(403)
            expect(res.body.mssg).match(/^Wrong API Key$/)
        })
    });
    it("GET to / with a wrong API Key that's not on the database", () => {
        cy.request({url: '/?apiKey=60283009a067',failOnStatusCode: false})
        .then(res => {
            expect(res.status).equal(403)
            expect(res.body.mssg).match(/^Wrong API Key$/)
        })
    });
    it("GET to / without an API Key", () => {
        cy.request({ url: '/', failOnStatusCode: false})
        .then(res => {
            expect(res.status).equal(403)
            expect(res.body.mssg).match(/^No API Key provided$/)
        })
    });
});

describe('POST a /', () => {
    it('POST to / with a valid admin API Key on the database', () => {
        cy.request('POST', '/?apiKey=6028304ca7123b358b09a067')
        .then(res => {
            expect(res.status).equal(200)
            expect(res.body.status).true
        })
    })
    it('POST to / with a valid user API Key on the database', () => {
        cy.request({method:'POST', url: '/?apiKey=6028547b87a9a4282d03875b', failOnStatusCode: false})
        .then(res => {
            expect(res.status).equal(403)
            expect(res.body.mssg).match(/^Not an admin$/)
        })
    })
    it("POST to / with a valid API Key that's not on the database", () => {
        cy.request({method:'POST', url: '/?apiKey=6028304cb7123b358b09a067', failOnStatusCode: false})
        .then(res => {
            expect(res.status).equal(403)
            expect(res.body.mssg).match(/^Wrong API Key$/)
        })
    });
    it("POST to / with a wrong API Key that's not on the database", () => {
        cy.request({method:'POST', url: '/?apiKey=60283009a067', failOnStatusCode: false})
        .then(res => {
            expect(res.status).equal(403)
            expect(res.body.mssg).match(/^Wrong API Key$/)
        })
    });
    it("POST to / without an API Key", () => {
        cy.request({method:'POST', url: '/', failOnStatusCode: false})
        .then(res => {
            expect(res.status).equal(403)
            expect(res.body.mssg).match(/^No API Key provided$/)
        })
    });
});