const players = [
	{
		id: '1547cbe1-e06a-417e-97dc-ce1de248d4e9',
		name: 'Daanyaal Hyde',
		country: 'EC',
		winnings: 2903,
		imageUrl: 'https://i.pravatar.cc/40?u=1547cbe1-e06a-417e-97dc-ce1de248d4e9'
	},
	{
		id: 'cdafe80b-6dc0-48f4-88d7-a51d96440808',
		name: 'Ayyub Goldsmith',
		country: 'GP',
		winnings: 21344,
		imageUrl: 'https://i.pravatar.cc/40?u=cdafe80b-6dc0-48f4-88d7-a51d96440808'
	},
	{
		id: '8ea5970d-27ff-47b5-a17c-11f59a2c1228',
		name: 'Aeryn Xiong',
		country: 'MR',
		winnings: 21750,
		imageUrl: 'https://i.pravatar.cc/40?u=8ea5970d-27ff-47b5-a17c-11f59a2c1228'
	},
	{
		id: '20525a2e-c8df-4435-a2a4-1212d0f44b41',
		name: 'Markus Paul',
		country: 'KZ',
		winnings: 76722,
		imageUrl: 'https://i.pravatar.cc/40?u=20525a2e-c8df-4435-a2a4-1212d0f44b41'
	},
	{
		id: '430850f2-1ed2-43e4-b9bc-6506456f28af',
		name: 'Darcie-Mae Clarkson',
		country: 'BV',
		winnings: 38081,
		imageUrl: 'https://i.pravatar.cc/40?u=430850f2-1ed2-43e4-b9bc-6506456f28af'
	},
	{
		id: '70b879ae-f2eb-448e-a255-ab2b740506c7',
		name: 'Ahsan Gentry',
		country: 'CV',
		winnings: 53738,
		imageUrl: 'https://i.pravatar.cc/40?u=70b879ae-f2eb-448e-a255-ab2b740506c7'
	},
	{
		id: '920f0e2a-fc0e-4fcc-a776-950c9be6c2f6',
		name: 'Lily-Ann Wilson',
		country: 'CR',
		winnings: 80434,
		imageUrl: 'https://i.pravatar.cc/40?u=920f0e2a-fc0e-4fcc-a776-950c9be6c2f6'
	},
	{
		id: '9a9bda5d-e9ef-49ab-b307-ab8923bf183e',
		name: 'Akbar Delaney',
		country: 'CC',
		winnings: 39004,
		imageUrl: 'https://i.pravatar.cc/40?u=9a9bda5d-e9ef-49ab-b307-ab8923bf183e'
	},
	{
		id: '4dc0ea7c-d53c-418c-973d-b20f52e776de',
		name: 'Ellise Greenwood',
		country: 'TM',
		winnings: 30387,
		imageUrl: 'https://i.pravatar.cc/40?u=4dc0ea7c-d53c-418c-973d-b20f52e776de'
	},
	{
		id: 'ba91f6ef-8a73-40a8-88ab-06fbaccacb4b',
		name: 'Shantelle Garcia',
		country: 'JE',
		winnings: 82922,
		imageUrl: 'https://i.pravatar.cc/40?u=ba91f6ef-8a73-40a8-88ab-06fbaccacb4b'
	},
	{
		id: '1614a275-7c0a-452f-9009-716b4657e092',
		name: 'Kunal Wheatley',
		country: 'UZ',
		winnings: 7542,
		imageUrl: 'https://i.pravatar.cc/40?u=1614a275-7c0a-452f-9009-716b4657e092'
	},
	{
		id: 'a4bd17f0-7ee9-4ef4-b5b2-e0af3e041160',
		name: 'Mekhi Mackenzie',
		country: 'TN',
		winnings: 75142,
		imageUrl: 'https://i.pravatar.cc/40?u=a4bd17f0-7ee9-4ef4-b5b2-e0af3e041160'
	},
	{
		id: '93b2d20c-cec6-4aee-a74d-f8e7d3fe5837',
		name: 'Kairon O"Brien',
		country: 'JO',
		winnings: 4088,
		imageUrl: 'https://i.pravatar.cc/40?u=93b2d20c-cec6-4aee-a74d-f8e7d3fe5837'
	},
	{
		id: 'fc982870-9db1-46ce-9bae-1c0493d523c3',
		name: 'Izabela Carney',
		country: 'LB',
		winnings: 79223,
		imageUrl: 'https://i.pravatar.cc/40?u=fc982870-9db1-46ce-9bae-1c0493d523c3'
	},
	{
		id: '0a318512-81d6-41e2-9689-bdbcc0a4fede',
		name: 'Zavier Flores',
		country: 'BG',
		winnings: 73802,
		imageUrl: 'https://i.pravatar.cc/40?u=0a318512-81d6-41e2-9689-bdbcc0a4fede'
	},
	{
		id: 'cfc3b124-65d5-4b5b-beba-769d8d685caa',
		name: 'Jayce Mcnally',
		country: 'TZ',
		winnings: 57556,
		imageUrl: 'https://i.pravatar.cc/40?u=cfc3b124-65d5-4b5b-beba-769d8d685caa'
	},
	{
		id: '81e9d0c2-7191-413f-a830-1e203612c8f7',
		name: 'Matthias Walmsley',
		country: 'LT',
		winnings: 71027,
		imageUrl: 'https://i.pravatar.cc/40?u=81e9d0c2-7191-413f-a830-1e203612c8f7'
	},
	{
		id: '5ca222c6-43b0-4d18-b362-2c186a5b8c93',
		name: 'Anya Townsend',
		country: 'BQ',
		winnings: 61785,
		imageUrl: 'https://i.pravatar.cc/40?u=5ca222c6-43b0-4d18-b362-2c186a5b8c93'
	},
	{
		id: '93bec50a-ba55-435e-9c6a-2a6926f786f1',
		name: 'Trinity Taylor',
		country: 'BE',
		winnings: 1514,
		imageUrl: 'https://i.pravatar.cc/40?u=93bec50a-ba55-435e-9c6a-2a6926f786f1'
	},
	{
		id: '1799850d-e139-41be-8642-aab8ea4b4f6b',
		name: 'Carolyn Marsh',
		country: 'AW',
		winnings: 83149,
		imageUrl: 'https://i.pravatar.cc/40?u=1799850d-e139-41be-8642-aab8ea4b4f6b'
	},
	{
		id: '219119a7-e538-4758-8986-012f232637b8',
		name: 'Vinnie Cartwright',
		country: 'SS',
		winnings: 2010,
		imageUrl: 'https://i.pravatar.cc/40?u=219119a7-e538-4758-8986-012f232637b8'
	},
	{
		id: '9f0efea5-b1fc-4f35-9588-4b84935732f7',
		name: 'Jazmin Chan',
		country: 'ES',
		winnings: 53607,
		imageUrl: 'https://i.pravatar.cc/40?u=9f0efea5-b1fc-4f35-9588-4b84935732f7'
	},
	{
		id: '8b83cd8f-86b0-4da7-b965-4f50794de6ba',
		name: 'Lavinia Bartlett',
		country: 'RU',
		winnings: 90925,
		imageUrl: 'https://i.pravatar.cc/40?u=8b83cd8f-86b0-4da7-b965-4f50794de6ba'
	},
	{
		id: '17116725-6e37-482d-9074-516d4cf9cded',
		name: 'Lucien Rodriguez',
		country: 'HM',
		winnings: 48029,
		imageUrl: 'https://i.pravatar.cc/40?u=17116725-6e37-482d-9074-516d4cf9cded'
	},
	{
		id: '355068a1-9170-47b7-b740-f514c33c8abf',
		name: 'Nelson Hirst',
		country: 'CX',
		winnings: 18244,
		imageUrl: 'https://i.pravatar.cc/40?u=355068a1-9170-47b7-b740-f514c33c8abf'
	},
	{
		id: '40d79b14-e44c-434e-af2a-6ee3f5c3f03e',
		name: 'Jevon Greaves',
		country: 'CL',
		winnings: 18473,
		imageUrl: 'https://i.pravatar.cc/40?u=40d79b14-e44c-434e-af2a-6ee3f5c3f03e'
	},
	{
		id: 'f3d8607a-cdc1-4088-89bf-f54609fe5ea0',
		name: 'Vanessa Horton',
		country: 'MT',
		winnings: 89529,
		imageUrl: 'https://i.pravatar.cc/40?u=f3d8607a-cdc1-4088-89bf-f54609fe5ea0'
	},
	{
		id: 'c3f67d38-3ecb-4f8f-8348-8786ee95da26',
		name: 'Ravinder Ward',
		country: 'SX',
		winnings: 90842,
		imageUrl: 'https://i.pravatar.cc/40?u=c3f67d38-3ecb-4f8f-8348-8786ee95da26'
	},
	{
		id: 'b65c2c94-434d-4392-9822-45ed140566ac',
		name: 'Shiloh Storey',
		country: 'MS',
		winnings: 4944,
		imageUrl: 'https://i.pravatar.cc/40?u=b65c2c94-434d-4392-9822-45ed140566ac'
	},
	{
		id: '6ae650db-31da-4094-adce-a1f5f5e600ec',
		name: 'Melody Macdonald',
		country: 'TM',
		winnings: 68759,
		imageUrl: 'https://i.pravatar.cc/40?u=6ae650db-31da-4094-adce-a1f5f5e600ec'
	},
	{
		id: 'b787a137-3f49-4f6c-af3e-d3465c60fa44',
		name: 'Allana Moran',
		country: 'WS',
		winnings: 77432,
		imageUrl: 'https://i.pravatar.cc/40?u=b787a137-3f49-4f6c-af3e-d3465c60fa44'
	},
	{
		id: 'cf905364-4de5-4b4e-8418-fe3fa78db32a',
		name: 'Idrees Pugh',
		country: 'BM',
		winnings: 53900,
		imageUrl: 'https://i.pravatar.cc/40?u=cf905364-4de5-4b4e-8418-fe3fa78db32a'
	},
	{
		id: '42d2e57f-85c7-4efa-86ac-5b85726b35c0',
		name: 'Fraya Couch',
		country: 'WS',
		winnings: 51849,
		imageUrl: 'https://i.pravatar.cc/40?u=42d2e57f-85c7-4efa-86ac-5b85726b35c0'
	},
	{
		id: '8e8a2a51-bddf-4c85-ac74-57eb9e82f32b',
		name: 'Trey Dudley',
		country: 'EE',
		winnings: 40150,
		imageUrl: 'https://i.pravatar.cc/40?u=8e8a2a51-bddf-4c85-ac74-57eb9e82f32b'
	},
	{
		id: 'e1c25857-60b4-4e1e-9b4f-fe0b94a45012',
		name: 'Patience Wicks',
		country: 'VC',
		winnings: 79980,
		imageUrl: 'https://i.pravatar.cc/40?u=e1c25857-60b4-4e1e-9b4f-fe0b94a45012'
	},
	{
		id: '584a8108-cc2e-4ac6-9d47-6d059aa45710',
		name: 'Rida Mcdermott',
		country: 'VG',
		winnings: 7209,
		imageUrl: 'https://i.pravatar.cc/40?u=584a8108-cc2e-4ac6-9d47-6d059aa45710'
	},
	{
		id: 'e9096acd-b0f6-4bd1-8da6-9ccd156a36cc',
		name: 'Mohsin Hess',
		country: 'TN',
		winnings: 36203,
		imageUrl: 'https://i.pravatar.cc/40?u=e9096acd-b0f6-4bd1-8da6-9ccd156a36cc'
	},
	{
		id: 'ae085d43-3c4d-442f-ab06-e46216ac73e9',
		name: 'Michael Turner',
		country: 'IL',
		winnings: 84577,
		imageUrl: 'https://i.pravatar.cc/40?u=ae085d43-3c4d-442f-ab06-e46216ac73e9'
	},
	{
		id: '9daf8a4e-1c60-4fca-8ba1-8b3d5917e544',
		name: 'Samuel Whittington',
		country: 'SA',
		winnings: 66893,
		imageUrl: 'https://i.pravatar.cc/40?u=9daf8a4e-1c60-4fca-8ba1-8b3d5917e544'
	},
	{
		id: 'e6d4c0c0-503e-44aa-9f7b-c76fa5fe2090',
		name: 'Abubakr Hartley',
		country: 'PS',
		winnings: 75327,
		imageUrl: 'https://i.pravatar.cc/40?u=e6d4c0c0-503e-44aa-9f7b-c76fa5fe2090'
	},
	{
		id: 'effd1c5c-fd0c-4491-9d8c-28db6f5cb271',
		name: 'Siraj Walls',
		country: 'KG',
		winnings: 24459,
		imageUrl: 'https://i.pravatar.cc/40?u=effd1c5c-fd0c-4491-9d8c-28db6f5cb271'
	},
	{
		id: '8eb12363-d64a-4c1c-8c11-62e03e86c31a',
		name: 'Braxton Leal',
		country: 'NR',
		winnings: 10270,
		imageUrl: 'https://i.pravatar.cc/40?u=8eb12363-d64a-4c1c-8c11-62e03e86c31a'
	},
	{
		id: 'df9a5a88-86e6-454e-a154-03359640867b',
		name: 'Albi Erickson',
		country: 'GT',
		winnings: 25247,
		imageUrl: 'https://i.pravatar.cc/40?u=df9a5a88-86e6-454e-a154-03359640867b'
	},
	{
		id: 'bfce9ce3-758e-4594-b64e-bce15bcd56da',
		name: 'Saqib Gallegos',
		country: 'BO',
		winnings: 66163,
		imageUrl: 'https://i.pravatar.cc/40?u=bfce9ce3-758e-4594-b64e-bce15bcd56da'
	},
	{
		id: 'fc8343b0-605a-427e-a771-15acf52b8d11',
		name: 'Humayra Chen',
		country: 'NF',
		winnings: 90846,
		imageUrl: 'https://i.pravatar.cc/40?u=fc8343b0-605a-427e-a771-15acf52b8d11'
	},
	{
		id: '90f9cb1d-6f78-408e-87f2-3e514cac2758',
		name: 'Amaan Hebert',
		country: 'AW',
		winnings: 87000,
		imageUrl: 'https://i.pravatar.cc/40?u=90f9cb1d-6f78-408e-87f2-3e514cac2758'
	},
	{
		id: '059f171c-b42f-48a3-bf78-aafb5dfd9a77',
		name: 'Prisha Craft',
		country: 'NI',
		winnings: 39867,
		imageUrl: 'https://i.pravatar.cc/40?u=059f171c-b42f-48a3-bf78-aafb5dfd9a77'
	},
	{
		id: '68ba4d39-2ae8-4756-8456-e0e6f23e48a3',
		name: 'Caio Dickinson',
		country: 'CZ',
		winnings: 65631,
		imageUrl: 'https://i.pravatar.cc/40?u=68ba4d39-2ae8-4756-8456-e0e6f23e48a3'
	},
	{
		id: '30b314eb-a371-4dcf-8e9c-3cab6d036df0',
		name: 'Natan Quintana',
		country: 'TJ',
		winnings: 53653,
		imageUrl: 'https://i.pravatar.cc/40?u=30b314eb-a371-4dcf-8e9c-3cab6d036df0'
	},
	{
		id: '71e7bde2-a789-44fa-9bef-324eae89837d',
		name: 'Marcia Piper',
		country: 'CO',
		winnings: 96113,
		imageUrl: 'https://i.pravatar.cc/40?u=71e7bde2-a789-44fa-9bef-324eae89837d'
	}
]

export default {
	players
};