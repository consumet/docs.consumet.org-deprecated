import { bookSchema, hashesSchema, libgenBookSchema } from './schemas';

const openapi = {
	openapi: '3.1.0',
	info: {
		title: 'Consumet',
		description:
			'Consumet is a search engine api that allows you to get acurite information on various entertainment mediums, e.g, books, anime, comics, etc.',
		contact: {
			name: 'Consumet',
			url: 'https://github.com/consumet/api',
			email: 'consumet.org@gmail.com',
		},
		license: {
			name: 'MIT',
			url: 'https://mit-license.org/',
		},
	},
	servers: [{ url: 'http://api.consumet.org' }],
	components: {
		schemas: {
			Book: bookSchema,
			Hashes: hashesSchema,
			LibgenBook: libgenBookSchema,
		},
	},
	paths: {
		'/books/s/{bookTitle}': {
			summary: 'Get book list',
			get: {
				tags: ['books'],
				summary: 'Get book list',
				operationId: 'getBookList',
				parameters: [
					{
						name: '{bookTitle}',
						in: 'path',
						description: "the book's title.",
						required: 'true',
						style: 'path - simple',
						schema: {
							type: 'string',
						},
					},
				],
				responses: {
					'200': {
						description: 'OK',
						content: {
							json: {
								schema: {
									type: 'array',
									items: {
										$ref: '#/components/schemas/LibgenBook',
									},
								},
							},
						},
					},
				},
			},
		},
	},
};

export default openapi;
