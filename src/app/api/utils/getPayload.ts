import { getPayload } from 'payload';
import config from '../../../payload.config';

export const initPayload = async () => {
  const payload = await getPayload({
    config
  });
  
  return payload;
};