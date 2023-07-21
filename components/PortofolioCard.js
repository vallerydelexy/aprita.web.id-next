import Badge from "./Badge";
export default function PortofolioCard({
  logo,
  logoAlt,
  image,
  imageAlt,
  domain,
  title,
  description,
  year,
  stacks,
}) {
  return (
    <div className="pb-8">
      <div>
        <img
          src={image}
          alt={imageAlt}
          className=" w-full object-cover object-center rounded"
        />
      </div>
      <div className="p-0 pt-4 md:p-4">
        <div className="flex justify-between">
          <div>
            <div className="mb-2">
              <h3 className="text-2xl font-semibold text-blue-800 hover:underline">
                {title} <span className="text-gray-400">{`(${year})`}</span>
              </h3>
              <span className="text-gray-400 text-xs" >{domain}</span>
            </div>

            <p className="text-sm text-gray-800">{description}</p>
          </div>
          <div>
            <img
              src={logo}
              alt={logoAlt}
              className="max-h-6 md:max-h-10 object-cover object-center "
            />
          </div>
        </div>
        <div className="pt-4">
          <p className="text-sm text-gray-600">Teknologi yang digunakan:</p>
          {stacks?.map((stack, i) => {
            return <Badge key={i} text={stack} />;
          })}
        </div>
      </div>
    </div>
  );
}
