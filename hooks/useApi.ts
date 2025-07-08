// import { useState } from 'react';
// import api from '@/lib/axios';

// type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

// export const useApi = <T = any>() => {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const request = async (
//     method: HttpMethod,
//     url: string,
//     data?: any,
//     params?: any
//   ): Promise<T | null> => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await api.request<T>({
//         method,
//         url,
//         data,
//         params,
//       });

//       return response.data;
//     } catch (err: any) {
//       console.error('API Error:', err);

//       if (err.response?.data?.message) {
//         setError(err.response.data.message);
//       } else {
//         setError("Une erreur inattendue s'est produite.");
//       }

//       return null;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { request, loading, error };
// };
