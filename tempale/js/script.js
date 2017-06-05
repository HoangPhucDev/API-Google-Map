// Biến khởi tạo
var view_collection = true;
var viewout = true;
var viewoutSlider = true;
var checkslideFirst = true;
var timeOut_modalCart;
var check_show_modal = true;
var timeOut_tabIndex;
var check_show_tabIndex = true;
var cur_scrollTop = 0;
var timeOutEffect;
if ( typeof(formatMoney) == 'undefined' ){
	formatMoney = '';
}
var check_header_fixTop = false;
var city = {tatca : "Tất cả",angiang : "An Giang",bacgiang : "Bắc Giang",backan : "Bắc Kạn",baclieu : "Bạc Liêu",bacninh : "Bắc Ninh",bentre : "Bến Tre",binhdinh : "Bình Định",binhduong : "Bình Dương",binhphuoc : "Bình Phước",binhthuan : "Bình Thuận",brvt : "Bà Rịa - Vũng Tàu",camau : "Cà Mau",cantho : "Cần Thơ",caobang : "Cao Bằng",daklak : "Đắk Lắk",daknong : "Đắk Nông",danang : "Đà Nẵng",dienbien : "Điện Biên",dongnai : "Đồng Nai",dongthap : "Đồng Tháp",gialai : "Gia Lai",hagiang : "Hà Giang",haiduong : "Hải Dương",haiphong : "Hải Phòng",hanam : "Hà Nam",hanoi : "Hà Nội",hatinh : "Hà Tĩnh",haugiang : "Hậu Giang",hcm : "Hồ Chí Minh",hoabinh : "Hòa Bình",hungyen : "Hưng Yên",khanhhoa : "Khánh Hòa",kiengiang : "Kiên Giang",kontum : "Kon Tum",laichau : "Lai Châu",lamdong : "Lâm Đồng",langson : "Lạng Sơn",laocai : "Lào Cai",longan : "Long An",namdinh : "Nam Định",nghean : "Nghệ An",ninhbinh : "Ninh Bình",ninhthuan : "Ninh Thuận",phutho : "Phú Thọ",phuyen : "Phú Yên",quangbinh : "Quảng Bình",quangnam : "Quảng Nam",quangngai : "Quảng Ngãi",quangninh : "Quảng Ninh",quangtri : "Quảng Trị",soctrang : "Sóc Trăng",sonla : "Sơn La",tayninh : "Tây Ninh",thaibinh : "Thái Bình",thainguyen : "Thái Nguyên",thanhhoa : "Thanh Hóa",thuathienhue : "Thừa Thiên Huế",tiengiang : "Tiền Giang",travinh : "Trà Vinh",tuyenquang : "Tuyên Quang",vinhlong : "Vĩnh Long",vinhphuc : "Vĩnh Phúc",yenbai : "Yên Bái"};
var district = {
	angiang : ["Tất cả","TP. Long Xuyên","Thị xã Châu Đốc","Huyện An Phú","Thị xã Tân Châu","Huyện Phú Tân","Huyện Châu Phú","Huyện Tịnh Biên","Huyện Chi Tôn","Huyện Chợ Mới","Huyện Châu Thành","Huyện Thoại Sơn"],
	bacgiang : ["Tất cả","TP. Bắc Giang","Huyện Yên Thế","Huyện Tân Yên","Huyện Lục Ngạn","Huyện Hiệp Hòa","Huyện Lạng Giang","Huyện Sơn Động","Huyện Lục Nam","Huyện Việt Yên","Huyện Yên Dũng"],
	backan : ["Tất cả","Thị xã Bắc Kạn","Huyện Ba Bể","Huyện Ngân Sơn","Huyện Chợ Đồn","Huyện Na Ri","Huyện Bạch Thông","Huyện Chợ Mới","Huyện Pác Nặm"],
	baclieu : ["Tất cả","TP. Bạc Liêu","Huyện Hồng Dân","Huyện Vĩnh Lợi","Huyện Đông Hải","Huyện Phước Long","Huyện Hòa Bình","Thị xã Giá Rai"],
	bacninh : ["Tất cả","TP. Bắc Ninh","Huyện Yên Phong","Huyện Quế Võ","Huyện Tiên Du","Huyện Từ Sơn","Huyện Thuận Thành","Huyện Lương Tài","Huyện Gia Bình"],
	bentre : ["Tất cả","TP. Bến Tre","Huyện Châu Thành","Huyện Chợ Lách","Huyện Mỏ Cày Bắc","Huyện Giồng Chôm","Huyện Bình Đại","Huyện Ba Tri","Huyện Thạnh Phú","Huyện Mỏ Cày Nam"],
	binhdinh : ["Tất cả","TP. Quy Nhơn","Huyện An Lão","Huyện Hoài Nhơn","Huyện Hoài Ân","Huyện Phù Mỹ","Huyện Vĩnh Thạnh","Huyện Phù Cát","Huyện Tây Sơn","Huyện An Nhơn","Huyện Tuy Phước","Huyện Vân Canh"],
	binhduong : ["Tất cả","TP. Thủ Dầu Một","Thị xã Bến Cát","Thị xã Dĩ An","Thị xã Thuận An","Huyện Tân Uyên","Huyện Bàu Bàng","Huyện Dầu Tiếng","Huyện Phú Giáo","Huyện Bắc Tân Uyên"],
	binhphuoc : ["Tất cả","Huyện Đồng Phú","Huyện Phước Long","Huyện Lộc Ninh","Huyện Bù Đăng","Huyện Bù Đốp","Huyện Bù Gia Mập","Huyện Chơn Thành","Huyện Hớn Quản","Huyện Phú Riền","Thị xã Bình Long","Thị xã Đồng Xoài"],
	binhthuan : ["Tất cả","TP. Phan Thiết","Tuy Phong","Bắc Bình","Hàm Thuận Bắc","Hàm Thuận Nam","Huyện Tánh Linh","Huyện Hàm Tân","Huyện Đức Linh","Huyện Phú Quí","Thị xã LaGi"],
	brvt : ["Tất cả","TP. Vũng Tàu","TP. Bà Rịa","Huyện Châu Đức","Huyện Xuyên Mộc","Huyện Tân Thành","Huyện Long Đất","Huyện Côn Đảo","Huyện Long Điền","Huyện Đất Đỏ","Thị trấn Phú Mỹ"],
	camau : ["Tất cả","TP. Cà Mau","Huyện Thới Bình","Huyện U Minh","Huyện Trần Văn Thời","Huyện Cái Nước","Huyện Đầm Dơi","Huyện Ngọc Hiển","Huyện Năm Căn","Huyện Phú Tân"],
	cantho : ["Tất cả","TP. Cần Thơ","Quận Thốt Nốt","Quận Ô Môn","Quận Ninh Kiều","Quận Bình Thủy","Quận Cái Răng","Huyện Châu Thành","Huyện Phụng Hiệp","Huyện Long Mỹ","Huyện Phong Điền","Huyện Cờ Đỏ","Huyện Thới Lai","Huyện Vĩnh Thạnh"],
	caobang : ["Tất cả","Huyện Bảo Lạc","Huyện Hà Quảng","Huyện Thông Nông","Huyện Trà Lĩnh","Huyện Trùng Khánh","Huyện Nguyên Bình","Huyện Hòa An","Huyện Quảng Hòa","Huyện Hạ Lang","Huyện Thạch An","Huyện Bảo Lâm","Huyện Phục Hòa","Huyện Quảng Uyên","Thị xã Cao Bằng"],
	daklak : ["Tất cả","TP. Buôn Mê Thuột","Huyện Ea H'leo","Huyện Ea Súp","Huyện Krông Năng","Huyện Krông Búk","Huyện Buôn Đôn","Huyện Cư M'gar","Huyện Ea Kar","Huyện M'Đrắk","Huyện Krông Pắk","Huyện Krông A Na","Huyện Krông Bông","Huyện Lắk","Huyện Cư kuin","Thị xã Buôn Hồ"],
	daknong : ["Tất cả","Huyện Cư Jút","Huyện Đắk Mil","Huyện Krông Nô","Huyện Đắk R'Lấp","Huyện Đắk Glong","Huyện Đắk Song","Thị xã Gia Nghĩa","Huyện Tuy Đức"],
	danang : ["Tất cả","Quận Hải Châu","Quận Thanh Khê","Quận Sơn Trà","Quận Ngũ Hành Sơn","Quận Liên Chiểu","Quận Cẩm Lệ","Huyện Hòa Vang","Đảo Trường Sa"],
	dienbien : ["Tất cả","TP. Điện Biên Phủ","Thị xã Mường Lay","Huyện Điện Biên","Huyện Điện Biên Đông","Huyện Mường Ảng","Huyện Mường Chà","Huyện Mường Nhé","Huyện Tủa Chùa","Huyện Tuần Giáo","Huyện Nậm Pồ"],
	dongnai : ["Tất cả","TP. Biên Hòa","Huyện Tân Phú","Huyện Định Quán","Huyện Vĩnh Cừu","Huyện Thống Nhất","Thị xã Long Khánh","Huyện Xuân Lộc","Huyện Long Thành","Huyện Nhơn Trạch","Huyện Trảng Bom","Huyện Cẩm Mỹ"],
	dongthap : ["Tất cả","TP. Cao Lãnh","Thị xã Sa Đéc","Huyện Tân Hồng","Huyện Hồng Ngự","Huyện Tam Nông","Huyện Thanh Bình","Huyện Tháp Mười","Huyện Cao Lãnh","Huyện Lấp Vò","Huyện Lai Vung","Huyện Châu Thành","Thị xã Hồng Ngự"],
	gialai : ["Tất cả","TP. Pleiku","Huyện KBang","Huyện Mang Yang","Huyện Chư Păh","Huyện Ia Grai","Thị xã An Khê","Huyện Kông Chro","Huyện Đức Cơ","Huyện Chư Prông","Huyện Chư Sê","Huyện Ayun Pa","Huyện Krông Pa","Huyện Đắk Đoa","Huyện Chư Pưh","Huyện Phú Thiện","Huyện Ia Pa","Huyện Đắk Pơ"],
	hagiang : ["Tất cả","TP. Hà Giang","Huyện Đồng Văn","Huyện Mèo Vạc","Huyện Yên Minh","Huyện Quản Bạ","Huyện Bắc Mê","Huyện Hoàng Su Phì","Huyện Vị Xuyên","Huyện Xín Mần","Huyện Bắc Quang","Huyện Quang Bình"],
	haiduong : ["Tất cả","TP. Hải Dương","Huyện Chí Linh","Huyện Nam Sách","Huyện Thanh Hà","Huyện Kinh Môn","Huyện Kim Thành","Huyện Gia Lộc","Huyện Tú Kỳ","Huyện Cẩm Giàng","Huyện Bình Giang","Huyện Thanh Miện","Huyện Ninh Giang"],
	haiphong : ["Tất cả","Quận Hồng Bàng","Quận Ngô Quyền","Quận Lê Chân","Quận Kiến An","Quận Hải An","Quận Dương Kinh","Huyện Thủy Nguyên","Huyện An Hải","Huyện An Lão","Huyện Kiến Thụy","Huyện Tiên Lãng","Huyện Vĩnh Bảo","Huyện Cát Hải","Huyện Bạch Long Vĩ","Huyện An Dương","Thị xã Đồ Sơn"],
	hanam : ["Tất cả","TP. Phủ Lý","Huyện Duy Tiên","Huyện Kim Bảng","Huyện Lý Nhân","Huyện Thanh Liêm","Huyện Bình Lục"],
	hanoi : ["Tất cả","Quận Ba Đình","Quận Tây Hồ","Quận Hoàn Kiếm","Quận Hai Bà Trưng","Quận Đống Đa","Quận Thanh Xuân","Quận Cầu Giấy","Quận Hà Đông","Quận Hoàng Mai","Quận Long Biên","Quận Bắc Từ Liêm","Quận Nam Từ Liêm","Huyện Sóc Sơn","Huyện Đông Anh","Huyện Gia Lâm","Huyện Từ Liêm","Huyện Thanh Trì","Huyện Mê Linh","Huyện Ba Vì","Huyện Chương Mỹ","Huyện Đan Phượng","Huyện Hoài Đức","Huyện Mỹ Đức","Huyện Phú Xuyên","Huyện Phú Thọ","Huyện Quất Oai","Huyện Thạch Thất","Huyện Thanh Oai","Huyện Thường Tín","Huyện Ứng Hòa","Thị Xã Sơn Tây"],
	hatinh : ["Tất cả","TP. Hà Tĩnh","Huyện Nghi Xuân","Huyện Đức Thọ","Huyện Hương Sơn","Huyện Can Lộc","Huyện Thạch Hà","Huyện Cẩm Xuyên","Huyện Hương Khê","Huyện Kỳ Anh","Huyện Vũ Quang","Huyện Lộc Hà","Thị xã Hồng Lĩnh","Thị xã Kỳ Anh"],
	haugiang : ["Tất cả","TP. Vị Thanh","Huyện Vị Thủy","Huyện Châu Thành","Huyện Châu Thành A","Huyện Long Mỹ","Huyện Phụng Hiệp","Thị xã Long Mỹ","Thị xã Ngã Bảy"],
	hcm : ["Tất cả","Quận 1","Quận 2","Quận 3","Quận 4","Quận 5","Quận 6","Quận 7","Quận 8","Quận 9","Quận 10","Quận 11","Quận 12","Quận Gò Vấp","Quận Tân Bình","Quận Bình Thạnh","Quận Phú Nhuận","Quận Thủ Đức","Quận Bình Tân","Quận Tân Phú","Huyện Củ Chi","Huyện Hóc Môn","Huyện Bình Chánh","Huyện Nhà Bè","Huyện Cần Giờ"],
	hoabinh : ["Tất cả","TP. Hòa Bình","Huyện Đà Bắc","Huyện Mai Châu","Huyện Kỳ Sơn","Huyện Lương Sơn","Huyện Kim Bôi","Huyện Tân Lạc","Huyện Lạc Sơn","Huyện Lạc Thủy","Huyện Yên Thủy","Huyện Cao Phong"],
	hungyen : ["Tất cả","TP. Hưng Yên","Huyện Văn Lâm","Huyện Mỹ Văn","Huyện Yên Mỹ","Huyện Châu Giang","Huyện Khoái Châu","Huyện Ân Thi","Huyện Kim Động","Huyện Phù Cừ","Huyện Tiên Lữ","Huyện Mỹ Hào","Huyện Văn Giang"],
	khanhhoa : ["Tất cả","TP. Nha Trang","Huyện Vạn Ninh","Thị xã Ninh Hòa","Huyện Diên Khánh","TP. Cam Ranh","Huyện Khánh Vĩnh","Huyện Khánh Sơn","Huyện Trường Sa","Huyện Cam Lâm"],
	kiengiang : ["Tất cả","TP. Rạch Giá","Huyện Hà Tiên","Huyện Hòn Đất","Huyện Tân Hiệp","Huyện Châu Thành","Huyện Giồng Giềng","Huyện Gò Quao","Huyện An Biên","Huyện An Minh","Huyện Vĩnh Thuận","Huyện Phú Quốc","Huyện Kiên Hải","Huyện Giang Thành","Huyện Kiên Lương","Huyện U Minh Thượng","Thị xã Hà Tiên"],
	kontum : ["Tất cả","TP. Kon Tum","Huyện Đắk Glei","Huyện Ngộc Hồi","Huyện Đắk Tô","Huyện Kon Plông","Huyện Đắk Ha","Huyện Sa Thầy","Huyện Kon Rẫy","Huyện Tu Mơ Rong"],
	laichau : ["Tất cả","Thị xã Điện Biên Phủ","TP. Lai Châu","Huyện Mường Tè","Huyện Phong Thổ","Huyện Sìn Hồ","Huyện Mường Lay","Huyện Tủa Chùa","Huyện Tuần Giáo","Huyện Điện Biên","Huyện Điện Biên Đông","Huyện Than Uyên","Huyện Tam Đường","Huyện Tân Uyên","Huyện Nậm Nhùn"],
	lamdong : ["Tất cả","TP. Đà Lạt","TP. Bảo Lộc","Huyện Lạc Dương","Huyện Đơn Dương","Huyện Đức Trọng","Huyện Lâm Hà","Huyện Bảo Lâm","Huyện Di Linh","Huyện Đạ Huoai","Huyện Đạ Tẻh","Huyện Cát Tiên","Huyện Đam Rông"],
	langson : ["Tất cả","TP. Lạng Sơn","Huyện Tràng Định","Huyện Văn Lãng","Huyện Bình Gia","Huyện Bắc Sơn","Huyện Văn Quan","Huyện Cao Lộc","Huyện Lộc Bình","Huyện Chi Lăng","Huyện Đình Lập","Huyện Hữu Lũng"],
	laocai : ["Tất cả","TP. Lào Cai","Thị xã Cam Đường","Huyện Mường Khương","Huyện Bát Xát","Huyện Bắc Hà","Huyện Bảo Thắng","Huyện Sa Pa","Huyện Bảo Yên","Huyện Than Uyên","Huyện Văn Bàn","Huyện Si Ma Cai"],
	longan : ["Tất cả","TP. Tân An","Huyện Tân Hưng","Huyện Vĩnh Hưng","Huyện Mộc Hóa","Huyện Tân Thạnh","Huyện Thạnh Hóa","Huyện Đức Huệ","Huyện Đức Hòa","Huyện Bến Lức","Huyện Thủ Thừa","Huyện Châu Thành","Huyện Tân Trụ","Huyện Cần Đước","Huyện Cần Giuộc","Thị xã Kiến Tường"],
	namdinh : ["Tất cả","TP. Nam Định","Huyện Vụ Bản","Huyện Mỹ Lộc","Huyện Ý Yên","Huyện Nam Trực","Huyện Trực Ninh","Huyện Xuân Trường","Huyện Giao Thủy","Huyện Nghĩa Hưng","Huyện Hải Hậu"],
	nghean : ["Tất cả","TP. Vinh","Thị xã Cửa Lò","Huyện Quế Phong","Huyện Quỳ Châu","Huyện Kỳ Sơn","Huyện Quỳ Hợp","Huyến Nghĩa Đàn","Huyện Tương Dương","Huyện Quỳnh lưu","Huyện Tân Kỳ","Huyện Con Cuông","Huyện Yên Thành","Huyện Diễn Châu","Huyện Anh Sơn","Huyện Đô Lương","Huyện Thanh Chương","Huyện Nghi Lộc","Huyện Nam Đàn","Huyện Hưng Nguyên"],
	ninhbinh : ["Tất cả","TP. Ninh Bình","Thị xã Tam Điệp","Huyện Nho Quan","Huyện Gia Viễn","Huyện Hoa Lư","Huyện Yên Mô","Huyện Yên Khánh","Huyện Kim Sơn"],
	ninhthuan : ["Tất cả","TP. Phan Rang","Huyện Ninh Sơn","Huyện Ninh Hải","Huyện Ninh Phước","Huyện Bác Ái","Huyện Thuận Bắc","Huyện Thuận Nam"],
	phutho : ["Tất cả","TP. Việt Trì","Thị xã Phú Thọ","Huyện Đoan Hùng","Huyện Hạ Hòa","Huyện Thanh Ba","Huyện Phong Châu","Huyện Lâm Thao","Huyện Sông Thao","Huyện Yên Lập","Huyện Tam Thanh","Huyện Thanh Thủy","Huyện Thanh Sơn","Huyện Cẩm Khê","Huyện Phù Ninh","Huyện Tam Nông","Huyện Tân Sơn"],
	phuyen : ["Tất cả","TP. Tuy Hòa","Huyện Đồng Xuân","Huyện Sông Cầu","Huyện Tuy An","Huyện Sơn Hòa","Huyện Đông Hòa","Huyện Sông Hinh","Huyện Phú Hòa","Huyện Tây Hòa"],
	quangbinh : ["Tất cả","TP. Đồng Hới","Huyện Tuyên Hóa","Huyện Minh Hóa","Huyện Quảng Trạch","Huyện Bố Trạch","Huyện Quảng Ninh","Huyện Lệ Thủy","Thị xã Ba Đồn"],
	quangnam : ["Tất cả","TP. Tam Kỳ","TP. Hội An","Huyện Hiên","Huyện Đại Lộc","Huyện Điện Bàn","Huyện Duy Xuyên","Huyện Giằng","Huyện Thăng Bình","Huyện Quế Sơn","Huyện Hiệp Đức","Huyện Tiên Phước","Huyện Phước Sơn","Huyện Núi Thành","Huyện Bắc Trà My","Huyện Nông Sơn","Huyện Phú Ninh","Huyện Nam Trà My","Huyện Đông Giang","Huyện Tây Giang"],
	quangngai : ["Tất cả","TP. Quảng Ngãi","Huyện Lý Sơn","Huyền Bình Sơn","Huyện Trà Bồng","Huyện Sơn Tịnh","Huyện Sơn Tây","Huyện Sơn Hà","Huyện Tư Nghĩa","Huyện Nghĩa Hành","Huyện Minh Long","Huyện Mộ Đức","Huyện Đức Phổ","Huyện Ba Tơ","Huyện Tây Trà"],
	quangninh : ["Tất cả","TP. Hạ Long","TP. Cẩm Phả","TP. Uông Bí","Huyện Bình Liêu","TP. Móng Cái","Huyện Quảng Hà","Huyện Tiên Yên","Huyện Ba Chẽ","Huyện Vân Đồn","Huyện Hoàng Bồ","Huyện Đông Triều","Huyện Cô Tô","Huyện Yên Hưng","Thị xã Quảng Yên","Huyện Đầm Hà","Huyện Hải Hà"],
	quangtri : ["Tất cả","TP. Đông Hà","Thị xã Quảng Trị","Huyện Vĩnh Linh","Huyện Gio Linh","Huyện Cam Lộ","Huyện Triệu Phong","Huyện Hải Lăng","Huyện Hướng Hóa","Huyện Đa Krông","Huyện Cồn Cỏ"],
	soctrang : ["Tất cả","TP. Sóc Trăng","Huyện Kế Sách","Huyện Long Phú","Huyện Mỹ Tú","Huyện Mỹ Xuyên","Huyện Thạnh Trị","Huyện Vĩnh Châu","Thị xã Ngã Năm","Huyện Trần Đề","Huyện Châu Thành","Huyện Cù Lao Dung"],
	sonla : ["Tất cả","TP. Sơn La","Huyện Quỳnh Nhai","Huyện Mường La","Huyện Thuận Châu","Huyện Bắc Yên","Huyện Phù Yên","Huyện Mai Sơn","Huyện Sông Mã","Huyện Yên Châu","Huyện Mộc Châu","Huyện Sốp Cộp","Huyện Vân Hồ"],
	tayninh : ["Tất cả","TP. Tây Ninh","Huyện Tân Biên","Huyện Tân Châu","Huyện Dương Minh Châu","Huyện Châu Thành","Huyện Hòa Thành","Huyện Bế Cầu","Huyện Gò Dầu","Huyện Trảng Bàng"],
	thaibinh: ["Tất cả","TP. Thái Bình","Huyện Quỳnh Phụ","Huyện Hưng Hà","Huyện Thái Thụy","Huyện Đông Hưng","Huyện Vũ Thư","Huyện Kiến Xương","Huyện Tiền Hải"],
	thainguyen: ["Tất cả","TP. Thái Nguyên","TP. Sông Công","Huyện Định Hóa","Huyện Võ Nhai","Huyện Phú Lương","Huyện Đồng Hỷ","Huyện Đại Từ","Huyện Phú Bình","Huyện Phổ Yên"],
	thanhhoa: ["Tất cả","TP. Thanh Hóa","Thị xã Bỉm Sơn","Thị xã Sầm Sơn","Huyện Mường Lát","Huyện Quan Hóa","Huyện Quan Sơn","Huyện Bá Thước","Huyện Cẩm Thủy","Huyện Lang Chánh","Huyện Thạch Thành","Huyện Ngọc Lặc","Huyện Thường Xuân","Huyện Như Xuân","Huyện Như Thanh","Huyện Vĩnh Lộc","Huyện Hà Trung","Huyện Nga Sơn","Huyện Yên Định","Huyện Thọ Xuân","Huyện Hậu Lộc","Huyện Thiệu Hoá","Huyện Hoằng Hóa","Huyện Đông Sơn","Huyện Triệu Sơn","Huyện Quảng Xương","Huyện Nông Cống","Huyện Tĩnh Gia"],
	thuathienhue: ["Tất cả","TP. Huế","Huyện Phong Điền","Huyện Quảng Điền","Huyện Hương Trà","Huyện Phú Vang","Huyện Hương Thủy","Huyện Phú Lộc","Huyện A Lưới","Huyện Nam Đông"],
	tiengiang : ["Tất cả","TP. Mỹ Tho","Thị xã Gò Công","Huyện Tân Phước","Huyện Châu Thành","Huyện Cai Lậy","Huyện Chợ Gạo","Huyện Cái Bè","Huyện Gò Công Tây","Huyện Gò Công Đông","Huyện Tân Phú Đông","Thị xã Cai Lậy"],		
	travinh: ["Tất cả","TP. Trà Vinh","Huyện Càng Long","Huyện Châu Thành","Huyện Cầu Kè","Huyện Tiểu Cần","Huyện Cầu Ngang","Huyện Trà Cú","Huyện Duyên Hải"],
	tuyenquang: ["Tất cả","TP. Tuyên Quang","Huyện Nà Hang","Huyện Chiêm Hóa","Huyện Hàm Yên","Huyện Yên Sơn","Huyện Sơn Dương","Huyện Lâm Bình"],
	vinhlong: ["Tất cả","TP. Vĩnh Long","Huyện Long Hồ","Huyện Mang Thít","Huyện Bình Minh","Huyện Tam Bình","Huyện Trà Ôn","Huyện Vũng Liêm","Huyện Bình Tân"],
	vinhphuc: ["Tất cả","TP. Vĩnh Yên","Huyện Lập Thạch","Huyện Tam Dương","Huyện Vĩnh Tường","Huyện Yên Lạc","Huyện Bình Xuyên","Thị xã Phúc Yên","Huyện Sông Lô","Huyện Tam Đảo"],
	yenbai: ["Tất cả","TP. Yên Bái","Thị xã Nghĩa Lộ","Huyện Lục Yên","Huyện Văn Yên","Huyện Mù Căng Chải","Huyện Trấn Yên","Huyện Yên Bình","Huyện Văn Chấn","Huyện Trạm Tấu"]
};
// Change grid list in collection
function changeTemplate(element) {
	if ( $(element).hasClass('active') ) {

	} else {
		$('#event-grid > div:not(.clear-ajax)').hide();
		$('.box-product-lists > .loadmore, .box-product-lists > .pagination-default').hide();
		$('.icon-loading').show();
		$('.btn-change-list').removeClass('active');
		$(element).addClass('active');
		if( $(element).attr('data-template') == 'template-list' ) {
			$('#event-grid').addClass('template-list');
		} else {
			$('#event-grid').removeClass('template-list');
		}
	}
	jQuery('#event-grid').imagesLoaded(function() {
		$('.icon-loading').hide();
		$('#event-grid > div:not(.clear-ajax)').show();
		$('.box-product-lists > .loadmore, .box-product-lists > .pagination-default').show();
		jQuery(window).resize();
	});
}

