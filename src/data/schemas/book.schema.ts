const bookSchema = {
	type: 'object',
	properties: {
		title: {
			type: 'string',
			nullable: false,
			readOnly: true,
		},
		authors: {
			type: 'array',
			items: {
				type: 'string',
			},
		},
		publisher: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		year: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		edition: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		volume: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		series: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		isbn: {
			type: 'array',
			items: {
				type: 'string',
			},
		},
		image: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		description: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		link: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
	},
};

export default bookSchema;
