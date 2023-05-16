import app from "../../server"


describe('Test the application', () => {
  it('should return 200', async () => {
    const res = await app.request('http://localhost/api/ping')
    expect(res.status).toBe(200)
  })
})