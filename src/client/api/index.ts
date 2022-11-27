import { data } from './mock';

export const getData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                code: 0,
                data,
            });
        }, 100);
    });
};
