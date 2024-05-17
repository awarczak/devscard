import { format } from 'date-fns';
import config from '@/data/config';

const { locale, dateFormat } = config.i18n;

const formatDate = (date: Date): string => format(date, dateFormat, { locale });

export default formatDate;
