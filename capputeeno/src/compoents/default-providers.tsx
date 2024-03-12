"use client"

import { FilterContextProvider } from "@/context/filter.context";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

interface Props {
    children: React.ReactNode;
}

const theme = {
    desktopBreakpoint: "1068px",
    tabletBreakpoint: "768px",
}
export function DefaultProviders({ children }: Props) {
    const client = new QueryClient();

    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    );
}