// Keyup find item in list filter collection
function filterItemInList(object) {
	q = object.val().toLowerCase();
	object.parent().next().find('li').show();
	if (q.length > 0) {
		object.parent().next().find('li').each(function() {
			if ($(this).find('label').attr("data-filter").indexOf(q) == -1)
				$(this).hide();
		})
	}
}
// Keyup find item in list filter collection
function filterItemInList_2(object) {
	q = object.val().toLowerCase();
	q = slug_words(q).trimRight();
	object.parent().next().find('li').show();
	if (q.length > 0) {
		object.parent().next().find('li').each(function() {
			if (slug_words($(this).find('span').html()).indexOf(q) == -1)
				$(this).hide();
		})
	}
}

// Check owl item next/prev show or hide
function checkItemOwlShow(object,tab,a,b,c,d) {
	if ( tab == 'tab' ) {
		item = object.find('.active').find('.owl-carousel');
	} else {
		item = object.find('.owl-carousel');
	}	
	if ( item.find('.owl-item.active').length < a && $(window).width() >= 1200 ) {
		item.find('.owl-controls').hide();
	}
	if ( item.find('.owl-item.active').length < b && $(window).width() >= 992 && $(window).width() < 1199 ) {
		item.find('.owl-controls').hide();
	}
	if ( item.find('.owl-item.active').length < c && $(window).width() >= 768 && $(window).width() < 991 ) {
		item.find('.owl-controls').hide();
	}
	if ( item.find('.owl-item.active').length < d && $(window).width() < 768 ) {
		item.find('.owl-controls').hide();
	}
}

