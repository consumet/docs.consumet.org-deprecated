import { libgenBookSchema } from './index';

const libgenResult = {
  properties: {
    result: {
      $ref: '#/components/schemas/LibgenBook',
    },
    hasNextPage: {
      type: 'boolean',
      nullable: false,
      readOnly: true,
    },
  },
};

export default libgenResult;
