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
          <span className="yt_four_icon">π€</span>
        </div>
        <div>
          <p className="yt_four_title">
            νλ²ν  μ μλ κ³ μμ΄κ° νλ²νκ² μ΄κ³  μΆμ΄νλ μ΄μΌκΈ°
            [κ³ μμ΄μν/κ²°λ§μμ]γγ
          </p>
          <p className="yt_four_name">κ³ μμ΄νκ΅¬μν Β· μ‘°νμ μμ Β· 1λΆ μ </p>
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