// Destroy resize image
function destroyResize(url){
	if ( url != undefined ) {
		if ( url.indexOf('_pico') != -1 || url.indexOf('_icon') != -1 || url.indexOf('_thumb') != -1
				|| url.indexOf('_small') != -1 || url.indexOf('_compact') != -1 || url.indexOf('_medium') != -1
				|| url.indexOf('_large') != -1 || url.indexOf('_grande') != -1 || url.indexOf('_1024x1024') != -1
				|| url.indexOf('_2048x2048') != -1 || url.indexOf('_master') != -1 ) {		
			link_image = (url.split('_')[url.split('_').length - 1]).split('.')[0];
			switch (link_image) {
				case 'pico': 
					link_image = url.split('_pico').join('').replace('http:','').replace('https:','');;
					break;
				case 'icon': 
					link_image = url.split('_icon').join('').replace('http:','').replace('https:','');;
					break;
				case 'thumb': 
					link_image = url.split('_thumb').join('').replace('http:','').replace('https:','');;
					break;
				case 'small':
					link_image = url.split('_small').join('').replace('http:','').replace('https:','');; 
					break;
				case 'compact': 
					link_image = url.split('_compact').join('').replace('http:','').replace('https:','');;
					break;
				case 'medium': 
					link_image = url.split('_medium').join('').replace('http:','').replace('https:','');;
					break;
				case 'large': 
					link_image = url.split('_large').join('').replace('http:','').replace('https:','');;
					break;
				case 'grande': 
					link_image = url.split('_grande').join('').replace('http:','').replace('https:','');;
					break;
				case '1024x1024': 
					link_image = url.split('_1024x1024').join('').replace('http:','').replace('https:','');;
					break;
				case '2048x2048': 
					link_image = url.split('_2048x2048').join('').replace('http:','').replace('https:','');;
					break;
				case 'master':
					link_image = url.split('_master').join('').replace('http:','').replace('https:','');;
					break;
			}
			return link_image;
		}
		return url;
	}
}

