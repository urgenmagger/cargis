import useSWRInfinite from 'swr';
import {OrdersData} from '../utils/types';

interface ReturnHook {
  data: OrdersData | undefined;
  isLoading: boolean;
  isValidating: boolean;
  fetchMore(): void;
}

const useGetOrders = (): ReturnHook => {
  const fetcher = async (url: string, token: string): Promise<OrdersData> => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch(url, {
      headers,
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }
    console.log('urgen response', JSON.stringify(response, null, 3));
    return response.json();
  };

  const token = 'dZhzHlw8Flpsf8W9Duq4rsJ1UVT4dRlW';
  const initialUrl = 'https://admin-ct.cargis.pro/api/client/v1/order/list?';

  // const getKey = (pageIndex: number, previousPageData: OrdersData) => {
  //   if (previousPageData && !previousPageData.nextPage) {
  //     return null; // No more data
  //   }

  //   const adjustedPageIndex = previousPageData ? pageIndex : pageIndex + 1; // Increment pageIndex for subsequent pages
  //   console.log('urgen adjustedPageIndex', adjustedPageIndex);

  //   return `${initialUrl}page=${adjustedPageIndex}`;
  // };

  const {data, error, size, setSize} = useSWRInfinite(
    (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.nextPage) {
        return null; // No more data
      }

      const adjustedPageIndex = previousPageData ? pageIndex : pageIndex + 1; // Increment pageIndex for subsequent pages
      console.log('urgen adjustedPageIndex', adjustedPageIndex);

      const url = `${initialUrl}page=${adjustedPageIndex}`;
      return fetcher(url, token);
    },
  );

  console.log('urgen data from hook', data);

  if (error) {
    console.log(error);
  }

  if (!data) {
    console.log('loading');
  }

  const ordersData =
    data && Array.isArray(data) ? data.flatMap(page => page.results) : [];

  const fetchMore = () => {
    setSize(size + 1);
  };

  return {
    data: ordersData,
    isLoading: !data && !error,
    isValidating: false,
    fetchMore,
  };
};
export default useGetOrders;
