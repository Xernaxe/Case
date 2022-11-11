export type packType = {
	[key: string]: {
		name: string;
		price: number;
		image: string;
	};
};

export type pack = {
	type: {
		name: string;
		price: number;
		image: string;
	};
	count: number;
	currency: string;
};