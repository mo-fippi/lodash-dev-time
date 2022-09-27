// Mock the node-fetch dependency
jest.mock('node-fetch');

// We need to import node-fetch here so that we can mock the responses
import fetch from 'node-fetch'; 

// We can use the non-mocked constructors for Response and Headers
const { Response, Headers } = jest.requireActual('node-fetch');

// Import the module that we want to test
import searchStarWarsPerson from "../searchstarwarsperson";

// QOL: This is to mute console.error calls
jest.spyOn(global.console, 'error').mockImplementation(() => jest.fn());

function mockResponse(res) {
    return new Response(JSON.stringify(res));
}

// Start testing
describe('searchStarWarsPerson', () => {
    // Mock the base (default) response
    beforeEach(() => {
        fetch.mockResolvedValue(
            mockResponse({
                count: 1,
                results: [{ name: 'Boba Fett' }],
            })
        );
    });

    it('should successfully find Boba Fett', async () => {
        // This will use the default mock implementation above
        const res = await searchStarWarsPerson('Boba');
        expect(res.count).toEqual(1);
    });

    it('should return null for nonexistent person', async () => {
        // Mock the response to return 0 records
        fetch.mockResolvedValueOnce(
            new Response(
                JSON.stringify({ count: 0 })
            )
        );
        const res = await searchStarWarsPerson('FooBar');
        expect(res).toEqual(null);
    });

    it('should throw an error if fetch fails', async () => {
        // Mock the response to throw an error
        fetch.mockImplementationOnce(() => {
            throw new Error('Uh oh! Fetch failed');
        });
        try {
            await searchStarWarsPerson('Boba');
        } catch (e) {
            expect(e.message).toBe('Uh oh! Fetch failed');
        }
    });

    it('should (again) successfully find Boba Fett', async () => {
        // This should again use the default response defined in beforeEach()...
        const res = await searchStarWarsPerson('Boba');
        expect(res.count).toEqual(1);
    });
});