import { BLOG_POSTS } from '../constants';

// Số bài mỗi trang ở /tin-tuc; trang 2 trở đi có URL riêng /tin-tuc/trang/N để Google đọc được mọi bài
export const NEWS_PER_PAGE = 8;
export const newsPageCount = () => Math.max(1, Math.ceil(BLOG_POSTS.length / NEWS_PER_PAGE));
export const newsPageHref = (page: number) => (page <= 1 ? '/tin-tuc' : `/tin-tuc/trang/${page}`);
