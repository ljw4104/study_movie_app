function Kakao() {
  return (
    <>
      <div
        id="body"
        className="p-6 bg-white ml-[1%] mr-[1%] w-[98%] h-[100%] border-2 border-solid border-black"
      >
        <div className="p-2 flex items-center justify-between ">
          <h1 className=" font-bold text-4xl">더보기</h1>
          <div>
            <span className="text-4xl ml-6">😜</span>
            <span className="text-4xl ml-6">😜</span>
            <span className="text-4xl ml-6">😜</span>
            <span className="text-4xl ml-6">😜</span>
          </div>
        </div>
        <div className="flex  mt-10 mb-8 justify-between">
          <div className="flex">
            <div className="text-8xl">😒</div>
            <div className="ml-3 mt-3 flex flex-col">
              <div className="text-4xl font-bold">이정운</div>
              <div className="ml-2 mt-2 text-gray-400">ljw4104@gmail.com</div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <span className="flex">
              <div className="pl-3 pt-1 pb-2 pr-3 rounded-[50px] text-2xl border-[1px] border-solid border-gray-300 hover:bg-gray-200 mr-6 ">
                MY
              </div>
              <div className="pl-3 pt-1 pb-2 pr-3 rounded-[50px] text-2xl border-[1px] border-solid border-gray-300 hover:bg-gray-200 ">
                🐱‍🐉10
              </div>
            </span>
          </div>
        </div>
        <div className=" p-6 rounded-2xl bg-gray-200/75 border-solid border-gray-100">
          <div className="flex justify-between items-center">
            <div className="pl-3 pr-3 flex justify-center items-center rounded-[50px] bg-white text-2xl p-2">
              <span className="font-bold mr-4 relative bottom-1">👍pay</span>
              90,704,217,110원
            </div>
            <div className="flex">
              <div className="font-semibold text-xl ">송금</div>
              <div className="font-semibold text-xl ml-3">결제</div>
            </div>
          </div>
        </div>
        <div className=" inline-flex flex-wrap">
          <div className=" p-6 pl-10 pr-10 flex flex-col justify-center items-center">
            <div className="mb-2 text-4xl">😊</div>
            <div>이모티콘</div>
          </div>
          <div className=" p-6 pl-10 pr-10 flex flex-col justify-center items-center">
            <div className="mb-2 text-4xl">😊</div>
            <div>이모티콘</div>
          </div>
          <div className=" p-6 pl-10 pr-10 flex flex-col justify-center items-center">
            <div className="mb-2 text-4xl">😊</div>
            <div>이모티콘</div>
          </div>
          <div className=" p-6 pl-10 pr-10 flex flex-col justify-center items-center">
            <div className="mb-2 text-4xl">😊</div>
            <div>이모티콘</div>
          </div>
          <div className=" p-6 pl-10 pr-10 flex flex-col justify-center items-center">
            <div className="mb-2 text-4xl">😊</div>
            <div>이모티콘</div>
          </div>
          <div className=" p-6 pl-10 pr-10 flex flex-col justify-center items-center">
            <div className="mb-2 text-4xl">😊</div>
            <div>이모티콘</div>
          </div>
          <div className=" p-6 pl-10 pr-10 flex flex-col justify-center items-center">
            <div className="mb-2 text-4xl">😊</div>
            <div>이모티콘</div>
          </div>
          <div className=" p-6 pl-10 pr-10 flex flex-col justify-center items-center">
            <div className="mb-2 text-4xl">😊</div>
            <div>이모티콘</div>
          </div>
          <div className=" p-6 pl-10 pr-10 flex flex-col justify-center items-center">
            <div className="mb-2 text-4xl">😊</div>
            <div>이모티콘</div>
          </div>
        </div>
        <hr className="m-1"></hr>
        <div className="p-5 flex justify-around text-2xl">
          <div className="flex">
            <p className="mr-2 font-bold ">메일</p>만들기
          </div>
          <div className="flex">
            <p className="mr-2 font-bold">캘린더</p> 일정 만들기
          </div>
        </div>
        <div className="mt-5 relative">
          <img
            className=" rounded-3xl"
            src="https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg"
          ></img>
          <a className="text-white text-2xl m-5 absolute bottom-0">
            이 고양이가 생명이란걸 알까요?
          </a>
          <div className="text-white hover:bg-white hover:text-black bg-[rgba(100,100,100,0.5)] text-ms border-[1.5px] rounded-2xl m-5 pr-2 pl-2 absolute top-0 right-0">
            AD
          </div>

          <div className="text-white hover:bg-white hover:text-black bg-[rgba(100,100,100,0.5)] text-2xl border-[1.5px] rounded-md m-4 p-1 absolute bottom-0 right-0">
            알아보기
          </div>
        </div>
        <div className="mt-8 mb-20 text-2xl font-bold">카카오 나우</div>
        <div className="text-3xl bottom-0 flex justify-around left-2 right-2 p-5 bg-gray-50 fixed">
          <div className="mr-5">내정보</div>
          <div className="mr-5">대화</div>
          <div className="mr-5">샵</div>
          <div className="mr-5">더보기</div>
        </div>
      </div>
    </>
  );
}
export default Kakao;
