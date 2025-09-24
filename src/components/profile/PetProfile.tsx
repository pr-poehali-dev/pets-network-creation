import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const petInfo = {
  name: 'Макс',
  breed: 'Золотистый ретривер',
  age: '2 года 4 месяца',
  weight: '28.5 кг',
  gender: 'Кобель',
  birthday: '15 мая 2022',
  microchip: 'RU-123456789',
  avatar: '/img/9cc6a7ea-1623-4e0b-98b8-8da1aca39b01.jpg',
  owner: 'Анна Смирнова'
};

const healthStats = {
  vaccinations: { current: 6, total: 6, nextDue: 'Май 2025' },
  checkups: { current: 4, total: 4, lastVisit: '15 авг 2024' },
  weight: { current: 28.5, ideal: 30, status: 'Норма' },
  activity: { level: 85, status: 'Высокая' }
};

const preferences = {
  favoriteFood: ['Курица', 'Рыба', 'Морковь'],
  favoriteToys: ['Мячик', 'Канат', 'Пищалка'],
  favoriteActivities: ['Плавание', 'Прогулки', 'Игры с мячом'],
  personality: ['Дружелюбный', 'Активный', 'Умный', 'Послушный']
};

export const PetProfile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Профиль питомца</h2>
        <p className="text-muted-foreground">Полная информация о {petInfo.name}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="p-6 text-center">
            <img
              src={petInfo.avatar}
              alt={petInfo.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary/20"
            />
            <h3 className="text-2xl font-bold mb-2">{petInfo.name}</h3>
            <p className="text-muted-foreground mb-4">{petInfo.breed}</p>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Возраст:</span>
                <span className="font-medium">{petInfo.age}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Вес:</span>
                <span className="font-medium">{petInfo.weight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Пол:</span>
                <span className="font-medium">{petInfo.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">День рождения:</span>
                <span className="font-medium">{petInfo.birthday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Микрочип:</span>
                <span className="font-medium text-xs">{petInfo.microchip}</span>
              </div>
            </div>

            <Button className="w-full mt-6 gap-2">
              <Icon name="Edit" size={16} />
              Редактировать профиль
            </Button>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Heart" size={20} />
                Здоровье
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Прививки</span>
                    <span className="text-xs text-muted-foreground">
                      {healthStats.vaccinations.current}/{healthStats.vaccinations.total}
                    </span>
                  </div>
                  <Progress value={100} className="mb-1" />
                  <p className="text-xs text-muted-foreground">Следующая: {healthStats.vaccinations.nextDue}</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Осмотры</span>
                    <span className="text-xs text-muted-foreground">
                      {healthStats.checkups.current}/{healthStats.checkups.total}
                    </span>
                  </div>
                  <Progress value={100} className="mb-1" />
                  <p className="text-xs text-muted-foreground">Последний: {healthStats.checkups.lastVisit}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                  <div>
                    <p className="font-medium">Вес</p>
                    <p className="text-sm text-muted-foreground">{healthStats.weight.current} кг</p>
                  </div>
                  <Badge variant="secondary">{healthStats.weight.status}</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                  <div>
                    <p className="font-medium">Активность</p>
                    <p className="text-sm text-muted-foreground">{healthStats.activity.level}%</p>
                  </div>
                  <Badge variant="default">{healthStats.activity.status}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Smile" size={20} />
                Предпочтения
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Любимая еда</h4>
                <div className="flex flex-wrap gap-2">
                  {preferences.favoriteFood.map((food, index) => (
                    <Badge key={index} variant="outline">{food}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Любимые игрушки</h4>
                <div className="flex flex-wrap gap-2">
                  {preferences.favoriteToys.map((toy, index) => (
                    <Badge key={index} variant="outline">{toy}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Любимые активности</h4>
                <div className="flex flex-wrap gap-2">
                  {preferences.favoriteActivities.map((activity, index) => (
                    <Badge key={index} variant="outline">{activity}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Характер</h4>
                <div className="flex flex-wrap gap-2">
                  {preferences.personality.map((trait, index) => (
                    <Badge key={index} variant="secondary">{trait}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                Недавние события
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">Ветеринарный осмотр</p>
                  <p className="text-xs text-muted-foreground">15 августа 2024 • Все показатели в норме</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">Обновление прививок</p>
                  <p className="text-xs text-muted-foreground">10 июля 2024 • Комплекс прививок завершен</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-accent/30 rounded-lg">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">Первое плавание</p>
                  <p className="text-xs text-muted-foreground">5 июля 2024 • Макс освоил плавание в озере</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};