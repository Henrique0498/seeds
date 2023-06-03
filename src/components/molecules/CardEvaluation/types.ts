export interface TypeCardEvaluation
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  text: string;
  imageSrc: string;
}
