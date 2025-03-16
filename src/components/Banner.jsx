import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgMovie from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[700px] banner-bg bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-35"/>
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-500 to-red-200 text-md py-2 px-3">TV Show</p>
          <div className=" flex flex-col space-y-4">
            <h2 className=" text-white text-4xl font-bold">Vùng Đất Linh Hồn</h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8"/>
              <img src={IconRating} alt="rating" className="w-8 h-8"/>
              <img src={IconRating} alt="rating" className="w-8 h-8"/>
              <img src={IconRating} alt="rating" className="w-8 h-8"/>
              <img src={IconRatingHalf} alt="rating" className="w-8 h-8"/>
            </div>
            <p className="text-white">
            Câu chuyện kể về cô bé bướng bỉnh Chihiro. 
            Gia đình của Chihiro chuyển từ thành phố về quê sinh sống, 
            và Chihiro chẳng thích thú tí nào với sự thay đổi này.  
            Bố của Chihiro là một tay lái xe tệ hại và có một trí nhớ "quá tồi", 
            ông đã lái xe lạc đường đến một thành phố bị bỏ hoang, không bóng người. 
            Bị cuốn hút bởi mùi vị thơm ngon của thức ăn, bố mẹ của Chihiro bắt đầu "thưởng thức", 
            nhưng kết quả họ bị biến thành những con heo mập. Còn thành phố không người kia, sau khi trời tối, 
            tất cả sống dậy, những bóng ma bắt đầu xuất hiện và hoạt động. 
            Cô bé bướng bỉnh phải làm gì để cứu bố mẹ mình và thoát khỏi đây?
            </p>
            <div className="flex items-center space-x-5">
              <button className="py-2 px-3 bg-black  text-white border border-black font-bold">
                Chi tiết
              </button>
              <button className="py-2 px-3 bg-red-600 text-white font-bold">
                Xem Phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img src={ImgMovie} alt="movie" className="w-full h-full object-cover"/>
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center 
            backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={IconPlay} alt="play" className="w-16 h-16"/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
