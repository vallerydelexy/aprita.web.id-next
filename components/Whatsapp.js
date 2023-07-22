import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { useState, useRef } from "react";

export default function Whatsapp() {
  const nd = new Date();
  const todayDate = nd
  const [inputValue, setInputValue] = useState();
  const [messages, setMessage] = useState([]);
  const inputEl = useRef()

  const openInNewTab = url => {
    window.open(url, '_blank');
  };

  function addToInput() {
    if(inputValue){
        setMessage([...messages, inputValue]);
        const url = 'https://api.whatsapp.com/send/?phone=6281276763536&text=';
        openInNewTab(url+inputValue)
    } else {
        inputEl.current.reportValidity()
    }
    inputEl.current.value = ""
  }
  function focusToInput(){
    inputEl.current.focus()
  }
  return (
    <div className="rounded-lg overflow-clip shadow-lg" onClick={()=>focusToInput()}>
      <div className="flex flex-col">
        {/* Header  */}
        <div className="bg-[#075E54] dark:bg-[#25D366] flex flex-row items-center justify-between px-3 py-2">
          <div className="flex items-center">
            <div>
              <img
                className="h-10 w-10 rounded-full"
                src="/images/rizki-aprita-bw.jpg"
              />
            </div>
            <div className="ml-4">
              <p className="dark:text-[#075E54] text-white font-semibold">Rizki Aprita</p>
              <p className="dark:text-[#075E54] text-white mt-1 text-xs">Online</p>
            </div>
          </div>

          <div className="flex">
            {/* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="#263238"
                  fillOpacity=".5"
                  d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
                ></path>
              </svg>
            </div> */}
            {/* <div className="ml-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="#263238"
                  fillOpacity=".5"
                  d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
                ></path>
              </svg>
            </div> */}
            <div className="ml-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="dark:fill-[#075E54] fill-white"
              >
                <path
                  fillOpacity=".6"
                  d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Messages  */}
        <div
          className="flex-1 overflow-auto max-h-[20em]"
          style={{
            backgroundColor: "#DAD3CC",
            backgroundImage: `url('/images/whatsapp-bg.png')`,
          }}
        >
          <div className="px-3 py-2">
            <div className="mb-2 flex justify-center">
              <div
                className="rounded px-4 py-2"
                style={{ backgroundColor: "#DDECF2" }}
              >
                <p className="text-xs">
                  {todayDate.toLocaleDateString("id", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div className="mb-4 flex justify-center">
              <div
                className="rounded px-4 py-2"
                style={{ backgroundColor: "#FCF4CB" }}
              >
                <p className="text-xs">
                  Messages to this chat and calls are now secured with
                  end-to-end encryption.{" "}
                </p>
              </div>
            </div>

            <div className="mb-2 flex">
                  <div
                    className="rounded px-3 py-2"
                    style={{ backgroundColor: "#F2F2F2" }}
                  >
                    <p className="text-indigo-900 font-semibold text-sm">Rizki Aprita</p>
                    <p className="mt-1 text-sm">
                    Hai saya Rizki, <br></br> Saya mendesain hal-hal sederhana yang mudah dipahami dan
                  digunakan
                    </p>
                    <p className="text-gray-500 mt-1 text-right text-xs">
                    {todayDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hourCycle: 'h23',
                  }) }
                    </p>
                  </div>
                </div>

            {messages.map((msg, i) => {
              return (
                <div key={i} className="mb-2 flex justify-end">
                  <div
                    className="rounded px-3 py-2"
                    style={{ backgroundColor: "#E2F7CB" }}
                  >
                    <p className="mt-1 text-sm">
                      {msg}
                    </p>
                    <p className="text-gray-500 mt-1 text-right text-xs">
                      {todayDate.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hourCycle: 'h23',
                      }) }
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Input  */}
        <div className="bg-gray-50 flex items-center pr-4 py-4">
          {/* <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                opacity=".45"
                fill="#263238"
                d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"
              ></path>
            </svg>
          </div> */}

          <div
            className="mx-4 flex-1"
          >
            <input
              className="w-full rounded-lg border px-2 py-2 focus:outline-0"
              type="text"
              onChange={(e) => setInputValue(e?.target?.value)}
            //   value={inputValue}
              required
              ref={inputEl}
            />
          </div>
          <button className={inputValue?"dark:bg-[#25D366] bg-[#075E54] text-white p-2 rounded":"p-2"} onClick={() => addToInput()}>
            <PaperAirplaneIcon className={inputValue?"rotate-90 h-5 w-5":"rotate-90 h-5 w-5 text-gray-400"} />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#263238"
                fillOpacity=".45"
                d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"
              ></path>
            </svg> */}
          </button>
        </div>
      </div>
    </div>
  );
}
