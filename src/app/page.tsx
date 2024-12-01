'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Input } from './components';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 px-6 py-5 rounded-md bg-white">
      <Input
        placeholder="이메일"
        type="email"
        value={email}
        onChange={handleEmailInput}
      />
      <Button>회원가입</Button>
    </div>
  );
}
