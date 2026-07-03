import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    category: "BÀI 1. MÁY TÍNH VÀ CÁC THIẾT BỊ NGOẠI VI",
    text: "Thuật ngữ nào sau đây dùng để chỉ các sự kiện, số liệu, ký hiệu thô, chưa được xử lý và chưa mang nhiều ý nghĩa trong một bối cảnh cụ thể?",
    options: [
      "Thông tin (Information)",
      "Tri thức (Knowledge)",
      "Dữ liệu (Data)",
      "Trí tuệ (Intelligence)"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    category: "BÀI 1. MÁY TÍNH VÀ CÁC THIẾT BỊ NGOẠI VI",
    text: "Trong kiến trúc máy tính hiện đại hỗ trợ AI, thành phần phần cứng nào được tối ưu hóa chuyên biệt để tăng tốc các tác vụ trí tuệ nhân tạo và học máy ngay trên thiết bị?",
    options: [
      "HDD (Hard Disk Drive)",
      "NPU (Neural Processing Unit)",
      "PSU (Power Supply Unit)",
      "RAM (Random Access Memory)"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    category: "BÀI 1. MÁY TÍNH VÀ CÁC THIẾT BỊ NGOẠI VI",
    text: "Khi máy tính của bạn chạy nhiều ứng dụng nặng cùng lúc (chạy phần mềm thiết kế đồ họa có dung lượng lớn, đồng thời mở thêm 10 cửa sổ trình duyệt). Máy tính bắt đầu chạy chậm do thiếu bộ nhớ truy cập ngẫu nhiên, cơ chế nào của Hệ điều hành được kích hoạt để ngăn ứng dụng bị treo hoàn toàn?",
    options: [
      "Tạm thời chuyển dữ liệu ít dùng từ RAM sang ổ cứng",
      "Giảm tốc độ xung nhịp của CPU để tiết kiệm năng lượng.",
      "Tự động xóa các tệp tin tạm thời để giải phóng dung lượng ổ đĩa.",
      "Ngắt kết nối mạng internet để ưu tiên xử lý cục bộ."
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    category: "BÀI 1. MÁY TÍNH VÀ CÁC THIẾT BỊ NGOẠI VI",
    text: "Một sinh viên cần truyền tệp video có dung lượng gần 400 MB từ laptop sang máy chiếu không dây trong phòng học ngay lập tức. Tuy nhiên, laptop và máy chiếu cách nhau khoảng 15 mét. Thiết bị duy nhất đáp ứng đủ tầm hoạt động và băng thông tốc độ cao cho tác vụ này là gì?",
    options: [
      "Wi-Fi",
      "Ethernet",
      "Bluetooth",
      "NFC"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    category: "BÀI 1. MÁY TÍNH VÀ CÁC THIẾT BỊ NGOẠI VI",
    text: "Thiết bị nào sau đây là lựa chọn tối ưu nhất cho một sinh viên thiết kế đồ họa cần mang máy đi học hàng ngày nhưng vẫn đảm bảo khả năng xử lý các phần mềm nặng?",
    options: [
      "Máy tính để bàn (Desktop)",
      "Máy tính bảng (Tablet)",
      "Máy tính xách tay (Laptop)",
      "Điện thoại thông minh (Smartphone)"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    category: "BÀI 1. MÁY TÍNH VÀ CÁC THIẾT BỊ NGOẠI VI",
    text: "Để soạn thảo một bài tiểu luận học thuật yêu cầu định dạng chuẩn mực, tạo mục lục tự động và quản lý trích dẫn tài liệu tham khảo phức tạp, phần mềm nào là lựa chọn phù hợp nhất?",
    options: [
      "Google Docs",
      "Microsoft Word",
      "Google Sheets",
      "Notepad"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    category: "BÀI 2. KHAI THÁC DỮ LIỆU VÀ THÔNG TIN",
    text: "Phát biểu nào sau đây mô tả chính xác mối quan hệ giữa Dữ liệu và Thông tin theo mô hình DIKW (Data -> Information -> Knowledge -> Wisdom)?",
    options: [
      "Dữ liệu là thông tin đã được xử lý để mang ý nghĩa.",
      "Thông tin là dữ liệu thô chưa được xử lý và tổ chức để mang ý nghĩa.",
      "Thông tin là dữ liệu đã được xử lý, tổ chức và đặt trong ngữ cảnh cụ thể.",
      "Dữ liệu và Thông tin là hai thuật ngữ có ý nghĩa tương đồng."
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    category: "BÀI 2. KHAI THÁC DỮ LIỆU VÀ THÔNG TIN",
    text: "Để tìm kiếm chính xác các tài liệu định dạng PDF về chủ đề \"biến đổi khí hậu\" chỉ trên các trang web của chính phủ (.gov), cú pháp tìm kiếm nào trên Google là chính xác nhất?",
    options: [
      "\"biến đổi khí hậu\" filetype:pdf site:gov",
      "biến đổi khí hậu pdf government",
      "\"biến đổi khí hậu\" AND pdf AND gov",
      "file:pdf site:.gov \"biến đổi khí hậu\""
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    category: "BÀI 2. KHAI THÁC DỮ LIỆU VÀ THÔNG TIN",
    text: "Theo quy tắc sao lưu dữ liệu 3-2-1 được khuyến nghị, con số \"2\" đại diện cho yêu cầu nào?",
    options: [
      "Lưu trữ ít nhất 2 bản sao dự phòng trên một thiết bị lưu trữ ở địa điểm khác so với dữ liệu gốc.",
      "Lưu trữ các bản sao trên tối thiểu 2 thiết bị có hỗ trợ mã hóa bảo mật.",
      "Lưu trữ các bản sao theo quy trình sao lưu ít nhất 2 lần trong mỗi ngày.",
      "Lưu trữ các bản sao trên ít nhất 2 loại phương tiện lưu trữ khác nhau."
    ],
    correctAnswer: 3
  },
  {
    id: 10,
    category: "BÀI 2. KHAI THÁC DỮ LIỆU VÀ THÔNG TIN",
    text: "Khi cần tìm kiếm các bài báo khoa học, luận văn và tài liệu học thuật đã được thẩm định để phục vụ nghiên cứu, công cụ tìm kiếm chuyên dụng nào là phù hợp nhất?",
    options: [
      "Google Search",
      "Microsoft Copilot",
      "Google Scholar",
      "Wikipedia"
    ],
    correctAnswer: 2
  },
  {
    id: 11,
    category: "BÀI 2. KHAI THÁC DỮ LIỆU VÀ THÔNG TIN",
    text: "Công cụ AI nào sau đây được bài giảng giới thiệu chuyên dụng cho việc tìm kiếm, tổng hợp và phân tích các bài báo khoa học, giúp rút ra kết luận nghiên cứu nhanh chóng?",
    options: [
      "ChatGPT",
      "Elicit",
      "Google Gemini",
      "Canva"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    category: "BÀI 2. KHAI THÁC DỮ LIỆU VÀ THÔNG TIN",
    text: "Sinh viên cần kiểm tra độ tin cậy của một bài viết trên mạng xã hội có tiêu đề cường điệu và thiếu thông tin tác giả/nguồn gốc. Theo bộ tiêu chí CRAAP, tiêu chí nào sau đây cần được ưu tiên kiểm tra và chỉ ra vấn đề cốt lõi nhất của nguồn tin này?",
    options: [
      "Tính cập nhật (Currency) và Tính chính xác (Accuracy): Kiểm tra thời gian đăng tải và các lỗi ngữ pháp của bài viết.",
      "Tính Thẩm quyền (Authority) và Mục đích (Purpose): Xác định uy tín tác giả và mục tiêu chính của bài viết",
      "Tính Chính xác (Accuracy) và Sự Liên quan (Relevance): Đảm bảo số liệu có bằng chứng và nội dung liên quan đến tiêu đề bài viết.",
      "Sự Liên quan (Relevance) và Tính Cập nhật (Currency): Đánh giá liệu bài viết có phù hợp với nhu cầu và được đăng tải trong 6 tháng gần nhất không."
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    category: "BÀI 2. KHAI THÁC DỮ LIỆU VÀ THÔNG TIN",
    text: "Khi nghiên cứu về một vấn đề y học, sinh viên tìm thấy một bài viết trên trang web có tên miền \".com\". Bài viết được trình bày chuyên nghiệp nhưng mục \"Tác giả\" chỉ ghi là \"Ban biên tập\" mà không nêu tên cụ thể hay trình độ chuyên môn. Áp dụng tiêu chí Authority (Thẩm quyền) trong mô hình CRAAP, sinh viên nên đánh giá độ tin cậy của nguồn này như thế nào?",
    options: [
      "Đáng tin cậy, vì giao diện trang web chuyên nghiệp và tên miền \".com\" là phổ biến.",
      "Đáng tin cậy, vì \"Ban biên tập\" cho thấy có nhiều người cùng kiểm duyệt nội dung.",
      "Độ tin cậy thấp, vì không xác định được danh tính và năng lực chuyên môn của người chịu trách nhiệm nội dung.",
      "Rất đáng tin cậy nếu bài viết đứng đầu trang kết quả tìm kiếm của Google."
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    category: "BÀI 3. TỔNG QUAN VỀ TRÍ TUỆ NHÂN TẠO",
    text: "Sự kiện nào vào năm 1956 được coi là mốc khai sinh chính thức của lĩnh vực Trí tuệ nhân tạo (AI) như một ngành nghiên cứu khoa học?",
    options: [
      "Phép thử Turing (Turing Test).",
      "Chiến thắng của Deep Blue trước Garry Kasparov.",
      "Hội nghị Dartmouth.",
      "Phát minh ra kiến trúc Transformer."
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    category: "BÀI 3. TỔNG QUAN VỀ TRÍ TUỆ NHÂN TẠO",
    text: "Đâu là điểm khác biệt cốt lõi về chức năng giữa AI phân biệt (Discriminative AI) và AI tạo sinh (Generative AI) là gì?",
    options: [
      "AI phân biệt chuyên về mô hình ngôn ngữ lớn (LLM), còn AI tạo sinh sử dụng mạng nơ-ron tích chập (CNN).",
      "AI phân biệt có khả năng tạo ra dữ liệu mới, còn AI tạo sinh chỉ thực hiện nhiệm vụ phân loại.",
      "AI phân biệt tập trung vào phân loại/dự đoán nhãn, còn AI tạo sinh tập trung vào tạo ra nội dung mới.",
      "AI tạo sinh không yêu cầu dữ liệu huấn luyện, trong khi AI phân biệt thì có."
    ],
    correctAnswer: 2
  },
  {
    id: 16,
    category: "BÀI 3. TỔNG QUAN VỀ TRÍ TUỆ NHÂN TẠO",
    text: "Nguyên lý hoạt động cốt lõi của các Mô hình ngôn ngữ lớn (LLMs) như GPT trong việc tạo văn bản là gì?",
    options: [
      "Mô phỏng chính xác cấu trúc và khả năng cảm xúc của bộ não con người.",
      "Dự đoán từ/token tiếp theo có xác suất xuất hiện cao nhất dựa trên ngữ cảnh đầu vào.",
      "Sao chép và tổ chức lại các đoạn văn bản chính xác từ cơ sở dữ liệu huấn luyện.",
      "Sử dụng một bộ quy tắc ngữ pháp cố định được lập trình một cách tường minh."
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    category: "BÀI 3. TỔNG QUAN VỀ TRÍ TUỆ NHÂN TẠO",
    text: "Đâu là lợi ích chính của việc sử dụng AI trong việc phát triển năng lực số cá nhân của sinh viên?",
    options: [
      "Tập trung vào việc mô phỏng trí tuệ con người và tự động hóa các quyết định cá nhân.",
      "Hạn chế việc tìm kiếm thông tin bằng tay và duy trì các công việc tư duy lặp đi lặp lại.",
      "Tăng cường hiệu suất tìm kiếm, tổng hợp tri thức và cá nhân hóa quá trình học tập.",
      "Giúp sinh viên tự động hoàn thành các hoạt động học tập và các bài kiểm tra đánh giá."
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    category: "BÀI 3. TỔNG QUAN VỀ TRÍ TUỆ NHÂN TẠO",
    text: "Khi bạn cung cấp cho AI một vài ví dụ cụ thể về định dạng đầu ra mong muốn (ví dụ: Câu hỏi -> Trả lời mẫu) trong câu lệnh prompt, bạn đang sử dụng kỹ thuật nào?",
    options: [
      "Zero-shot Prompting",
      "Few-shot Prompting",
      "Random Prompting",
      "Implicit Prompting"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    category: "BÀI 3. TỔNG QUAN VỀ TRÍ TUỆ NHÂN TẠO",
    text: "Sinh viên cần sử dụng Gemini để tóm tắt một bài báo khoa học dài về \"Tác động của Biến đổi Khí hậu\" cho bài thuyết trình nhóm. Để áp dụng yếu tố \"Context\" hiệu quả, sinh viên nên cung cấp thông tin nào sau đây?",
    options: [
      "Cung cấp nội dung cốt lõi của bài báo gốc và chỉ rõ mục tiêu sử dụng nội dung.",
      "Yêu cầu AI đảm nhận một vai trò như chuyên gia khí hậu học nổi tiếng.",
      "Chỉ định rằng đầu ra phải có định dạng bảng với các luận điểm không quá 50 từ.",
      "Yêu cầu AI phân tích phản biện đối với phương pháp nghiên cứu được sử dụng trong bài báo."
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    category: "BÀI 3. TỔNG QUAN VỀ TRÍ TUỆ NHÂN TẠO",
    text: "Nếu bạn cần tìm kiếm thông tin học thuật chính xác kèm theo trích dẫn nguồn gốc rõ ràng để phục vụ nghiên cứu, công cụ AI nào sau đây (được ví như \"cỗ máy trả lời\") là phù hợp nhất?",
    options: [
      "ChatGPT",
      "DALL-E 3",
      "Midjourney",
      "Perplexity AI"
    ],
    correctAnswer: 3
  },
  {
    id: 21,
    category: "BÀI 4. GIAO TIẾP VÀ HỢP TÁC TRONG MÔI TRƯỜNG SỐ",
    text: "Khi gửi email trao đổi học tập với giảng viên, dòng tiêu đề (Subject) nào sau đây được coi là chuyên nghiệp và đúng quy cách nhất?",
    options: [
      "Xin tư vấn về Bài dự án cuối kỳ môn Nhập môn Công nghệ số và AI.",
      "[VNU1001] - Xin tư vấn về Bài dự án cuối kì - Nguyễn Văn A - K68.",
      "[Nguyễn Văn A] - Xin tư vấn về Bài dự án cuối kì.",
      "Gửi Thầy/Cô: em có thắc mắc về Bài dự án cuối kì Nhập môn Công nghệ số và AI."
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    category: "BÀI 4. GIAO TIẾP VÀ HỢP TÁC TRONG MÔI TRƯỜNG SỐ",
    text: "Nhóm sinh viên cần soạn thảo một báo cáo, yêu cầu có khả năng chỉnh sửa đồng thời và tự động lưu trữ, chia sẻ qua nền tảng trực tuyến. Công cụ nào trong các tùy chọn sau là phù hợp nhất?",
    options: [
      "Microsoft Word",
      "Google Docs",
      "Notepad",
      "Adobe Acrobat Pro"
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    category: "BÀI 4. GIAO TIẾP VÀ HỢP TÁC TRONG MÔI TRƯỜNG SỐ",
    text: "Với mục tiêu xây dựng hồ sơ chuyên nghiệp và tìm kiếm cơ hội nghề nghiệp trong môi trường số, sinh viên nên tập trung phát triển sự hiện diện trên nền tảng nào sau đây?",
    options: [
      "TikTok",
      "Instagram",
      "LinkedIn",
      "Snapchat"
    ],
    correctAnswer: 2
  },
  {
    id: 24,
    category: "BÀI 4. GIAO TIẾP VÀ HỢP TÁC TRONG MÔI TRƯỜNG SỐ",
    text: "Ứng dụng AI tích hợp trong Microsoft Teams hoặc Zoom có thể hỗ trợ gì để nâng cao hiệu quả của một cuộc họp trực tuyến dài?",
    options: [
      "Tự động tạo biên bản tóm tắt cuộc họp và liệt kê các nhiệm vụ cần làm.",
      "Tự động điểm danh và tắt micro của người tham gia.",
      "Thay đổi giọng nói của người phát biểu thành giọng robot.",
      "Tự động trả lời các câu hỏi của người tham gia mà không cần người chủ trì."
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    category: "BÀI 4. GIAO TIẾP VÀ HỢP TÁC TRONG MÔI TRƯỜNG SỐ",
    text: "Công cụ nào giúp tự động hóa việc tìm khung giờ trống và đặt lịch hẹn họp nhóm, giảm thiểu việc phải trao đổi qua lại nhiều lần?",
    options: [
      "Calendly",
      "Microsoft Outlook",
      "Trello",
      "Google Sheets"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    category: "BÀI 4. GIAO TIẾP VÀ HỢP TÁC TRONG MÔI TRƯỜNG SỐ",
    text: "Trong một nhóm làm việc trực tuyến, nếu xảy ra xung đột quan điểm gay gắt giữa hai thành viên qua tin nhắn chat, hành động nào thể hiện tinh thần trách nhiệm và kỹ năng giải quyết vấn đề tốt nhất?",
    options: [
      "Tập trung vào vấn đề chính và tiếp tục tranh luận công khai trên nhóm chat.",
      "Báo cáo vấn đề với trưởng nhóm hoặc giảng viên để nhờ họ can thiệp, phân xử.",
      "Đề nghị tổ chức cuộc gọi video ngắn để trao đổi trực tiếp và làm rõ vấn đề.",
      "Ngay lập tức ngừng trả lời tin nhắn và đợi đến cuộc họp nhóm đã lên lịch."
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    category: "BÀI 5: SÁNG TẠO NỘI DUNG SỐ",
    text: "Sinh viên muốn sáng tạo một video ngắn hướng dẫn cách sử dụng công cụ ChatGPT cho các bạn cùng khóa. Theo quy trình 6 bước, hành động nào sau đây thuộc về bước nền tảng đầu tiên?",
    options: [
      "Lựa chọn phần mềm dựng video (ví dụ: CapCut) và bắt đầu quay màn hình.",
      "Xác định mục tiêu của video và đối tượng người xem để định hướng nội dung.",
      "Kiểm tra lỗi chính tả trong phụ đề của video và điều chỉnh lại.",
      "Biên tập và tinh chỉnh trước khi tải video lên nền tảng lưu trữ (ví dụ: Youtube)."
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    category: "BÀI 5: SÁNG TẠO NỘI DUNG SỐ",
    text: "Trong giai đoạn lên ý tưởng cho nội dung để viết bài blog, cách sử dụng AI tạo sinh nào sau đây là hiệu quả và phù hợp nhất để hỗ trợ?",
    options: [
      "Yêu cầu AI thực hiện việc xây dựng toàn bộ nội dung bài viết.",
      "Yêu cầu AI thực hiện việc kiểm tra lỗi ngữ pháp và chỉnh sửa văn phong cho nội dung.",
      "Yêu cầu AI gợi ý các chủ đề và lập dàn ý chi tiết.",
      "Không nên sử dụng AI vì sẽ làm mất tính sáng tạo."
    ],
    correctAnswer: 2
  },
  {
    id: 29,
    category: "BÀI 5: SÁNG TẠO NỘI DUNG SỐ",
    text: "Công cụ thiết kế trực tuyến nào tích hợp sẵn AI, cho phép người dùng không chuyên tạo các ấn phẩm đồ họa (như poster, infographic) một cách dễ dàng?",
    options: [
      "Adobe Photoshop",
      "Canva",
      "Adobe Illustrator",
      "Figma"
    ],
    correctAnswer: 1
  },
  {
    id: 30,
    category: "BÀI 5: SÁNG TẠO NỘI DUNG SỐ",
    text: "Công cụ nào sau đây là phù hợp nhất để giúp tạo nhanh một bài thuyết trình với thiết kế hiện đại từ một dàn ý hoặc văn bản có sẵn?",
    options: [
      "Gamma.app",
      "Microsoft PowerPoint",
      "Adobe InDesign",
      "Google Docs"
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    category: "BÀI 5: SÁNG TẠO NỘI DUNG SỐ",
    text: "Để tạo ra một hình ảnh minh họa độc đáo bằng công cụ AI, yêu cầu nào là quan trọng nhất trong câu lệnh (prompt)?",
    options: [
      "Yêu cầu AI đóng vai một nghệ sĩ chuyên nghiệp để định hình phong cách hình ảnh.",
      "Mô tả chi tiết về đối tượng, bối cảnh, phong cách nghệ thuật và màu sắc.",
      "Chỉ cần sử dụng các từ khóa về cảm xúc mà không mô tả đối tượng.",
      "Viết càng ngắn gọn càng tốt để AI có thể tự do sáng tạo."
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    category: "BÀI 5: SÁNG TẠO NỘI DUNG SỐ",
    text: "Khi sử dụng một hình ảnh từ Internet có giấy phép Creative Commons \"CC BY-NC\" (Ghi công - Phi thương mại), hành động nào sau đây là vi phạm bản quyền?",
    options: [
      "Sử dụng hình ảnh trong bài thuyết trình lớp học và ghi rõ tên tác giả.",
      "In hình ảnh lên áo phông để bán gây quỹ làm từ thiện.",
      "Chia sẻ hình ảnh trên blog cá nhân phi lợi nhuận và ghi nguồn.",
      "Lưu hình ảnh về máy tính để làm hình nền cá nhân."
    ],
    correctAnswer: 1
  },
  {
    id: 33,
    category: "BÀI 5: SÁNG TẠO NỘI DUNG SỐ",
    text: "Tại sao bước \"Đánh giá và tinh chỉnh\" nội dung do AI tạo ra lại cực kỳ quan trọng trước khi sử dụng hoặc xuất bản?",
    options: [
      "Để đảm bảo AI đã sử dụng đúng các thuật ngữ chuyên môn.",
      "Vì các công cụ AI yêu cầu người dùng phải chỉnh sửa mới cho phép tải về.",
      "Vì AI chỉ hỗ trợ các tác vụ giải trí, không thể xử lý các tài liệu học thuật.",
      "Vì AI có thể tạo ra thông tin sai lệch, tái tạo thiên kiến hoặc thiếu dấu ấn cá nhân."
    ],
    correctAnswer: 3
  },
  {
    id: 34,
    category: "BÀI 6: AN TOÀN VÀ LIÊM CHÍNH HỌC THUẬT",
    text: "Thuật ngữ nào dùng để chỉ hình thức lừa đảo trực tuyến trong đó kẻ tấn công giả mạo một đơn vị uy tín (như ngân hàng, trường học) qua email để đánh cắp thông tin cá nhân?",
    options: [
      "Phishing",
      "Hacking",
      "Ransomware",
      "DDoS"
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    category: "BÀI 6: AN TOÀN VÀ LIÊM CHÍNH HỌC THUẬT",
    text: "Biện pháp nào sau đây được coi là lớp bảo vệ quan trọng nhất để ngăn chặn truy cập trái phép vào tài khoản trực tuyến, ngay cả khi mật khẩu bị lộ?",
    options: [
      "Cài đặt và cập nhật thường xuyên phần mềm diệt virus.",
      "Sử dụng xác thực hai yếu tố.",
      "Sử dụng trình duyệt ẩn danh.",
      "Xóa lịch sử duyệt web hàng ngày."
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    category: "BÀI 6: AN TOÀN VÀ LIÊM CHÍNH HỌC THUẬT",
    text: "Hành động nào sau đây bị coi là vi phạm liêm chính học thuật (đạo văn)?",
    options: [
      "Sao chép một đoạn văn từ tài liệu tham khảo, đặt trong ngoặc kép và ghi rõ nguồn.",
      "Diễn giải (paraphrase) ý tưởng của người khác bằng ngôn ngữ của mình và có trích dẫn nguồn.",
      "Sao chép một đoạn văn từ Internet vào bài làm của mình mà không ghi nhận nguồn.",
      "Viết bài dựa trên kiến thức và trải nghiệm của bản thân."
    ],
    correctAnswer: 2
  },
  {
    id: 37,
    category: "BÀI 6: AN TOÀN VÀ LIÊM CHÍNH HỌC THUẬT",
    text: "Theo chuẩn trích dẫn Harvard được hướng dẫn trong bài giảng, khi trích dẫn một ý tưởng trong bài viết (in-text citation), thông tin nào cần được ghi lại ngay sau câu trích dẫn?",
    options: [
      "(Họ tác giả, Năm xuất bản)",
      "(Tên bài báo, Số trang)",
      "(Tiêu đề tác phẩm, URL)",
      "(Tên nhà xuất bản, Năm công bố)"
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    category: "BÀI 6: AN TOÀN VÀ LIÊM CHÍNH HỌC THUẬT",
    text: "Khái niệm An sinh số (Digital Well-being) khuyến khích sinh viên thực hiện hành động nào sau đây?",
    options: [
      "Luôn bật thông báo và dành thời gian tối đa trực tuyến để tránh hội chứng sợ bỏ lỡ (FOMO).",
      "Sử dụng các công cụ để thiết lập giới hạn và duy trì sự cân bằng giữa thế giới số và thế giới thực.",
      "Tăng cường sử dụng ánh sáng xanh từ màn hình để cải thiện khả năng tập trung vào buổi tối.",
      "Thay thế giao tiếp trực tiếp bằng giao tiếp qua mạng xã hội."
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    category: "BÀI 6: AN TOÀN VÀ LIÊM CHÍNH HỌC THUẬT",
    text: "Khi sử dụng nội dung do ChatGPT tạo ra để hỗ trợ làm bài tập, hành động nào sau đây là phù hợp với nguyên tắc đạo đức và liêm chính học thuật?",
    options: [
      "Dán nội dung do AI tạo ra vào bài làm, chỉ cần chỉnh sửa văn phong, không cần kiểm chứng thông tin.",
      "Sử dụng AI để dịch thuật hoặc tóm tắt tài liệu, không cần ghi chú vì đó là kết quả của công cụ.",
      "Chỉnh sửa một vài từ trong câu trả lời của ChatGPT và không ghi chú gì thêm.",
      "Sử dụng AI để lên ý tưởng, sau đó tự viết, kiểm chứng thông tin, và ghi nhận sự hỗ trợ của AI trong bài làm."
    ],
    correctAnswer: 3
  },
  {
    id: 40,
    category: "BÀI 6: AN TOÀN VÀ LIÊM CHÍNH HỌC THUẬT",
    text: "Theo nguyên tắc Liêm chính học thuật, hành vi viết lại ý tưởng của người khác bằng lời văn của mình nhưng KHÔNG trích dẫn nguồn được xem là hình thức vi phạm nào?",
    options: [
      "Bịa đặt (Fabrication), vì sinh viên đã tự tạo ra dữ liệu không có thật.",
      "Đạo văn (Plagiarism), vì ý tưởng gốc vẫn thuộc về sở hữu trí tuệ của người khác.",
      "Gian lận (Fraud), vì sinh viên đã sử dụng các thủ đoạn gian lận trong bài viết.",
      "Sử dụng hợp lý (Fair Use), do đó không cần bận tâm đến việc trích dẫn nguồn."
    ],
    correctAnswer: 1
  }
];
