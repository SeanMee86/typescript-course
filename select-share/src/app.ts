// Code goes here!
import axios from 'axios';

const form = <HTMLFormElement>document.querySelector('form');
const addressInput = <HTMLInputElement>document.querySelector('#address');
const GOOGLE_API_KEY = 'AIzaSyDqnanzU93vEdP0WVwvYRKNOX7MQjBxPp0';

type GoogleGeocodingResponse = {
    results: {
        geometry: {
            location: {
                lat: number;
                lng: number;
            }
        }
    }[];
    status: 'OK' | 'ZERO_RESULTS';
}

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    const googleEndPoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`;

    // send this to Google's API!

    axios.get<GoogleGeocodingResponse>(googleEndPoint)
        .then((res) => {
            if(res.data.status !== 'OK') {
                throw new Error('Could not fetch location!');
            }
            const coordinates = res.data.results[0].geometry.location;

            const map = new google.maps.Map(<HTMLDivElement>document.getElementById('map'), {
                center: coordinates,
                zoom: 16
            });
            new google.maps.Marker({position: coordinates, map});
        })
        .catch(err => {
            alert(err.message);
        })
}

form.addEventListener('submit', searchAddressHandler)