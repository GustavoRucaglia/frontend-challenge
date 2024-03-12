import { ProductsFetchResponse } from "../types/productsFetchResponse";
import { useQuery } from "react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { FilterType } from "@/types/filter-type";
import { Priority } from "@/types/priority";
const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

function getCategory(type: FilterType) {
    if(type == FilterType.MUG) return "mugs"
    if(type == FilterType.SHIRT) return "t-shirts"
    return ""
}

function getFieldByPriority(priority: Priority) {
    if (priority === Priority.NEWS) {
        return { field: "created_at", order: "ASC" };
    }
    if (priority === Priority.MINOR_PRICE) {
        return { field: "price_in_cents", order: "ASC" };
    }
    if (priority === Priority.BIGGEST_PRICE) {
        return { field: "price_in_cents", order: "DESC" }; 
    }
    return { field: "sales", order: "DESC" }; 
}

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
    return axios.post(API_URL, { query });
};

const mountQuery = (type: FilterType, priority: Priority) => {
    const sortSettings = getFieldByPriority(priority);
    const categoryFilter = getCategory(type);

    if (type === FilterType.ALL && priority === Priority.POPULARITY) {
        return `
        query {
            allProducts(sortField: "sales", sortOrder: "DSC") {
              id
              name
              price_in_cents
              image_url
            }
          }
        `;
    }

    return `
    query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}) {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
    `;
};

export function useProducts() {
    const { type, priority } = useFilter();
    const query = mountQuery(type, priority);
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority]
    });

    return {
        data: data?.data?.data?.allProducts
    };
}