// Modal Cart
function getCartModal(){
	var cart = null;
	jQuery('#cartform').hide();
	jQuery('#myCart #exampleModalLabel').text("Giỏ hàng");
	jQuery.getJSON('/cart.js', function(cart, textStatus) {
		if(cart)
		{
			jQuery('#cartform').show();
			jQuery('.line-item:not(.original)').remove();
			jQuery.each(cart.items,function(i,item){
				var total_line = 0;
				var total_line = item.quantity * item.price;
				tr = jQuery('.original').clone().removeClass('original').appendTo('table#cart-table tbody');
				if(item.image != null)
					tr.find('.item-image').html("<img src=" + Haravan.resizeImage(item.image,'small') + ">");
				else
					tr.find('.item-image').html("<img src='//hstatic.net/0/0/global/noDefaultImage6_large.gif'>");
				vt = item.variant_options;
				if(vt.indexOf('Default Title') != -1)
					vt = '';
				tr.find('.item-title').children('a').html(item.product_title + '<br><span>' + vt + '</span>').attr('href', item.url);
				tr.find('.item-quantity').html("<input id='quantity1' name='updates[]' min='1' type='number' value=" + item.quantity + " class='' />");
				if ( typeof(formatMoney) != 'undefined' ){
					tr.find('.item-price').html(Haravan.formatMoney(total_line, formatMoney));
				}else {
					tr.find('.item-price').html(Haravan.formatMoney(total_line, ''));
				}
				tr.find('.item-delete').html("<a href='javascript:void(0);' onclick='deleteCart(" + item.variant_id + ")' ><svg class='svg-icon-size-15 svg-icon-bg svg-icon-inline' style='fill:#333'><use xlink:href='#icon-delete'></use></svg></a>");
			});
			jQuery('.item-total').html(Haravan.formatMoney(cart.total_price, formatMoney));
			jQuery('.modal-title').children('b').html(cart.item_count);
			jQuery('.cart-number').html(cart.item_count + ' sản phẩm');
			if(cart.item_count == 0){				
				jQuery('#exampleModalLabel').html('Giỏ hàng của bạn đang trống. Mời bạn tiếp tục mua hàng.');
				jQuery('#cart-view').html('<tr><td>Hiện chưa có sản phẩm</td></tr>');
				jQuery('#cartform').hide();
			}
			else{			
				jQuery('#exampleModalLabel').html('Bạn có ' + cart.item_count + ' sản phẩm trong giỏ hàng.');
				jQuery('#cartform').removeClass('hidden');
				jQuery('#cart-view').html('');
			}
			// Get product for cart view

			jQuery.each(cart.items,function(i,item){
				clone_item(item);
			});
			jQuery('#total-view-cart').html(Haravan.formatMoney(cart.total_price, formatMoney));
		}
		else{
			jQuery('#exampleModalLabel').html('Giỏ hàng của bạn đang trống. Mời bạn tiếp tục mua hàng.');
			jQuery('#cart-view').html('<tr><td>Hiện chưa có sản phẩm</td></tr>');
			jQuery('#cartform').hide();
		}
	});
}

