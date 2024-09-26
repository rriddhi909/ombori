import axiosInstance from './axiosInstance';

export const fetchUsersData = async (page: number, per_page: number) => {
  try {
    const result = await axiosInstance.get(`api/users?page=${page}&per_page=${per_page}`);
    return result?.data;
  } catch (error) {
    console.error('Error fetching users : ', error);
  }
};
