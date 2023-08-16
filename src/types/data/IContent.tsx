interface ContentProps {
  id: number;
  name: string;
  originalTitle?: string;
  description: string;
  longDescription: string;
  rating: string;
  img: string;
  media: string;
  genres: string[];
  banner?: string;
  releaseYear: number;
  directors: string[];
  cast: string[];
  trailer?: string;
}
export default ContentProps;
