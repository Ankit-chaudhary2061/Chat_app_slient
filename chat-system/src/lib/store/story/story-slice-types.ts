export interface Image {
  url: string;
  public_id?: string;
}

export interface StoryUser {
  _id: string;
  username: string;
  profileImage?: {
    url: string;
  };
}

export interface Story {
  _id: string;
  text?: string;
  user: StoryUser;
  image?: Image;
  likes: string[];
  views: StoryUser[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateStoryData {
  text?: string;
  image?: File;
}