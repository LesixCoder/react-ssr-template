import React, { createContext } from 'react';

interface IRootContextProps {
    initialData: any;
}

interface IProps {
    children: JSX.Element;
    initialData: any;
}

export const RootContext = createContext<IRootContextProps>({} as IRootContextProps);

const RootContextProvider = ({ children, initialData }: IProps): JSX.Element => {
    return <RootContext.Provider value={{ initialData }}>{children}</RootContext.Provider>;
};

export default RootContextProvider;
