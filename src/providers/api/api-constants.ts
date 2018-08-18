export class APIConstants {
    private static URLS = {
        local: 'http://cure-temperature.localhost/api',
        test: 'http://cure-temperature.herokuapp.com/api',
        prod: 'http://cure-temperature.herokuapp.com/api'
    };
    static readonly API_URL = APIConstants.URLS.prod;
    static readonly CLIENT_ID = '6';
    static readonly CLIENT_SECRET = '7aBpKKvsZfrreEOsPYkVv0o9X9o7lWiAU59BrNvB';
    static readonly GRANT_TYPE = 'password';
}
