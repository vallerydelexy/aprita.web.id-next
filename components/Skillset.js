import Badge from "./Badge";

const Skillset = () => (
  <div className="mx-auto bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm md:max-w-lg shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Keahlian & Software yang saya gunakan
      </h3>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl className="sm:divide-y sm:divide-gray-200">
      <img src="images/dns.svg" />
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
            Web Dev / Pembuatan Website
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <Badge text={"React JS"} />
            <Badge text={"Next JS"} />
            <Badge text={"Vue JS"} />
            <Badge text={"Tailwind CSS"} />
            <Badge text={"Bootstrap CSS"} />
            <Badge text={"Wordpress"} />
            <Badge text={"MySQL"} />
            <Badge text={"Serverless Framework"} />
          </dd>
        </div>
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">UI/UX Design</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <Badge text={"Figma"} />
          </dd>
        </div>
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Visual Design</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <Badge text={"Photoshop"} />
          <Badge text={"Illustrator"} />
          <Badge text={"Corel Draw"} />
          <Badge text={"Google Sketchup"} />
          </dd>
        </div>
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">
          Motion Design
          </dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <Badge text={"Adobe After Effect"} />
          <Badge text={"Adobe Premiere"} />
          </dd>
        </div>
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Marketing</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <Badge text={"SEO"} />
          <Badge text={"Local SEO"} />
          <Badge text={"FB Ads"} />
          </dd>
        </div>
        <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Operating Systems & Web Server</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <Badge text={"Linux Ubuntu"} />
          <Badge text={"Apache"} />
          <Badge text={"Nginx"} />
          </dd>
        </div>
        
      </dl>
    </div>
  </div>
);
export default Skillset;
