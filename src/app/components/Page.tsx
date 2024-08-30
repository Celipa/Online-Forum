import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Thread = {
  id: string;
  category: string;
  title: string;
  description: string;
  creationDate: string;
};

const LandingPage: React.FC = () => {
  const router = useRouter();
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    function getData() {
      const keys = Object.keys(localStorage);
      const threads = keys.map(key => JSON.parse(localStorage.getItem(key) || '{}'));
      setThreads(threads);
      console.log(threads);
    }
    getData();
  }, []);

  const handleNavigation = (id: string) => {
    router.push('/thread/' + id);
  };

  return (
    <div>
      <h1>Threads</h1>
      <div className='thread-home'>
        <div className='thread-container-home'>
          <div className="thread-container-top-home">
            {threads.map((thread, index) => (
              <div onClick={() => handleNavigation(thread.id)} className='threadbox' key={`${thread.id}-${index}`}>
                <h2>{thread.title}</h2>
                <div className='thread-text'>
                  <p className="ellipsis">{thread.description}</p>
                </div>
                <ul className='CreationDate'>
                  <li className='Date'>{new Date(thread.creationDate).toLocaleDateString()}</li>
                  <li className='Time'>{new Date(thread.creationDate).toLocaleTimeString()}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;