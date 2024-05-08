import {isWeb} from './isWeb';

const getUserLocation = () => fetch('https://get.geojs.io/v1/ip/geo.json').then(data => data.json());

export const isUserProhibited = async () => {
    if (!isWeb()) {
        return false;
    }
    try {
        const {country} = await getUserLocation();
        return country.toLowerCase().includes(atob('cnVzc2lh'));
    } catch {
        return false;
    }
};
