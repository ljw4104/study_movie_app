import "./YoutubeContent.css";
function YoutubeContent() {
  return (
    <>
      <div>
        <img
          className="yt_main_img"
          src="https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_960_720.jpg"
        />
      </div>
      <div className="yt_four">
        <div>
          <span className="yt_four_icon">🤔</span>
        </div>
        <div>
          <p className="yt_four_title">
            평범할 수 없는 고양이가 평범하게 살고 싶어하는 이야기
            [고양이영화/결말없음]ㅋㅋ
          </p>
          <p className="yt_four_name">고양이탐구생활 · 조회수 없음 · 1분 전</p>
        </div>
        <div>
          <span className="yt_four_set">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              width={15}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

export default YoutubeContent;
