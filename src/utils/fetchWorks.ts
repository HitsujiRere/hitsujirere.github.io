import { type Work } from '@/types/Work';

export const fetchWorks = async (): Promise<Work[]> => {
  return fetch(`${process.env.BASE_FETCH_URL}/works.json`)
    .then((res) => res.json())
    .then((data) => data as Work[]);
};
