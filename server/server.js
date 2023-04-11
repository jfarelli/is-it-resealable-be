const PORT = 8000;
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors());

https: app.locals.data = [
	{
		id: 1,
		companyName: "Nature's Rancher",
		companyContacts: {
			twitter: 'https://twitter.com/NaturesRancher',
			facebook: 'https://www.facebook.com/naturesrancher/',
			website: 'https://naturesrancher.com/',
			phone: '1-254-386–4790',
		},

		baconStyle: 'Applewood Smoked Uncured Bacon',
		resealable: '❌',
		servingSize: '1 slice (11g)',
		calories: 35,
		fat: 2,
		saturatedFat: 1,
		transFat: 0,
		sodium: 280,
		carbs: 1,
		protein: 2,
		image: '/natures-rancher.webp',
	},
	{
		id: 2,
		companyName: 'Vande Rose Farms',
		companyContacts: {
			website: 'https://vanderosefarms.com/',
			email: 'info@VandeRoseFarms.com',
			facebook:
				'https://www.facebook.com/WorldsBestBacon/?_ga=2.255512648.1133614153.1678813924-1956117899.1678813924',
			twitter:
				'https://twitter.com/VandeRoseFarms?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3AVandeRoseFarms%7Ctwgr%5EeyJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdHdlZXRfZW1iZWRfOTU1NSI6eyJidWNrZXQiOiJodGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3NwYWNlX2NhcmQiOnsiYnVja2V0Ijoib2ZmIiwidmVyc2lvbiI6bnVsbH0sInRmd192ZGxfY2hpcnBfMTI3OTQiOnsiYnVja2V0IjoiY29udHJvbCIsInZlcnNpb24iOjN9fQ%3D%3D&ref_url=https%3A%2F%2Fvanderosefarms.com%2F&_ga=2.255512648.1133614153.1678813924-1956117899.1678813924',
			instagram:
				'https://www.instagram.com/vanderosefarms/?hl=en&_ga=2.58398954.1133614153.1678813924-1956117899.1678813924',
		},
		baconStyle: 'Applewood Smoked Artisan Dry Cured Bacon',
		price: 5.99,
		resealable: '❌',
		servingSize: '1 slice (33g)',
		calories: 140,
		fat: 13,
		saturatedFat: 5,
		transFat: 0,
		sodium: 260,
		carbs: 0,
		protein: 6,
		image: '/vande-rose-farms.webp',
	},
	{
		id: 3,
		companyName: 'Applegate Naturals',
		companyContacts: {
			website: 'https://applegate.com/',
			phone: '1-908-725-5800',
			facebook: 'https://www.facebook.com/applegate/',
			twitter: 'https://twitter.com/Applegate',
			instagram: 'https://www.instagram.com/applegate/',
			linkedIn: 'https://www.linkedin.com/company/applegate/',
		},
		baconStyle: 'Hickory Smoked Uncured Sunday Bacon',
		price: 4.99,
		resealable: '❌',
		servingSize: '2 slices (14g)',
		calories: 70,
		fat: 5,
		saturatedFat: 2,
		transFat: 0,
		sodium: 310,
		carbs: 0,
		protein: 6,
		image: '/applegate.webp',
	},
	{
		id: 4,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: 'All Natural Uncured Hickory Smoked Bacon',
		price: 4.78,
		resealable: '❌',
		servingSize: '1 slices (15g)',
		calories: 80,
		fat: 5,
		saturatedFat: 2,
		transFat: 0,
		sodium: 100,
		carbs: 0,
		protein: 4,
		image: 'smithfield.webp',
	},
	{
		id: 5,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Brown Sugar Thick Cut Bacon',
		resealable: '❌',
		servingSize: '2 slices (24g)',
		calories: 110,
		fat: 8,
		saturatedFat: 3,
		transFat: 0,
		sodium: 470,
		carbs: 1,
		protein: 8,
		image: '/hormel-black-label.webp',
	},
	{
		id: 6,
		companyName: 'Oscar Mayer',
		companyContacts: {
			website: 'https://www.oscarmayer.com/',
			facebook: 'https://www.facebook.com/OscarMayer',
			twitter: 'https://twitter.com/oscarmayer',
			instagram: 'https://www.instagram.com/oscarmayer/',
		},
		baconStyle: 'Naturally Hardwood Smoked',
		resealable: '❌',
		servingSize: '2 slices (19g)',
		calories: 90,
		fat: 7,
		saturatedFat: 2.5,
		transFat: 0,
		sodium: 350,
		carbs: 0,
		protein: 7,
		image: '/oscar-meyer.webp',
	},
	{
		id: 7,
		companyName: 'Great Value',
		companyContacts: {
			website: 'https://www.walmart.com/',
			facebook: 'https://www.facebook.com/walmart',
			twitter: 'https://twitter.com/walmart',
			instagram: 'https://www.instagram.com/walmart/',
		},
		baconStyle: 'Naturally Hickory Smoked Thick-Sliced Bacon',
		resealable: '❌',
		servingSize: '1 slice (16g)',
		calories: 70,
		fat: 5,
		saturatedFat: 2,
		transFat: 0,
		sodium: 280,
		carbs: 1,
		protein: 4,
		image: 'great-value.webp',
	},
	{
		id: 8,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},

		baconStyle: 'Maple Thick Cut Bacon',
		resealable: '❌',
		servingSize: '1 slice (16g)',
		calories: 80,
		fat: 5,
		saturatedFat: 2,
		transFat: 0,
		sodium: 260,
		carbs: 1,
		protein: 6,
		image: '/smithfield-maple-bacon.webp',
	},
	{
		id: 9,
		companyName: 'Wright',
		companyContacts: {
			website: 'https://www.wrightbrand.com/',
			phone: '1-800-233-6332',
			facebook: 'https://www.facebook.com/WrightBrand/',
		},
		baconStyle: 'Applewood Smoked Bacon (Thick Cut)',
		resealable: '✅',
		servingSize: '1 slice (14g)',
		calories: 80,
		fat: 7,
		saturatedFat: 2,
		transFat: 0,
		sodium: 250,
		carbs: 0,
		protein: 5,
		image: '/wright-applewood.png',
	},
	{
		id: 10,
		companyName: 'Wright',
		companyContacts: {
			website: 'https://www.wrightbrand.com/',
			phone: '1-800-233-6332',
			facebook: 'https://www.facebook.com/WrightBrand/',
		},
		baconStyle: 'Hickory Smoked Bacon (Thick Cut)',
		resealable: '✅',
		servingSize: '1 slice (14g)',
		calories: 80,
		fat: 7,
		saturatedFat: 2,
		transFat: 0,
		sodium: 250,
		carbs: 0,
		protein: 5,
		image: '/wright-hickory.png',
	},
    {
		id: 11,
		companyName: 'Boar\'s Head',
		companyContacts: {
			website: 'https://boarshead.com/products/franks-sausages-bacon',
			phone: '1-800-352-6277',
			facebook: 'https://www.facebook.com/BoarsHead/',
            twitter: 'https://twitter.com/boars_head',
            instagram: 'https://www.instagram.com/boarshead_official/'
		},
		baconStyle: 'Naturally Smoked Bacon',
		resealable: '❌',
		servingSize: '2 slices (12g)',
		calories: 60,
		fat: 4,
		saturatedFat: 1.5,
		transFat: 0,
		sodium: 230,
		carbs: 1,
		protein: 4,
		image: '/boars-head-natural.jpg',
	},
    {
		id: 12,
		companyName: 'Boar\'s Head',
		companyContacts: {
			website: 'https://boarshead.com/products/franks-sausages-bacon',
			phone: '1-800-352-6277',
			facebook: 'https://www.facebook.com/BoarsHead/',
            twitter: 'https://twitter.com/boars_head',
            instagram: 'https://www.instagram.com/boarshead_official/'
		},
		baconStyle: 'Simplicity All Natural Smoked Uncured Bacon',
		resealable: '❌',
		servingSize: '1 slice',
		calories: 50,
		fat: 3.5,
		saturatedFat: 1,
		transFat: 0,
		sodium: 250,
		carbs: 0,
		protein: 4,
		image: '/boars-head-simple.jpg',
	},
];

app.set('port', process.env.PORT || PORT);
app.locals.title = 'is-it-resealable';

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
	const data = app.locals.data;

	if (!data) {
		res.status(404).send({
			error: `Something went wrong with the server. Please try again!`,
		});
	}
	res.send({ data });
});

app.listen(app.get('port'), () => {
	console.log(
		`${app.locals.title} is running on http://localhost:${app.get('port')}.`
	);
});

module.exports = app;
