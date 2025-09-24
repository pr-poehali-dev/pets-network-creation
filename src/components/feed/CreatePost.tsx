import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export const CreatePost = () => {
  const [postText, setPostText] = useState('');

  const handleSubmit = () => {
    if (postText.trim()) {
      setPostText('');
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex gap-4">
          <img
            src="/img/9cc6a7ea-1623-4e0b-98b8-8da1aca39b01.jpg"
            alt="Ваш питомец"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 space-y-4">
            <Textarea
              placeholder="Чем занимается ваш питомец сегодня?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="min-h-[80px] resize-none border-0 p-0 text-base placeholder:text-muted-foreground focus:ring-0"
            />
            
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Icon name="Image" size={16} />
                  Фото
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Icon name="MapPin" size={16} />
                  Место
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Icon name="Smile" size={16} />
                  Настроение
                </Button>
              </div>
              <Button 
                onClick={handleSubmit}
                disabled={!postText.trim()}
                size="sm"
                className="gap-2"
              >
                <Icon name="Send" size={14} />
                Опубликовать
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};