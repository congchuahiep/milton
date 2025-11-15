import { Button } from "@/components/ui/button";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "@/components/ui/item";

const faqItems = [
	{
		question: "Milton RP là gì?",
		answer:
			"Đây là một dự án độc đáo dựa trên GTA V, cho phép hàng ngàn người chơi tương tác với nhau trong thời gian thực.",
	},
	{
		question: "RP (RolePlay) nghĩa là gì?",
		answer:
			"Đây là chế độ chơi nơi người chơi tạo nhân vật và bối cảnh, sau đó nhập vai và hành động theo đúng vai trò của mình trong trò chơi.",
	},
	{
		question: "Làm thế nào để bắt đầu với Milton RP?",
		answer:
			"Trước tiên bạn cần tải về phiên bản GTA V có bản quyền, sau đó cài đặt Milton Launcher.",
	},
	{
		question: "Milton Launcher là gì?",
		answer:
			"Đây là công cụ để kết nối vào máy chủ. Launcher an toàn, có khả năng sửa lỗi game và tải về các tệp cần thiết.",
	},
	{
		question: "Có thể làm gì trên máy chủ?",
		answer:
			"Ngoài việc lựa chọn nhiều công việc và tương tác với người chơi khác, chúng tôi còn có các bản cập nhật thường xuyên và sự kiện theo mùa.",
	},
	{
		question: "Tôi có thể tìm quy tắc máy chủ ở đâu?",
		answer:
			"Bạn có thể tìm thấy mục quy tắc máy chủ, khiếu nại về người chơi và các chủ đề khác trên diễn đàn của dự án.",
	},
];

export default function FaqSection() {
	return (
		<section className="mt-32 w-full flex  justify-center">
			<div className="w-8xl px-4">
				<div className="flex justify-between items-center mb-8">
					<h2 className="text-xl xl:text-2xl font-black">FAQ - Câu hỏi thường gặp</h2>
					<Button
						variant="outline"
						className="uppercase font-bold p-6 hidden xl:flex"
					>
						Truy cập phần hỗ trợ
					</Button>
				</div>

				<div className="grid md:grid-cols-3 gap-4 xl:gap-6 mb-4">
					{faqItems.map((item, index) => (
						<Item key={index} className="p-5">
							<ItemContent>
								<ItemTitle className="font-semibold mb-2">
									{item.question}
								</ItemTitle>
								<ItemDescription className="line-clamp-none">{item.answer}</ItemDescription>
							</ItemContent>
						</Item>
					))}
				</div>

				<Button
					variant="outline"
					className="uppercase font-bold p-6 w-full xl:hidden"
				>
					Truy cập phần hỗ trợ
				</Button>
			</div>
		</section>
	);
}
