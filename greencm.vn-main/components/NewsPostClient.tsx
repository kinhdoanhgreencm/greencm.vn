'use client';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AuthModal from './AuthModal';
import SinglePostPage from './SinglePostPage';
import { BlogPost } from '../types';

interface NewsPostClientProps {
  post: BlogPost;
}

export default function NewsPostClient({ post }: NewsPostClientProps) {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div>
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      <main>
        <SinglePostPage post={post} />
      </main>
      <Footer />
      {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
    </div>
  );
}

