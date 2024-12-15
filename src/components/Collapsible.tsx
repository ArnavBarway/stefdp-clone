"use client";

import { useState, useRef, useEffect } from "react";

interface CollapsibleProps {
	title: string;
	children: React.ReactNode;
}

export default function Collapsible({ title, children }: CollapsibleProps) {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState<number | undefined>(0);

	const toggleCollapsible = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (contentRef.current) {
			const height = isOpen ? contentRef.current.scrollHeight : 0;
			setContentHeight(height);
		}
	}, [isOpen]);

	return (
		<div className="mx-4 mt-4">
			<button
				type="button"
				className={`w-full h-14 px-4 text-left text-xl bg-black/50 border-4 border-[#a2a3a5] text-white rounded-[25px] cursor-pointer ${
					isOpen ? "rounded-b-none border-b-0" : "transition-all duration-[1s]"
				}`}
				onClick={toggleCollapsible}
				aria-expanded={isOpen}
			>
				{title}
				<span
					className={`float-right transition-transform duration-300 ${
						isOpen ? "-rotate-90" : "rotate-0"
					}`}
				>
					˅
				</span>
			</button>
			<div
				ref={contentRef}
				style={{ height: contentHeight }}
				className={
					"overflow-hidden transition-[height] duration-300 ease-in-out"
				}
			>
				<div className="p-4 border-4 border-t-0 border-[#a2a3a5] bg-black/50 rounded-b-[25px] overflow-y-auto max-h-[75vh]">
					{children}
				</div>
			</div>
		</div>
	);
}
