// Note: This is a sample code to demonstrate how to use local storage
// This is used in the app instead of an API.

// // Function to get list data from local storage
// export async function getListData<T>(key: string): Promise<T[]> {
//     try {
//       const data = localStorage.getItem(key);
//       if (!data) {
//         throw new Error(`No data found for key: ${key}`);
//       }
//       return JSON.parse(data) as T[];
//     } catch (error) {
//       console.error("ERROR: fetching list data from local storage", error);
//       throw error;
//     }
//   }
  
//   // Function to get detail data from local storage
//   export async function getDetailData<T>(key: string, id: number): Promise<T> {
//     try {
//       const data = localStorage.getItem(key);
//       if (!data) {
//         throw new Error(`No data found for key: ${key}`);
//       }
//       const parsedData = JSON.parse(data) as T[];
//       const item = parsedData.find((item: any) => item.id === id);
//       if (!item) {
//         throw new Error(`No item found with id: ${id}`);
//       }
//       return item;
//     } catch (error) {
//       console.error("ERROR: fetching detail data from local storage", error);
//       throw error;
//     }
//   }