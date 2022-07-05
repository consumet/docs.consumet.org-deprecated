const hashesSchema = {
	type: 'object',
	properties: {
		AICH: {
			type: 'string',
			nullable: false,
			readOnly: true,
		},
		CRC32: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		eDonkey: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		MD5: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		SHA1: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
		SHA256: {
			type: 'array',
			items: {
				type: 'string',
			},
		},
		TTH: {
			type: 'string',
			nullable: true,
			readOnly: true,
		},
	},
};

export default hashesSchema;
