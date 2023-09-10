import cities from 'cities.json';
import { countries } from 'countries-list';

interface city {
	country: string;
	name: string;
	lat: string;
	lng: string;
}

const cityUpdate: city[] = cities.map((item: city) => {
	const countryName = countries[item.country].name;
	return {
		country: countryName,
		city: item.name,
		lat: item.lat,
		lng: item.lng,
	};
});

const doAsyncTask = (searchString: string, signal: AbortSignal) => {
	return new Promise((resolve, reject) => {
		const timeout = setTimeout(() => {
			resolve(cities.filter((item) => item.name.includes(searchString)));
		}, 0);
		signal.addEventListener('abort', () => {
			clearTimeout(timeout);
			reject('task aborted');
		});
	});
};

export const findCityList = (searchString: string) => {
	return cities.filter((item) => item.name.includes(searchString));
};
