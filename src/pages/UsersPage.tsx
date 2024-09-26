import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import UserCard from '../components/users/UserCard';
import Loader from '../components/Loader';
import '../styles/users.scss';
import { fetchUsersData } from '../api/users';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [perPage, setPerPage] = useState<number>(10); // Default to 5 for smaller screens

  // Fetch users from the API
  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetchUsersData(page, perPage);
      const newUsers = response.data;

      if (newUsers.length === 0) {
        setHasMore(false); // No more users to load
      } else {
        setUsers((prevUsers) => {
          // Avoid duplicate users
          const uniqueUsers = newUsers.filter(
            (newUser) => !prevUsers.some((user) => user.id === newUser.id)
          );
          return [...prevUsers, ...uniqueUsers];
        });
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setHasMore(false);
    }
  }, [page, perPage]);

  // Effect for loading component (3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Effect to fetch users on first load
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Handle scrolling to fetch more users
  const loadMoreUsers = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="users-page" id="scrollableDiv">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="page-title">Users</h1>
          <InfiniteScroll
            dataLength={users.length}
            next={loadMoreUsers}
            hasMore={hasMore}
            loader={<p>Loading more users...</p>}
            endMessage={<p>No more users to load.</p>}
            scrollableTarget="scrollableDiv" // Define the target for infinite scroll
          >
            {users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                firstName={user.first_name}
                lastName={user.last_name}
                avatar={user.avatar}
              />
            ))}
          </InfiniteScroll>
        </>
      )}
    </div>
  );
};

export default UsersPage;
