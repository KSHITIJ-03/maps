/// <reference types="@types/google.maps"/>

import { User } from './User'
import { Company } from './Company.ts'

// const user = new User()
// const company = new Company()

// console.log(user);
// console.log(company);

//console.log(google)

// new google.maps.Map(document.getElementById('map') as HTMLElement, {
//     zoom: 1,
//     center: {
//         lat: 0,
//         lng: 0
//     }
// })

// let map: google.maps.Map;
// async function initMap(): Promise<void> {
//   const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
//   map = new Map(document.getElementById("map") as HTMLElement, {
//     center: { lat: 0, lng: 0 },
//     zoom: 1,
//   });
// }

// initMap();

let map: google.maps.Map;

function initMap(): void {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 0, lng: 0 },
        zoom: 1,
    });
}

// Ensure `initMap` is globally accessible for the API callback
(window as any).initMap = initMap;
