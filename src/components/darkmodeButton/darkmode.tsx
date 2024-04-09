import Image from "next/image";
import "../../styles/darkmode.css"

const Darkmode = () =>  {
    return (
        <div className="theme-switcher">
          <input type="radio" id="light-theme" name="themes" defaultChecked />
          <label htmlFor="light-theme">
            <span>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 7a5 5 0 1 0 0 10 5 5 0 1 0 0-10z"></path>
                <path d="M12 1v2"></path>
                <path d="M12 21v2"></path>
                <path d="m4.22 4.22 1.42 1.42"></path>
                <path d="m18.36 18.36 1.42 1.42"></path>
                <path d="M1 12h2"></path>
                <path d="M21 12h2"></path>
                <path d="m4.22 19.78 1.42-1.42"></path>
                <path d="m18.36 5.64 1.42-1.42"></path>
              </svg>
              Light
            </span>
          </label>
          <input type="radio" id="dark-theme" name="themes" />
          <label htmlFor="dark-theme">
            <span>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>
              </svg>
              Dark
            </span>
          </label>
          <span className="slider"></span>
        </div>
    )
}

export default Darkmode;