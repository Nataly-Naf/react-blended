import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';

import { formatDistanceToNow } from 'date-fns';

export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardPoster src={poster} alt={title} />
        </CardHeader>
        <CardBody>
          <Tag>{tag}</Tag>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          <UserBox>
            <Avatar src={avatar} alt={name} />
            <UserInfo>
              <UserName>{name}</UserName>
              <Date>
                {formatDistanceToNow(new Date(postedAt), { addSuffix: true })}
              </Date>
            </UserInfo>
          </UserBox>
        </CardFooter>
      </Card>
    </div>
  );
};
