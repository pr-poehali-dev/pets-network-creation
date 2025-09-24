import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { NewsFeed } from '@/components/feed/NewsFeed';
import { ActivityTracker } from '@/components/activity/ActivityTracker';
import { PetProfile } from '@/components/profile/PetProfile';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'activity' | 'profile'>('feed');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-amber-50">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 p-6">
          {activeTab === 'feed' && <NewsFeed />}
          {activeTab === 'activity' && <ActivityTracker />}
          {activeTab === 'profile' && <PetProfile />}
        </main>
      </div>
    </div>
  );
};

export default Index;