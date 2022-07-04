const libgenBookSchema = {
	allOf: [
		{
			$ref: '#/components/schemas/Book',
		},
	],
	type: 'object',
	properties: {
		id: {
			type: 'string',
			nullable: false,
			readOnly: true,
		},
		language: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		format: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		size: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		pages: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		tableOfContents: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		topic: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		hashes: {
			$ref: '#/components/schemas/Hashes',
		},
	},
};

export default libgenBookSchema;