function clone_item(product){
	var item_product = jQuery('#clone-item-cart').find('.item_2');
	item_product.find('img').attr('src',Haravan.resizeImage(product.image,'small')).attr('alt', product.url);
	item_product.find('a').attr('href', product.url).attr('title', product.url);
	item_product.find('.pro-title-view').html(product.title);
	item_product.find('.pro-quantity-view').html('Số lượng: ' + product.quantity);
	item_product.find('.pro-price-view').html('Giá: ' + Haravan.formatMoney(product.price,formatMoney));
	item_product.clone().removeClass('hidden').prependTo('#cart-view');
}

// Delete variant in modalCart
function deleteCart(variant_id){
	var params = {
		type: 'POST',
		url: '/cart/change.js',
		data: 'quantity=0&id=' + variant_id,
		dataType: 'json',
		success: function(cart) {
			getCartModal();
		},
		error: function(XMLHttpRequest, textStatus) {
			Haravan.onError(XMLHttpRequest, textStatus);
		}
	};
	jQuery.ajax(params);
}

// Update product in modalCart
jQuery(document).on("click","#update-cart-modal",function(event){
	event.preventDefault();
	if (jQuery('#cartform').serialize().length <= 5) return;
	jQuery(this).html('Đang cập nhật');
	var params = {
		type: 'POST',
		url: '/cart/update.js',
		data: jQuery('#cartform').serialize(),
		dataType: 'json',
		success: function(cart) {
			if ((typeof callback) === 'function') {
				callback(cart);
			} else {
				getCartModal();
			}
			jQuery('#update-cart-modal').html('Cập nhật');
		},
		error: function(XMLHttpRequest, textStatus) {
			Haravan.onError(XMLHttpRequest, textStatus);
		}
	};
	jQuery.ajax(params);
});

