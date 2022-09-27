import fetch from 'node-fetch';

const SWAPI_URL = 'https://swapi.dev/api';

/**
 * Given a name, search the Star Wars API (swapi.dev) for a character details
 * @param {string} name The name of a star wars character to search for
 */
async function searchStarWarsPerson(name) {
    try {
        const response = await fetch(`${SWAPI_URL}/people/?search=${name}`);
        const data = await response.json();
        return data.count === 0 ? null : data;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

module.exports = searchStarWarsPerson;