const c = ['An Giang', 'Bà Rịa - Vũng Tàu', 'Bạc Liêu', 'Bắc Kạn', 'Bắc Giang', 'Bắc Ninh', 'Bến Tre', 'Bình Dương', 'Bình Định', 'Bình Phước', 'Bình Thuận', 'Cà Mau', 'Cao Bằng', 'Cần Thơ', 'Đà Nẵng', 'Đắk Lắk', 'Đắk Nông', 'Đồng Nai', 'Đồng Tháp', 'Điện Biên', 'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Nội', 'Hà Tĩnh', 'Hải Dương', 'Hải Phòng', 'Hòa Bình', 'Hậu Giang', 'Hưng Yên', 'Thành phố Hồ Chí Minh', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lào Cai', 'Lạng Sơn', 'Lâm Đồng', 'Long An', 'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên', 'Thanh Hóa', 'Thừa Thiên - Huế', 'Tiền Giang', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái']; const c1 = ['Thành phố Long Xuyên', 'Thành phố Châu Đốc', 'Thị xã Tân Châu', 'Huyện An Phú', 'Huyện Châu Phú', 'Huyện Châu Thành', 'Huyện Chợ Mới', 'Huyện Phú Tân', 'Huyện Thoại Sơn', 'Huyện Tịnh Biên', 'Huyện Tri Tôn']; const c2 = ['Thành phố Vũng Tàu', 'Thị xã Bà Rịa', 'Thị xã Phú Mỹ', 'Huyện Châu Đức', 'Huyện Côn Đảo', 'Huyện Đất Đỏ', 'Huyện Long Điền', 'Huyện Tân Thành', 'Huyện Xuyên Mộc']; const c3 = ['Thành phố Bạc Liêu', 'Huyện Đông Hải', 'Huyện Giá Rai', 'Huyện Hòa Bình', 'Huyện Hồng Dân', 'Huyện Phước Long', 'Huyện Vĩnh Lợi']; const c4 = ['Thị xã Bắc Kạn', 'Huyện Ba Bể', 'Huyện Bạch Thông', 'Huyện Chợ Đồn', 'Huyện Chợ Mới', 'Huyện Na Rì', 'Huyện Ngân Sơn', 'Huyện Pác Nặm']; const c5 = ['Thành phố Bắc Giang', 'Huyện Hiệp Hòa', 'Huyện Lạng Giang', 'Huyện Lục Nam', 'Huyện Lục Ngạn', 'Huyện Sơn Động', 'Huyện Tân Yên', 'Huyện Việt Yên', 'Huyện Yên Dũng', 'Huyện Yên Thế']; const c6 = ['Thành phố Bắc Ninh', 'Thị xã Từ Sơn', 'Huyện Gia Bình', 'Huyện Lương Tài', 'Huyện Quế Võ', 'Huyện Thuận Thành', 'Huyện Tiên Du', 'Huyện Yên Phong']; const c7 = ['Thành phố Bến Tre', 'Huyện Ba Tri', 'Huyện Bình Đại', 'Huyện Châu Thành', 'Huyện Chợ Lách', 'Huyện Giồng Trôm', 'Huyện Mỏ Cày Bắc', 'Huyện Mỏ Cày Nam', 'Huyện Thạnh Phú']; const c8 = ['Thành phố Thủ Dầu Một', 'Thị xã Bến Cát', 'Thị xã Tân Uyên', 'Huyện Bắc Tân Uyên', 'Huyện Dầu Tiếng', 'Huyện Dĩ An', 'Huyện Phú Giáo', 'Huyện Tân Uyên', 'Huyện Thuận An']; const c9 = ['Thành phố Quy Nhơn', 'Huyện An Lão', 'Huyện An Nhơn', 'Huyện Hoài Ân', 'Huyện Hoài Nhơn', 'Huyện Phù Cát', 'Huyện Phù Mỹ', 'Huyện Tây Sơn', 'Huyện Tuy Phước', 'Huyện Vân Canh', 'Huyện Vĩnh Thạnh']; const c10 = ['Thị xã Bình Long', 'Thị xã Đồng Xoài', 'Thị xã Phước Long', 'Huyện Bù Đăng', 'Huyện Bù Đốp', 'Huyện Bù Gia Mập', 'Huyện Chơn Thành', 'Huyện Đồng Phú', 'Huyện Hớn Quản', 'Huyện Lộc Ninh', 'Huyện Phú Riềng']; const c11 = ['Thành phố Phan Thiết', 'Thị xã La Gi', 'Huyện Bắc Bình', 'Huyện Đảo Phú Quý', 'Huyện Đức Linh', 'Huyện Hàm Tân', 'Huyện Hàm Thuận Bắc', 'Huyện Hàm Thuận Nam', 'Huyện Tánh Linh', 'Huyện Tuy Phong']; const c12 = ['Thành phố Cà Mau', 'Huyện Cái Nước', 'Huyện Đầm Dơi', 'Huyện Năm Căn', 'Huyện Ngọc Hiển', 'Huyện Phú Tân', 'Huyện Thới Bình', 'Huyện Trần Văn Thời', 'Huyện U Minh', 'Huyện Tuy Phong']; const c13 = ['Thị xã Cao Bằng', 'Huyện Bảo Lạc', 'Huyện Bảo Lâm', 'Huyện Hạ Lang', 'Huyện Hà Quảng', 'Huyện Hòa An', 'Huyện Nguyên Bình', 'Huyện Phục Hòa', 'Huyện Quảng Uyên', 'Huyện Thạch An', 'Huyện Thông Nông', 'Huyện Trà Lĩnh', 'Huyện Trùng Khánh']; const c14 = ['Quận Bình Thủy', 'Quận Cái Răng', 'Quận Ninh Kiều', 'Quận Ô Môn', 'Quận Thốt Nốt', 'Huyện Thới Lai', 'Huyện Cờ Đỏ', 'Huyện Phong Điền', 'Huyện Vĩnh Thạnh']; const c15 = ['Quận Cẩm Lệ', 'Quận Hải Châu', 'Quận Liên Chiểu', 'Quận Ngũ Hành Sơn', 'Quận Sơn Trà', 'Quận Thanh Khê', 'Huyện Hòa Vang', 'Huyện Hoàng Sa']; const c16 = ['Thành phố Buôn Ma Thuột', 'Thị xã Buôn Hồ', 'Huyện Buôn Đôn', 'Huyện Cư Kuin', "Huyện Cư M'gar", "Huyện Ea H'Leo", 'Huyện Ea Kar', 'Huyện Ea Súp', 'Huyện Krông Ana', 'Huyện Krông Bông', 'Huyện Krông Buk', 'Huyện Krông Năng', 'Huyện Krông Pắc', 'Huyện Lăk', "Huyện M'Đrăk"]; const c17 = ['Thị xã Gia Nghĩa', 'Huyện Cư Jút', 'Huyện Dăk GLong', 'Huyện Dăk Mil', "Huyện Dăk R'Lấp", 'Huyện Dăk Song', 'Huyện Krông Nô', 'Huyện Tuy Đức']; const c18 = ['Thành phố Biên Hòa', 'Thị xã Long Khánh', 'Quận Tân Phú', 'Huyện Cẩm Mỹ', 'Huyện Định Quán', 'Huyện Long Thành', 'Huyện Nhơn Trạch', 'Huyện Thống Nhất', 'Huyện Trảng Bom', 'Huyện Vĩnh Cửu', 'Huyện Xuân Lộc']; const c19 = ['Thành phố Cao Lãnh', 'Thị xã Sa Đéc', 'Thị xã Hồng Ngự', 'Huyện Châu Thành', 'Huyện Cao Lãnh', 'Huyện Huyện Hồng Ngự', 'Huyện Lai Vung', 'Huyện Lấp Vò', 'Huyện Tam Nông', 'Huyện Tân Hồng', 'Huyện Thanh Bình', 'Huyện Tháp Mười']; const c20 = ['Thành phố Điện Biên Phủ', 'Thị xã Mường Lay', 'Huyện Điện Biên', 'Huyện Điện Biên Đông', 'Huyện Mường Ảng', 'Huyện Mường Chà', 'Huyện Mường Nhé', 'Huyện Nậm Pồ', 'Huyện Tủa Chùa', 'Huyện Tuần Giáo']; const c21 = ['Thành Phố Pleiku', 'Thị xã An Khê', 'Thị xã AYun Pa', 'Huyện Chư Păh', 'Huyện Chư Pưh', 'Huyện Chư Sê', 'Huyện ChưPRông', 'Huyện Đăk Đoa', 'Huyện Đăk Pơ', 'Huyện Đức Cơ', 'Huyện Ia Grai', 'Huyện Ia Pa', 'Huyện KBang', 'Huyện Kông Chro', 'Huyện Krông Pa', 'Huyện Mang Yang', 'Huyện Phú Thiện']; const c22 = ['Thành phố Hà Giang', 'Huyện Bắc Mê', 'Huyện Bắc Quang', 'Huyện Đồng Văn', 'Huyện Hoàng Su Phì', 'Huyện Mèo Vạc', 'Huyện Quản Bạ', 'Huyện Quang Bình', 'Huyện Vị Xuyên', 'Huyện Xín Mần', 'Huyện Yên Minh']; const c23 = ['Thành phố Phủ Lý', 'Huyện Bình Lục', 'Huyện Duy Tiên', 'Huyện Kim Bảng', 'Huyện Lý Nhân', 'Huyện Thanh Liêm']; const c24 = ['Quận Ba Đình', 'Huyện Ba Vì', 'Quận Bắc Từ Liêm', 'Quận Cầu Giấy', 'Huyện Chương Mỹ', 'Huyện Đan Phượng', 'Huyện Đông Anh', 'Quận Đống Đa', 'Huyện Gia Lâm', 'Quận Hà Đông', 'Quận Hai Bà Trưng', 'Huyện Hoài Đức', 'Quận Hoàn Kiếm', 'Quận Hoàng Mai', 'Quận Long Biên', 'Huyện Mê Linh', 'Huyện Mỹ Đức', 'Quận Nam Từ Liêm', 'Huyện Phú Xuyên', 'Huyện Phúc Thọ', 'Huyện Quốc Oai', 'Huyện Sóc Sơn', 'Thị xã Sơn Tây', 'Quận Tây Hồ', 'Huyện Thạch Thất', 'Huyện Thanh Oai', 'Huyện Thanh Trì', 'Quận Thanh Xuân', 'Huyện Thường Tín', 'Huyện Ứng Hòa']; const c25 = ['Thành phố Hà Tĩnh', 'Thị xã Hồng Lĩnh', 'Thị xã Kỳ Anh', 'Huyện Cẩm Xuyên', 'Huyện Can Lộc', 'Huyện Đức Thọ', 'Huyện Hương Khê', 'Huyện Hương Sơn', 'Huyện Lộc Hà', 'Huyện Nghi Xuân', 'Huyện Thạch Hà', 'Huyện Vũ Quang']; const c26 = ['Thành phố Hải Dương', 'Thị xã Chí Linh', 'Huyện Bình Giang', 'Huyện Cẩm Giàng', 'Huyện Gia Lộc', 'Huyện Kim Thành', 'Huyện Kinh Môn', 'Huyện Nam Sách', 'Huyện Ninh Giang', 'Huyện Thanh Hà', 'Huyện Thanh Miện', 'Huyện Tứ Kỳ']; const c27 = ['Quận Đồ Sơn', 'Quận Dương Kinh', 'Quận Hải An', 'Quận Hồng Bàng', 'Quận Kiến An', 'Quận Lê Chân', 'Quận Ngô Quyền', 'Huyện An Dương', 'Huyện An Lão', 'Huyện Bạch Long Vĩ', 'Huyện Cát Hải', 'Huyện Kiến Thụy', 'Huyện Thủy Nguyên', 'Huyện Tiên Lãng', 'Huyện Vĩnh Bảo']; const c28 = ['Thành phố Hòa Bình', 'Huyện Cao Phong', 'Huyện Đà Bắc', 'Huyện Kim Bôi', 'Huyện Kỳ Sơn', 'Huyện Lạc Sơn', 'Huyện Lạc Thủy', 'Huyện Lương Sơn', 'Huyện Mai Châu', 'Huyện Tân Lạc', 'Huyện Yên Thủy']; const c29 = ['Thành phố Vị Thanh', 'Thị xã Ngã Bảy', 'Huyện Châu Thành', 'Huyện Châu Thành A', 'Huyện Long Mỹ', 'Huyện Phụng Hiệp', 'Huyện Vị Thủy']; const c30 = ['Thành phố Hưng Yên', 'Huyện Ân Thi', 'Huyện Khoái Châu', 'Huyện Kim Động', 'Huyện Mỹ Hào', 'Huyện Phù Cừ', 'Huyện Tiên Lữ', 'Huyện Văn Giang', 'Huyện Văn Lâm', 'Huyện Yên Mỹ']; const c31 = ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6', 'Quận 7', 'Quận 8', 'Quận 9', 'Quận 10', 'Quận 11', 'Quận 12', 'Quận Bình Tân', 'Quận Bình Thạnh', 'Quận Gò Vấp', 'Quận Phú Nhuận', 'Quận Tân Bình', 'Quận Tân Phú', 'Quận Thủ Đức', 'Huyện Bình Chánh', 'Huyện Cần Giờ', 'Huyện Củ Chi', 'Huyện Hóc Môn', 'Huyện Nhà Bè']; const c32 = ['Thành phố Nha Trang', 'Thị xã Cam Ranh', 'Thị xã Ninh Hòa', 'Huyện Cam Lâm', 'Huyện Diên Khánh', 'Huyện Khánh Sơn', 'Huyện Khánh Vĩnh', 'Huyện Trường Sa', 'Huyện Vạn Ninh']; const c33 = ['Thành phố Rạch Giá', 'Thị xã Hà Tiên', 'Huyện An Biên', 'Huyện An Minh', 'Huyện Châu Thành', 'Huyện Giang Thành', 'Huyện Giồng Riềng', 'Huyện Gò Quao', 'Huyện Hòn Đất', 'Huyện Kiên Hải', 'Huyện Kiên Lương', 'Huyện Phú Quốc', 'Huyện Tân Hiệp', 'Huyện U minh Thượng', 'Huyện Vĩnh Thuận']; const c34 = ['Thành phố KonTum', 'Huyện Đăk Glei', 'Huyện Đăk Hà', 'Huyện Đăk Tô', 'Huyện Kon Plông', 'Huyện Kon Rẫy', 'Huyện Ngọc Hồi', 'Huyện Sa Thầy', 'Huyện Tu Mơ Rông', "Huyện Ia H' Drai"]; const c35 = ['Thị xã Lai Châu', 'Huyện Mường Tè', 'Huyện Nậm Nhùn', 'Huyện Phong Thổ', 'Huyện Sìn Hồ', 'Huyện Tam Đường', 'Huyện Tân Uyên', 'Huyện Than Uyên']; const c36 = ['Thành phố Lào Cai', 'Huyện Bắc Hà', 'Huyện Bảo Thắng', 'Huyện Bảo Yên', 'Huyện Bát Xát', 'Huyện Mường Khương', 'Huyện Sa Pa', 'Huyện Văn Bàn', 'Huyện Xi Ma Cai']; const c37 = ['Thành phố Lạng Sơn', 'Huyện Bắc Sơn', 'Huyện Bình Gia', 'Huyện Cao Lộc', 'Huyện Chi Lăng', 'Huyện Đình Lập', 'Huyện Hữu Lũng', 'Huyện Lộc Bình', 'Huyện Tràng Định', 'Huyện Văn Lãng', 'Huyện Văn Quan']; const c38 = ['Thành phố Bảo Lộc', 'Thành phố Đà Lạt', 'Huyện Bảo Lâm', 'Huyện Cát Tiên', 'Huyện Đạ Huoai', 'Huyện Đạ Tẻh', 'Huyện Đam Rông', 'Huyện Di Linh', 'Huyện Đơn Dương', 'Huyện Đức Trọng', 'Huyện Lạc Dương', 'Huyện Lâm Hà']; const c39 = ['Thành phố Tân An', 'Thị xã Kiến Tường', 'Huyện Bến Lức', 'Huyện Cần Đước', 'Huyện Cần Giuộc', 'Huyện Châu Thành', 'Huyện Đức Hòa', 'Huyện Đức Huệ', 'Huyện Mộc Hóa', 'Huyện Tân Hưng', 'Huyện Tân Thạnh', 'Huyện Tân Trụ', 'Huyện Thạnh Hóa', 'Huyện Thủ Thừa', 'Huyện Vĩnh Hưng']; const c40 = ['Thành phố Nam Định', 'Huyện Giao Thủy', 'Huyện Hải Hậu', 'Huyện Mỹ Lộc', 'Huyện Nam Trực', 'Huyện Nghĩa Hưng', 'Huyện Trực Ninh', 'Huyện Vụ Bản', 'Huyện Xuân Trường', 'Huyện Ý Yên']; const c41 = ['Thành phố Vinh', 'Thị xã Cửa Lò', 'Thị xã Hoàng Mai', 'Thị xã Thái Hòa', 'Huyện Anh Sơn', 'Huyện Con Cuông', 'Huyện Diễn Châu', 'Huyện Đô Lương', 'Huyện Hưng Nguyên', 'Huyện Kỳ Sơn', 'Huyện Nam Đàn', 'Huyện Nghi Lộc', 'Huyện Nghĩa Đàn', 'Huyện Quế Phong', 'Huyện Quỳ Châu', 'Huyện Quỳ Hợp', 'Huyện Quỳnh Lưu', 'Huyện Tân Kỳ', 'Huyện Thanh Chương', 'Huyện Tương Dương', 'Huyện Yên Thành']; const c42 = ['Thành phố Ninh Bình', 'Thị xã Tam Điệp', 'Huyện Gia Viễn', 'Huyện Hoa Lư', 'Huyện Kim Sơn', 'Huyện Nho Quan', 'Huyện Yên Khánh', 'Huyện Yên Mô']; const c43 = ['Thành phố Phan Rang - Tháp Chàm', 'Huyện Bác Ái', 'Huyện Ninh Hải', 'Huyện Ninh Phước', 'Huyện Ninh Sơn', 'Huyện Thuận Bắc', 'Huyện Thuận Nam']; const c44 = ['Thành phố Việt Trì', 'Thị xã Phú Thọ', 'Huyện Cẩm Khê', 'Huyện Đoan Hùng', 'Huyện Hạ Hòa', 'Huyện Lâm Thao', 'Huyện Phù Ninh', 'Huyện Tam Nông', 'Huyện Tân Sơn', 'Huyện Thanh Ba', 'Huyện Thanh Sơn', 'Huyện Thanh Thủy', 'Huyện Yên Lập']; const c45 = ['Thành phố Tuy Hòa', 'Thị xã Sông Cầu', 'Huyện Đông Hòa', 'Huyện Đồng Xuân', 'Huyện Phú Hòa', 'Huyện Sơn Hòa', 'Huyện Sông Hinh', 'Huyện Tây Hòa', 'Huyện Tuy An']; const c46 = ['Thành phố Đồng Hới', 'Thị xã Ba Đồn', 'Huyện Bố Trạch', 'Huyện Lệ Thủy', 'Huyện Minh Hóa', 'Huyện Quảng Ninh', 'Huyện Quảng Trạch', 'Huyện Tuyên Hóa']; const c47 = ['Thành phố Hội An', 'Thành phố Tam Kỳ', 'Huyện Bắc Trà My', 'Huyện Đại Lộc', 'Huyện Điện Bàn', 'Huyện Đông Giang', 'Huyện Duy Xuyên', 'Huyện Hiệp Đức', 'Huyện Nam Giang', 'Huyện Nam Trà My', 'Huyện Nông Sơn', 'Huyện Núi Thành', 'Huyện Phú Ninh', 'Huyện Phước Sơn', 'Huyện Quế Sơn', 'Huyện Tây Giang', 'Huyện Thăng Bình', 'Huyện Tiên Phước']; const c48 = ['Thành phố Quảng Ngãi', 'Huyện Ba Tơ', 'Huyện Bình Sơn', 'Huyện Đức Phổ', 'Huyện Lý Sơn', 'Huyện Minh Long', 'Huyện Mộ Đức', 'Huyện Nghĩa Hành', 'Huyện Sơn Hà', 'Huyện Sơn Tây', 'Huyện Sơn Tịnh', 'Huyện Tây Trà', 'Huyện Trà Bồng', 'Huyện Tư Nghĩa']; const c49 = ['Thành phố Hạ Long', 'Thành phố Móng Cái', 'Thị xã Cẩm Phả', 'Thị xã Uông Bí', 'Huyện Ba Chẽ', 'Huyện Bình Liêu', 'Huyện Cô Tô', 'Huyện Đầm Hà', 'Huyện Đông Triều', 'Huyện Hải Hà', 'Huyện Hoành Bồ', 'Huyện Quảng Yên', 'Huyện Tiên Yên', 'Huyện Vân Đồn']; const c50 = ['Thành phố Đông Hà', 'Thị xã Quảng Trị', 'Huyện Cam Lộ', 'Huyện Cồn Cỏ', 'Huyện Đăk Rông', 'Huyện Đảo Cồn Cỏ', 'Huyện Gio Linh', 'Huyện Hải Lăng', 'Huyện Hướng Hóa', 'Huyện Triệu Phong', 'Huyện Vĩnh Linh']; const c51 = ['Thành phố Sóc Trăng', 'Huyện Châu Thành', 'Huyện Cù Lao Dung', 'Huyện Kế Sách', 'Huyện Long Phú', 'Huyện Mỹ Tú', 'Huyện Mỹ Xuyên', 'Huyện Ngã Năm', 'Huyện Thạnh Trị', 'Huyện Trần Đề', 'Huyện Vĩnh Châu']; const c52 = ['Thành phố Sơn La', 'Huyện Bắc Yên', 'Huyện Mai Sơn', 'Huyện Mộc Châu', 'Huyện Mường La', 'Huyện Phù Yên', 'Huyện Quỳnh Nhai', 'Huyện Sông Mã', 'Huyện Sốp Cộp', 'Huyện Thuận Châu', 'Huyện Vân Hồ', 'Huyện Yên Châu']; const c53 = ['Thành phố Tây Ninh', 'Huyện Bến Cầu', 'Huyện Châu Thành', 'Huyện Dương Minh Châu', 'Huyện Gò Dầu', 'Huyện Hòa Thành', 'Huyện Tân Biên', 'Huyện Tân Châu', 'Huyện Trảng Bàng']; const c54 = ['Thành phố Thái Bình', 'Huyện Đông Hưng', 'Huyện Hưng Hà', 'Huyện Kiến Xương', 'Huyện Quỳnh Phụ', 'Huyện Thái Thuỵ', 'Huyện Tiền Hải', 'Huyện Vũ Thư']; const c55 = ['Thành phố Thái Nguyên', 'Thị xã Sông Công', 'Huyện Đại Từ', 'Huyện Định Hóa', 'Huyện Đồng Hỷ', 'Huyện Phổ Yên', 'Huyện Phú Bình', 'Huyện Phú Lương', 'Huyện Võ Nhai']; const c56 = ['Thành phố Thanh Hóa', 'Thị xã Bỉm Sơn', 'Thị xã Sầm Sơn', 'Huyện Bá Thước', 'Huyện Cẩm Thủy', 'Huyện Đông Sơn', 'Huyện Hà Trung', 'Huyện Hậu Lộc', 'Huyện Hoằng Hóa', 'Huyện Lang Chánh', 'Huyện Mường Lát', 'Huyện Nga Sơn', 'Huyện Ngọc Lặc', 'Huyện Như Thanh', 'Huyện Như Xuân', 'Huyện Nông Cống', 'Huyện Quan Hóa', 'Huyện Quan Sơn', 'Huyện Quảng Xương', 'Huyện Thạch Thành', 'Huyện Thiệu Hóa', 'Huyện Thọ Xuân', 'Huyện Thường Xuân', 'Huyện Tĩnh Gia', 'Huyện Triệu Sơn', 'Huyện Vĩnh Lộc', 'Huyện Yên Định']; const c57 = ['Thành phố Huế', 'Thị xã Hương Thủy', 'Huyện A Lưới', 'Huyện Nam Đông', 'Huyện Phong Điền', 'Huyện Phú Lộc', 'Huyện Phú Vang', 'Huyện Quảng Điền']; const c58 = ['Thành phố Mỹ Tho', 'Thị xã Gò Công', 'Thị xã Cai Lậy', 'Huyện Cái Bè', 'Huyện Châu Thành', 'Huyện Chợ Gạo', 'Huyện Gò Công Đông', 'Huyện Gò Công Tây', 'Huyện Tân Phú Đông', 'Huyện Tân Phước']; const c59 = ['Thành phố Trà Vinh', 'Huyện Càng Long', 'Huyện Cầu Kè', 'Huyện Cầu Ngang', 'Huyện Châu Thành', 'Huyện Duyên Hải', 'Huyện Tiểu Cần', 'Huyện Trà Cú']; const c60 = ['Thành phố Tuyên Quang', 'Huyện Chiêm Hóa', 'Huyện Hàm Yên', 'Huyện Lâm Bình', 'Huyện Na Hang', 'Huyện Sơn Dương', 'Huyện Yên Sơn']; const c61 = ['Thành phố Vĩnh Long', 'Quận Bình Tân', 'Huyện Bình Minh', 'Huyện Long Hồ', 'Huyện Mang Thít', 'Huyện Tam Bình', 'Huyện Trà Ôn', 'Huyện Vũng Liêm']; const c62 = ['Thành phố Vĩnh Yên', 'Thị xã Phúc Yên', 'Huyện Bình Xuyên', 'Huyện Lập Thạch', 'Huyện Sông Lô', 'Huyện Tam Đảo', 'Huyện Tam Dương', 'Huyện Vĩnh Tường', 'Huyện Yên Lạc']; const c63 = ['Thành phố Yên Bái', 'Thị xã Nghĩa Lộ', 'Huyện Lục Yên', 'Huyện Mù Cang Chải', 'Huyện Trạm Tấu', 'Huyện Trấn Yên', 'Huyện Văn Chấn', 'Huyện Văn Yên', 'Huyện Yên Bình']; const arr = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52, c53, c54, c55, c56, c57, c58, c59, c60, c61, c62, c63];

export {
  c, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52, c53, c54, c55, c56, c57, c58, c59, c60, c61, c62, c63, arr,
};
