import YoutubeContent from "./YoutubeContent";
import YoutubeShorts from "./YoutubeShorts";
import "./Youtube.css";
function youtube() {
  return (
    <>
      <div className="yt_main">
        <div className="yt_top">
          <div>
            <span className="yt_time">5:00</span>
          </div>
          <div className="yt_top_item">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={20}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            </span>
            <span className="yt_lte">LTE</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                width={25}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="yt_two">
          <div className="logo">
            <img></img>
            <h1>🧧Youtube</h1>
          </div>
          <div className="content">
            <span>😜</span>
            <span>😜</span>
            <span>😜</span>
            <span>😜</span>
          </div>
        </div>
        <div className="yt_three">
          <div>
            <span>👀 탐색</span>
          </div>
          <div className="yt_three_content">
            <span>여긴</span>
            <span>뭐라</span>
            <span>적지</span>
            <span>😊😊</span>
            <span>뭐라</span>
            <span>적어야</span>
            <span>소문이날까</span>
          </div>
        </div>
        <YoutubeContent />
        <YoutubeShorts />
      </div>
      <footer>
        <div className="yt_footer_block">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={30}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <span>홈</span>
        </div>
        <div className="yt_footer_block">
          <div>✅</div>
          <span>귀찮</span>
        </div>
        <div className="yt_footer_block">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={50}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span></span>
        </div>
        <div className="yt_footer_block">
          <div>✅</div>
          <span>귀찮</span>
        </div>
        <div className="yt_footer_block">
          <div>✅</div>
          <span>귀찮</span>
        </div>
      </footer>
    </>
  );
}

export default youtube;