// Add a product in checkout
var buy_now = function(id) {
	var quantity = 1;
	var params = {
		type: 'POST',
		url: '/cart/add.js',
		data: 'quantity=' + quantity + '&id=' + id,
		dataType: 'json',
		success: function(line_item) {
			window.location = '/checkout';
		},
		error: function(XMLHttpRequest, textStatus) {
			Haravan.onError(XMLHttpRequest, textStatus);
		}
	};
	jQuery.ajax(params);
}

// Add a product in cart
var add_item = function(id) {
	var quantity = 1;
	var params = {
		type: 'POST',
		url: '/cart/add.js',
		data: 'quantity=' + quantity + '&id=' + id,
		dataType: 'json',
		success: function(line_item) {
			window.location = '/cart';
		},
		error: function(XMLHttpRequest, textStatus) {
			Haravan.onError(XMLHttpRequest, textStatus);
		}
	};
	jQuery.ajax(params);
}

// Add a product and show modal cart
var add_item_show_modalCart = function(id) {
	if( check_show_modal ) {		
		check_show_modal = false;
		timeOut_modalCart = setTimeout(function(){ 
			check_show_modal = true;
		}, 3000);
		if ( $('.addtocart-modal').hasClass('clicked_buy') ) {
			var quantity = $('#quantity').val();
		} else {
			var quantity = 1;
		}
		var params = {
			type: 'POST',
			url: '/cart/add.js',
			async: true,
			data: 'quantity=' + quantity + '&id=' + id,
			dataType: 'json',
			success: function(line_item) {
				if ( jQuery(window).width() >= 768 ) {
					getCartModal();					
					jQuery('#myCart').modal('show');				
					jQuery('.modal-backdrop').css({'height':jQuery(document).height(),'z-index':'99'});
				} else {
					window.location = '/cart';
				}
				$('.addtocart-modal').removeClass('clicked_buy');
			},
			error: function(XMLHttpRequest, textStatus) {
				Haravan.onError(XMLHttpRequest, textStatus);
			}
		};
		jQuery.ajax(params);
	}
}

