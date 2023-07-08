interface ContentProp {
  id: number | string;
  name: string;
  description: string;
  longDescription: string;
  rating: string;
  img: string;
  media: string;
  genres: string[];
  banner?: string;
}
export default ContentProp;
