import { PostCard } from './PostCard';
import { CreatePost } from './CreatePost';

const mockPosts = [
  {
    id: 1,
    author: 'Анна Смирнова',
    authorAvatar: '/img/9cc6a7ea-1623-4e0b-98b8-8da1aca39b01.jpg',
    petName: 'Макс',
    petBreed: 'Золотистый ретривер',
    timeAgo: '2 часа назад',
    content: 'Макс сегодня первый раз попробовал плавать! Был такой осторожный сначала, но потом не хотел выходить из воды 🏊‍♂️',
    image: '/img/9cc6a7ea-1623-4e0b-98b8-8da1aca39b01.jpg',
    likes: 24,
    comments: 5,
    location: 'Парк Сокольники, Москва'
  },
  {
    id: 2,
    author: 'Елена Иванова',
    authorAvatar: '/img/4ae4fd98-8d9f-4901-82f9-a6e2fcd79293.jpg',
    petName: 'Луна',
    petBreed: 'Персидская кошка',
    timeAgo: '4 часа назад',
    content: 'Луна нашла идеальное место для дневного сна. Теперь это ее любимый уголок ☀️',
    image: '/img/4ae4fd98-8d9f-4901-82f9-a6e2fcd79293.jpg',
    likes: 18,
    comments: 3
  },
  {
    id: 3,
    author: 'Дмитрий Петров',
    authorAvatar: '/img/723b87b9-c907-42c9-97c7-adfdaf66aafc.jpg',
    petName: 'Рокки',
    petBreed: 'Такса',
    timeAgo: '6 часов назад',
    content: 'Рокки освоил новую команду "принеси тапочки"! Правда, иногда приносит не те 😄',
    image: '/img/723b87b9-c907-42c9-97c7-adfdaf66aafc.jpg',
    likes: 31,
    comments: 8,
    achievements: ['Умница', 'Помощник']
  }
];

export const NewsFeed = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Лента новостей</h2>
        <p className="text-muted-foreground">Следите за жизнью ваших пушистых друзей</p>
      </div>

      <CreatePost />

      <div className="space-y-6">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};