// Plus number quantiy product detail 
var plusQuantity = function() {
	if ( jQuery('input[name="quantity"]').val() != undefined ) {
		var currentVal = parseInt(jQuery('input[name="quantity"]').val());
		if (!isNaN(currentVal)) {
			jQuery('input[name="quantity"]').val(currentVal + 1);
		} else {
			jQuery('input[name="quantity"]').val(1);
		}
	}else {
		console.log('error: Not see elemnt ' + jQuery('input[name="quantity"]').val());
	}
}

// Minus number quantiy product detail 
var minusQuantity = function() {
	if ( jQuery('input[name="quantity"]').val() != undefined ) {
		var currentVal = parseInt(jQuery('input[name="quantity"]').val());
		if (!isNaN(currentVal) && currentVal > 1) {
			jQuery('input[name="quantity"]').val(currentVal - 1);
		}
	}else {
		console.log('error: Not see elemnt ' + jQuery('input[name="quantity"]').val());
	}
}

// Change handleize
var slug = function(str) {
	str = str.toLowerCase();
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");
	str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1- 
	str = str.replace(/^\-+|\-+$/g, "");
	return str;
}

var slug_words = function(str) {
	str = str.toLowerCase();
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, " ");
	str = str.replace(/-+-/g, ""); //thay thế 2- thành 1- 
	str = str.replace(/^\-+|\-+$/g, "");
	return str;
}

// Resize image article thumb for blog home
var imageThumbResize = function(){
	if ( jQuery('.lists-thumb-resize .box-thumb-resize').length > 1 ) {
		var height_thumb_resize = 0;
		jQuery.each(jQuery('.lists-thumb-resize .box-thumb-resize'),function(i,v){
			if ( jQuery(this).find('.image-thumb-resize').height() > height_thumb_resize ) {
				height_thumb_resize = jQuery(this).find('.image-thumb-resize').height();
			}
		});
		jQuery('.lists-thumb-resize .box-thumb-resize .image-thumb-resize').css('height',height_thumb_resize);
	}
}
// Resize image article thumb for blog home
var imageBlogResize = function(){
	if ( jQuery('.lists-blog-resize').length > 1 ) {
		var height_blog_resize = 0;
		jQuery.each(jQuery('.lists-blog-resize .image-blog-resize'),function(i,v){
			if ( jQuery(this).height() > height_blog_resize ) {
				height_blog_resize = jQuery(this).height();
			}
		});
		jQuery('.lists-blog-resize .image-blog-resize').css('height',height_blog_resize);
	}
}

