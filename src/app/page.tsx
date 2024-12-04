'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Input } from './components';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const sendAuthenticationEmail = async () => {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();
    console.log(result);

    alert('완료');
  };

  return (
    <div className="flex flex-col gap-2 px-6 py-5 rounded-md bg-white">
      <Input
        placeholder="이메일"
        type="email"
        value={email}
        onChange={handleEmailInput}
      />
      <Button onClick={sendAuthenticationEmail}>회원가입</Button>
    </div>
  );
}
