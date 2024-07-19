export function ExperienceCard({ props }) {
  const listItems = props.listItems;

  return (
    <div >
      
      <div className="md:flex flex-col items-center">
        <div className="md:flex gap-6 p-[32px] justify-between bg-[#ffffff] shadow-lg max-w-[896px] rounded">
          <div>
            <img src="/images/upwork.png" alt="logo" />
          </div>
          <div className=" flex-col">
            <div className="font-bold text-2xl mb-[16px]"> {props.title} </div>
            <div className="max-w-[348px]">
              <ul className="list-disc ml-5 gap-[4px] text-gray-600">
                {listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-gray-600">
            {props.startDate} - {props.endDate}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;

{/* <div>
        <div className="flex items-center justify-center text-center">
          <div className="bg-gray-200 w-[115px] h-[28px] rounded-lg">
            Experience
          </div>
        </div>
        <div className="text-xl font-normal text-center mt-[16px] text-gray-600">
          Here is a quick summary of my most recent experiences:
        </div>
      </div> */}