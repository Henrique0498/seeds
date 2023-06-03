import { TypeCardEvaluation } from "./types";

const ratingArray = [1, 2, 3, 4, 5];

export function CardEvaluation({
  title,
  className = "",
  rating,
  imageSrc,
  text,
  ...props
}: TypeCardEvaluation) {
  return (
    <div
      className={`card card-side shadow-md border-2 border-gray-200 bg-slate-50 w-full ${className} h-40`}
      {...props}
    >
      <img
        src={imageSrc}
        alt={`Foto de ${title}`}
        className="object-cover overflow-hidden w-1/3 h-full rounded-s-xl"
      />

      <div className="card-body p-4 w-2/3">
        <h2 className="card-title">{title}</h2>
        <div className="rating rating-sm">
          {ratingArray.map((id, index) => (
            <input
              key={id}
              type="radio"
              name={`rating-${title}`}
              readOnly
              className="mask mask-star-2 bg-red-400"
              checked={index + 1 === rating}
            />
          ))}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
