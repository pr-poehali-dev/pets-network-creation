import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface SidebarProps {
  activeTab: 'feed' | 'activity' | 'profile';
  setActiveTab: (tab: 'feed' | 'activity' | 'profile') => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <div className="w-72 bg-white/80 backdrop-blur-sm border-r border-border p-6 h-screen sticky top-0">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <Icon name="Heart" size={20} className="text-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg">PawFeed</h1>
          <p className="text-xs text-muted-foreground">Соцсеть питомцев</p>
        </div>
      </div>

      <nav className="space-y-2 mb-8">
        <Button
          variant={activeTab === 'feed' ? 'default' : 'ghost'}
          className="w-full justify-start gap-3"
          onClick={() => setActiveTab('feed')}
        >
          <Icon name="Home" size={18} />
          Лента новостей
          <Badge variant="destructive" className="ml-auto">
            3
          </Badge>
        </Button>

        <Button
          variant={activeTab === 'activity' ? 'default' : 'ghost'}
          className="w-full justify-start gap-3"
          onClick={() => setActiveTab('activity')}
        >
          <Icon name="Activity" size={18} />
          Активность
        </Button>

        <Button
          variant={activeTab === 'profile' ? 'default' : 'ghost'}
          className="w-full justify-start gap-3"
          onClick={() => setActiveTab('profile')}
        >
          <Icon name="User" size={18} />
          Профиль питомца
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start gap-3"
        >
          <Icon name="MessageSquare" size={18} />
          Сообщения
          <Badge variant="destructive" className="ml-auto">
            2
          </Badge>
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start gap-3"
        >
          <Icon name="Users" size={18} />
          Группы
        </Button>
      </nav>

      <Card className="p-4 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="/img/9cc6a7ea-1623-4e0b-98b8-8da1aca39b01.jpg"
            alt="Мой питомец"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">Макс</p>
            <p className="text-sm text-muted-foreground">Золотистый ретривер</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="text-center p-2 bg-accent rounded-lg">
            <Icon name="Footprints" size={14} className="mx-auto mb-1" />
            <p className="font-medium">2.3 км</p>
            <p className="text-muted-foreground">Сегодня</p>
          </div>
          <div className="text-center p-2 bg-accent rounded-lg">
            <Icon name="Heart" size={14} className="mx-auto mb-1" />
            <p className="font-medium">Отлично</p>
            <p className="text-muted-foreground">Настроение</p>
          </div>
        </div>
      </Card>

      <Button variant="outline" className="w-full gap-2">
        <Icon name="Settings" size={16} />
        Настройки
      </Button>
    </div>
  );
};