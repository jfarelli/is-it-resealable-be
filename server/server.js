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
		companyName: 'Wright',
		companyContacts: {
			website: 'https://www.wrightbrand.com/',
			phone: '1-800-233-6332',
			facebook: 'https://www.facebook.com/WrightBrand/',
		},
		baconStyle: 'Cowboy Rub Bacon',
		resealable: '✅',
		image: '/wright-cowboy.png',
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
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Premium Cherrywood Bacon',
		resealable: '❌',
		image: '/hormel-cherry.png',
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
		companyName: "Boar's Head",
		companyContacts: {
			website: 'https://boarshead.com/products/franks-sausages-bacon',
			phone: '1-800-352-6277',
			facebook: 'https://www.facebook.com/BoarsHead/',
			twitter: 'https://twitter.com/boars_head',
			instagram: 'https://www.instagram.com/boarshead_official/',
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
		companyName: 'Applegate Organics',
		companyContacts: {
			website: 'https://applegate.com/',
			phone: '1-908-725-5800',
			facebook: 'https://www.facebook.com/applegate/',
			twitter: 'https://twitter.com/Applegate',
			instagram: 'https://www.instagram.com/applegate/',
			linkedIn: 'https://www.linkedin.com/company/applegate/',
		},
		baconStyle: 'No Sugar Bacon',
		resealable: '❌',
		image: '/AF-no-sugar-bacon.jpg',
	},
	{
		id: 13,
		companyName: 'Applegate Organics',
		companyContacts: {
			website: 'https://applegate.com/',
			phone: '1-908-725-5800',
			facebook: 'https://www.facebook.com/applegate/',
			twitter: 'https://twitter.com/Applegate',
			instagram: 'https://www.instagram.com/applegate/',
			linkedIn: 'https://www.linkedin.com/company/applegate/',
		},
		baconStyle: 'Sunday Bacon',
		resealable: '❌',
		image: '/AF-sunday-bacon.jpg',
	},
	{
		id: 14,
		companyName: 'Applegate Organics',
		companyContacts: {
			website: 'https://applegate.com/',
			phone: '1-908-725-5800',
			facebook: 'https://www.facebook.com/applegate/',
			twitter: 'https://twitter.com/Applegate',
			instagram: 'https://www.instagram.com/applegate/',
			linkedIn: 'https://www.linkedin.com/company/applegate/',
		},
		baconStyle: 'Turkey Bacon',
		resealable: '❌',
		image: '/AF-turkey-bacon.jpg',
	},
	{
		id: 15,
		companyName: 'Applegate Naturals',
		companyContacts: {
			website: 'https://applegate.com/',
			phone: '1-908-725-5800',
			facebook: 'https://www.facebook.com/applegate/',
			twitter: 'https://twitter.com/Applegate',
			instagram: 'https://www.instagram.com/applegate/',
			linkedIn: 'https://www.linkedin.com/company/applegate/',
		},
		baconStyle: 'No Sugar Bacon',
		resealable: '❌',
		image: '/AN-no-sugar-bacon.jpg',
	},
	{
		id: 16,
		companyName: 'Applegate Naturals',
		companyContacts: {
			website: 'https://applegate.com/',
			phone: '1-908-725-5800',
			facebook: 'https://www.facebook.com/applegate/',
			twitter: 'https://twitter.com/Applegate',
			instagram: 'https://www.instagram.com/applegate/',
			linkedIn: 'https://www.linkedin.com/company/applegate/',
		},
		baconStyle: 'Sunday Bacon',
		resealable: '❌',
		image: '/AN-sunday-bacon.jpg',
	},
	{
		id: 17,
		companyName: 'Applegate Naturals',
		companyContacts: {
			website: 'https://applegate.com/',
			phone: '1-908-725-5800',
			facebook: 'https://www.facebook.com/applegate/',
			twitter: 'https://twitter.com/Applegate',
			instagram: 'https://www.instagram.com/applegate/',
			linkedIn: 'https://www.linkedin.com/company/applegate/',
		},
		baconStyle: 'Thick Cut Bacon',
		resealable: '❌',
		image: '/AN-thick-cut.jpg',
	},
	{
		id: 18,
		companyName: 'Applegate Naturals',
		companyContacts: {
			website: 'https://applegate.com/',
			phone: '1-908-725-5800',
			facebook: 'https://www.facebook.com/applegate/',
			twitter: 'https://twitter.com/Applegate',
			instagram: 'https://www.instagram.com/applegate/',
			linkedIn: 'https://www.linkedin.com/company/applegate/',
		},
		baconStyle: 'Turkey Bacon',
		resealable: '❌',
		image: '/AN-turkey-bacon.jpg',
	},
	{
		id: 19,
		companyName: "Nature's Rancher",
		companyContacts: {
			twitter: 'https://twitter.com/NaturesRancher',
			facebook: 'https://www.facebook.com/naturesrancher/',
			website: 'https://naturesrancher.com/',
			phone: '1-254-386–4790',
		},

		baconStyle: 'No Sugar Added Hickory Smoked Uncured Bacon',
		resealable: '❌',
		image: '/NR-no-sugar.webp',
	},
	{
		id: 20,
		companyName: "Nature's Rancher",
		companyContacts: {
			twitter: 'https://twitter.com/NaturesRancher',
			facebook: 'https://www.facebook.com/naturesrancher/',
			website: 'https://naturesrancher.com/',
			phone: '1-254-386–4790',
		},

		baconStyle: 'Steakhouse Smoked Uncured Bacon',
		resealable: '❌',
		image: '/NR-Steakhouse-Smoked-Bacon.webp',
	},
	{
		id: 21,
		companyName: "Nature's Rancher",
		companyContacts: {
			twitter: 'https://twitter.com/NaturesRancher',
			facebook: 'https://www.facebook.com/naturesrancher/',
			website: 'https://naturesrancher.com/',
			phone: '1-254-386–4790',
		},

		baconStyle: 'Hickory Smoked Uncured Bacon',
		resealable: '❌',
		image: '/NR-Hickory-Smoked-Uncured-Bacon.webp',
	},
	{
		id: 22,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: "Bacon Lover's Double Thick Double Smoked Bacon",
		resealable: '❌',
		image: 'smith-double.webp',
	},
	{
		id: 23,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: 'Center Cut Applewood Smoked Bacon',
		resealable: '❌',
		image: 'smith-center-cut.webp',
	},
	{
		id: 24,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: 'Hometown Original Bacon Family Pack',
		resealable: '❌',
		image: 'smith-family.webp',
	},
	{
		id: 25,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: 'Applewood Smoked Thick Cut Bacon Family Pack',
		resealable: '❌',
		image: 'smith-family-apple.webp',
	},
	{
		id: 26,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: 'Fully Cooked Hometown Original Bacon',
		resealable: '❌',
		image: 'smith-cooked.webp',
	},
	{
		id: 27,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: 'Hometown Original Bacon',
		resealable: '❌',
		image: 'smith-hometown.webp',
	},
	{
		id: 28,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: 'Cherrywood Smoked Bacon',
		resealable: '❌',
		image: 'smith-cherry.webp',
	},
	{
		id: 29,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: 'Applewood Smoked Bacon',
		resealable: '❌',
		image: 'smith-apple.webp',
	},
	{
		id: 30,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: 'Thick Cut Bacon',
		resealable: '❌',
		image: 'smith-thick.webp',
	},
	{
		id: 31,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: 'Hometown Original Thick Cut Bacon',
		resealable: '✅',
		image: 'smith-hometown-thick.webp',
	},
	{
		id: 32,
		companyName: 'Smithfield',
		companyContacts: {
			website: 'https://smithfield.sfdbrands.com/en-us/',
			phone: '1-855-411-7675',
			facebook: 'https://www.facebook.com/SmithfieldBrand',
			twitter: 'https://twitter.com/Smithfieldbrand',
			instagram: 'https://www.instagram.com/smithfieldbrand/',
		},
		baconStyle: 'Applewood Smoked Thick Cut Bacon',
		resealable: '❌',
		image: 'smith-apple-thick.webp',
	},
	{
		id: 33,
		companyName: "Boar's Head",
		companyContacts: {
			website: 'https://boarshead.com/products/franks-sausages-bacon',
			phone: '1-800-352-6277',
			facebook: 'https://www.facebook.com/BoarsHead/',
			twitter: 'https://twitter.com/boars_head',
			instagram: 'https://www.instagram.com/boarshead_official/',
		},
		baconStyle: 'All-Natural Uncured Bacon',
		resealable: '❌',
		image: '/BH-natural.jpg',
	},
	{
		id: 34,
		companyName: "Boar's Head",
		companyContacts: {
			website: 'https://boarshead.com/products/franks-sausages-bacon',
			phone: '1-800-352-6277',
			facebook: 'https://www.facebook.com/BoarsHead/',
			twitter: 'https://twitter.com/boars_head',
			instagram: 'https://www.instagram.com/boarshead_official/',
		},
		baconStyle: 'Butcher Craft Extra Thick Cut Naturally Smoked Bacon',
		resealable: '❌',
		image: '/BH-thick.jpg',
	},
	{
		id: 35,
		companyName: "Boar's Head",
		companyContacts: {
			website: 'https://boarshead.com/products/franks-sausages-bacon',
			phone: '1-800-352-6277',
			facebook: 'https://www.facebook.com/BoarsHead/',
			twitter: 'https://twitter.com/boars_head',
			instagram: 'https://www.instagram.com/boarshead_official/',
		},
		baconStyle: 'Maple & Brown Sugar Bacon',
		resealable: '❌',
		image: '/BH-maple.jpg',
	},
	{
		id: 36,
		companyName: "Boar's Head",
		companyContacts: {
			website: 'https://boarshead.com/products/franks-sausages-bacon',
			phone: '1-800-352-6277',
			facebook: 'https://www.facebook.com/BoarsHead/',
			twitter: 'https://twitter.com/boars_head',
			instagram: 'https://www.instagram.com/boarshead_official/',
		},
		baconStyle: 'Naturally Smoked Traditional Bacon',
		resealable: '❌',
		image: '/BH-smoked.jpg',
	},
	{
		id: 37,
		companyName: "Boar's Head",
		companyContacts: {
			website: 'https://boarshead.com/products/franks-sausages-bacon',
			phone: '1-800-352-6277',
			facebook: 'https://www.facebook.com/BoarsHead/',
			twitter: 'https://twitter.com/boars_head',
			instagram: 'https://www.instagram.com/boarshead_official/',
		},
		baconStyle: 'Simplicity All Natural Smoked Uncured Bacon',
		resealable: '❌',
		image: '/BH-simple.jpg',
	},
	{
		id: 38,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Premium Brown Sugar Bacon',
		resealable: '❌',
		image: '/hormel-brown-sugar.png',
	},
	{
		id: 39,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Premium Maple Black Pepper Bacon',
		resealable: '❌',
		image: '/hormel-maple.png',
	},
	{
		id: 40,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Classic Country Style Bacon',
		resealable: '❌',
		image: '/hormel-classic.png',
	},
	{
		id: 41,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Cracked Black Pepper Thick Cut Bacon',
		resealable: '❌',
		image: '/hormel-black-pepper.png',
	},
	{
		id: 42,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Premium Applewood Bacon',
		resealable: '❌',
		image: '/hormel-apple.png',
	},
	{
		id: 43,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Original Thick Cut Bacon',
		resealable: '❌',
		image: '/hormel-thick.png',
	},
	{
		id: 44,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Center Cut Bacon',
		resealable: '❌',
		image: '/hormel-center.png',
	},
	{
		id: 45,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Lower Sodium Bacon',
		resealable: '❌',
		image: '/hormel-low-sodium.png',
	},
	{
		id: 46,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Maple Bacon',
		resealable: '❌',
		image: '/hormel-maple-2.png',
	},
	{
		id: 47,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Original 24oz Stack Pack',
		resealable: '❌',
		image: '/hormel-thick-pack.png',
	},
	{
		id: 48,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Pecanwood Bacon 24oz Stack Pack',
		resealable: '❌',
		image: '/hormel-pecan.png',
	},
	{
		id: 49,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Cherrywood Bacon 24oz Stack Pack',
		resealable: '❌',
		image: '/hormel-cherry-pack.png',
	},
	{
		id: 50,
		companyName: 'Hormel Black Label',
		companyContacts: {
			website: 'https://www.hormel.com/Brands/BlackLabelBacon',
			facebook: 'https://www.facebook.com/blacklabelbacon/',
			twitter: 'https://twitter.com/blacklabelbacon',
			instagram: 'https://www.instagram.com/blacklabelbacon/',
		},
		baconStyle: 'Brown Sugar Bacon 24oz Stack Pack',
		resealable: '❌',
		image: '/hormel-brown-pack.png',
	},
	{
		id: 51,
		companyName: 'Oscar Mayer',
		companyContacts: {
			website: 'https://www.oscarmayer.com/',
			facebook: 'https://www.facebook.com/OscarMayer',
			twitter: 'https://twitter.com/oscarmayer',
			instagram: 'https://www.instagram.com/oscarmayer/',
		},
		baconStyle: 'Uncured Turkey Bacon',
		resealable: '❌',
		image: '/oscar-turkey.png',
	},
	{
		id: 52,
		companyName: 'Oscar Mayer',
		companyContacts: {
			website: 'https://www.oscarmayer.com/',
			facebook: 'https://www.facebook.com/OscarMayer',
			twitter: 'https://twitter.com/oscarmayer',
			instagram: 'https://www.instagram.com/oscarmayer/',
		},
		baconStyle: 'Turkey Bacon',
		resealable: '❌',
		image: '/oscar-turkey-2.png',
	},
	{
		id: 53,
		companyName: 'Oscar Mayer',
		companyContacts: {
			website: 'https://www.oscarmayer.com/',
			facebook: 'https://www.facebook.com/OscarMayer',
			twitter: 'https://twitter.com/oscarmayer',
			instagram: 'https://www.instagram.com/oscarmayer/',
		},
		baconStyle: 'Center Cut Bacon',
		resealable: '❌',
		image: '/oscar-center.png',
	},
	{
		id: 54,
		companyName: 'Oscar Mayer',
		companyContacts: {
			website: 'https://www.oscarmayer.com/',
			facebook: 'https://www.facebook.com/OscarMayer',
			twitter: 'https://twitter.com/oscarmayer',
			instagram: 'https://www.instagram.com/oscarmayer/',
		},
		baconStyle: 'Naturally Hardwood Smoked Bacon',
		resealable: '❌',
		image: '/oscar-og.png',
	},
	{
		id: 55,
		companyName: 'Oscar Mayer',
		companyContacts: {
			website: 'https://www.oscarmayer.com/',
			facebook: 'https://www.facebook.com/OscarMayer',
			twitter: 'https://twitter.com/oscarmayer',
			instagram: 'https://www.instagram.com/oscarmayer/',
		},
		baconStyle: 'Center Cut Thick Cut Bacon',
		resealable: '❌',
		image: '/oscar-center-thick.png',
	},
	{
		id: 56,
		companyName: 'Oscar Mayer',
		companyContacts: {
			website: 'https://www.oscarmayer.com/',
			facebook: 'https://www.facebook.com/OscarMayer',
			twitter: 'https://twitter.com/oscarmayer',
			instagram: 'https://www.instagram.com/oscarmayer/',
		},
		baconStyle: 'Naturally Hardwood Smoked Thick Cut Bacon',
		resealable: '❌',
		image: '/oscar-thick.png',
	},
	{
		id: 57,
		companyName: 'Oscar Mayer',
		companyContacts: {
			website: 'https://www.oscarmayer.com/',
			facebook: 'https://www.facebook.com/OscarMayer',
			twitter: 'https://twitter.com/oscarmayer',
			instagram: 'https://www.instagram.com/oscarmayer/',
		},
		baconStyle: 'Natural Smoked Uncured Bacon ',
		resealable: '❌',
		image: '/oscar-natural.png',
	},
	{
		id: 58,
		companyName: 'Oscar Mayer',
		companyContacts: {
			website: 'https://www.oscarmayer.com/',
			facebook: 'https://www.facebook.com/OscarMayer',
			twitter: 'https://twitter.com/oscarmayer',
			instagram: 'https://www.instagram.com/oscarmayer/',
		},
		baconStyle: 'Naturally Hardwood Smoked Lower Sodium Bacon',
		resealable: '❌',
		image: '/oscar-low.png',
	},
    {
		id: 59,
		companyName: 'Wright',
		companyContacts: {
			website: 'https://www.wrightbrand.com/',
			phone: '1-800-233-6332',
			facebook: 'https://www.facebook.com/WrightBrand/',
		},
		baconStyle: 'Maple Flavored Bacon',
		resealable: '✅',
		image: '/wright-maple.png',
	},
    {
		id: 60,
		companyName: 'Wright',
		companyContacts: {
			website: 'https://www.wrightbrand.com/',
			phone: '1-800-233-6332',
			facebook: 'https://www.facebook.com/WrightBrand/',
		},
		baconStyle: 'Brown Sugar Flavored Bacon',
		resealable: '✅',
		image: '/wright-brown.png',
	},
    {
		id: 61,
		companyName: 'Wright',
		companyContacts: {
			website: 'https://www.wrightbrand.com/',
			phone: '1-800-233-6332',
			facebook: 'https://www.facebook.com/WrightBrand/',
		},
		baconStyle: 'Double Smoked Bacon',
		resealable: '✅',
		image: '/wright-double.png',
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
