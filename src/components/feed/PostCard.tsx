import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Post {
  id: number;
  author: string;
  authorAvatar: string;
  petName: string;
  petBreed: string;
  timeAgo: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  location?: string;
  achievements?: string[];
}

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <img
            src={post.authorAvatar}
            alt={post.author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{post.author}</h3>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{post.timeAgo}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {post.petName} • {post.petBreed}
            </p>
            {post.location && (
              <div className="flex items-center gap-1 mt-1">
                <Icon name="MapPin" size={12} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{post.location}</span>
              </div>
            )}
          </div>
          <Button variant="ghost" size="icon">
            <Icon name="MoreHorizontal" size={16} />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-foreground leading-relaxed">{post.content}</p>

        {post.achievements && post.achievements.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.achievements.map((achievement, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                <Icon name="Trophy" size={12} className="mr-1" />
                {achievement}
              </Badge>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
          <div className="col-span-2">
            <img
              src="/img/bed7aa54-7122-4b7d-9fc2-54ec56d99695.jpg"
              alt="Макс плавает в озере"
              className="w-full h-64 object-cover"
            />
          </div>
          <div>
            <img
              src="/img/2476fd6e-5233-4e72-b5de-0fa454193a78.jpg"
              alt="Макс после купания"
              className="w-full h-32 object-cover"
            />
          </div>
          <div>
            <img
              src="/img/e76e0f65-3b29-4f39-a926-8013a8ffc100.jpg"
              alt="Макс играет в воде"
              className="w-full h-32 object-cover"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
              <Icon name="Heart" size={16} />
              {post.likes}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
              <Icon name="MessageCircle" size={16} />
              {post.comments}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
              <Icon name="Share2" size={16} />
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
            <Icon name="Bookmark" size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};