jQuery(document).ready(function(){
	$.each(city,function(i,v){
		$('.data-bind-city').append("<li data-city='" + i + "'><a><span class='text'>" + v + "</span></a></li>");
	});

	jQuery(document).on('click','.headtab-filter a',function(){
		$('.headtab-filter').removeClass('active');
		$(this).parent().addClass('active');
	});
	jQuery(document).on('click','.btn-select li',function(){
		$(this).parents('.bootstrap-select').addClass('active');
		$(this).parents('.bootstrap-select').find('.dropdown-toggle > .filter-option').html($(this).find('span').html());
		if ( $(this).parents('#filter-acreage-index').length > 0 || $(this).parents('#filter-price-index').length > 0 ){
			$(this).parents('.bootstrap-select').find('.dropdown-toggle > .filter-option').attr('data-filter',$(this).find('span').attr('data-filter'));
		}	else {
			$(this).parents('.bootstrap-select').find('.dropdown-toggle > .filter-option').attr('data-filter',$(this).find('span').html());
			$(this).parents('.bootstrap-select').find('.bs-searchbox input').val('');
		}
		$('.btn-select li').show();
		if( $(this).parent('.data-bind-city').length > 0 && $(this).attr('data-city') != '' && $(this).attr('data-city').indexOf('tatca') == -1 ) {
			$('.data-bind-district').html('');
			$('#filter-district > .dropdown-menu').removeClass('hidden');
			$.each(district[$(this).attr('data-city')],function(i,v){
				$('.data-bind-district').append("<li><a><span class='text'>" + v + "</span></a></li>");
			});
		}
	});

	jQuery('.product-comments .tab-content > div').eq(0).addClass('active');

	$('#navbar li').hover(function(){
		$(this).toggleClass('open');
	});

	// Menu sidebarleft
	$('#menusidebarleft li a').click(function(e){
		if ( $(this).parent('li').attr('aria-expanded') == 'false' ) {
			e.preventDefault();
			if ( $(this).parent('.submenu-parent').length > 0 ) {
				$(this).parent('.submenu-parent').parent('ul').find('li.submenu-parent,li.submenu-children').attr('aria-expanded','false').children('ul').slideUp();

			} else {
				if ( $(this).parent('.submenu-children').length > 0 ) {
					$(this).parent('.submenu-children').parent('ul').children('li.submenu-parent,li.submenu-children').attr('aria-expanded','false').children('ul').slideUp();
				}
			}
			$(this).parent('li').attr('aria-expanded','true');
			$(this).nextAll(".dropdown-menu").slideDown();
			$(this).next('ul').slideDown();			
		} else {
			$(this).nextAll(".dropdown-menu").slideUp();
			$(this).parent('li').attr('aria-expanded','false');
		}
	});

	// Menu mobile
	new mlPushMenu( document.getElementById( 'mp-menu' ), document.getElementById( 'trigger' ), {
		type : 'cover'
	});

	// Scroll Top
	jQuery(document).on("click", ".back-to-top", function(){
		jQuery(this).removeClass('display');
		jQuery('html, body').animate({
			scrollTop: 0			
		}, 600);
	});

	// Add attribute data-spy=scroll in element <a> when you click, it'll scroll to href="#abc"
	jQuery(document).on("click", "a[data-spy=scroll]", function(e) {
		e.preventDefault();
		jQuery('body').animate({scrollTop: (jQuery(jQuery(this).attr('href')).offset().top - 70) + 'px'}, 500);
	});

	// Add a product when you change variant in cart ( product detail )
	jQuery(document).on("click", "#buy-now", function(e) {
		e.preventDefault() ;
		var params = {
			type: 'POST',
			url: '/cart/add.js',
			data: jQuery('#add-item-form').serialize(),
			dataType: 'json',
			success: function(line_item) {
				window.location = '/checkout';
			},
			error: function(XMLHttpRequest, textStatus) {
				Haravan.onError(XMLHttpRequest, textStatus);
			}
		};
		jQuery.ajax(params);
	});

	// Active image thumb and change image featured ( product detail )
	jQuery(document).on("click", ".product-thumb img", function() {
		jQuery('.product-thumb').removeClass('active');
		jQuery(this).parents('.product-thumb').addClass('active');
		jQuery(".product-image-feature").attr("src",jQuery(this).parent().attr("data-image"));
	});

	// Click change slide next image featured ( product detail )
	jQuery(document).on("click", ".slide-next", function() {
		if(jQuery(".product-thumb.active").prev().length > 0){
			jQuery(".product-thumb.active").prev().find('img').click();
		}
		else{
			jQuery(".product-thumb:last img").click();
		}
	});

	// Click change slide prev image featured ( product detail )
	jQuery(document).on("click", ".slide-prev", function() {
		if(jQuery(".product-thumb.active").next().length > 0){
			jQuery(".product-thumb.active").next().find('img').click();
		}
		else{
			jQuery(".product-thumb:first img").click();
		}
	});

	// Search filter index sidebar
	$(document).on("click","#search-index", function(){
		data_type = $('#filter-type .headtab-filter.active').attr('data-type');
		search_filter = '/search?q=filter=(';
		url = '' + data_type;
		data_city = $('#filter-city > button').find('span').attr('data-filter');
		if ( data_city.indexOf('Tất cả') == -1 ) {
			data_city = '(vendor:product**' + data_city + ')';
			url = url + '&&' + data_city;
		}
		data_district = $('#filter-district > button').find('span').attr('data-filter');
		if ( data_district.indexOf('Tất cả') == -1 ) {
			data_district = '(tag:product**' + data_district + ')';
			url = url + '&&' + data_district;
		}
		data_acreage = $('#filter-acreage-index > button').find('span').attr('data-filter');
		if ( data_acreage.indexOf('Tất cả') == -1 ) {
			url = url + '&&' + data_acreage;
		}
		data_price = $('#filter-price-index > button').find('span').attr('data-filter');
		if ( data_price.indexOf('Tất cả') == -1 ) {
			url = url + '&&' + data_price;
		}
		window.location = search_filter + encodeURIComponent(url) + ")";
	});

	// Cart header hover
	jQuery('.cart-link').hover(function() {
		jQuery('.cart-view').slideDown(200);
	}, function() {
		setTimeout(function() {
			if (viewout) jQuery('.cart-view').slideUp(200);
		}, 500)
	})
	jQuery('.cart-view').hover(function() {
		viewout = false;
	}, function() {
		viewout = true;
		jQuery('.cart-view').slideUp(100);
	})

	// Ajax get product in collection for page home
	if ( $('#tab-product-template').length > 0 ) {
		$('#tab-product-template').tabdrop({text: '<i class="fa fa-bars"></i>'});
	}

	// Scroll show icon section index
	jQuery(window).on("scroll", function() {	
		/* Process scroll header top  */		 
		if ( jQuery(window).width() >= 768 ) {	
			/*
			if( jQuery(window).scrollTop() > 0 ) {		
				if (cur_scrollTop > jQuery(window).scrollTop()) {
					jQuery('nav.navbar-main.navbar').addClass("translateY");
				} else {
					jQuery('nav.navbar-main.navbar').addClass('menu-fixed');
				}
				cur_scrollTop = jQuery(window).scrollTop();
			} else {
				jQuery('nav.navbar-main.navbar').removeClass("menu-fixed");
			}
*/
		} else {
			if( jQuery(window).scrollTop() > 0 ) {			
				if (cur_scrollTop > jQuery(window).scrollTop()) {
					jQuery('nav.navbar-main.navbar').removeClass("affix-mobile");
				} else {
					jQuery('nav.navbar-main.navbar').addClass('affix-mobile');
				}
				cur_scrollTop = jQuery(window).scrollTop();
			}
		}
		/* Scroll to top */
		if ( jQuery('.back-to-top').length > 0 && jQuery(window).scrollTop() > 500 ) {
			jQuery('.back-to-top').addClass('display');
		} else {
			jQuery('.back-to-top').removeClass('display');
		}
	});
});