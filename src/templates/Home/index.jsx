import { useCallback, useEffect, useState } from 'react';

import './style.css';

import { loadPosts } from '../../components/utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { InputText } from '../../components/InputSearch';

export const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? posts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();
    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className="container">
      {!!searchValue && <h2>Search Value: {searchValue}</h2>}

      <InputText onChange={handleChange} />
      {filteredPosts.length === 0 && <p>Não existe posts =(</p>}

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {!searchValue && <Button disabled={noMorePosts} text="Load More Posts" onClick={loadMorePosts} />}
    </section>
  );
};
