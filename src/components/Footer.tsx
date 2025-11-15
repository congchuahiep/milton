import Image from "next/image";

const playerLinks = [
	{ name: "Start playing", href: "#" },
	{ name: "Balance refill", href: "#" },
	{ name: "Forum", href: "#" },
];

const infoLinks = [
	{ name: "User Agreement", href: "#" },
	{ name: "Payment rules", href: "#" },
	{ name: "Personal data processing policy", href: "#" },
];

const contactLinks = [
	{ name: "Technical Support in Discord", href: "#" },
	{ name: "help@milton-rp.vn", href: "mailto:help@milton-rp.vn" },
];

export default function Footer() {
	return (
		<footer className="py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-8xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
				<div className="shrink-0">
					<Image
            src="/logo.png"
            width={150}
            height={50}
            alt="Milton RP Logo"
            className="mb-4"
          />
					<div className="text-xs text-muted-foreground space-y-1 w-3xs">
						<p>Công ty đăng cấp</p>
						<p>Mã số thuế 0000000000</p>
						<p>Mã đăng ký doanh nghiệp 000000000000</p>
						<p className="mt-2">
							Sản phẩm được phát triển và vận hành bởi Majestic RP. Grand Theft Auto V và các
              thương hiệu liên quan là tài sản của Rockstar Games, Inc. và/hoặc các công ty con
              của nó. Milton RP không được liên kết với Rockstar Games, Inc.
						</p>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row gap-10">
					<FooterLinkColumn title="For Players" links={playerLinks} />
					<FooterLinkColumn title="Important Information" links={infoLinks} />
					<FooterLinkColumn title="Contacts" links={contactLinks} />
				</div>

				<div className="flex flex-col items-start lg:items-end shrink-0">
					<div className="flex gap-3 mb-4">
						<PaymentImage src="/logo/mastercard.png" alt="Mastercard" />
						<PaymentImage src="/logo/visa.png" alt="Visa" />
					</div>

					<div className="flex items-center gap-2 text-sm">
						<span className="relative flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
						</span>
						<span className="text-gray-300">All Systems Operational</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

function FooterLinkColumn({
	title,
	links,
}: {
	title: string;
	links: { name: string; href: string }[];
}) {
	return (
		<div>
			<h3 className="text-sm font-semibold uppercase mb-4 tracking-wider">
				{title}
			</h3>
			<ul className="space-y-2">
				{links.map((link) => (
					<li key={link.name}>
						<a
							href={link.href}
							className="text-sm text-muted-foreground hover:text-primary-foreground transition-colors"
						>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

function PaymentImage({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="rounded flex items-center justify-center">
			<Image
				src={src}
				alt={alt}
				width={80}
				height={80}
				className="h-8 w-auto"
			/>
		</div>
	);
}
