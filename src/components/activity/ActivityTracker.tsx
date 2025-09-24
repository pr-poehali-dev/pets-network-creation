import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const activityData = [
  {
    date: '24 сентября',
    activities: [
      { time: '09:00', type: 'Прогулка', duration: '30 мин', distance: '1.2 км', mood: 'Отлично' },
      { time: '12:30', type: 'Игра', duration: '15 мин', activity: 'Мячик', mood: 'Хорошо' },
      { time: '14:00', type: 'Отдых', duration: '2 ч', activity: 'Дневной сон', mood: 'Спокойно' },
      { time: '18:00', type: 'Прогулка', duration: '25 мин', distance: '1.1 км', mood: 'Отлично' },
      { time: '19:30', type: 'Кормление', weight: '28.5 кг', mood: 'Довольно' }
    ]
  }
];

const dailyGoals = {
  steps: { current: 4500, target: 6000, unit: 'шагов' },
  distance: { current: 2.3, target: 3.0, unit: 'км' },
  calories: { current: 180, target: 250, unit: 'ккал' },
  playtime: { current: 45, target: 60, unit: 'мин' }
};

const achievements = [
  { name: 'Ранняя пташка', description: 'Первая прогулка до 8:00', date: '22 сент', earned: true },
  { name: 'Марафонец', description: '5 км за день', date: '20 сент', earned: true },
  { name: 'Игривый', description: '1 час игр', date: '19 сент', earned: true },
  { name: 'Исследователь', description: 'Новое место', date: '', earned: false }
];

export const ActivityTracker = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Трекер активности</h2>
        <p className="text-muted-foreground">Следите за здоровьем и активностью Макса</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Object.entries(dailyGoals).map(([key, goal]) => (
          <Card key={key}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Icon 
                  name={key === 'steps' ? 'Footprints' : key === 'distance' ? 'Map' : key === 'calories' ? 'Zap' : 'Timer'} 
                  size={20} 
                  className="text-primary" 
                />
                <span className="text-sm text-muted-foreground">
                  {goal.current}/{goal.target} {goal.unit}
                </span>
              </div>
              <Progress 
                value={(goal.current / goal.target) * 100} 
                className="mb-1" 
              />
              <p className="text-xs text-muted-foreground capitalize">
                {key === 'steps' ? 'Шаги' : key === 'distance' ? 'Расстояние' : key === 'calories' ? 'Калории' : 'Игры'}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              Активность сегодня
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activityData[0].activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-accent/50 rounded-lg">
                <div className="text-center min-w-[60px]">
                  <p className="text-sm font-medium">{activity.time}</p>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className="text-xs">
                      {activity.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {activity.duration}
                    </span>
                  </div>
                  {activity.distance && (
                    <p className="text-xs text-muted-foreground">Расстояние: {activity.distance}</p>
                  )}
                  {activity.activity && (
                    <p className="text-xs text-muted-foreground">Активность: {activity.activity}</p>
                  )}
                  {activity.weight && (
                    <p className="text-xs text-muted-foreground">Вес: {activity.weight}</p>
                  )}
                </div>
                <div className="text-right">
                  <Badge 
                    variant={activity.mood === 'Отлично' ? 'default' : activity.mood === 'Хорошо' ? 'secondary' : 'outline'}
                    className="text-xs"
                  >
                    {activity.mood}
                  </Badge>
                </div>
              </div>
            ))}
            
            <Button className="w-full gap-2" variant="outline">
              <Icon name="Plus" size={16} />
              Добавить активность
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Trophy" size={20} />
              Достижения
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  achievement.earned 
                    ? 'bg-primary/10 border border-primary/20' 
                    : 'bg-muted/50 opacity-60'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  achievement.earned ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name="Award" size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{achievement.name}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  {achievement.date && (
                    <p className="text-xs text-muted-foreground mt-1">Получено: {achievement.date}</p>
                  )}
                </div>
                {achievement.earned && (
                  <Icon name="CheckCircle2" size={16} className="text-primary" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="TrendingUp" size={20} />
            Статистика за неделю
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-accent/30 rounded-lg">
              <p className="text-2xl font-bold text-primary">15.8</p>
              <p className="text-sm text-muted-foreground">км пройдено</p>
            </div>
            <div className="text-center p-4 bg-accent/30 rounded-lg">
              <p className="text-2xl font-bold text-primary">4.5</p>
              <p className="text-sm text-muted-foreground">часов игр</p>
            </div>
            <div className="text-center p-4 bg-accent/30 rounded-lg">
              <p className="text-2xl font-bold text-primary">1,250</p>
              <p className="text-sm text-muted-foreground">калорий сожжено</p>
            </div>
            <div className="text-center p-4 bg-accent/30 rounded-lg">
              <p className="text-2xl font-bold text-primary">28.5</p>
              <p className="text-sm text-muted-foreground">кг вес</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};